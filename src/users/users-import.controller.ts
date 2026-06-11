import {
  Controller,
  Post,
  Get,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import { UsersService } from './users.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ConflictException } from '@nestjs/common';

@Controller('users/import')
@UseGuards(JwtGuard, RolesGuard)
@Roles('admin')
export class UsersImportController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async importFromExcel(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No se proporcionó un archivo');
    }

    if (
      !file.originalname.endsWith('.xlsx') &&
      !file.originalname.endsWith('.xls')
    ) {
      throw new BadRequestException('El archivo debe ser .xlsx o .xls');
    }

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer as unknown as ExcelJS.Buffer);

    const worksheet = workbook.worksheets[0];
    if (!worksheet) {
      throw new BadRequestException('El archivo no contiene hojas de cálculo');
    }

    let created = 0;
    const errors: Array<{ row: number; dni: string; error: string }> = [];

    const rowCount = worksheet.rowCount;

    for (let i = 2; i <= rowCount; i++) {
      const row = worksheet.getRow(i);
      const nombre = row.getCell(1).value?.toString()?.trim() || '';
      const dni = row.getCell(2).value?.toString()?.trim() || '';
      const tipo = row.getCell(3).value?.toString()?.trim()?.toUpperCase() || '';

      // Skip empty rows
      if (!nombre && !dni) {
        continue;
      }

      // Validate name
      if (!nombre) {
        errors.push({ row: i, dni, error: 'El nombre es requerido' });
        continue;
      }

      // Validate DNI (8 digits)
      if (!dni || !/^\d{8}$/.test(dni)) {
        errors.push({
          row: i,
          dni: dni || '(vacío)',
          error: 'El DNI debe tener exactamente 8 dígitos numéricos',
        });
        continue;
      }

      // Validate tipo
      const validTypes = ['ESTUDIANTE', 'TRABAJADOR'];
      const pensionerType = validTypes.includes(tipo) ? tipo : 'ESTUDIANTE';

      try {
        await this.usersService.createPensioner({
          name: nombre,
          dni,
          pensioner_type: pensionerType as any,
        });
        created++;
      } catch (err) {
        if (err instanceof ConflictException) {
          errors.push({
            row: i,
            dni,
            error: 'Ya existe un usuario con ese DNI (duplicado)',
          });
        } else {
          errors.push({
            row: i,
            dni,
            error: err instanceof Error ? err.message : 'Error desconocido',
          });
        }
      }
    }

    return { created, errors };
  }

  @Get('template')
  async downloadTemplate(@Res() res: Response) {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Sistema Restaurant';
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet('Pensionistas');

    // Define columns with headers
    worksheet.columns = [
      { header: 'Nombre', key: 'nombre', width: 30 },
      { header: 'DNI', key: 'dni', width: 15 },
      { header: 'Tipo', key: 'tipo', width: 20 },
    ];

    // Style header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4472C4' },
    };
    headerRow.alignment = { horizontal: 'center', vertical: 'middle' };

    // Add example row
    worksheet.addRow({
      nombre: 'Juan Pérez',
      dni: '12345678',
      tipo: 'ESTUDIANTE',
    });

    // Add data validation note
    worksheet.getCell('C2').note =
      'Valores válidos: ESTUDIANTE o TRABAJADOR. Si se deja vacío, se asume ESTUDIANTE.';

    const buffer = (await workbook.xlsx.writeBuffer()) as unknown as Buffer;

    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition':
        'attachment; filename=plantilla_pensionistas.xlsx',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}
