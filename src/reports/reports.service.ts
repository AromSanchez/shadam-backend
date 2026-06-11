import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';

export interface SalesFilter {
  from?: string;
  to?: string;
  type?: string;
}

export interface ConsumptionsFilter {
  from?: string;
  to?: string;
  userId?: number;
  pensionerType?: string;
}

export interface MovementsFilter {
  from?: string;
  to?: string;
  userId?: number;
  type?: string; // RECARGA | CONSUMO | AJUSTE
}

export interface SummaryFilter {
  from?: string;
  to?: string;
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSales(filter: SalesFilter) {
    const where: any = {};

    if (filter.from || filter.to) {
      where.soldAt = {};
      if (filter.from) where.soldAt.gte = new Date(filter.from);
      if (filter.to) {
        const toDate = new Date(filter.to);
        toDate.setHours(23, 59, 59, 999);
        where.soldAt.lte = toDate;
      }
    }

    if (filter.type) {
      where.type = filter.type;
    }

    return this.prisma.sale.findMany({
      where,
      include: {
        items: {
          include: { producto: true },
        },
        payments: true,
        pensioner: {
          select: {
            id: true,
            name: true,
            email: true,
            pensioner_type: true,
          },
        },
      },
      orderBy: { soldAt: 'desc' },
    });
  }

