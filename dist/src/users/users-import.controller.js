"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersImportController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const ExcelJS = __importStar(require("exceljs"));
const users_service_1 = require("./users.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const common_2 = require("@nestjs/common");
let UsersImportController = class UsersImportController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async importFromExcel(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se proporcionó un archivo');
        }
        if (!file.originalname.endsWith('.xlsx') &&
            !file.originalname.endsWith('.xls')) {
            throw new common_1.BadRequestException('El archivo debe ser .xlsx o .xls');
        }
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file.buffer);
        const worksheet = workbook.worksheets[0];
        if (!worksheet) {
            throw new common_1.BadRequestException('El archivo no contiene hojas de cálculo');
        }
        let created = 0;
        const errors = [];
        const rowCount = worksheet.rowCount;
        for (let i = 2; i <= rowCount; i++) {
            const row = worksheet.getRow(i);
            const nombre = row.getCell(1).value?.toString()?.trim() || '';
            const dni = row.getCell(2).value?.toString()?.trim() || '';
            const tipo = row.getCell(3).value?.toString()?.trim()?.toUpperCase() || '';
            if (!nombre && !dni) {
                continue;
            }
            if (!nombre) {
                errors.push({ row: i, dni, error: 'El nombre es requerido' });
                continue;
            }
            if (!dni || !/^\d{8}$/.test(dni)) {
                errors.push({
                    row: i,
                    dni: dni || '(vacío)',
                    error: 'El DNI debe tener exactamente 8 dígitos numéricos',
                });
                continue;
            }
            const validTypes = ['ESTUDIANTE', 'TRABAJADOR'];
            const pensionerType = validTypes.includes(tipo) ? tipo : 'ESTUDIANTE';
            try {
                await this.usersService.createPensioner({
                    name: nombre,
                    dni,
                    pensioner_type: pensionerType,
                });
                created++;
            }
            catch (err) {
                if (err instanceof common_2.ConflictException) {
                    errors.push({
                        row: i,
                        dni,
                        error: 'Ya existe un usuario con ese DNI (duplicado)',
                    });
                }
                else {
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
    async downloadTemplate(res) {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Sistema Restaurant';
        workbook.created = new Date();
        const worksheet = workbook.addWorksheet('Pensionistas');
        worksheet.columns = [
            { header: 'Nombre', key: 'nombre', width: 30 },
            { header: 'DNI', key: 'dni', width: 15 },
            { header: 'Tipo', key: 'tipo', width: 20 },
        ];
        const headerRow = worksheet.getRow(1);
        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        headerRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF4472C4' },
        };
        headerRow.alignment = { horizontal: 'center', vertical: 'middle' };
        worksheet.addRow({
            nombre: 'Juan Pérez',
            dni: '12345678',
            tipo: 'ESTUDIANTE',
        });
        worksheet.getCell('C2').note =
            'Valores válidos: ESTUDIANTE o TRABAJADOR. Si se deja vacío, se asume ESTUDIANTE.';
        const buffer = (await workbook.xlsx.writeBuffer());
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename=plantilla_pensionistas.xlsx',
            'Content-Length': buffer.length,
        });
        res.end(buffer);
    }
};
exports.UsersImportController = UsersImportController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersImportController.prototype, "importFromExcel", null);
__decorate([
    (0, common_1.Get)('template'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersImportController.prototype, "downloadTemplate", null);
exports.UsersImportController = UsersImportController = __decorate([
    (0, common_1.Controller)('users/import'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersImportController);
//# sourceMappingURL=users-import.controller.js.map