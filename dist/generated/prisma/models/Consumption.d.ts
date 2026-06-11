import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ConsumptionModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsumptionPayload>;
export type AggregateConsumption = {
    _count: ConsumptionCountAggregateOutputType | null;
    _avg: ConsumptionAvgAggregateOutputType | null;
    _sum: ConsumptionSumAggregateOutputType | null;
    _min: ConsumptionMinAggregateOutputType | null;
    _max: ConsumptionMaxAggregateOutputType | null;
};
export type ConsumptionAvgAggregateOutputType = {
    userId: number | null;
    amount: runtime.Decimal | null;
};
export type ConsumptionSumAggregateOutputType = {
    userId: number | null;
    amount: runtime.Decimal | null;
};
export type ConsumptionMinAggregateOutputType = {
    id: string | null;
    userId: number | null;
    mealType: $Enums.MealType | null;
    amount: runtime.Decimal | null;
    date: Date | null;
    createdAt: Date | null;
};
export type ConsumptionMaxAggregateOutputType = {
    id: string | null;
    userId: number | null;
    mealType: $Enums.MealType | null;
    amount: runtime.Decimal | null;
    date: Date | null;
    createdAt: Date | null;
};
export type ConsumptionCountAggregateOutputType = {
    id: number;
    userId: number;
    mealType: number;
    amount: number;
    date: number;
    createdAt: number;
    _all: number;
};
export type ConsumptionAvgAggregateInputType = {
    userId?: true;
    amount?: true;
};
export type ConsumptionSumAggregateInputType = {
    userId?: true;
    amount?: true;
};
export type ConsumptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    mealType?: true;
    amount?: true;
    date?: true;
    createdAt?: true;
};
export type ConsumptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    mealType?: true;
    amount?: true;
    date?: true;
    createdAt?: true;
};
export type ConsumptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    mealType?: true;
    amount?: true;
    date?: true;
    createdAt?: true;
    _all?: true;
};
export type ConsumptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumptionWhereInput;
    orderBy?: Prisma.ConsumptionOrderByWithRelationInput | Prisma.ConsumptionOrderByWithRelationInput[];
    cursor?: Prisma.ConsumptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsumptionCountAggregateInputType;
    _avg?: ConsumptionAvgAggregateInputType;
    _sum?: ConsumptionSumAggregateInputType;
    _min?: ConsumptionMinAggregateInputType;
    _max?: ConsumptionMaxAggregateInputType;
};
export type GetConsumptionAggregateType<T extends ConsumptionAggregateArgs> = {
    [P in keyof T & keyof AggregateConsumption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsumption[P]> : Prisma.GetScalarType<T[P], AggregateConsumption[P]>;
};
export type ConsumptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumptionWhereInput;
    orderBy?: Prisma.ConsumptionOrderByWithAggregationInput | Prisma.ConsumptionOrderByWithAggregationInput[];
    by: Prisma.ConsumptionScalarFieldEnum[] | Prisma.ConsumptionScalarFieldEnum;
    having?: Prisma.ConsumptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsumptionCountAggregateInputType | true;
    _avg?: ConsumptionAvgAggregateInputType;
    _sum?: ConsumptionSumAggregateInputType;
    _min?: ConsumptionMinAggregateInputType;
    _max?: ConsumptionMaxAggregateInputType;
};
export type ConsumptionGroupByOutputType = {
    id: string;
    userId: number;
    mealType: $Enums.MealType;
    amount: runtime.Decimal;
    date: Date;
    createdAt: Date;
    _count: ConsumptionCountAggregateOutputType | null;
    _avg: ConsumptionAvgAggregateOutputType | null;
    _sum: ConsumptionSumAggregateOutputType | null;
    _min: ConsumptionMinAggregateOutputType | null;
    _max: ConsumptionMaxAggregateOutputType | null;
};
export type GetConsumptionGroupByPayload<T extends ConsumptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsumptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsumptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsumptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsumptionGroupByOutputType[P]>;
}>>;
export type ConsumptionWhereInput = {
    AND?: Prisma.ConsumptionWhereInput | Prisma.ConsumptionWhereInput[];
    OR?: Prisma.ConsumptionWhereInput[];
    NOT?: Prisma.ConsumptionWhereInput | Prisma.ConsumptionWhereInput[];
    id?: Prisma.StringFilter<"Consumption"> | string;
    userId?: Prisma.IntFilter<"Consumption"> | number;
    mealType?: Prisma.EnumMealTypeFilter<"Consumption"> | $Enums.MealType;
    amount?: Prisma.DecimalFilter<"Consumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ConsumptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ConsumptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConsumptionWhereInput | Prisma.ConsumptionWhereInput[];
    OR?: Prisma.ConsumptionWhereInput[];
    NOT?: Prisma.ConsumptionWhereInput | Prisma.ConsumptionWhereInput[];
    userId?: Prisma.IntFilter<"Consumption"> | number;
    mealType?: Prisma.EnumMealTypeFilter<"Consumption"> | $Enums.MealType;
    amount?: Prisma.DecimalFilter<"Consumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ConsumptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConsumptionCountOrderByAggregateInput;
    _avg?: Prisma.ConsumptionAvgOrderByAggregateInput;
    _max?: Prisma.ConsumptionMaxOrderByAggregateInput;
    _min?: Prisma.ConsumptionMinOrderByAggregateInput;
    _sum?: Prisma.ConsumptionSumOrderByAggregateInput;
};
export type ConsumptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsumptionScalarWhereWithAggregatesInput | Prisma.ConsumptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsumptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsumptionScalarWhereWithAggregatesInput | Prisma.ConsumptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Consumption"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"Consumption"> | number;
    mealType?: Prisma.EnumMealTypeWithAggregatesFilter<"Consumption"> | $Enums.MealType;
    amount?: Prisma.DecimalWithAggregatesFilter<"Consumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Consumption"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Consumption"> | Date | string;
};
export type ConsumptionCreateInput = {
    id?: string;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutConsumptionsInput;
};
export type ConsumptionUncheckedCreateInput = {
    id?: string;
    userId: number;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
};
export type ConsumptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutConsumptionsNestedInput;
};
export type ConsumptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionCreateManyInput = {
    id?: string;
    userId: number;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
};
export type ConsumptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionListRelationFilter = {
    every?: Prisma.ConsumptionWhereInput;
    some?: Prisma.ConsumptionWhereInput;
    none?: Prisma.ConsumptionWhereInput;
};
export type ConsumptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsumptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsumptionAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ConsumptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsumptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsumptionSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ConsumptionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput> | Prisma.ConsumptionCreateWithoutUserInput[] | Prisma.ConsumptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConsumptionCreateOrConnectWithoutUserInput | Prisma.ConsumptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ConsumptionCreateManyUserInputEnvelope;
    connect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
};
export type ConsumptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput> | Prisma.ConsumptionCreateWithoutUserInput[] | Prisma.ConsumptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConsumptionCreateOrConnectWithoutUserInput | Prisma.ConsumptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ConsumptionCreateManyUserInputEnvelope;
    connect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
};
export type ConsumptionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput> | Prisma.ConsumptionCreateWithoutUserInput[] | Prisma.ConsumptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConsumptionCreateOrConnectWithoutUserInput | Prisma.ConsumptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput | Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ConsumptionCreateManyUserInputEnvelope;
    set?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    disconnect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    delete?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    connect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    update?: Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput | Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput | Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ConsumptionScalarWhereInput | Prisma.ConsumptionScalarWhereInput[];
};
export type ConsumptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput> | Prisma.ConsumptionCreateWithoutUserInput[] | Prisma.ConsumptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConsumptionCreateOrConnectWithoutUserInput | Prisma.ConsumptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput | Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ConsumptionCreateManyUserInputEnvelope;
    set?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    disconnect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    delete?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    connect?: Prisma.ConsumptionWhereUniqueInput | Prisma.ConsumptionWhereUniqueInput[];
    update?: Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput | Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput | Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ConsumptionScalarWhereInput | Prisma.ConsumptionScalarWhereInput[];
};
export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType;
};
export type ConsumptionCreateWithoutUserInput = {
    id?: string;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
};
export type ConsumptionUncheckedCreateWithoutUserInput = {
    id?: string;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
};
export type ConsumptionCreateOrConnectWithoutUserInput = {
    where: Prisma.ConsumptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput>;
};
export type ConsumptionCreateManyUserInputEnvelope = {
    data: Prisma.ConsumptionCreateManyUserInput | Prisma.ConsumptionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ConsumptionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ConsumptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsumptionUpdateWithoutUserInput, Prisma.ConsumptionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ConsumptionCreateWithoutUserInput, Prisma.ConsumptionUncheckedCreateWithoutUserInput>;
};
export type ConsumptionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ConsumptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsumptionUpdateWithoutUserInput, Prisma.ConsumptionUncheckedUpdateWithoutUserInput>;
};
export type ConsumptionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ConsumptionScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsumptionUpdateManyMutationInput, Prisma.ConsumptionUncheckedUpdateManyWithoutUserInput>;
};
export type ConsumptionScalarWhereInput = {
    AND?: Prisma.ConsumptionScalarWhereInput | Prisma.ConsumptionScalarWhereInput[];
    OR?: Prisma.ConsumptionScalarWhereInput[];
    NOT?: Prisma.ConsumptionScalarWhereInput | Prisma.ConsumptionScalarWhereInput[];
    id?: Prisma.StringFilter<"Consumption"> | string;
    userId?: Prisma.IntFilter<"Consumption"> | number;
    mealType?: Prisma.EnumMealTypeFilter<"Consumption"> | $Enums.MealType;
    amount?: Prisma.DecimalFilter<"Consumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Consumption"> | Date | string;
};
export type ConsumptionCreateManyUserInput = {
    id?: string;
    mealType: $Enums.MealType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Date | string;
    createdAt?: Date | string;
};
export type ConsumptionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mealType?: boolean;
    amount?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumption"]>;
