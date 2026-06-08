import { RegisterPaymentDto } from '../orders/dto/register-payment.dto';
import { OrdersService } from '../orders/orders.service';
export declare class PaymentsController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    register(id: string, dto: RegisterPaymentDto): Promise<{
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            saleId: string;
        })[];
        payments: {
            id: string;
            createdAt: Date;
            method: import("../../generated/prisma/enums").PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
            saleId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../generated/prisma/enums").OrderType;
        tableNumber: string | null;
        customerType: import("../../generated/prisma/enums").CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
    }>;
}
