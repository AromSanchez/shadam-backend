import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    pensionerId: number | null;
    total: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    pensionerId: number | null;
    total: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    tableNumber: string | null;
    type: $Enums.OrderType | null;
    customerType: $Enums.CustomerType | null;
    pensionerId: number | null;
    status: $Enums.OrderStatus | null;
    total: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    tableNumber: string | null;
    type: $Enums.OrderType | null;
    customerType: $Enums.CustomerType | null;
    pensionerId: number | null;
    status: $Enums.OrderStatus | null;
    total: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    tableNumber: number;
    type: number;
    customerType: number;
    pensionerId: number;
    status: number;
    total: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    pensionerId?: true;
    total?: true;
};
export type OrderSumAggregateInputType = {
    pensionerId?: true;
    total?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    status?: true;
    total?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    status?: true;
    total?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    status?: true;
    total?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    tableNumber: string | null;
    type: $Enums.OrderType;
    customerType: $Enums.CustomerType;
    pensionerId: number | null;
    status: $Enums.OrderStatus;
    total: runtime.Decimal;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    tableNumber?: Prisma.StringNullableFilter<"Order"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Order"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    pensioner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pensioner?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    tableNumber?: Prisma.StringNullableFilter<"Order"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Order"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    pensioner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    tableNumber?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    type?: Prisma.EnumOrderTypeWithAggregatesFilter<"Order"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeWithAggregatesFilter<"Order"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableWithAggregatesFilter<"Order"> | number | null;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pensioner?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pensioner?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    pensionerId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    pensionerId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutPensionerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput> | Prisma.OrderCreateWithoutPensionerInput[] | Prisma.OrderUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPensionerInput | Prisma.OrderCreateOrConnectWithoutPensionerInput[];
    createMany?: Prisma.OrderCreateManyPensionerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutPensionerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput> | Prisma.OrderCreateWithoutPensionerInput[] | Prisma.OrderUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPensionerInput | Prisma.OrderCreateOrConnectWithoutPensionerInput[];
    createMany?: Prisma.OrderCreateManyPensionerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutPensionerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput> | Prisma.OrderCreateWithoutPensionerInput[] | Prisma.OrderUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPensionerInput | Prisma.OrderCreateOrConnectWithoutPensionerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPensionerInput | Prisma.OrderUpsertWithWhereUniqueWithoutPensionerInput[];
    createMany?: Prisma.OrderCreateManyPensionerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPensionerInput | Prisma.OrderUpdateWithWhereUniqueWithoutPensionerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPensionerInput | Prisma.OrderUpdateManyWithWhereWithoutPensionerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutPensionerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput> | Prisma.OrderCreateWithoutPensionerInput[] | Prisma.OrderUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPensionerInput | Prisma.OrderCreateOrConnectWithoutPensionerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPensionerInput | Prisma.OrderUpsertWithWhereUniqueWithoutPensionerInput[];
    createMany?: Prisma.OrderCreateManyPensionerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPensionerInput | Prisma.OrderUpdateWithWhereUniqueWithoutPensionerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPensionerInput | Prisma.OrderUpdateManyWithWhereWithoutPensionerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType;
};
export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType;
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.OrderUpsertWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, Prisma.OrderUpdateWithoutItemsInput>, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderCreateWithoutPensionerInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutPensionerInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPensionerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput>;
};
export type OrderCreateManyPensionerInputEnvelope = {
    data: Prisma.OrderCreateManyPensionerInput | Prisma.OrderCreateManyPensionerInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutPensionerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPensionerInput, Prisma.OrderUncheckedUpdateWithoutPensionerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPensionerInput, Prisma.OrderUncheckedCreateWithoutPensionerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutPensionerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPensionerInput, Prisma.OrderUncheckedUpdateWithoutPensionerInput>;
};
export type OrderUpdateManyWithWhereWithoutPensionerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutPensionerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    tableNumber?: Prisma.StringNullableFilter<"Order"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Order"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderCreateWithoutItemsInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pensioner?: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
};
export type OrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pensioner?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyPensionerInput = {
    id?: string;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    status?: $Enums.OrderStatus;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    items: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    status?: boolean;
    total?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    status?: boolean;
    total?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    status?: boolean;
    total?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    status?: boolean;
    total?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tableNumber" | "type" | "customerType" | "pensionerId" | "status" | "total" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Order$pensionerArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        pensioner: Prisma.$UserPayload<ExtArgs> | null;
        items: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tableNumber: string | null;
        type: $Enums.OrderType;
        customerType: $Enums.CustomerType;
        pensionerId: number | null;
        status: $Enums.OrderStatus;
        total: runtime.Decimal;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pensioner<T extends Prisma.Order$pensionerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$pensionerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Order$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly tableNumber: Prisma.FieldRef<"Order", 'String'>;
    readonly type: Prisma.FieldRef<"Order", 'OrderType'>;
    readonly customerType: Prisma.FieldRef<"Order", 'CustomerType'>;
    readonly pensionerId: Prisma.FieldRef<"Order", 'Int'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly total: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"Order", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$pensionerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Order$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