export type ConsumptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mealType?: boolean;
    amount?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumption"]>;
export type ConsumptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mealType?: boolean;
    amount?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumption"]>;
export type ConsumptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    mealType?: boolean;
    amount?: boolean;
    date?: boolean;
    createdAt?: boolean;
};
export type ConsumptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "mealType" | "amount" | "date" | "createdAt", ExtArgs["result"]["consumption"]>;
export type ConsumptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ConsumptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ConsumptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ConsumptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consumption";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: number;
        mealType: $Enums.MealType;
        amount: runtime.Decimal;
        date: Date;
        createdAt: Date;
    }, ExtArgs["result"]["consumption"]>;
    composites: {};
};
export type ConsumptionGetPayload<S extends boolean | null | undefined | ConsumptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload, S>;
export type ConsumptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsumptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsumptionCountAggregateInputType | true;
};
export interface ConsumptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consumption'];
        meta: {
            name: 'Consumption';
        };
    };
    findUnique<T extends ConsumptionFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsumptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsumptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsumptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsumptionFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsumptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsumptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsumptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsumptionFindManyArgs>(args?: Prisma.SelectSubset<T, ConsumptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsumptionCreateArgs>(args: Prisma.SelectSubset<T, ConsumptionCreateArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsumptionCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsumptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsumptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsumptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsumptionDeleteArgs>(args: Prisma.SelectSubset<T, ConsumptionDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsumptionUpdateArgs>(args: Prisma.SelectSubset<T, ConsumptionUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsumptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsumptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsumptionUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsumptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsumptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsumptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsumptionUpsertArgs>(args: Prisma.SelectSubset<T, ConsumptionUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsumptionClient<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsumptionCountArgs>(args?: Prisma.Subset<T, ConsumptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsumptionCountAggregateOutputType> : number>;
    aggregate<T extends ConsumptionAggregateArgs>(args: Prisma.Subset<T, ConsumptionAggregateArgs>): Prisma.PrismaPromise<GetConsumptionAggregateType<T>>;
    groupBy<T extends ConsumptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsumptionGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsumptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsumptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsumptionFieldRefs;
}
export interface Prisma__ConsumptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsumptionFieldRefs {
    readonly id: Prisma.FieldRef<"Consumption", 'String'>;
    readonly userId: Prisma.FieldRef<"Consumption", 'Int'>;
    readonly mealType: Prisma.FieldRef<"Consumption", 'MealType'>;
    readonly amount: Prisma.FieldRef<"Consumption", 'Decimal'>;
    readonly date: Prisma.FieldRef<"Consumption", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Consumption", 'DateTime'>;
}
export type ConsumptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where: Prisma.ConsumptionWhereUniqueInput;
};
export type ConsumptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where: Prisma.ConsumptionWhereUniqueInput;
};
export type ConsumptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where?: Prisma.ConsumptionWhereInput;
    orderBy?: Prisma.ConsumptionOrderByWithRelationInput | Prisma.ConsumptionOrderByWithRelationInput[];
    cursor?: Prisma.ConsumptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsumptionScalarFieldEnum | Prisma.ConsumptionScalarFieldEnum[];
};
export type ConsumptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where?: Prisma.ConsumptionWhereInput;
    orderBy?: Prisma.ConsumptionOrderByWithRelationInput | Prisma.ConsumptionOrderByWithRelationInput[];
    cursor?: Prisma.ConsumptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsumptionScalarFieldEnum | Prisma.ConsumptionScalarFieldEnum[];
};
export type ConsumptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where?: Prisma.ConsumptionWhereInput;
    orderBy?: Prisma.ConsumptionOrderByWithRelationInput | Prisma.ConsumptionOrderByWithRelationInput[];
    cursor?: Prisma.ConsumptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsumptionScalarFieldEnum | Prisma.ConsumptionScalarFieldEnum[];
};
export type ConsumptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumptionCreateInput, Prisma.ConsumptionUncheckedCreateInput>;
};
export type ConsumptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsumptionCreateManyInput | Prisma.ConsumptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsumptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    data: Prisma.ConsumptionCreateManyInput | Prisma.ConsumptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConsumptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConsumptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumptionUpdateInput, Prisma.ConsumptionUncheckedUpdateInput>;
    where: Prisma.ConsumptionWhereUniqueInput;
};
export type ConsumptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsumptionUpdateManyMutationInput, Prisma.ConsumptionUncheckedUpdateManyInput>;
    where?: Prisma.ConsumptionWhereInput;
    limit?: number;
};
export type ConsumptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumptionUpdateManyMutationInput, Prisma.ConsumptionUncheckedUpdateManyInput>;
    where?: Prisma.ConsumptionWhereInput;
    limit?: number;
    include?: Prisma.ConsumptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConsumptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where: Prisma.ConsumptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumptionCreateInput, Prisma.ConsumptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsumptionUpdateInput, Prisma.ConsumptionUncheckedUpdateInput>;
};
export type ConsumptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
    where: Prisma.ConsumptionWhereUniqueInput;
};
export type ConsumptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumptionWhereInput;
    limit?: number;
};
export type ConsumptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumptionSelect<ExtArgs> | null;
    omit?: Prisma.ConsumptionOmit<ExtArgs> | null;
    include?: Prisma.ConsumptionInclude<ExtArgs> | null;
};
