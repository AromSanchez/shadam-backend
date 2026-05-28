export declare const Categoria: {
    readonly ENTRADA: "ENTRADA";
    readonly MENU: "MENU";
};
export type Categoria = (typeof Categoria)[keyof typeof Categoria];
export declare const OrderType: {
    readonly MESA: "MESA";
    readonly PARA_LLEVAR: "PARA_LLEVAR";
};
export type OrderType = (typeof OrderType)[keyof typeof OrderType];
export declare const CustomerType: {
    readonly REGULAR: "REGULAR";
    readonly PENSIONER: "PENSIONER";
};
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType];
export declare const OrderStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly CONFIRMED: "CONFIRMED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentMethod: {
    readonly EFECTIVO: "EFECTIVO";
    readonly YAPE: "YAPE";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
