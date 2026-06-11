import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type BalanceMovementModel = runtime.Types.Result.DefaultSelection<Prisma.$BalanceMovementPayload>;
export type AggregateBalanceMovement = {
    _count: BalanceMovementCountAggregateOutputType | null;
    _avg: BalanceMovementAvgAggregateOutputType | null;
    _sum: BalanceMovementSumAggregateOutputType | null;
    _min: BalanceMovementMinAggregateOutputType | null;
    _max: BalanceMovementMaxAggregateOutputType | null;
};
export type BalanceMovementAvgAggregateOutputType = {
    userId: number | null;
    amount: runtime.Decimal | null;
    balance: runtime.Decimal | null;
};
export type BalanceMovementSumAggregateOutputType = {
    userId: number | null;
    amount: runtime.Decimal | null;
    balance: runtime.Decimal | null;
};
export type BalanceMovementMinAggregateOutputType = {
    id: string | null;
    userId: number | null;
    type: $Enums.MovementType | null;
    amount: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    description: string | null;
    createdAt: Date | null;
};
export type BalanceMovementMaxAggregateOutputType = {
    id: string | null;
    userId: number | null;
    type: $Enums.MovementType | null;
    amount: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    description: string | null;
    createdAt: Date | null;
};
export type BalanceMovementCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    amount: number;
    balance: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type BalanceMovementAvgAggregateInputType = {
    userId?: true;
    amount?: true;
    balance?: true;
};
export type BalanceMovementSumAggregateInputType = {
    userId?: true;
    amount?: true;
    balance?: true;
};
export type BalanceMovementMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    balance?: true;
    description?: true;
    createdAt?: true;
};
export type BalanceMovementMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    balance?: true;
    description?: true;
    createdAt?: true;
};
export type BalanceMovementCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    balance?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type BalanceMovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BalanceMovementWhereInput;
    orderBy?: Prisma.BalanceMovementOrderByWithRelationInput | Prisma.BalanceMovementOrderByWithRelationInput[];
    cursor?: Prisma.BalanceMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BalanceMovementCountAggregateInputType;
    _avg?: BalanceMovementAvgAggregateInputType;
    _sum?: BalanceMovementSumAggregateInputType;
    _min?: BalanceMovementMinAggregateInputType;
    _max?: BalanceMovementMaxAggregateInputType;
};
export type GetBalanceMovementAggregateType<T extends BalanceMovementAggregateArgs> = {
    [P in keyof T & keyof AggregateBalanceMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBalanceMovement[P]> : Prisma.GetScalarType<T[P], AggregateBalanceMovement[P]>;
};
export type BalanceMovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BalanceMovementWhereInput;
    orderBy?: Prisma.BalanceMovementOrderByWithAggregationInput | Prisma.BalanceMovementOrderByWithAggregationInput[];
    by: Prisma.BalanceMovementScalarFieldEnum[] | Prisma.BalanceMovementScalarFieldEnum;
    having?: Prisma.BalanceMovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BalanceMovementCountAggregateInputType | true;
    _avg?: BalanceMovementAvgAggregateInputType;
    _sum?: BalanceMovementSumAggregateInputType;
    _min?: BalanceMovementMinAggregateInputType;
    _max?: BalanceMovementMaxAggregateInputType;
};
export type BalanceMovementGroupByOutputType = {
    id: string;
    userId: number;
    type: $Enums.MovementType;
    amount: runtime.Decimal;
    balance: runtime.Decimal;
    description: string | null;
    createdAt: Date;
    _count: BalanceMovementCountAggregateOutputType | null;
    _avg: BalanceMovementAvgAggregateOutputType | null;
    _sum: BalanceMovementSumAggregateOutputType | null;
    _min: BalanceMovementMinAggregateOutputType | null;
    _max: BalanceMovementMaxAggregateOutputType | null;
};
export type GetBalanceMovementGroupByPayload<T extends BalanceMovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BalanceMovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BalanceMovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BalanceMovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BalanceMovementGroupByOutputType[P]>;
}>>;
export type BalanceMovementWhereInput = {
    AND?: Prisma.BalanceMovementWhereInput | Prisma.BalanceMovementWhereInput[];
    OR?: Prisma.BalanceMovementWhereInput[];
    NOT?: Prisma.BalanceMovementWhereInput | Prisma.BalanceMovementWhereInput[];
    id?: Prisma.StringFilter<"BalanceMovement"> | string;
    userId?: Prisma.IntFilter<"BalanceMovement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"BalanceMovement"> | $Enums.MovementType;
    amount?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"BalanceMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BalanceMovement"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BalanceMovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BalanceMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BalanceMovementWhereInput | Prisma.BalanceMovementWhereInput[];
    OR?: Prisma.BalanceMovementWhereInput[];
    NOT?: Prisma.BalanceMovementWhereInput | Prisma.BalanceMovementWhereInput[];
    userId?: Prisma.IntFilter<"BalanceMovement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"BalanceMovement"> | $Enums.MovementType;
    amount?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"BalanceMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BalanceMovement"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type BalanceMovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BalanceMovementCountOrderByAggregateInput;
    _avg?: Prisma.BalanceMovementAvgOrderByAggregateInput;
    _max?: Prisma.BalanceMovementMaxOrderByAggregateInput;
    _min?: Prisma.BalanceMovementMinOrderByAggregateInput;
    _sum?: Prisma.BalanceMovementSumOrderByAggregateInput;
};
export type BalanceMovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.BalanceMovementScalarWhereWithAggregatesInput | Prisma.BalanceMovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.BalanceMovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BalanceMovementScalarWhereWithAggregatesInput | Prisma.BalanceMovementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BalanceMovement"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"BalanceMovement"> | number;
    type?: Prisma.EnumMovementTypeWithAggregatesFilter<"BalanceMovement"> | $Enums.MovementType;
    amount?: Prisma.DecimalWithAggregatesFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalWithAggregatesFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BalanceMovement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BalanceMovement"> | Date | string;
};
export type BalanceMovementCreateInput = {
    id?: string;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMovementsInput;
};
export type BalanceMovementUncheckedCreateInput = {
    id?: string;
    userId: number;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
};
export type BalanceMovementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMovementsNestedInput;
};
export type BalanceMovementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementCreateManyInput = {
    id?: string;
    userId: number;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
};
export type BalanceMovementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementListRelationFilter = {
    every?: Prisma.BalanceMovementWhereInput;
    some?: Prisma.BalanceMovementWhereInput;
    none?: Prisma.BalanceMovementWhereInput;
};
export type BalanceMovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BalanceMovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BalanceMovementAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type BalanceMovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BalanceMovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BalanceMovementSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type BalanceMovementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput> | Prisma.BalanceMovementCreateWithoutUserInput[] | Prisma.BalanceMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BalanceMovementCreateOrConnectWithoutUserInput | Prisma.BalanceMovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BalanceMovementCreateManyUserInputEnvelope;
    connect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
};
export type BalanceMovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput> | Prisma.BalanceMovementCreateWithoutUserInput[] | Prisma.BalanceMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BalanceMovementCreateOrConnectWithoutUserInput | Prisma.BalanceMovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BalanceMovementCreateManyUserInputEnvelope;
    connect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
};
export type BalanceMovementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput> | Prisma.BalanceMovementCreateWithoutUserInput[] | Prisma.BalanceMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BalanceMovementCreateOrConnectWithoutUserInput | Prisma.BalanceMovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BalanceMovementUpsertWithWhereUniqueWithoutUserInput | Prisma.BalanceMovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BalanceMovementCreateManyUserInputEnvelope;
    set?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    disconnect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    delete?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    connect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    update?: Prisma.BalanceMovementUpdateWithWhereUniqueWithoutUserInput | Prisma.BalanceMovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BalanceMovementUpdateManyWithWhereWithoutUserInput | Prisma.BalanceMovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BalanceMovementScalarWhereInput | Prisma.BalanceMovementScalarWhereInput[];
};
export type BalanceMovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput> | Prisma.BalanceMovementCreateWithoutUserInput[] | Prisma.BalanceMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BalanceMovementCreateOrConnectWithoutUserInput | Prisma.BalanceMovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BalanceMovementUpsertWithWhereUniqueWithoutUserInput | Prisma.BalanceMovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BalanceMovementCreateManyUserInputEnvelope;
    set?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    disconnect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    delete?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    connect?: Prisma.BalanceMovementWhereUniqueInput | Prisma.BalanceMovementWhereUniqueInput[];
    update?: Prisma.BalanceMovementUpdateWithWhereUniqueWithoutUserInput | Prisma.BalanceMovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BalanceMovementUpdateManyWithWhereWithoutUserInput | Prisma.BalanceMovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BalanceMovementScalarWhereInput | Prisma.BalanceMovementScalarWhereInput[];
};
export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType;
};
export type BalanceMovementCreateWithoutUserInput = {
    id?: string;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
};
export type BalanceMovementUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
};
export type BalanceMovementCreateOrConnectWithoutUserInput = {
    where: Prisma.BalanceMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput>;
};
export type BalanceMovementCreateManyUserInputEnvelope = {
    data: Prisma.BalanceMovementCreateManyUserInput | Prisma.BalanceMovementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BalanceMovementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BalanceMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.BalanceMovementUpdateWithoutUserInput, Prisma.BalanceMovementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BalanceMovementCreateWithoutUserInput, Prisma.BalanceMovementUncheckedCreateWithoutUserInput>;
};
export type BalanceMovementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BalanceMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.BalanceMovementUpdateWithoutUserInput, Prisma.BalanceMovementUncheckedUpdateWithoutUserInput>;
};
export type BalanceMovementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BalanceMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.BalanceMovementUpdateManyMutationInput, Prisma.BalanceMovementUncheckedUpdateManyWithoutUserInput>;
};
export type BalanceMovementScalarWhereInput = {
    AND?: Prisma.BalanceMovementScalarWhereInput | Prisma.BalanceMovementScalarWhereInput[];
    OR?: Prisma.BalanceMovementScalarWhereInput[];
    NOT?: Prisma.BalanceMovementScalarWhereInput | Prisma.BalanceMovementScalarWhereInput[];
    id?: Prisma.StringFilter<"BalanceMovement"> | string;
    userId?: Prisma.IntFilter<"BalanceMovement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"BalanceMovement"> | $Enums.MovementType;
    amount?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"BalanceMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"BalanceMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BalanceMovement"> | Date | string;
};
export type BalanceMovementCreateManyUserInput = {
    id?: string;
    type: $Enums.MovementType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    createdAt?: Date | string;
};
export type BalanceMovementUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BalanceMovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    balance?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["balanceMovement"]>;
export type BalanceMovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    balance?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["balanceMovement"]>;
export type BalanceMovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    balance?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["balanceMovement"]>;
export type BalanceMovementSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    balance?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type BalanceMovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "balance" | "description" | "createdAt", ExtArgs["result"]["balanceMovement"]>;
export type BalanceMovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BalanceMovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BalanceMovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BalanceMovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BalanceMovement";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: number;
        type: $Enums.MovementType;
        amount: runtime.Decimal;
        balance: runtime.Decimal;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["balanceMovement"]>;
    composites: {};
};
export type BalanceMovementGetPayload<S extends boolean | null | undefined | BalanceMovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload, S>;
export type BalanceMovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BalanceMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BalanceMovementCountAggregateInputType | true;
};
export interface BalanceMovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BalanceMovement'];
        meta: {
            name: 'BalanceMovement';
        };
    };
    findUnique<T extends BalanceMovementFindUniqueArgs>(args: Prisma.SelectSubset<T, BalanceMovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BalanceMovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BalanceMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BalanceMovementFindFirstArgs>(args?: Prisma.SelectSubset<T, BalanceMovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BalanceMovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BalanceMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BalanceMovementFindManyArgs>(args?: Prisma.SelectSubset<T, BalanceMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BalanceMovementCreateArgs>(args: Prisma.SelectSubset<T, BalanceMovementCreateArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BalanceMovementCreateManyArgs>(args?: Prisma.SelectSubset<T, BalanceMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BalanceMovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BalanceMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BalanceMovementDeleteArgs>(args: Prisma.SelectSubset<T, BalanceMovementDeleteArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BalanceMovementUpdateArgs>(args: Prisma.SelectSubset<T, BalanceMovementUpdateArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BalanceMovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, BalanceMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BalanceMovementUpdateManyArgs>(args: Prisma.SelectSubset<T, BalanceMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BalanceMovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BalanceMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BalanceMovementUpsertArgs>(args: Prisma.SelectSubset<T, BalanceMovementUpsertArgs<ExtArgs>>): Prisma.Prisma__BalanceMovementClient<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BalanceMovementCountArgs>(args?: Prisma.Subset<T, BalanceMovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BalanceMovementCountAggregateOutputType> : number>;
    aggregate<T extends BalanceMovementAggregateArgs>(args: Prisma.Subset<T, BalanceMovementAggregateArgs>): Prisma.PrismaPromise<GetBalanceMovementAggregateType<T>>;
    groupBy<T extends BalanceMovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BalanceMovementGroupByArgs['orderBy'];
    } : {
        orderBy?: BalanceMovementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BalanceMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BalanceMovementFieldRefs;
}
export interface Prisma__BalanceMovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BalanceMovementFieldRefs {
    readonly id: Prisma.FieldRef<"BalanceMovement", 'String'>;
    readonly userId: Prisma.FieldRef<"BalanceMovement", 'Int'>;
    readonly type: Prisma.FieldRef<"BalanceMovement", 'MovementType'>;
    readonly amount: Prisma.FieldRef<"BalanceMovement", 'Decimal'>;
    readonly balance: Prisma.FieldRef<"BalanceMovement", 'Decimal'>;
    readonly description: Prisma.FieldRef<"BalanceMovement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BalanceMovement", 'DateTime'>;
}
export type BalanceMovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where: Prisma.BalanceMovementWhereUniqueInput;
};
export type BalanceMovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where: Prisma.BalanceMovementWhereUniqueInput;
};
export type BalanceMovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where?: Prisma.BalanceMovementWhereInput;
    orderBy?: Prisma.BalanceMovementOrderByWithRelationInput | Prisma.BalanceMovementOrderByWithRelationInput[];
    cursor?: Prisma.BalanceMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BalanceMovementScalarFieldEnum | Prisma.BalanceMovementScalarFieldEnum[];
};
export type BalanceMovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where?: Prisma.BalanceMovementWhereInput;
    orderBy?: Prisma.BalanceMovementOrderByWithRelationInput | Prisma.BalanceMovementOrderByWithRelationInput[];
    cursor?: Prisma.BalanceMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BalanceMovementScalarFieldEnum | Prisma.BalanceMovementScalarFieldEnum[];
};
export type BalanceMovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where?: Prisma.BalanceMovementWhereInput;
    orderBy?: Prisma.BalanceMovementOrderByWithRelationInput | Prisma.BalanceMovementOrderByWithRelationInput[];
    cursor?: Prisma.BalanceMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BalanceMovementScalarFieldEnum | Prisma.BalanceMovementScalarFieldEnum[];
};
export type BalanceMovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BalanceMovementCreateInput, Prisma.BalanceMovementUncheckedCreateInput>;
};
export type BalanceMovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BalanceMovementCreateManyInput | Prisma.BalanceMovementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BalanceMovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    data: Prisma.BalanceMovementCreateManyInput | Prisma.BalanceMovementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BalanceMovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BalanceMovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BalanceMovementUpdateInput, Prisma.BalanceMovementUncheckedUpdateInput>;
    where: Prisma.BalanceMovementWhereUniqueInput;
};
export type BalanceMovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BalanceMovementUpdateManyMutationInput, Prisma.BalanceMovementUncheckedUpdateManyInput>;
    where?: Prisma.BalanceMovementWhereInput;
    limit?: number;
};
export type BalanceMovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BalanceMovementUpdateManyMutationInput, Prisma.BalanceMovementUncheckedUpdateManyInput>;
    where?: Prisma.BalanceMovementWhereInput;
    limit?: number;
    include?: Prisma.BalanceMovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BalanceMovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where: Prisma.BalanceMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.BalanceMovementCreateInput, Prisma.BalanceMovementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BalanceMovementUpdateInput, Prisma.BalanceMovementUncheckedUpdateInput>;
};
export type BalanceMovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
    where: Prisma.BalanceMovementWhereUniqueInput;
};
export type BalanceMovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BalanceMovementWhereInput;
    limit?: number;
};
export type BalanceMovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BalanceMovementSelect<ExtArgs> | null;
    omit?: Prisma.BalanceMovementOmit<ExtArgs> | null;
    include?: Prisma.BalanceMovementInclude<ExtArgs> | null;
};
