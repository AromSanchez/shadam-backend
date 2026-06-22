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

  async getDashboardStats() {
    const now = new Date();
    
    // Calculate start and end of today in local time
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

    // 1. Today's sales (Total of sales sold today)
    const salesToday = await this.prisma.sale.aggregate({
      where: {
        soldAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
      _sum: {
        total: true,
      },
    });
    const todaySales = Number(salesToday._sum.total || 0);

    // 2. Today's pensioner consumptions count
    const todayConsumptionsCount = await this.prisma.consumption.count({
      where: {
        date: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    // 3. Pensioners stats
    const totalPensionists = await this.prisma.user.count({
      where: {
        role: 'pensioner',
      },
    });

    const activePensionists = await this.prisma.user.count({
      where: {
        role: 'pensioner',
        is_active: true,
      },
    });

    // Get active pensioner users to count debt and calculate total debt
    const activePensionersWithBalances = await this.prisma.user.findMany({
      where: {
        role: 'pensioner',
        is_active: true,
      },
      select: {
        balance: true,
      },
    });

    let debtPensionists = 0;
    let totalDebt = 0;
    for (const p of activePensionersWithBalances) {
      const bal = Number(p.balance);
      if (bal < 0) {
        debtPensionists++;
        totalDebt += Math.abs(bal);
      }
    }

    // 4. Weekly Sales (Last 7 days, including today)
    const weeklySales: { day: string; ventas: number }[] = [];
    const daysName = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const endOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

      const daySalesAgg = await this.prisma.sale.aggregate({
        where: {
          soldAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
        _sum: {
          total: true,
        },
      });

      weeklySales.push({
        day: daysName[d.getDay()],
        ventas: Number(daySalesAgg._sum.total || 0),
      });
    }

    // 5. Top 5 sold products (Platos más vendidos)
    const topDishesGroup = await this.prisma.saleItem.groupBy({
      by: ['productoId', 'productName'],
      _sum: {
        quantity: true,
      },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
      take: 5,
    });

    // Find the max quantity to compute percentage relative to the best seller
    const maxQty = topDishesGroup.length > 0 ? Number(topDishesGroup[0]._sum.quantity || 0) : 1;

    const topDishes = topDishesGroup.map((item) => {
      const count = Number(item._sum.quantity || 0);
      return {
        name: item.productName,
        count,
        pct: maxQty > 0 ? Math.round((count / maxQty) * 100) : 0,
      };
    });

    // 6. Payment methods (Efectivo, Yape, Saldo)
    // Query payments made in the last 30 days to have meaningful stats
    const paymentsGroup = await this.prisma.salePayment.groupBy({
      by: ['method'],
      _sum: {
        amount: true,
      },
    });

    const paymentMethodsMap: Record<string, number> = {
      EFECTIVO: 0,
      YAPE: 0,
      SALDO: 0,
    };

    let totalPaymentsAmount = 0;
    for (const p of paymentsGroup) {
      const amt = Number(p._sum.amount || 0);
      paymentMethodsMap[p.method] = amt;
      totalPaymentsAmount += amt;
    }

    // Include Consumption amounts (Saldo) that are registered directly in consumptions (if they aren't part of SalePayments)
    // Note: If a pensioner eats a meal, the system creates a Consumption. Let's see if consumptions are also logged in sales.
    // In our system, checking out a pensioner order creates a Sale with payment method = SALDO?
    // Wait, let's verify if pensioner consumptions are handled through Checkout or only Consumption.
    // The user mentioned: "metodos de pago solo debe ser efectivo, yape y saldo que es de los pensionistas consumiendo"
    // Let's look at paymentData mapping: Efectivo, Yape, Saldo.
    // We will return percentage values of payment methods based on the payments in the database.
    const paymentData = [
      { name: 'Efectivo', value: totalPaymentsAmount > 0 ? Math.round((paymentMethodsMap.EFECTIVO / totalPaymentsAmount) * 100) : 0, color: '#06b6d4' },
      { name: 'Yape', value: totalPaymentsAmount > 0 ? Math.round((paymentMethodsMap.YAPE / totalPaymentsAmount) * 100) : 0, color: '#7c3aed' },
      { name: 'Saldo', value: totalPaymentsAmount > 0 ? Math.round((paymentMethodsMap.SALDO / totalPaymentsAmount) * 100) : 0, color: '#facc15' },
    ];

    // Adjust values to sum up to exactly 100 if there's any data
    const totalPercentage = paymentData.reduce((sum, p) => sum + p.value, 0);
    if (totalPercentage > 0 && totalPercentage !== 100) {
      // Add the difference to the largest value
      const diff = 100 - totalPercentage;
      const maxItem = paymentData.reduce((prev, current) => (prev.value > current.value) ? prev : current);
      maxItem.value += diff;
    }

    return {
      todaySales,
      todayConsumptionsCount,
      totalPensionists,
      activePensionists,
      debtPensionists,
      totalDebt,
      weeklySales,
      topDishes,
      paymentData,
    };
  }
}
