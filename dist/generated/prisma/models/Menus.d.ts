import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MenusModel = runtime.Types.Result.DefaultSelection<Prisma.$MenusPayload>;
export type AggregateMenus = {
    _count: MenusCountAggregateOutputType | null;
    _min: MenusMinAggregateOutputType | null;
    _max: MenusMaxAggregateOutputType | null;
};
export type MenusMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenusMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenusCountAggregateOutputType = {
    id: number;
    nombre: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MenusMinAggregateInputType = {
    id?: true;
    nombre?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenusMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenusCountAggregateInputType = {
    id?: true;
    nombre?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MenusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusWhereInput;
    orderBy?: Prisma.MenusOrderByWithRelationInput | Prisma.MenusOrderByWithRelationInput[];
    cursor?: Prisma.MenusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenusCountAggregateInputType;
    _min?: MenusMinAggregateInputType;
    _max?: MenusMaxAggregateInputType;
};
export type GetMenusAggregateType<T extends MenusAggregateArgs> = {
    [P in keyof T & keyof AggregateMenus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenus[P]> : Prisma.GetScalarType<T[P], AggregateMenus[P]>;
};
export type MenusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusWhereInput;
    orderBy?: Prisma.MenusOrderByWithAggregationInput | Prisma.MenusOrderByWithAggregationInput[];
    by: Prisma.MenusScalarFieldEnum[] | Prisma.MenusScalarFieldEnum;
    having?: Prisma.MenusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenusCountAggregateInputType | true;
    _min?: MenusMinAggregateInputType;
    _max?: MenusMaxAggregateInputType;
};
export type MenusGroupByOutputType = {
    id: string;
    nombre: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MenusCountAggregateOutputType | null;
    _min: MenusMinAggregateOutputType | null;
    _max: MenusMaxAggregateOutputType | null;
};
export type GetMenusGroupByPayload<T extends MenusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenusGroupByOutputType[P]>;
}>>;
export type MenusWhereInput = {
    AND?: Prisma.MenusWhereInput | Prisma.MenusWhereInput[];
    OR?: Prisma.MenusWhereInput[];
    NOT?: Prisma.MenusWhereInput | Prisma.MenusWhereInput[];
    id?: Prisma.StringFilter<"Menus"> | string;
    nombre?: Prisma.StringFilter<"Menus"> | string;
    activo?: Prisma.BoolFilter<"Menus"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Menus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Menus"> | Date | string;
    productos?: Prisma.MenusProductosListRelationFilter;
};
export type MenusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    productos?: Prisma.MenusProductosOrderByRelationAggregateInput;
};
export type MenusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MenusWhereInput | Prisma.MenusWhereInput[];
    OR?: Prisma.MenusWhereInput[];
    NOT?: Prisma.MenusWhereInput | Prisma.MenusWhereInput[];
    nombre?: Prisma.StringFilter<"Menus"> | string;
    activo?: Prisma.BoolFilter<"Menus"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Menus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Menus"> | Date | string;
    productos?: Prisma.MenusProductosListRelationFilter;
}, "id">;
export type MenusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MenusCountOrderByAggregateInput;
    _max?: Prisma.MenusMaxOrderByAggregateInput;
    _min?: Prisma.MenusMinOrderByAggregateInput;
};
export type MenusScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenusScalarWhereWithAggregatesInput | Prisma.MenusScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenusScalarWhereWithAggregatesInput | Prisma.MenusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Menus"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"Menus"> | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Menus"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Menus"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Menus"> | Date | string;
};
export type MenusCreateInput = {
    id?: string;
    nombre: string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productos?: Prisma.MenusProductosCreateNestedManyWithoutMenuInput;
};
export type MenusUncheckedCreateInput = {
    id?: string;
    nombre: string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productos?: Prisma.MenusProductosUncheckedCreateNestedManyWithoutMenuInput;
};
export type MenusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productos?: Prisma.MenusProductosUpdateManyWithoutMenuNestedInput;
};
export type MenusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productos?: Prisma.MenusProductosUncheckedUpdateManyWithoutMenuNestedInput;
};
export type MenusCreateManyInput = {
    id?: string;
    nombre: string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenusScalarRelationFilter = {
    is?: Prisma.MenusWhereInput;
    isNot?: Prisma.MenusWhereInput;
};
export type MenusCreateNestedOneWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.MenusCreateWithoutProductosInput, Prisma.MenusUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.MenusCreateOrConnectWithoutProductosInput;
    connect?: Prisma.MenusWhereUniqueInput;
};
export type MenusUpdateOneRequiredWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.MenusCreateWithoutProductosInput, Prisma.MenusUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.MenusCreateOrConnectWithoutProductosInput;
    upsert?: Prisma.MenusUpsertWithoutProductosInput;
    connect?: Prisma.MenusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenusUpdateToOneWithWhereWithoutProductosInput, Prisma.MenusUpdateWithoutProductosInput>, Prisma.MenusUncheckedUpdateWithoutProductosInput>;
};
export type MenusCreateWithoutProductosInput = {
    id?: string;
    nombre: string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenusUncheckedCreateWithoutProductosInput = {
    id?: string;
    nombre: string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenusCreateOrConnectWithoutProductosInput = {
    where: Prisma.MenusWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenusCreateWithoutProductosInput, Prisma.MenusUncheckedCreateWithoutProductosInput>;
};
export type MenusUpsertWithoutProductosInput = {
    update: Prisma.XOR<Prisma.MenusUpdateWithoutProductosInput, Prisma.MenusUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.MenusCreateWithoutProductosInput, Prisma.MenusUncheckedCreateWithoutProductosInput>;
    where?: Prisma.MenusWhereInput;
};
export type MenusUpdateToOneWithWhereWithoutProductosInput = {
    where?: Prisma.MenusWhereInput;
    data: Prisma.XOR<Prisma.MenusUpdateWithoutProductosInput, Prisma.MenusUncheckedUpdateWithoutProductosInput>;
};
export type MenusUpdateWithoutProductosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusUncheckedUpdateWithoutProductosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusCountOutputType = {
    productos: number;
};
export type MenusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productos?: boolean | MenusCountOutputTypeCountProductosArgs;
};
export type MenusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusCountOutputTypeSelect<ExtArgs> | null;
};
export type MenusCountOutputTypeCountProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusProductosWhereInput;
};
export type MenusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    productos?: boolean | Prisma.Menus$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.MenusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menus"]>;
export type MenusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["menus"]>;
export type MenusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["menus"]>;
export type MenusSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MenusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["menus"]>;
export type MenusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productos?: boolean | Prisma.Menus$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.MenusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MenusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MenusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Menus";
    objects: {
        productos: Prisma.$MenusProductosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["menus"]>;
    composites: {};
};
export type MenusGetPayload<S extends boolean | null | undefined | MenusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenusPayload, S>;
export type MenusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenusCountAggregateInputType | true;
};
export interface MenusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Menus'];
        meta: {
            name: 'Menus';
        };
    };
    findUnique<T extends MenusFindUniqueArgs>(args: Prisma.SelectSubset<T, MenusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenusFindFirstArgs>(args?: Prisma.SelectSubset<T, MenusFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenusFindManyArgs>(args?: Prisma.SelectSubset<T, MenusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenusCreateArgs>(args: Prisma.SelectSubset<T, MenusCreateArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenusCreateManyArgs>(args?: Prisma.SelectSubset<T, MenusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenusDeleteArgs>(args: Prisma.SelectSubset<T, MenusDeleteArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenusUpdateArgs>(args: Prisma.SelectSubset<T, MenusUpdateArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenusDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenusUpdateManyArgs>(args: Prisma.SelectSubset<T, MenusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenusUpsertArgs>(args: Prisma.SelectSubset<T, MenusUpsertArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenusCountArgs>(args?: Prisma.Subset<T, MenusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenusCountAggregateOutputType> : number>;
    aggregate<T extends MenusAggregateArgs>(args: Prisma.Subset<T, MenusAggregateArgs>): Prisma.PrismaPromise<GetMenusAggregateType<T>>;
    groupBy<T extends MenusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenusGroupByArgs['orderBy'];
    } : {
        orderBy?: MenusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenusFieldRefs;
}
export interface Prisma__MenusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productos<T extends Prisma.Menus$productosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Menus$productosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenusFieldRefs {
    readonly id: Prisma.FieldRef<"Menus", 'String'>;
    readonly nombre: Prisma.FieldRef<"Menus", 'String'>;
    readonly activo: Prisma.FieldRef<"Menus", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Menus", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Menus", 'DateTime'>;
}
export type MenusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where: Prisma.MenusWhereUniqueInput;
};
export type MenusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where: Prisma.MenusWhereUniqueInput;
};
export type MenusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where?: Prisma.MenusWhereInput;
    orderBy?: Prisma.MenusOrderByWithRelationInput | Prisma.MenusOrderByWithRelationInput[];
    cursor?: Prisma.MenusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenusScalarFieldEnum | Prisma.MenusScalarFieldEnum[];
};
export type MenusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where?: Prisma.MenusWhereInput;
    orderBy?: Prisma.MenusOrderByWithRelationInput | Prisma.MenusOrderByWithRelationInput[];
    cursor?: Prisma.MenusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenusScalarFieldEnum | Prisma.MenusScalarFieldEnum[];
};
export type MenusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where?: Prisma.MenusWhereInput;
    orderBy?: Prisma.MenusOrderByWithRelationInput | Prisma.MenusOrderByWithRelationInput[];
    cursor?: Prisma.MenusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenusScalarFieldEnum | Prisma.MenusScalarFieldEnum[];
};
export type MenusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusCreateInput, Prisma.MenusUncheckedCreateInput>;
};
export type MenusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenusCreateManyInput | Prisma.MenusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    data: Prisma.MenusCreateManyInput | Prisma.MenusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusUpdateInput, Prisma.MenusUncheckedUpdateInput>;
    where: Prisma.MenusWhereUniqueInput;
};
export type MenusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenusUpdateManyMutationInput, Prisma.MenusUncheckedUpdateManyInput>;
    where?: Prisma.MenusWhereInput;
    limit?: number;
};
export type MenusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusUpdateManyMutationInput, Prisma.MenusUncheckedUpdateManyInput>;
    where?: Prisma.MenusWhereInput;
    limit?: number;
};
export type MenusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where: Prisma.MenusWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenusCreateInput, Prisma.MenusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenusUpdateInput, Prisma.MenusUncheckedUpdateInput>;
};
export type MenusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
    where: Prisma.MenusWhereUniqueInput;
};
export type MenusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusWhereInput;
    limit?: number;
};
export type Menus$productosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    where?: Prisma.MenusProductosWhereInput;
    orderBy?: Prisma.MenusProductosOrderByWithRelationInput | Prisma.MenusProductosOrderByWithRelationInput[];
    cursor?: Prisma.MenusProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenusProductosScalarFieldEnum | Prisma.MenusProductosScalarFieldEnum[];
};
export type MenusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusSelect<ExtArgs> | null;
    omit?: Prisma.MenusOmit<ExtArgs> | null;
    include?: Prisma.MenusInclude<ExtArgs> | null;
};
