import { PaymentMethod } from '../../../generated/prisma/client';
export declare class PaymentInputDto {
    method: PaymentMethod;
    amount: number;
}
export declare class RegisterPaymentDto {
    payments: PaymentInputDto[];
}
