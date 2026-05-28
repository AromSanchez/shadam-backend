import { CustomerType, OrderType } from '../../../generated/prisma/client';
import { OrderItemDto } from './order-item.dto';
export declare class CreateOrderDto {
    type: OrderType;
    tableNumber?: string;
    customerType?: CustomerType;
    pensionerId?: number;
    notes?: string;
    items: OrderItemDto[];
}
