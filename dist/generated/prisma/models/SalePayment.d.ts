import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type SalePaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$SalePaymentPayload>;
export type AggregateSalePayment = {
    _count: SalePaymentCountAggregateOutputType | null;
    _avg: SalePaymentAvgAggregateOutputType | null;
    _sum: SalePaymentSumAggregateOutputType | null;
    _min: SalePaymentMinAggregateOutputType | null;
    _max: SalePaymentMaxAggregateOutputType | null;
};
export type SalePaymentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SalePaymentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SalePaymentMinAggregateOutputType = {
    id: string | null;
    saleId: string | null;
    method: $Enums.PaymentMethod | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type SalePaymentMaxAggregateOutputType = {
    id: string | null;
    saleId: string | null;
    method: $Enums.PaymentMethod | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type SalePaymentCountAggregateOutputType = {
    id: number;
    saleId: number;
    method: number;
    amount: number;
    createdAt: number;
    _all: number;
};
export type SalePaymentAvgAggregateInputType = {
    amount?: true;
};
export type SalePaymentSumAggregateInputType = {
    amount?: true;
};
export type SalePaymentMinAggregateInputType = {
    id?: true;
    saleId?: true;
    method?: true;
    amount?: true;
    createdAt?: true;
};
export type SalePaymentMaxAggregateInputType = {
    id?: true;
    saleId?: true;
    method?: true;
    amount?: true;
    createdAt?: true;
};
export type SalePaymentCountAggregateInputType = {
    id?: true;
    saleId?: true;
    method?: true;
    amount?: true;
    createdAt?: true;
    _all?: true;
};
export type SalePaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalePaymentWhereInput;
    orderBy?: Prisma.SalePaymentOrderByWithRelationInput | Prisma.SalePaymentOrderByWithRelationInput[];
    cursor?: Prisma.SalePaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalePaymentCountAggregateInputType;
    _avg?: SalePaymentAvgAggregateInputType;
    _sum?: SalePaymentSumAggregateInputType;
    _min?: SalePaymentMinAggregateInputType;
    _max?: SalePaymentMaxAggregateInputType;
};
export type GetSalePaymentAggregateType<T extends SalePaymentAggregateArgs> = {
    [P in keyof T & keyof AggregateSalePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalePayment[P]> : Prisma.GetScalarType<T[P], AggregateSalePayment[P]>;
};
export type SalePaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalePaymentWhereInput;
    orderBy?: Prisma.SalePaymentOrderByWithAggregationInput | Prisma.SalePaymentOrderByWithAggregationInput[];
    by: Prisma.SalePaymentScalarFieldEnum[] | Prisma.SalePaymentScalarFieldEnum;
    having?: Prisma.SalePaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalePaymentCountAggregateInputType | true;
    _avg?: SalePaymentAvgAggregateInputType;
    _sum?: SalePaymentSumAggregateInputType;
    _min?: SalePaymentMinAggregateInputType;
    _max?: SalePaymentMaxAggregateInputType;
};
export type SalePaymentGroupByOutputType = {
    id: string;
    saleId: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal;
    createdAt: Date;
    _count: SalePaymentCountAggregateOutputType | null;
    _avg: SalePaymentAvgAggregateOutputType | null;
    _sum: SalePaymentSumAggregateOutputType | null;
    _min: SalePaymentMinAggregateOutputType | null;
    _max: SalePaymentMaxAggregateOutputType | null;
};
export type GetSalePaymentGroupByPayload<T extends SalePaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalePaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalePaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalePaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalePaymentGroupByOutputType[P]>;
}>>;
export type SalePaymentWhereInput = {
    AND?: Prisma.SalePaymentWhereInput | Prisma.SalePaymentWhereInput[];
    OR?: Prisma.SalePaymentWhereInput[];
    NOT?: Prisma.SalePaymentWhereInput | Prisma.SalePaymentWhereInput[];
    id?: Prisma.StringFilter<"SalePayment"> | string;
    saleId?: Prisma.StringFilter<"SalePayment"> | string;
    method?: Prisma.EnumPaymentMethodFilter<"SalePayment"> | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFilter<"SalePayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SalePayment"> | Date | string;
    sale?: Prisma.XOR<Prisma.SaleScalarRelationFilter, Prisma.SaleWhereInput>;
};
export type SalePaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sale?: Prisma.SaleOrderByWithRelationInput;
};
export type SalePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SalePaymentWhereInput | Prisma.SalePaymentWhereInput[];
    OR?: Prisma.SalePaymentWhereInput[];
    NOT?: Prisma.SalePaymentWhereInput | Prisma.SalePaymentWhereInput[];
    saleId?: Prisma.StringFilter<"SalePayment"> | string;
    method?: Prisma.EnumPaymentMethodFilter<"SalePayment"> | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFilter<"SalePayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SalePayment"> | Date | string;
    sale?: Prisma.XOR<Prisma.SaleScalarRelationFilter, Prisma.SaleWhereInput>;
}, "id">;
export type SalePaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SalePaymentCountOrderByAggregateInput;
    _avg?: Prisma.SalePaymentAvgOrderByAggregateInput;
    _max?: Prisma.SalePaymentMaxOrderByAggregateInput;
    _min?: Prisma.SalePaymentMinOrderByAggregateInput;
    _sum?: Prisma.SalePaymentSumOrderByAggregateInput;
};
export type SalePaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalePaymentScalarWhereWithAggregatesInput | Prisma.SalePaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalePaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalePaymentScalarWhereWithAggregatesInput | Prisma.SalePaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SalePayment"> | string;
    saleId?: Prisma.StringWithAggregatesFilter<"SalePayment"> | string;
    method?: Prisma.EnumPaymentMethodWithAggregatesFilter<"SalePayment"> | $Enums.PaymentMethod;
    amount?: Prisma.DecimalWithAggregatesFilter<"SalePayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SalePayment"> | Date | string;
};
export type SalePaymentCreateInput = {
    id?: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    sale: Prisma.SaleCreateNestedOneWithoutPaymentsInput;
};
export type SalePaymentUncheckedCreateInput = {
    id?: string;
    saleId: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type SalePaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sale?: Prisma.SaleUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type SalePaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    saleId?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentCreateManyInput = {
    id?: string;
    saleId: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type SalePaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    saleId?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentListRelationFilter = {
    every?: Prisma.SalePaymentWhereInput;
    some?: Prisma.SalePaymentWhereInput;
    none?: Prisma.SalePaymentWhereInput;
};
export type SalePaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalePaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SalePaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type SalePaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SalePaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SalePaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type SalePaymentCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput> | Prisma.SalePaymentCreateWithoutSaleInput[] | Prisma.SalePaymentUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SalePaymentCreateOrConnectWithoutSaleInput | Prisma.SalePaymentCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.SalePaymentCreateManySaleInputEnvelope;
    connect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
};
export type SalePaymentUncheckedCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput> | Prisma.SalePaymentCreateWithoutSaleInput[] | Prisma.SalePaymentUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SalePaymentCreateOrConnectWithoutSaleInput | Prisma.SalePaymentCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.SalePaymentCreateManySaleInputEnvelope;
    connect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
};
export type SalePaymentUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput> | Prisma.SalePaymentCreateWithoutSaleInput[] | Prisma.SalePaymentUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SalePaymentCreateOrConnectWithoutSaleInput | Prisma.SalePaymentCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.SalePaymentUpsertWithWhereUniqueWithoutSaleInput | Prisma.SalePaymentUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.SalePaymentCreateManySaleInputEnvelope;
    set?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    disconnect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    delete?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    connect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    update?: Prisma.SalePaymentUpdateWithWhereUniqueWithoutSaleInput | Prisma.SalePaymentUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.SalePaymentUpdateManyWithWhereWithoutSaleInput | Prisma.SalePaymentUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.SalePaymentScalarWhereInput | Prisma.SalePaymentScalarWhereInput[];
};
export type SalePaymentUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput> | Prisma.SalePaymentCreateWithoutSaleInput[] | Prisma.SalePaymentUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SalePaymentCreateOrConnectWithoutSaleInput | Prisma.SalePaymentCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.SalePaymentUpsertWithWhereUniqueWithoutSaleInput | Prisma.SalePaymentUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.SalePaymentCreateManySaleInputEnvelope;
    set?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    disconnect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    delete?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    connect?: Prisma.SalePaymentWhereUniqueInput | Prisma.SalePaymentWhereUniqueInput[];
    update?: Prisma.SalePaymentUpdateWithWhereUniqueWithoutSaleInput | Prisma.SalePaymentUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.SalePaymentUpdateManyWithWhereWithoutSaleInput | Prisma.SalePaymentUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.SalePaymentScalarWhereInput | Prisma.SalePaymentScalarWhereInput[];
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type SalePaymentCreateWithoutSaleInput = {
    id?: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type SalePaymentUncheckedCreateWithoutSaleInput = {
    id?: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type SalePaymentCreateOrConnectWithoutSaleInput = {
    where: Prisma.SalePaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput>;
};
export type SalePaymentCreateManySaleInputEnvelope = {
    data: Prisma.SalePaymentCreateManySaleInput | Prisma.SalePaymentCreateManySaleInput[];
    skipDuplicates?: boolean;
};
export type SalePaymentUpsertWithWhereUniqueWithoutSaleInput = {
    where: Prisma.SalePaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalePaymentUpdateWithoutSaleInput, Prisma.SalePaymentUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.SalePaymentCreateWithoutSaleInput, Prisma.SalePaymentUncheckedCreateWithoutSaleInput>;
};
export type SalePaymentUpdateWithWhereUniqueWithoutSaleInput = {
    where: Prisma.SalePaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalePaymentUpdateWithoutSaleInput, Prisma.SalePaymentUncheckedUpdateWithoutSaleInput>;
};
export type SalePaymentUpdateManyWithWhereWithoutSaleInput = {
    where: Prisma.SalePaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.SalePaymentUpdateManyMutationInput, Prisma.SalePaymentUncheckedUpdateManyWithoutSaleInput>;
};
export type SalePaymentScalarWhereInput = {
    AND?: Prisma.SalePaymentScalarWhereInput | Prisma.SalePaymentScalarWhereInput[];
    OR?: Prisma.SalePaymentScalarWhereInput[];
    NOT?: Prisma.SalePaymentScalarWhereInput | Prisma.SalePaymentScalarWhereInput[];
    id?: Prisma.StringFilter<"SalePayment"> | string;
    saleId?: Prisma.StringFilter<"SalePayment"> | string;
    method?: Prisma.EnumPaymentMethodFilter<"SalePayment"> | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFilter<"SalePayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SalePayment"> | Date | string;
};
export type SalePaymentCreateManySaleInput = {
    id?: string;
    method: $Enums.PaymentMethod;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type SalePaymentUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentUncheckedUpdateManyWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalePaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    method?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salePayment"]>;
export type SalePaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    method?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salePayment"]>;
export type SalePaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    method?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salePayment"]>;
export type SalePaymentSelectScalar = {
    id?: boolean;
    saleId?: boolean;
    method?: boolean;
    amount?: boolean;
    createdAt?: boolean;
};
export type SalePaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "saleId" | "method" | "amount" | "createdAt", ExtArgs["result"]["salePayment"]>;
export type SalePaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
};
export type SalePaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
};
export type SalePaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
};
export type $SalePaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalePayment";
    objects: {
        sale: Prisma.$SalePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        saleId: string;
        method: $Enums.PaymentMethod;
        amount: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["salePayment"]>;
    composites: {};
};
export type SalePaymentGetPayload<S extends boolean | null | undefined | SalePaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload, S>;
export type SalePaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalePaymentCountAggregateInputType | true;
};
export interface SalePaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalePayment'];
        meta: {
            name: 'SalePayment';
        };
    };
    findUnique<T extends SalePaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, SalePaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalePaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalePaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, SalePaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalePaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalePaymentFindManyArgs>(args?: Prisma.SelectSubset<T, SalePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalePaymentCreateArgs>(args: Prisma.SelectSubset<T, SalePaymentCreateArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalePaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, SalePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalePaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalePaymentDeleteArgs>(args: Prisma.SelectSubset<T, SalePaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalePaymentUpdateArgs>(args: Prisma.SelectSubset<T, SalePaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalePaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalePaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, SalePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalePaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalePaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalePaymentUpsertArgs>(args: Prisma.SelectSubset<T, SalePaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__SalePaymentClient<runtime.Types.Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalePaymentCountArgs>(args?: Prisma.Subset<T, SalePaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalePaymentCountAggregateOutputType> : number>;
    aggregate<T extends SalePaymentAggregateArgs>(args: Prisma.Subset<T, SalePaymentAggregateArgs>): Prisma.PrismaPromise<GetSalePaymentAggregateType<T>>;
    groupBy<T extends SalePaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalePaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: SalePaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalePaymentFieldRefs;
}
export interface Prisma__SalePaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sale<T extends Prisma.SaleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SaleDefaultArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalePaymentFieldRefs {
    readonly id: Prisma.FieldRef<"SalePayment", 'String'>;
    readonly saleId: Prisma.FieldRef<"SalePayment", 'String'>;
    readonly method: Prisma.FieldRef<"SalePayment", 'PaymentMethod'>;
    readonly amount: Prisma.FieldRef<"SalePayment", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"SalePayment", 'DateTime'>;
}
export type SalePaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    where: Prisma.SalePaymentWhereUniqueInput;
};
export type SalePaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    where: Prisma.SalePaymentWhereUniqueInput;
};
export type SalePaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalePaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalePaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalePaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalePaymentCreateInput, Prisma.SalePaymentUncheckedCreateInput>;
};
export type SalePaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalePaymentCreateManyInput | Prisma.SalePaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalePaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    data: Prisma.SalePaymentCreateManyInput | Prisma.SalePaymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalePaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalePaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalePaymentUpdateInput, Prisma.SalePaymentUncheckedUpdateInput>;
    where: Prisma.SalePaymentWhereUniqueInput;
};
export type SalePaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalePaymentUpdateManyMutationInput, Prisma.SalePaymentUncheckedUpdateManyInput>;
    where?: Prisma.SalePaymentWhereInput;
    limit?: number;
};
export type SalePaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalePaymentUpdateManyMutationInput, Prisma.SalePaymentUncheckedUpdateManyInput>;
    where?: Prisma.SalePaymentWhereInput;
    limit?: number;
    include?: Prisma.SalePaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalePaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    where: Prisma.SalePaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalePaymentCreateInput, Prisma.SalePaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalePaymentUpdateInput, Prisma.SalePaymentUncheckedUpdateInput>;
};
export type SalePaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
    where: Prisma.SalePaymentWhereUniqueInput;
};
export type SalePaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalePaymentWhereInput;
    limit?: number;
};
export type SalePaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalePaymentSelect<ExtArgs> | null;
    omit?: Prisma.SalePaymentOmit<ExtArgs> | null;
    include?: Prisma.SalePaymentInclude<ExtArgs> | null;
};
