import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PriceConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PriceConfigPayload>;
export type AggregatePriceConfig = {
    _count: PriceConfigCountAggregateOutputType | null;
    _avg: PriceConfigAvgAggregateOutputType | null;
    _sum: PriceConfigSumAggregateOutputType | null;
    _min: PriceConfigMinAggregateOutputType | null;
    _max: PriceConfigMaxAggregateOutputType | null;
};
export type PriceConfigAvgAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type PriceConfigSumAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type PriceConfigMinAggregateOutputType = {
    id: string | null;
    mealType: $Enums.MealType | null;
    price: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type PriceConfigMaxAggregateOutputType = {
    id: string | null;
    mealType: $Enums.MealType | null;
    price: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type PriceConfigCountAggregateOutputType = {
    id: number;
    mealType: number;
    price: number;
    updatedAt: number;
    _all: number;
};
export type PriceConfigAvgAggregateInputType = {
    price?: true;
};
export type PriceConfigSumAggregateInputType = {
    price?: true;
};
export type PriceConfigMinAggregateInputType = {
    id?: true;
    mealType?: true;
    price?: true;
    updatedAt?: true;
};
export type PriceConfigMaxAggregateInputType = {
    id?: true;
    mealType?: true;
    price?: true;
    updatedAt?: true;
};
export type PriceConfigCountAggregateInputType = {
    id?: true;
    mealType?: true;
    price?: true;
    updatedAt?: true;
    _all?: true;
};
export type PriceConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceConfigWhereInput;
    orderBy?: Prisma.PriceConfigOrderByWithRelationInput | Prisma.PriceConfigOrderByWithRelationInput[];
    cursor?: Prisma.PriceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PriceConfigCountAggregateInputType;
    _avg?: PriceConfigAvgAggregateInputType;
    _sum?: PriceConfigSumAggregateInputType;
    _min?: PriceConfigMinAggregateInputType;
    _max?: PriceConfigMaxAggregateInputType;
};
export type GetPriceConfigAggregateType<T extends PriceConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePriceConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePriceConfig[P]> : Prisma.GetScalarType<T[P], AggregatePriceConfig[P]>;
};
export type PriceConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceConfigWhereInput;
    orderBy?: Prisma.PriceConfigOrderByWithAggregationInput | Prisma.PriceConfigOrderByWithAggregationInput[];
    by: Prisma.PriceConfigScalarFieldEnum[] | Prisma.PriceConfigScalarFieldEnum;
    having?: Prisma.PriceConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceConfigCountAggregateInputType | true;
    _avg?: PriceConfigAvgAggregateInputType;
    _sum?: PriceConfigSumAggregateInputType;
    _min?: PriceConfigMinAggregateInputType;
    _max?: PriceConfigMaxAggregateInputType;
};
export type PriceConfigGroupByOutputType = {
    id: string;
    mealType: $Enums.MealType;
    price: runtime.Decimal;
    updatedAt: Date;
    _count: PriceConfigCountAggregateOutputType | null;
    _avg: PriceConfigAvgAggregateOutputType | null;
    _sum: PriceConfigSumAggregateOutputType | null;
    _min: PriceConfigMinAggregateOutputType | null;
    _max: PriceConfigMaxAggregateOutputType | null;
};
export type GetPriceConfigGroupByPayload<T extends PriceConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PriceConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PriceConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PriceConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PriceConfigGroupByOutputType[P]>;
}>>;
export type PriceConfigWhereInput = {
    AND?: Prisma.PriceConfigWhereInput | Prisma.PriceConfigWhereInput[];
    OR?: Prisma.PriceConfigWhereInput[];
    NOT?: Prisma.PriceConfigWhereInput | Prisma.PriceConfigWhereInput[];
    id?: Prisma.StringFilter<"PriceConfig"> | string;
    mealType?: Prisma.EnumMealTypeFilter<"PriceConfig"> | $Enums.MealType;
    price?: Prisma.DecimalFilter<"PriceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"PriceConfig"> | Date | string;
};
export type PriceConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    mealType?: $Enums.MealType;
    AND?: Prisma.PriceConfigWhereInput | Prisma.PriceConfigWhereInput[];
    OR?: Prisma.PriceConfigWhereInput[];
    NOT?: Prisma.PriceConfigWhereInput | Prisma.PriceConfigWhereInput[];
    price?: Prisma.DecimalFilter<"PriceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"PriceConfig"> | Date | string;
}, "id" | "mealType">;
export type PriceConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PriceConfigCountOrderByAggregateInput;
    _avg?: Prisma.PriceConfigAvgOrderByAggregateInput;
    _max?: Prisma.PriceConfigMaxOrderByAggregateInput;
    _min?: Prisma.PriceConfigMinOrderByAggregateInput;
    _sum?: Prisma.PriceConfigSumOrderByAggregateInput;
};
export type PriceConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PriceConfigScalarWhereWithAggregatesInput | Prisma.PriceConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PriceConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PriceConfigScalarWhereWithAggregatesInput | Prisma.PriceConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PriceConfig"> | string;
    mealType?: Prisma.EnumMealTypeWithAggregatesFilter<"PriceConfig"> | $Enums.MealType;
    price?: Prisma.DecimalWithAggregatesFilter<"PriceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PriceConfig"> | Date | string;
};
export type PriceConfigCreateInput = {
    id?: string;
    mealType: $Enums.MealType;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type PriceConfigUncheckedCreateInput = {
    id?: string;
    mealType: $Enums.MealType;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type PriceConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceConfigCreateManyInput = {
    id?: string;
    mealType: $Enums.MealType;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type PriceConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mealType?: Prisma.EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceConfigAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type PriceConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mealType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceConfigSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type PriceConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealType?: boolean;
    price?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["priceConfig"]>;
export type PriceConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealType?: boolean;
    price?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["priceConfig"]>;
export type PriceConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mealType?: boolean;
    price?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["priceConfig"]>;
export type PriceConfigSelectScalar = {
    id?: boolean;
    mealType?: boolean;
    price?: boolean;
    updatedAt?: boolean;
};
export type PriceConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mealType" | "price" | "updatedAt", ExtArgs["result"]["priceConfig"]>;
export type $PriceConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PriceConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        mealType: $Enums.MealType;
        price: runtime.Decimal;
        updatedAt: Date;
    }, ExtArgs["result"]["priceConfig"]>;
    composites: {};
};
export type PriceConfigGetPayload<S extends boolean | null | undefined | PriceConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload, S>;
export type PriceConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PriceConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriceConfigCountAggregateInputType | true;
};
export interface PriceConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PriceConfig'];
        meta: {
            name: 'PriceConfig';
        };
    };
    findUnique<T extends PriceConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PriceConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PriceConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PriceConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PriceConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PriceConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PriceConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PriceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PriceConfigCreateArgs>(args: Prisma.SelectSubset<T, PriceConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PriceConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PriceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PriceConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PriceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PriceConfigDeleteArgs>(args: Prisma.SelectSubset<T, PriceConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PriceConfigUpdateArgs>(args: Prisma.SelectSubset<T, PriceConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PriceConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PriceConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PriceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PriceConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PriceConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PriceConfigUpsertArgs>(args: Prisma.SelectSubset<T, PriceConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PriceConfigClient<runtime.Types.Result.GetResult<Prisma.$PriceConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PriceConfigCountArgs>(args?: Prisma.Subset<T, PriceConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PriceConfigCountAggregateOutputType> : number>;
    aggregate<T extends PriceConfigAggregateArgs>(args: Prisma.Subset<T, PriceConfigAggregateArgs>): Prisma.PrismaPromise<GetPriceConfigAggregateType<T>>;
    groupBy<T extends PriceConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PriceConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PriceConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PriceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PriceConfigFieldRefs;
}
export interface Prisma__PriceConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PriceConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PriceConfig", 'String'>;
    readonly mealType: Prisma.FieldRef<"PriceConfig", 'MealType'>;
    readonly price: Prisma.FieldRef<"PriceConfig", 'Decimal'>;
    readonly updatedAt: Prisma.FieldRef<"PriceConfig", 'DateTime'>;
}
export type PriceConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where: Prisma.PriceConfigWhereUniqueInput;
};
export type PriceConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where: Prisma.PriceConfigWhereUniqueInput;
};
export type PriceConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where?: Prisma.PriceConfigWhereInput;
    orderBy?: Prisma.PriceConfigOrderByWithRelationInput | Prisma.PriceConfigOrderByWithRelationInput[];
    cursor?: Prisma.PriceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceConfigScalarFieldEnum | Prisma.PriceConfigScalarFieldEnum[];
};
export type PriceConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where?: Prisma.PriceConfigWhereInput;
    orderBy?: Prisma.PriceConfigOrderByWithRelationInput | Prisma.PriceConfigOrderByWithRelationInput[];
    cursor?: Prisma.PriceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceConfigScalarFieldEnum | Prisma.PriceConfigScalarFieldEnum[];
};
export type PriceConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where?: Prisma.PriceConfigWhereInput;
    orderBy?: Prisma.PriceConfigOrderByWithRelationInput | Prisma.PriceConfigOrderByWithRelationInput[];
    cursor?: Prisma.PriceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceConfigScalarFieldEnum | Prisma.PriceConfigScalarFieldEnum[];
};
export type PriceConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceConfigCreateInput, Prisma.PriceConfigUncheckedCreateInput>;
};
export type PriceConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PriceConfigCreateManyInput | Prisma.PriceConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PriceConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    data: Prisma.PriceConfigCreateManyInput | Prisma.PriceConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PriceConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceConfigUpdateInput, Prisma.PriceConfigUncheckedUpdateInput>;
    where: Prisma.PriceConfigWhereUniqueInput;
};
export type PriceConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PriceConfigUpdateManyMutationInput, Prisma.PriceConfigUncheckedUpdateManyInput>;
    where?: Prisma.PriceConfigWhereInput;
    limit?: number;
};
export type PriceConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceConfigUpdateManyMutationInput, Prisma.PriceConfigUncheckedUpdateManyInput>;
    where?: Prisma.PriceConfigWhereInput;
    limit?: number;
};
export type PriceConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where: Prisma.PriceConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceConfigCreateInput, Prisma.PriceConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PriceConfigUpdateInput, Prisma.PriceConfigUncheckedUpdateInput>;
};
export type PriceConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
    where: Prisma.PriceConfigWhereUniqueInput;
};
export type PriceConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceConfigWhereInput;
    limit?: number;
};
export type PriceConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceConfigSelect<ExtArgs> | null;
    omit?: Prisma.PriceConfigOmit<ExtArgs> | null;
};