  async exportSales(filter: SalesFilter): Promise<Buffer> {
    const sales = await this.getSales(filter);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Sistema Restaurant';
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet('Ventas');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 28 },
      { header: 'Fecha', key: 'fecha', width: 20 },
      { header: 'Tipo', key: 'tipo', width: 15 },
      { header: 'Mesa', key: 'mesa', width: 10 },
      { header: 'Cliente', key: 'cliente', width: 25 },
      { header: 'Tipo Cliente', key: 'tipoCliente', width: 15 },
      { header: 'Productos', key: 'productos', width: 40 },
      { header: 'Método Pago', key: 'metodoPago', width: 15 },
      { header: 'Total', key: 'total', width: 15 },
    ];

    // Style header
    this.styleHeader(worksheet);

    for (const sale of sales) {
      const productos = sale.items
        .map((item) => `${item.productName} x${item.quantity}`)
        .join(', ');
      const metodosPago = sale.payments
        .map((p) => `${p.method}: S/ ${Number(p.amount).toFixed(2)}`)
        .join(', ');

      worksheet.addRow({
        id: sale.id,
        fecha: sale.soldAt.toLocaleString('es-PE'),
        tipo: sale.type,
        mesa: sale.tableNumber || '-',
        cliente: sale.pensioner?.name || sale.customerLabel || 'Regular',
        tipoCliente: sale.customerType,
        productos,
        metodoPago: metodosPago,
        total: Number(sale.total),
      });
    }

    // Format currency column
    worksheet.getColumn('total').numFmt = '"S/ "#,##0.00';

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer as unknown as Buffer;
  }

  async getConsumptions(filter: ConsumptionsFilter) {
    const where: any = {};

    if (filter.from || filter.to) {
      where.date = {};
      if (filter.from) where.date.gte = new Date(filter.from);
      if (filter.to) {
        const toDate = new Date(filter.to);
        toDate.setHours(23, 59, 59, 999);
        where.date.lte = toDate;
      }
    }

    if (filter.userId) {
      where.userId = filter.userId;
    }

    if (filter.pensionerType) {
      where.user = { pensioner_type: filter.pensionerType };
    }

    return this.prisma.consumption.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            pensioner_type: true,
            balance: true,
          },
        },
      },
      orderBy: { date: 'desc' },
    });
  }

  async exportConsumptions(filter: ConsumptionsFilter): Promise<Buffer> {
    const consumptions = await this.getConsumptions(filter);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Sistema Restaurant';
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet('Consumos');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 28 },
      { header: 'Fecha', key: 'fecha', width: 20 },
      { header: 'Pensionista', key: 'pensionista', width: 25 },
      { header: 'DNI', key: 'dni', width: 12 },
      { header: 'Tipo Pensionista', key: 'tipoPensionista', width: 18 },
      { header: 'Tipo Comida', key: 'tipoComida', width: 15 },
      { header: 'Monto Cobrado', key: 'monto', width: 15 },
    ];

    // Style header
    this.styleHeader(worksheet);

    for (const c of consumptions) {
      worksheet.addRow({
        id: c.id,
        fecha: c.date.toLocaleString('es-PE'),
        pensionista: c.user.name,
        dni: c.user.email,
        tipoPensionista: c.user.pensioner_type || '-',
        tipoComida: c.mealType,
        monto: Number(c.amount),
      });
    }

    // Format currency column
    worksheet.getColumn('monto').numFmt = '"S/ "#,##0.00';

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer as unknown as Buffer;
  }

  async getSummary(filter: SummaryFilter) {
    const salesWhere: any = {};
    const consumptionsWhere: any = {};

    if (filter.from || filter.to) {
      salesWhere.soldAt = {};
      consumptionsWhere.date = {};
      if (filter.from) {
        salesWhere.soldAt.gte = new Date(filter.from);
        consumptionsWhere.date.gte = new Date(filter.from);
      }
      if (filter.to) {
        const toDate = new Date(filter.to);
        toDate.setHours(23, 59, 59, 999);
        salesWhere.soldAt.lte = toDate;
        consumptionsWhere.date.lte = toDate;
      }
    }

    // Total sales
    const salesAgg = await this.prisma.sale.aggregate({
      where: salesWhere,
      _sum: { total: true },
      _count: true,
    });

    // Sales by type
    const salesByType = await this.prisma.sale.groupBy({
      by: ['type'],
      where: salesWhere,
      _sum: { total: true },
      _count: true,
    });

    // Sales by payment method
    const paymentMethodWhere: any = {};
    if (salesWhere.soldAt) {
      paymentMethodWhere.sale = { soldAt: salesWhere.soldAt };
    }
    const paymentsByMethod = await this.prisma.salePayment.groupBy({
      by: ['method'],
      where: paymentMethodWhere,
      _sum: { amount: true },
      _count: true,
    });

    // Total consumptions
    const consumptionsAgg = await this.prisma.consumption.aggregate({
      where: consumptionsWhere,
      _sum: { amount: true },
      _count: true,
    });

    // Consumptions by pensioner type
    const consumptionsByType = await this.prisma.consumption.findMany({
      where: consumptionsWhere,
      include: {
        user: {
          select: { pensioner_type: true },
        },
      },
    });

    const consumptionSummaryByType: Record<
      string,
      { count: number; total: number }
    > = {};
    for (const c of consumptionsByType) {
      const type = c.user.pensioner_type || 'SIN_TIPO';
      if (!consumptionSummaryByType[type]) {
        consumptionSummaryByType[type] = { count: 0, total: 0 };
      }
      consumptionSummaryByType[type].count++;
      consumptionSummaryByType[type].total += Number(c.amount);
    }

    return {
      sales: {
        totalCount: salesAgg._count,
        totalRevenue: Number(salesAgg._sum.total || 0),
        byType: salesByType.map((s) => ({
          type: s.type,
          count: s._count,
          total: Number(s._sum.total || 0),
        })),
        byPaymentMethod: paymentsByMethod.map((p) => ({
          method: p.method,
          count: p._count,
          total: Number(p._sum.amount || 0),
        })),
      },
      consumptions: {
        totalCount: consumptionsAgg._count,
        totalCharged: Number(consumptionsAgg._sum.amount || 0),
        byPensionerType: consumptionSummaryByType,
      },
    };
  }

  async getMovements(filter: MovementsFilter) {
    const where: any = {};

    if (filter.from || filter.to) {
      where.createdAt = {};
      if (filter.from) where.createdAt.gte = new Date(filter.from);
      if (filter.to) {
        const toDate = new Date(filter.to);
        toDate.setHours(23, 59, 59, 999);
        where.createdAt.lte = toDate;
      }
    }

    if (filter.userId) {
      where.userId = filter.userId;
    }

    if (filter.type) {
      where.type = filter.type;
    }

    return this.prisma.balanceMovement.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            pensioner_type: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async exportMovements(filter: MovementsFilter): Promise<Buffer> {
    const movements = await this.getMovements(filter);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Sistema Restaurant';
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet('Movimientos de Saldo');

    worksheet.columns = [
      { header: 'Fecha', key: 'fecha', width: 20 },
      { header: 'Pensionista', key: 'pensionista', width: 25 },
      { header: 'DNI', key: 'dni', width: 12 },
      { header: 'Tipo', key: 'tipo', width: 12 },
      { header: 'Monto', key: 'monto', width: 15 },
      { header: 'Saldo Resultante', key: 'saldo', width: 18 },
      { header: 'Descripción', key: 'descripcion', width: 40 },
    ];

    this.styleHeader(worksheet);

    for (const m of movements) {
      worksheet.addRow({
        fecha: m.createdAt.toLocaleString('es-PE'),
        pensionista: m.user.name,
        dni: m.user.email,
        tipo: m.type,
        monto: Number(m.amount),
        saldo: Number(m.balance),
        descripcion: m.description || '-',
      });
    }

    // Format currency columns
    worksheet.getColumn('monto').numFmt = '"S/ "#,##0.00';
    worksheet.getColumn('saldo').numFmt = '"S/ "#,##0.00';

    // Color rows: green for RECARGA, red for CONSUMO
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const tipo = row.getCell('tipo').value;
      if (tipo === 'RECARGA') {
        row.getCell('monto').font = { color: { argb: 'FF16A34A' }, bold: true };
      } else if (tipo === 'CONSUMO') {
        row.getCell('monto').font = { color: { argb: 'FFDC2626' }, bold: true };
      }
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer as unknown as Buffer;
  }

  private styleHeader(worksheet: ExcelJS.Worksheet) {
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF2E75B6' },
    };
    headerRow.alignment = { horizontal: 'center', vertical: 'middle' };
    headerRow.height = 22;
  }
}
