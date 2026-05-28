import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MenusProductosModel = runtime.Types.Result.DefaultSelection<Prisma.$MenusProductosPayload>;
export type AggregateMenusProductos = {
    _count: MenusProductosCountAggregateOutputType | null;
    _avg: MenusProductosAvgAggregateOutputType | null;
    _sum: MenusProductosSumAggregateOutputType | null;
    _min: MenusProductosMinAggregateOutputType | null;
    _max: MenusProductosMaxAggregateOutputType | null;
};
export type MenusProductosAvgAggregateOutputType = {
    productoId: number | null;
};
export type MenusProductosSumAggregateOutputType = {
    productoId: number | null;
};
export type MenusProductosMinAggregateOutputType = {
    id: string | null;
    menuId: string | null;
    productoId: number | null;
    visible: boolean | null;
    createdAt: Date | null;
};
export type MenusProductosMaxAggregateOutputType = {
    id: string | null;
    menuId: string | null;
    productoId: number | null;
    visible: boolean | null;
    createdAt: Date | null;
};
export type MenusProductosCountAggregateOutputType = {
    id: number;
    menuId: number;
    productoId: number;
    visible: number;
    createdAt: number;
    _all: number;
};
export type MenusProductosAvgAggregateInputType = {
    productoId?: true;
};
export type MenusProductosSumAggregateInputType = {
    productoId?: true;
};
export type MenusProductosMinAggregateInputType = {
    id?: true;
    menuId?: true;
    productoId?: true;
    visible?: true;
    createdAt?: true;
};
export type MenusProductosMaxAggregateInputType = {
    id?: true;
    menuId?: true;
    productoId?: true;
    visible?: true;
    createdAt?: true;
};
export type MenusProductosCountAggregateInputType = {
    id?: true;
    menuId?: true;
    productoId?: true;
    visible?: true;
    createdAt?: true;
    _all?: true;
};
export type MenusProductosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusProductosWhereInput;
    orderBy?: Prisma.MenusProductosOrderByWithRelationInput | Prisma.MenusProductosOrderByWithRelationInput[];
    cursor?: Prisma.MenusProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenusProductosCountAggregateInputType;
    _avg?: MenusProductosAvgAggregateInputType;
    _sum?: MenusProductosSumAggregateInputType;
    _min?: MenusProductosMinAggregateInputType;
    _max?: MenusProductosMaxAggregateInputType;
};
export type GetMenusProductosAggregateType<T extends MenusProductosAggregateArgs> = {
    [P in keyof T & keyof AggregateMenusProductos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenusProductos[P]> : Prisma.GetScalarType<T[P], AggregateMenusProductos[P]>;
};
export type MenusProductosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusProductosWhereInput;
    orderBy?: Prisma.MenusProductosOrderByWithAggregationInput | Prisma.MenusProductosOrderByWithAggregationInput[];
    by: Prisma.MenusProductosScalarFieldEnum[] | Prisma.MenusProductosScalarFieldEnum;
    having?: Prisma.MenusProductosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenusProductosCountAggregateInputType | true;
    _avg?: MenusProductosAvgAggregateInputType;
    _sum?: MenusProductosSumAggregateInputType;
    _min?: MenusProductosMinAggregateInputType;
    _max?: MenusProductosMaxAggregateInputType;
};
export type MenusProductosGroupByOutputType = {
    id: string;
    menuId: string;
    productoId: number;
    visible: boolean;
    createdAt: Date;
    _count: MenusProductosCountAggregateOutputType | null;
    _avg: MenusProductosAvgAggregateOutputType | null;
    _sum: MenusProductosSumAggregateOutputType | null;
    _min: MenusProductosMinAggregateOutputType | null;
    _max: MenusProductosMaxAggregateOutputType | null;
};
export type GetMenusProductosGroupByPayload<T extends MenusProductosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenusProductosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenusProductosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenusProductosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenusProductosGroupByOutputType[P]>;
}>>;
export type MenusProductosWhereInput = {
    AND?: Prisma.MenusProductosWhereInput | Prisma.MenusProductosWhereInput[];
    OR?: Prisma.MenusProductosWhereInput[];
    NOT?: Prisma.MenusProductosWhereInput | Prisma.MenusProductosWhereInput[];
    id?: Prisma.StringFilter<"MenusProductos"> | string;
    menuId?: Prisma.StringFilter<"MenusProductos"> | string;
    productoId?: Prisma.IntFilter<"MenusProductos"> | number;
    visible?: Prisma.BoolFilter<"MenusProductos"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenusProductos"> | Date | string;
    menu?: Prisma.XOR<Prisma.MenusScalarRelationFilter, Prisma.MenusWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
};
export type MenusProductosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    visible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    menu?: Prisma.MenusOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
};
export type MenusProductosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    menuId_productoId?: Prisma.MenusProductosMenuIdProductoIdCompoundUniqueInput;
    AND?: Prisma.MenusProductosWhereInput | Prisma.MenusProductosWhereInput[];
    OR?: Prisma.MenusProductosWhereInput[];
    NOT?: Prisma.MenusProductosWhereInput | Prisma.MenusProductosWhereInput[];
    menuId?: Prisma.StringFilter<"MenusProductos"> | string;
    productoId?: Prisma.IntFilter<"MenusProductos"> | number;
    visible?: Prisma.BoolFilter<"MenusProductos"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenusProductos"> | Date | string;
    menu?: Prisma.XOR<Prisma.MenusScalarRelationFilter, Prisma.MenusWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
}, "id" | "menuId_productoId">;
export type MenusProductosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    visible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MenusProductosCountOrderByAggregateInput;
    _avg?: Prisma.MenusProductosAvgOrderByAggregateInput;
    _max?: Prisma.MenusProductosMaxOrderByAggregateInput;
    _min?: Prisma.MenusProductosMinOrderByAggregateInput;
    _sum?: Prisma.MenusProductosSumOrderByAggregateInput;
};
export type MenusProductosScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenusProductosScalarWhereWithAggregatesInput | Prisma.MenusProductosScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenusProductosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenusProductosScalarWhereWithAggregatesInput | Prisma.MenusProductosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MenusProductos"> | string;
    menuId?: Prisma.StringWithAggregatesFilter<"MenusProductos"> | string;
    productoId?: Prisma.IntWithAggregatesFilter<"MenusProductos"> | number;
    visible?: Prisma.BoolWithAggregatesFilter<"MenusProductos"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MenusProductos"> | Date | string;
};
export type MenusProductosCreateInput = {
    id?: string;
    visible?: boolean;
    createdAt?: Date | string;
    menu: Prisma.MenusCreateNestedOneWithoutProductosInput;
    producto: Prisma.ProductoCreateNestedOneWithoutMenusInput;
};
export type MenusProductosUncheckedCreateInput = {
    id?: string;
    menuId: string;
    productoId: number;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu?: Prisma.MenusUpdateOneRequiredWithoutProductosNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutMenusNestedInput;
};
export type MenusProductosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosCreateManyInput = {
    id?: string;
    menuId: string;
    productoId: number;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosListRelationFilter = {
    every?: Prisma.MenusProductosWhereInput;
    some?: Prisma.MenusProductosWhereInput;
    none?: Prisma.MenusProductosWhereInput;
};
export type MenusProductosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MenusProductosMenuIdProductoIdCompoundUniqueInput = {
    menuId: string;
    productoId: number;
};
export type MenusProductosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    visible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MenusProductosAvgOrderByAggregateInput = {
    productoId?: Prisma.SortOrder;
};
export type MenusProductosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    visible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MenusProductosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    visible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MenusProductosSumOrderByAggregateInput = {
    productoId?: Prisma.SortOrder;
};
export type MenusProductosCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput> | Prisma.MenusProductosCreateWithoutProductoInput[] | Prisma.MenusProductosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutProductoInput | Prisma.MenusProductosCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.MenusProductosCreateManyProductoInputEnvelope;
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
};
export type MenusProductosUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput> | Prisma.MenusProductosCreateWithoutProductoInput[] | Prisma.MenusProductosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutProductoInput | Prisma.MenusProductosCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.MenusProductosCreateManyProductoInputEnvelope;
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
};
export type MenusProductosUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput> | Prisma.MenusProductosCreateWithoutProductoInput[] | Prisma.MenusProductosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutProductoInput | Prisma.MenusProductosCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.MenusProductosUpsertWithWhereUniqueWithoutProductoInput | Prisma.MenusProductosUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.MenusProductosCreateManyProductoInputEnvelope;
    set?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    disconnect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    delete?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    update?: Prisma.MenusProductosUpdateWithWhereUniqueWithoutProductoInput | Prisma.MenusProductosUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.MenusProductosUpdateManyWithWhereWithoutProductoInput | Prisma.MenusProductosUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
};
export type MenusProductosUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput> | Prisma.MenusProductosCreateWithoutProductoInput[] | Prisma.MenusProductosUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutProductoInput | Prisma.MenusProductosCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.MenusProductosUpsertWithWhereUniqueWithoutProductoInput | Prisma.MenusProductosUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.MenusProductosCreateManyProductoInputEnvelope;
    set?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    disconnect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    delete?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    update?: Prisma.MenusProductosUpdateWithWhereUniqueWithoutProductoInput | Prisma.MenusProductosUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.MenusProductosUpdateManyWithWhereWithoutProductoInput | Prisma.MenusProductosUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
};
export type MenusProductosCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput> | Prisma.MenusProductosCreateWithoutMenuInput[] | Prisma.MenusProductosUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutMenuInput | Prisma.MenusProductosCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.MenusProductosCreateManyMenuInputEnvelope;
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
};
export type MenusProductosUncheckedCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput> | Prisma.MenusProductosCreateWithoutMenuInput[] | Prisma.MenusProductosUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutMenuInput | Prisma.MenusProductosCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.MenusProductosCreateManyMenuInputEnvelope;
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
};
export type MenusProductosUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput> | Prisma.MenusProductosCreateWithoutMenuInput[] | Prisma.MenusProductosUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutMenuInput | Prisma.MenusProductosCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.MenusProductosUpsertWithWhereUniqueWithoutMenuInput | Prisma.MenusProductosUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.MenusProductosCreateManyMenuInputEnvelope;
    set?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    disconnect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    delete?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    update?: Prisma.MenusProductosUpdateWithWhereUniqueWithoutMenuInput | Prisma.MenusProductosUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.MenusProductosUpdateManyWithWhereWithoutMenuInput | Prisma.MenusProductosUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
};
export type MenusProductosUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput> | Prisma.MenusProductosCreateWithoutMenuInput[] | Prisma.MenusProductosUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenusProductosCreateOrConnectWithoutMenuInput | Prisma.MenusProductosCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.MenusProductosUpsertWithWhereUniqueWithoutMenuInput | Prisma.MenusProductosUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.MenusProductosCreateManyMenuInputEnvelope;
    set?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    disconnect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    delete?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    connect?: Prisma.MenusProductosWhereUniqueInput | Prisma.MenusProductosWhereUniqueInput[];
    update?: Prisma.MenusProductosUpdateWithWhereUniqueWithoutMenuInput | Prisma.MenusProductosUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.MenusProductosUpdateManyWithWhereWithoutMenuInput | Prisma.MenusProductosUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
};
export type MenusProductosCreateWithoutProductoInput = {
    id?: string;
    visible?: boolean;
    createdAt?: Date | string;
    menu: Prisma.MenusCreateNestedOneWithoutProductosInput;
};
export type MenusProductosUncheckedCreateWithoutProductoInput = {
    id?: string;
    menuId: string;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosCreateOrConnectWithoutProductoInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput>;
};
export type MenusProductosCreateManyProductoInputEnvelope = {
    data: Prisma.MenusProductosCreateManyProductoInput | Prisma.MenusProductosCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type MenusProductosUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenusProductosUpdateWithoutProductoInput, Prisma.MenusProductosUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.MenusProductosCreateWithoutProductoInput, Prisma.MenusProductosUncheckedCreateWithoutProductoInput>;
};
export type MenusProductosUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenusProductosUpdateWithoutProductoInput, Prisma.MenusProductosUncheckedUpdateWithoutProductoInput>;
};
export type MenusProductosUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.MenusProductosScalarWhereInput;
    data: Prisma.XOR<Prisma.MenusProductosUpdateManyMutationInput, Prisma.MenusProductosUncheckedUpdateManyWithoutProductoInput>;
};
export type MenusProductosScalarWhereInput = {
    AND?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
    OR?: Prisma.MenusProductosScalarWhereInput[];
    NOT?: Prisma.MenusProductosScalarWhereInput | Prisma.MenusProductosScalarWhereInput[];
    id?: Prisma.StringFilter<"MenusProductos"> | string;
    menuId?: Prisma.StringFilter<"MenusProductos"> | string;
    productoId?: Prisma.IntFilter<"MenusProductos"> | number;
    visible?: Prisma.BoolFilter<"MenusProductos"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenusProductos"> | Date | string;
};
export type MenusProductosCreateWithoutMenuInput = {
    id?: string;
    visible?: boolean;
    createdAt?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutMenusInput;
};
export type MenusProductosUncheckedCreateWithoutMenuInput = {
    id?: string;
    productoId: number;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosCreateOrConnectWithoutMenuInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput>;
};
export type MenusProductosCreateManyMenuInputEnvelope = {
    data: Prisma.MenusProductosCreateManyMenuInput | Prisma.MenusProductosCreateManyMenuInput[];
    skipDuplicates?: boolean;
};
export type MenusProductosUpsertWithWhereUniqueWithoutMenuInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenusProductosUpdateWithoutMenuInput, Prisma.MenusProductosUncheckedUpdateWithoutMenuInput>;
    create: Prisma.XOR<Prisma.MenusProductosCreateWithoutMenuInput, Prisma.MenusProductosUncheckedCreateWithoutMenuInput>;
};
export type MenusProductosUpdateWithWhereUniqueWithoutMenuInput = {
    where: Prisma.MenusProductosWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenusProductosUpdateWithoutMenuInput, Prisma.MenusProductosUncheckedUpdateWithoutMenuInput>;
};
export type MenusProductosUpdateManyWithWhereWithoutMenuInput = {
    where: Prisma.MenusProductosScalarWhereInput;
    data: Prisma.XOR<Prisma.MenusProductosUpdateManyMutationInput, Prisma.MenusProductosUncheckedUpdateManyWithoutMenuInput>;
};
export type MenusProductosCreateManyProductoInput = {
    id?: string;
    menuId: string;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosUpdateWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu?: Prisma.MenusUpdateOneRequiredWithoutProductosNestedInput;
};
export type MenusProductosUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosCreateManyMenuInput = {
    id?: string;
    productoId: number;
    visible?: boolean;
    createdAt?: Date | string;
};
export type MenusProductosUpdateWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutMenusNestedInput;
};
export type MenusProductosUncheckedUpdateWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosUncheckedUpdateManyWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenusProductosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menuId?: boolean;
    productoId?: boolean;
    visible?: boolean;
    createdAt?: boolean;
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menusProductos"]>;
export type MenusProductosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menuId?: boolean;
    productoId?: boolean;
    visible?: boolean;
    createdAt?: boolean;
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menusProductos"]>;
export type MenusProductosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    menuId?: boolean;
    productoId?: boolean;
    visible?: boolean;
    createdAt?: boolean;
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menusProductos"]>;
export type MenusProductosSelectScalar = {
    id?: boolean;
    menuId?: boolean;
    productoId?: boolean;
    visible?: boolean;
    createdAt?: boolean;
};
export type MenusProductosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "menuId" | "productoId" | "visible" | "createdAt", ExtArgs["result"]["menusProductos"]>;
export type MenusProductosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type MenusProductosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type MenusProductosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenusDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $MenusProductosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MenusProductos";
    objects: {
        menu: Prisma.$MenusPayload<ExtArgs>;
        producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        menuId: string;
        productoId: number;
        visible: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["menusProductos"]>;
    composites: {};
};
export type MenusProductosGetPayload<S extends boolean | null | undefined | MenusProductosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload, S>;
export type MenusProductosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenusProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenusProductosCountAggregateInputType | true;
};
export interface MenusProductosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MenusProductos'];
        meta: {
            name: 'MenusProductos';
        };
    };
    findUnique<T extends MenusProductosFindUniqueArgs>(args: Prisma.SelectSubset<T, MenusProductosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenusProductosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenusProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenusProductosFindFirstArgs>(args?: Prisma.SelectSubset<T, MenusProductosFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenusProductosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenusProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenusProductosFindManyArgs>(args?: Prisma.SelectSubset<T, MenusProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenusProductosCreateArgs>(args: Prisma.SelectSubset<T, MenusProductosCreateArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenusProductosCreateManyArgs>(args?: Prisma.SelectSubset<T, MenusProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenusProductosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenusProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenusProductosDeleteArgs>(args: Prisma.SelectSubset<T, MenusProductosDeleteArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenusProductosUpdateArgs>(args: Prisma.SelectSubset<T, MenusProductosUpdateArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenusProductosDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenusProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenusProductosUpdateManyArgs>(args: Prisma.SelectSubset<T, MenusProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenusProductosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenusProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenusProductosUpsertArgs>(args: Prisma.SelectSubset<T, MenusProductosUpsertArgs<ExtArgs>>): Prisma.Prisma__MenusProductosClient<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenusProductosCountArgs>(args?: Prisma.Subset<T, MenusProductosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenusProductosCountAggregateOutputType> : number>;
    aggregate<T extends MenusProductosAggregateArgs>(args: Prisma.Subset<T, MenusProductosAggregateArgs>): Prisma.PrismaPromise<GetMenusProductosAggregateType<T>>;
    groupBy<T extends MenusProductosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenusProductosGroupByArgs['orderBy'];
    } : {
        orderBy?: MenusProductosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenusProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenusProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenusProductosFieldRefs;
}
export interface Prisma__MenusProductosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menu<T extends Prisma.MenusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenusDefaultArgs<ExtArgs>>): Prisma.Prisma__MenusClient<runtime.Types.Result.GetResult<Prisma.$MenusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenusProductosFieldRefs {
    readonly id: Prisma.FieldRef<"MenusProductos", 'String'>;
    readonly menuId: Prisma.FieldRef<"MenusProductos", 'String'>;
    readonly productoId: Prisma.FieldRef<"MenusProductos", 'Int'>;
    readonly visible: Prisma.FieldRef<"MenusProductos", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MenusProductos", 'DateTime'>;
}
export type MenusProductosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    where: Prisma.MenusProductosWhereUniqueInput;
};
export type MenusProductosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    where: Prisma.MenusProductosWhereUniqueInput;
};
export type MenusProductosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenusProductosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenusProductosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenusProductosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusProductosCreateInput, Prisma.MenusProductosUncheckedCreateInput>;
};
export type MenusProductosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenusProductosCreateManyInput | Prisma.MenusProductosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenusProductosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    data: Prisma.MenusProductosCreateManyInput | Prisma.MenusProductosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MenusProductosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MenusProductosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusProductosUpdateInput, Prisma.MenusProductosUncheckedUpdateInput>;
    where: Prisma.MenusProductosWhereUniqueInput;
};
export type MenusProductosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenusProductosUpdateManyMutationInput, Prisma.MenusProductosUncheckedUpdateManyInput>;
    where?: Prisma.MenusProductosWhereInput;
    limit?: number;
};
export type MenusProductosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenusProductosUpdateManyMutationInput, Prisma.MenusProductosUncheckedUpdateManyInput>;
    where?: Prisma.MenusProductosWhereInput;
    limit?: number;
    include?: Prisma.MenusProductosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MenusProductosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    where: Prisma.MenusProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenusProductosCreateInput, Prisma.MenusProductosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenusProductosUpdateInput, Prisma.MenusProductosUncheckedUpdateInput>;
};
export type MenusProductosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
    where: Prisma.MenusProductosWhereUniqueInput;
};
export type MenusProductosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusProductosWhereInput;
    limit?: number;
};
export type MenusProductosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenusProductosSelect<ExtArgs> | null;
    omit?: Prisma.MenusProductosOmit<ExtArgs> | null;
    include?: Prisma.MenusProductosInclude<ExtArgs> | null;
};
