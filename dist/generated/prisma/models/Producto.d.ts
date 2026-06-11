import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductoPayload>;
export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type ProductoAvgAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
};
export type ProductoSumAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
};
export type ProductoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    imagen: string | null;
    categoria: $Enums.Categoria | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    imagen: string | null;
    categoria: $Enums.Categoria | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    precio: number;
    imagen: number;
    categoria: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductoAvgAggregateInputType = {
    id?: true;
    precio?: true;
};
export type ProductoSumAggregateInputType = {
    id?: true;
    precio?: true;
};
export type ProductoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    imagen?: true;
    categoria?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    imagen?: true;
    categoria?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    imagen?: true;
    categoria?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductoCountAggregateInputType;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducto[P]> : Prisma.GetScalarType<T[P], AggregateProducto[P]>;
};
export type ProductoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithAggregationInput | Prisma.ProductoOrderByWithAggregationInput[];
    by: Prisma.ProductoScalarFieldEnum[] | Prisma.ProductoScalarFieldEnum;
    having?: Prisma.ProductoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoCountAggregateInputType | true;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type ProductoGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string | null;
    precio: runtime.Decimal;
    imagen: string | null;
    categoria: $Enums.Categoria;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]>;
}>>;
export type ProductoWhereInput = {
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    id?: Prisma.IntFilter<"Producto"> | number;
    nombre?: Prisma.StringFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableFilter<"Producto"> | string | null;
    precio?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.StringNullableFilter<"Producto"> | string | null;
    categoria?: Prisma.EnumCategoriaFilter<"Producto"> | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    menus?: Prisma.MenusProductosListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    saleItems?: Prisma.SaleItemListRelationFilter;
};
export type ProductoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    imagen?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    menus?: Prisma.MenusProductosOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
    saleItems?: Prisma.SaleItemOrderByRelationAggregateInput;
};
export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    nombre?: Prisma.StringFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableFilter<"Producto"> | string | null;
    precio?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.StringNullableFilter<"Producto"> | string | null;
    categoria?: Prisma.EnumCategoriaFilter<"Producto"> | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    menus?: Prisma.MenusProductosListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    saleItems?: Prisma.SaleItemListRelationFilter;
}, "id">;
export type ProductoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    imagen?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductoCountOrderByAggregateInput;
    _avg?: Prisma.ProductoAvgOrderByAggregateInput;
    _max?: Prisma.ProductoMaxOrderByAggregateInput;
    _min?: Prisma.ProductoMinOrderByAggregateInput;
    _sum?: Prisma.ProductoSumOrderByAggregateInput;
};
export type ProductoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Producto"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Producto"> | string | null;
    precio?: Prisma.DecimalWithAggregatesFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.StringNullableWithAggregatesFilter<"Producto"> | string | null;
    categoria?: Prisma.EnumCategoriaWithAggregatesFilter<"Producto"> | $Enums.Categoria;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
};
export type ProductoCreateInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosCreateNestedManyWithoutProductoInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosUncheckedCreateNestedManyWithoutProductoInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUpdateManyWithoutProductoNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUncheckedUpdateManyWithoutProductoNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
};
export type ProductoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
};
export type ProductoScalarRelationFilter = {
    is?: Prisma.ProductoWhereInput;
    isNot?: Prisma.ProductoWhereInput;
};
export type ProductoNullableScalarRelationFilter = {
    is?: Prisma.ProductoWhereInput | null;
    isNot?: Prisma.ProductoWhereInput | null;
};
export type EnumCategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Categoria;
};
export type ProductoCreateNestedOneWithoutMenusInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutMenusInput, Prisma.ProductoUncheckedCreateWithoutMenusInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutMenusInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutMenusNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutMenusInput, Prisma.ProductoUncheckedCreateWithoutMenusInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutMenusInput;
    upsert?: Prisma.ProductoUpsertWithoutMenusInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutMenusInput, Prisma.ProductoUpdateWithoutMenusInput>, Prisma.ProductoUncheckedUpdateWithoutMenusInput>;
};
export type ProductoCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutOrderItemsInput, Prisma.ProductoUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutOrderItemsInput, Prisma.ProductoUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ProductoUpsertWithoutOrderItemsInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ProductoUpdateWithoutOrderItemsInput>, Prisma.ProductoUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductoCreateNestedOneWithoutSaleItemsInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutSaleItemsInput, Prisma.ProductoUncheckedCreateWithoutSaleItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutSaleItemsInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneWithoutSaleItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutSaleItemsInput, Prisma.ProductoUncheckedCreateWithoutSaleItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutSaleItemsInput;
    upsert?: Prisma.ProductoUpsertWithoutSaleItemsInput;
    disconnect?: Prisma.ProductoWhereInput | boolean;
    delete?: Prisma.ProductoWhereInput | boolean;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutSaleItemsInput, Prisma.ProductoUpdateWithoutSaleItemsInput>, Prisma.ProductoUncheckedUpdateWithoutSaleItemsInput>;
};
export type ProductoCreateWithoutMenusInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutMenusInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutMenusInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutMenusInput, Prisma.ProductoUncheckedCreateWithoutMenusInput>;
};
export type ProductoUpsertWithoutMenusInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutMenusInput, Prisma.ProductoUncheckedUpdateWithoutMenusInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutMenusInput, Prisma.ProductoUncheckedCreateWithoutMenusInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutMenusInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutMenusInput, Prisma.ProductoUncheckedUpdateWithoutMenusInput>;
};
export type ProductoUpdateWithoutMenusInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutMenusInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutOrderItemsInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutOrderItemsInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosUncheckedCreateNestedManyWithoutProductoInput;
    saleItems?: Prisma.SaleItemUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutOrderItemsInput, Prisma.ProductoUncheckedCreateWithoutOrderItemsInput>;
};
export type ProductoUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutOrderItemsInput, Prisma.ProductoUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutOrderItemsInput, Prisma.ProductoUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutOrderItemsInput, Prisma.ProductoUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductoUpdateWithoutOrderItemsInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUncheckedUpdateManyWithoutProductoNestedInput;
    saleItems?: Prisma.SaleItemUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutSaleItemsInput = {
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosCreateNestedManyWithoutProductoInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutSaleItemsInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: string | null;
    categoria: $Enums.Categoria;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menus?: Prisma.MenusProductosUncheckedCreateNestedManyWithoutProductoInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutSaleItemsInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutSaleItemsInput, Prisma.ProductoUncheckedCreateWithoutSaleItemsInput>;
};
export type ProductoUpsertWithoutSaleItemsInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutSaleItemsInput, Prisma.ProductoUncheckedUpdateWithoutSaleItemsInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutSaleItemsInput, Prisma.ProductoUncheckedCreateWithoutSaleItemsInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutSaleItemsInput, Prisma.ProductoUncheckedUpdateWithoutSaleItemsInput>;
};
export type ProductoUpdateWithoutSaleItemsInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUpdateManyWithoutProductoNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutSaleItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    imagen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoria?: Prisma.EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menus?: Prisma.MenusProductosUncheckedUpdateManyWithoutProductoNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCountOutputType = {
    menus: number;
    orderItems: number;
    saleItems: number;
};
export type ProductoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menus?: boolean | ProductoCountOutputTypeCountMenusArgs;
    orderItems?: boolean | ProductoCountOutputTypeCountOrderItemsArgs;
    saleItems?: boolean | ProductoCountOutputTypeCountSaleItemsArgs;
};
export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductoCountOutputTypeCountMenusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenusProductosWhereInput;
};
export type ProductoCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductoCountOutputTypeCountSaleItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
};
export type ProductoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    imagen?: boolean;
    categoria?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menus?: boolean | Prisma.Producto$menusArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Producto$orderItemsArgs<ExtArgs>;
    saleItems?: boolean | Prisma.Producto$saleItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    imagen?: boolean;
    categoria?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    imagen?: boolean;
    categoria?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    imagen?: boolean;
    categoria?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "imagen" | "categoria" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>;
