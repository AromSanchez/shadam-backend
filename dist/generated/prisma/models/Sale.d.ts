import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type SaleModel = runtime.Types.Result.DefaultSelection<Prisma.$SalePayload>;
export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
export type SaleAvgAggregateOutputType = {
    pensionerId: number | null;
    total: runtime.Decimal | null;
};
export type SaleSumAggregateOutputType = {
    pensionerId: number | null;
    total: runtime.Decimal | null;
};
export type SaleMinAggregateOutputType = {
    id: string | null;
    sourceOrderId: string | null;
    tableNumber: string | null;
    type: $Enums.OrderType | null;
    customerType: $Enums.CustomerType | null;
    pensionerId: number | null;
    customerLabel: string | null;
    total: runtime.Decimal | null;
    soldAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SaleMaxAggregateOutputType = {
    id: string | null;
    sourceOrderId: string | null;
    tableNumber: string | null;
    type: $Enums.OrderType | null;
    customerType: $Enums.CustomerType | null;
    pensionerId: number | null;
    customerLabel: string | null;
    total: runtime.Decimal | null;
    soldAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SaleCountAggregateOutputType = {
    id: number;
    sourceOrderId: number;
    tableNumber: number;
    type: number;
    customerType: number;
    pensionerId: number;
    customerLabel: number;
    total: number;
    soldAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SaleAvgAggregateInputType = {
    pensionerId?: true;
    total?: true;
};
export type SaleSumAggregateInputType = {
    pensionerId?: true;
    total?: true;
};
export type SaleMinAggregateInputType = {
    id?: true;
    sourceOrderId?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    customerLabel?: true;
    total?: true;
    soldAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SaleMaxAggregateInputType = {
    id?: true;
    sourceOrderId?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    customerLabel?: true;
    total?: true;
    soldAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SaleCountAggregateInputType = {
    id?: true;
    sourceOrderId?: true;
    tableNumber?: true;
    type?: true;
    customerType?: true;
    pensionerId?: true;
    customerLabel?: true;
    total?: true;
    soldAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SaleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SaleCountAggregateInputType;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
    [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSale[P]> : Prisma.GetScalarType<T[P], AggregateSale[P]>;
};
export type SaleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithAggregationInput | Prisma.SaleOrderByWithAggregationInput[];
    by: Prisma.SaleScalarFieldEnum[] | Prisma.SaleScalarFieldEnum;
    having?: Prisma.SaleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SaleCountAggregateInputType | true;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type SaleGroupByOutputType = {
    id: string;
    sourceOrderId: string | null;
    tableNumber: string | null;
    type: $Enums.OrderType;
    customerType: $Enums.CustomerType;
    pensionerId: number | null;
    customerLabel: string | null;
    total: runtime.Decimal;
    soldAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
export type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SaleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]>;
}>>;
export type SaleWhereInput = {
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    id?: Prisma.StringFilter<"Sale"> | string;
    sourceOrderId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    tableNumber?: Prisma.StringNullableFilter<"Sale"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Sale"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Sale"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    customerLabel?: Prisma.StringNullableFilter<"Sale"> | string | null;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    pensioner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.SaleItemListRelationFilter;
    payments?: Prisma.SalePaymentListRelationFilter;
};
export type SaleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sourceOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tableNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pensioner?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.SaleItemOrderByRelationAggregateInput;
    payments?: Prisma.SalePaymentOrderByRelationAggregateInput;
};
export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sourceOrderId?: string;
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    tableNumber?: Prisma.StringNullableFilter<"Sale"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Sale"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Sale"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    customerLabel?: Prisma.StringNullableFilter<"Sale"> | string | null;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    pensioner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.SaleItemListRelationFilter;
    payments?: Prisma.SalePaymentListRelationFilter;
}, "id" | "sourceOrderId">;
export type SaleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sourceOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tableNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SaleCountOrderByAggregateInput;
    _avg?: Prisma.SaleAvgOrderByAggregateInput;
    _max?: Prisma.SaleMaxOrderByAggregateInput;
    _min?: Prisma.SaleMinOrderByAggregateInput;
    _sum?: Prisma.SaleSumOrderByAggregateInput;
};
export type SaleScalarWhereWithAggregatesInput = {
    AND?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    OR?: Prisma.SaleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Sale"> | string;
    sourceOrderId?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    tableNumber?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    type?: Prisma.EnumOrderTypeWithAggregatesFilter<"Sale"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeWithAggregatesFilter<"Sale"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableWithAggregatesFilter<"Sale"> | number | null;
    customerLabel?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    total?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeWithAggregatesFilter<"Sale"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sale"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sale"> | Date | string;
};
export type SaleCreateInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pensioner?: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.SalePaymentCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.SalePaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pensioner?: Prisma.UserUpdateOneWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.SalePaymentUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.SalePaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateManyInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SaleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleListRelationFilter = {
    every?: Prisma.SaleWhereInput;
    some?: Prisma.SaleWhereInput;
    none?: Prisma.SaleWhereInput;
};
export type SaleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SaleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceOrderId?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    customerLabel?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SaleAvgOrderByAggregateInput = {
    pensionerId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type SaleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceOrderId?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    customerLabel?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SaleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceOrderId?: Prisma.SortOrder;
    tableNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    customerType?: Prisma.SortOrder;
    pensionerId?: Prisma.SortOrder;
    customerLabel?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SaleSumOrderByAggregateInput = {
    pensionerId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type SaleScalarRelationFilter = {
    is?: Prisma.SaleWhereInput;
    isNot?: Prisma.SaleWhereInput;
};
export type SaleCreateNestedManyWithoutPensionerInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput> | Prisma.SaleCreateWithoutPensionerInput[] | Prisma.SaleUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPensionerInput | Prisma.SaleCreateOrConnectWithoutPensionerInput[];
    createMany?: Prisma.SaleCreateManyPensionerInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutPensionerInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput> | Prisma.SaleCreateWithoutPensionerInput[] | Prisma.SaleUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPensionerInput | Prisma.SaleCreateOrConnectWithoutPensionerInput[];
    createMany?: Prisma.SaleCreateManyPensionerInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutPensionerNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput> | Prisma.SaleCreateWithoutPensionerInput[] | Prisma.SaleUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPensionerInput | Prisma.SaleCreateOrConnectWithoutPensionerInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutPensionerInput | Prisma.SaleUpsertWithWhereUniqueWithoutPensionerInput[];
    createMany?: Prisma.SaleCreateManyPensionerInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutPensionerInput | Prisma.SaleUpdateWithWhereUniqueWithoutPensionerInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutPensionerInput | Prisma.SaleUpdateManyWithWhereWithoutPensionerInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutPensionerNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput> | Prisma.SaleCreateWithoutPensionerInput[] | Prisma.SaleUncheckedCreateWithoutPensionerInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPensionerInput | Prisma.SaleCreateOrConnectWithoutPensionerInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutPensionerInput | Prisma.SaleUpsertWithWhereUniqueWithoutPensionerInput[];
    createMany?: Prisma.SaleCreateManyPensionerInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutPensionerInput | Prisma.SaleUpdateWithWhereUniqueWithoutPensionerInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutPensionerInput | Prisma.SaleUpdateManyWithWhereWithoutPensionerInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.SaleUpsertWithoutItemsInput;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutItemsInput, Prisma.SaleUpdateWithoutItemsInput>, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type SaleCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.SaleUpsertWithoutPaymentsInput;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutPaymentsInput, Prisma.SaleUpdateWithoutPaymentsInput>, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
};
export type SaleCreateWithoutPensionerInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.SalePaymentCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutPensionerInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.SalePaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutPensionerInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput>;
};
export type SaleCreateManyPensionerInputEnvelope = {
    data: Prisma.SaleCreateManyPensionerInput | Prisma.SaleCreateManyPensionerInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutPensionerInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutPensionerInput, Prisma.SaleUncheckedUpdateWithoutPensionerInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPensionerInput, Prisma.SaleUncheckedCreateWithoutPensionerInput>;
};
export type SaleUpdateWithWhereUniqueWithoutPensionerInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutPensionerInput, Prisma.SaleUncheckedUpdateWithoutPensionerInput>;
};
export type SaleUpdateManyWithWhereWithoutPensionerInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutPensionerInput>;
};
export type SaleScalarWhereInput = {
    AND?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    OR?: Prisma.SaleScalarWhereInput[];
    NOT?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    id?: Prisma.StringFilter<"Sale"> | string;
    sourceOrderId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    tableNumber?: Prisma.StringNullableFilter<"Sale"> | string | null;
    type?: Prisma.EnumOrderTypeFilter<"Sale"> | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFilter<"Sale"> | $Enums.CustomerType;
    pensionerId?: Prisma.IntNullableFilter<"Sale"> | number | null;
    customerLabel?: Prisma.StringNullableFilter<"Sale"> | string | null;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
};
export type SaleCreateWithoutItemsInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pensioner?: Prisma.UserCreateNestedOneWithoutSalesInput;
    payments?: Prisma.SalePaymentCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.SalePaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutItemsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
};
export type SaleUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type SaleUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pensioner?: Prisma.UserUpdateOneWithoutSalesNestedInput;
    payments?: Prisma.SalePaymentUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.SalePaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutPaymentsInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pensioner?: Prisma.UserCreateNestedOneWithoutSalesInput;
    items?: Prisma.SaleItemCreateNestedManyWithoutSaleInput;
};
export type SaleUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    pensionerId?: number | null;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SaleItemUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
};
export type SaleUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutPaymentsInput, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutPaymentsInput, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
};
export type SaleUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pensioner?: Prisma.UserUpdateOneWithoutSalesNestedInput;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    pensionerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateManyPensionerInput = {
    id?: string;
    sourceOrderId?: string | null;
    tableNumber?: string | null;
    type: $Enums.OrderType;
    customerType?: $Enums.CustomerType;
    customerLabel?: string | null;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SaleUpdateWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.SalePaymentUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SaleItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.SalePaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutPensionerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tableNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    customerType?: Prisma.EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType;
    customerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleCountOutputType = {
    items: number;
    payments: number;
};
export type SaleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs;
    payments?: boolean | SaleCountOutputTypeCountPaymentsArgs;
};
export type SaleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleCountOutputTypeSelect<ExtArgs> | null;
};
export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
};
export type SaleCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalePaymentWhereInput;
};
export type SaleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceOrderId?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    customerLabel?: boolean;
    total?: boolean;
    soldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Sale$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceOrderId?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    customerLabel?: boolean;
    total?: boolean;
    soldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceOrderId?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    customerLabel?: boolean;
    total?: boolean;
    soldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectScalar = {
    id?: boolean;
    sourceOrderId?: boolean;
    tableNumber?: boolean;
    type?: boolean;
    customerType?: boolean;
    pensionerId?: boolean;
    customerLabel?: boolean;
    total?: boolean;
    soldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SaleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sourceOrderId" | "tableNumber" | "type" | "customerType" | "pensionerId" | "customerLabel" | "total" | "soldAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sale"]>;
export type SaleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Sale$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SaleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
};
export type SaleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pensioner?: boolean | Prisma.Sale$pensionerArgs<ExtArgs>;
};
export type $SalePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sale";
    objects: {
        pensioner: Prisma.$UserPayload<ExtArgs> | null;
        items: Prisma.$SaleItemPayload<ExtArgs>[];
        payments: Prisma.$SalePaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sourceOrderId: string | null;
        tableNumber: string | null;
        type: $Enums.OrderType;
        customerType: $Enums.CustomerType;
        pensionerId: number | null;
        customerLabel: string | null;
        total: runtime.Decimal;
        soldAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sale"]>;
    composites: {};
};
export type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalePayload, S>;
export type SaleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SaleCountAggregateInputType | true;
};
export interface SaleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sale'];
        meta: {
            name: 'Sale';
        };
    };
    findUnique<T extends SaleFindUniqueArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SaleFindFirstArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SaleFindManyArgs>(args?: Prisma.SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SaleCreateArgs>(args: Prisma.SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SaleCreateManyArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SaleDeleteArgs>(args: Prisma.SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SaleUpdateArgs>(args: Prisma.SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SaleDeleteManyArgs>(args?: Prisma.SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SaleUpdateManyArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SaleUpsertArgs>(args: Prisma.SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SaleCountArgs>(args?: Prisma.Subset<T, SaleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SaleCountAggregateOutputType> : number>;
    aggregate<T extends SaleAggregateArgs>(args: Prisma.Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>;
    groupBy<T extends SaleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SaleGroupByArgs['orderBy'];
    } : {
        orderBy?: SaleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SaleFieldRefs;
}
export interface Prisma__SaleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pensioner<T extends Prisma.Sale$pensionerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$pensionerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Sale$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.Sale$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SaleFieldRefs {
    readonly id: Prisma.FieldRef<"Sale", 'String'>;
    readonly sourceOrderId: Prisma.FieldRef<"Sale", 'String'>;
    readonly tableNumber: Prisma.FieldRef<"Sale", 'String'>;
    readonly type: Prisma.FieldRef<"Sale", 'OrderType'>;
    readonly customerType: Prisma.FieldRef<"Sale", 'CustomerType'>;
    readonly pensionerId: Prisma.FieldRef<"Sale", 'Int'>;
    readonly customerLabel: Prisma.FieldRef<"Sale", 'String'>;
    readonly total: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly soldAt: Prisma.FieldRef<"Sale", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Sale", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sale", 'DateTime'>;
}
export type SaleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleScalarFieldEnum | Prisma.SaleScalarFieldEnum[];
};
export type SaleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleScalarFieldEnum | Prisma.SaleScalarFieldEnum[];
};
export type SaleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleScalarFieldEnum | Prisma.SaleScalarFieldEnum[];
};
export type SaleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
};
export type SaleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SaleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SaleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SaleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type SaleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
    include?: Prisma.SaleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SaleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
};
export type SaleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type Sale$pensionerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Sale$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where?: Prisma.SaleItemWhereInput;
    orderBy?: Prisma.SaleItemOrderByWithRelationInput | Prisma.SaleItemOrderByWithRelationInput[];
    cursor?: Prisma.SaleItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleItemScalarFieldEnum | Prisma.SaleItemScalarFieldEnum[];
};
export type Sale$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    where?: Prisma.SalePaymentWhereInput;
    orderBy?: Prisma.SalePaymentOrderByWithRelationInput | Prisma.SalePaymentOrderByWithRelationInput[];
    cursor?: Prisma.SalePaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalePaymentScalarFieldEnum | Prisma.SalePaymentScalarFieldEnum[];
};
export type SaleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
};
