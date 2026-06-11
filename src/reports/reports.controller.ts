import {
  Controller,
  Get,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ReportsService } from './reports.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('reports')
@UseGuards(JwtGuard, RolesGuard)
@Roles('admin')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('sales')
  getSales(
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('type') type?: string,
  ) {
    return this.reportsService.getSales({ from, to, type });
  }

  @Get('sales/export')
  async exportSales(
    @Query('from') from: string | undefined,
    @Query('to') to: string | undefined,
    @Query('type') type: string | undefined,
    @Res() res: Response,
  ) {
    const buffer = await this.reportsService.exportSales({ from, to, type });

    const filename = `ventas_${from || 'all'}_${to || 'all'}.xlsx`;
    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename=${filename}`,
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }

  @Get('consumptions')
  getConsumptions(
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('userId') userId?: string,
    @Query('pensionerType') pensionerType?: string,
  ) {
    return this.reportsService.getConsumptions({
      from,
      to,
      userId: userId ? parseInt(userId, 10) : undefined,
      pensionerType,
    });
  }

  @Get('consumptions/export')
  async exportConsumptions(
    @Query('from') from: string | undefined,
    @Query('to') to: string | undefined,
    @Query('userId') userId: string | undefined,
    @Query('pensionerType') pensionerType: string | undefined,
    @Res() res: Response,
  ) {
    const buffer = await this.reportsService.exportConsumptions({
      from,
      to,
      userId: userId ? parseInt(userId, 10) : undefined,
      pensionerType,
    });

    const filename = `consumos_${from || 'all'}_${to || 'all'}.xlsx`;
    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename=${filename}`,
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }

  @Get('summary')
  getSummary(
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.reportsService.getSummary({ from, to });
  }

  @Get('movements')
  getMovements(
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('userId') userId?: string,
    @Query('type') type?: string,
  ) {
    return this.reportsService.getMovements({
      from,
      to,
      userId: userId ? parseInt(userId, 10) : undefined,
      type,
    });
  }

  @Get('movements/export')
  async exportMovements(
    @Query('from') from: string | undefined,
    @Query('to') to: string | undefined,
    @Query('userId') userId: string | undefined,
    @Query('type') type: string | undefined,
    @Res() res: Response,
  ) {
    const buffer = await this.reportsService.exportMovements({
      from,
      to,
      userId: userId ? parseInt(userId, 10) : undefined,
      type,
    });

    const filename = `movimientos_saldo_${from || 'all'}_${to || 'all'}.xlsx`;
    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename=${filename}`,
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}
