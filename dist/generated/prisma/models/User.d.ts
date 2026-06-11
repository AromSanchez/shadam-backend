import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    balance: runtime.Decimal | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    balance: runtime.Decimal | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
    pensioner_type: $Enums.PensionerType | null;
    qr_token: string | null;
    balance: runtime.Decimal | null;
    first_login: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
    pensioner_type: $Enums.PensionerType | null;
    qr_token: string | null;
    balance: runtime.Decimal | null;
    first_login: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    pensioner_type: number;
    qr_token: number;
    balance: number;
    first_login: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    balance?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    balance?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    pensioner_type?: true;
    qr_token?: true;
    balance?: true;
    first_login?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    pensioner_type?: true;
    qr_token?: true;
    balance?: true;
    first_login?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    pensioner_type?: true;
    qr_token?: true;
    balance?: true;
    first_login?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type: $Enums.PensionerType | null;
    qr_token: string | null;
    balance: runtime.Decimal;
    first_login: boolean;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.StringFilter<"User"> | string;
    pensioner_type?: Prisma.EnumPensionerTypeNullableFilter<"User"> | $Enums.PensionerType | null;
    qr_token?: Prisma.StringNullableFilter<"User"> | string | null;
    balance?: Prisma.DecimalFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFilter<"User"> | boolean;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
    consumptions?: Prisma.ConsumptionListRelationFilter;
    movements?: Prisma.BalanceMovementListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    pensioner_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    qr_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    first_login?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    sales?: Prisma.SaleOrderByRelationAggregateInput;
    consumptions?: Prisma.ConsumptionOrderByRelationAggregateInput;
    movements?: Prisma.BalanceMovementOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    qr_token?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.StringFilter<"User"> | string;
    pensioner_type?: Prisma.EnumPensionerTypeNullableFilter<"User"> | $Enums.PensionerType | null;
    balance?: Prisma.DecimalFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFilter<"User"> | boolean;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
    consumptions?: Prisma.ConsumptionListRelationFilter;
    movements?: Prisma.BalanceMovementListRelationFilter;
}, "id" | "email" | "qr_token">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    pensioner_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    qr_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    first_login?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.StringWithAggregatesFilter<"User"> | string;
    pensioner_type?: Prisma.EnumPensionerTypeNullableWithAggregatesFilter<"User"> | $Enums.PensionerType | null;
    qr_token?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    balance?: Prisma.DecimalWithAggregatesFilter<"User"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionUncheckedCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUncheckedUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    pensioner_type?: Prisma.SortOrder;
    qr_token?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    first_login?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    pensioner_type?: Prisma.SortOrder;
    qr_token?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    first_login?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    pensioner_type?: Prisma.SortOrder;
    qr_token?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    first_login?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableEnumPensionerTypeFieldUpdateOperationsInput = {
    set?: $Enums.PensionerType | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.UserUpsertWithoutSalesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSalesInput, Prisma.UserUpdateWithoutSalesInput>, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserCreateNestedOneWithoutConsumptionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConsumptionsInput, Prisma.UserUncheckedCreateWithoutConsumptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConsumptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConsumptionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConsumptionsInput, Prisma.UserUncheckedCreateWithoutConsumptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConsumptionsInput;
    upsert?: Prisma.UserUpsertWithoutConsumptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConsumptionsInput, Prisma.UserUpdateWithoutConsumptionsInput>, Prisma.UserUncheckedUpdateWithoutConsumptionsInput>;
};
export type UserCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMovementsInput, Prisma.UserUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMovementsInput, Prisma.UserUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.UserUpsertWithoutMovementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMovementsInput, Prisma.UserUpdateWithoutMovementsInput>, Prisma.UserUncheckedUpdateWithoutMovementsInput>;
};
export type UserCreateWithoutOrdersInput = {
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: Prisma.SaleCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionUncheckedCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUncheckedUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSalesInput = {
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSalesInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionUncheckedCreateNestedManyWithoutUserInput;
    movements?: Prisma.BalanceMovementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSalesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
};
export type UserUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserUpdateWithoutSalesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUncheckedUpdateManyWithoutUserNestedInput;
    movements?: Prisma.BalanceMovementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutConsumptionsInput = {
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleCreateNestedManyWithoutPensionerInput;
    movements?: Prisma.BalanceMovementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutConsumptionsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutPensionerInput;
    movements?: Prisma.BalanceMovementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutConsumptionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConsumptionsInput, Prisma.UserUncheckedCreateWithoutConsumptionsInput>;
};
export type UserUpsertWithoutConsumptionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConsumptionsInput, Prisma.UserUncheckedUpdateWithoutConsumptionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConsumptionsInput, Prisma.UserUncheckedCreateWithoutConsumptionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConsumptionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConsumptionsInput, Prisma.UserUncheckedUpdateWithoutConsumptionsInput>;
};
export type UserUpdateWithoutConsumptionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutPensionerNestedInput;
    movements?: Prisma.BalanceMovementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutConsumptionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutPensionerNestedInput;
    movements?: Prisma.BalanceMovementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMovementsInput = {
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMovementsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    pensioner_type?: $Enums.PensionerType | null;
    qr_token?: string | null;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPensionerInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutPensionerInput;
    consumptions?: Prisma.ConsumptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMovementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMovementsInput, Prisma.UserUncheckedCreateWithoutMovementsInput>;
};
export type UserUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMovementsInput, Prisma.UserUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMovementsInput, Prisma.UserUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMovementsInput, Prisma.UserUncheckedUpdateWithoutMovementsInput>;
};
export type UserUpdateWithoutMovementsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    pensioner_type?: Prisma.NullableEnumPensionerTypeFieldUpdateOperationsInput | $Enums.PensionerType | null;
    qr_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    first_login?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPensionerNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutPensionerNestedInput;
    consumptions?: Prisma.ConsumptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    orders: number;
    sales: number;
    consumptions: number;
    movements: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    sales?: boolean | UserCountOutputTypeCountSalesArgs;
    consumptions?: boolean | UserCountOutputTypeCountConsumptionsArgs;
    movements?: boolean | UserCountOutputTypeCountMovementsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
};
export type UserCountOutputTypeCountConsumptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumptionWhereInput;
};
export type UserCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BalanceMovementWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    pensioner_type?: boolean;
    qr_token?: boolean;
    balance?: boolean;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    consumptions?: boolean | Prisma.User$consumptionsArgs<ExtArgs>;
    movements?: boolean | Prisma.User$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    pensioner_type?: boolean;
    qr_token?: boolean;
    balance?: boolean;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    pensioner_type?: boolean;
    qr_token?: boolean;
    balance?: boolean;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    pensioner_type?: boolean;
    qr_token?: boolean;
    balance?: boolean;
    first_login?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "pensioner_type" | "qr_token" | "balance" | "first_login" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    consumptions?: boolean | Prisma.User$consumptionsArgs<ExtArgs>;
    movements?: boolean | Prisma.User$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        sales: Prisma.$SalePayload<ExtArgs>[];
        consumptions: Prisma.$ConsumptionPayload<ExtArgs>[];
        movements: Prisma.$BalanceMovementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: string;
        pensioner_type: $Enums.PensionerType | null;
        qr_token: string | null;
        balance: runtime.Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sales<T extends Prisma.User$salesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consumptions<T extends Prisma.User$consumptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$consumptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movements<T extends Prisma.User$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BalanceMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'String'>;
    readonly pensioner_type: Prisma.FieldRef<"User", 'PensionerType'>;
    readonly qr_token: Prisma.FieldRef<"User", 'String'>;
    readonly balance: Prisma.FieldRef<"User", 'Decimal'>;
    readonly first_login: Prisma.FieldRef<"User", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"User", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$salesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$consumptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