export type ProductoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menus?: boolean | Prisma.Producto$menusArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Producto$orderItemsArgs<ExtArgs>;
    saleItems?: boolean | Prisma.Producto$saleItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Producto";
    objects: {
        menus: Prisma.$MenusProductosPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        saleItems: Prisma.$SaleItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: runtime.Decimal;
        imagen: string | null;
        categoria: $Enums.Categoria;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["producto"]>;
    composites: {};
};
export type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductoPayload, S>;
export type ProductoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoCountAggregateInputType | true;
};
export interface ProductoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Producto'];
        meta: {
            name: 'Producto';
        };
    };
    findUnique<T extends ProductoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductoFindManyArgs>(args?: Prisma.SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductoCreateArgs>(args: Prisma.SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductoDeleteArgs>(args: Prisma.SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductoUpdateArgs>(args: Prisma.SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductoUpsertArgs>(args: Prisma.SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductoCountArgs>(args?: Prisma.Subset<T, ProductoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoCountAggregateOutputType> : number>;
    aggregate<T extends ProductoAggregateArgs>(args: Prisma.Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>;
    groupBy<T extends ProductoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductoFieldRefs;
}
export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menus<T extends Prisma.Producto$menusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$menusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenusProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Producto$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    saleItems<T extends Prisma.Producto$saleItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductoFieldRefs {
    readonly id: Prisma.FieldRef<"Producto", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Producto", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Producto", 'String'>;
    readonly precio: Prisma.FieldRef<"Producto", 'Decimal'>;
    readonly imagen: Prisma.FieldRef<"Producto", 'String'>;
    readonly categoria: Prisma.FieldRef<"Producto", 'Categoria'>;
    readonly createdAt: Prisma.FieldRef<"Producto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Producto", 'DateTime'>;
}
export type ProductoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
};
export type ProductoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type ProductoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type ProductoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
};
export type ProductoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type Producto$menusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producto$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producto$saleItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
};
