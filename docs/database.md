# Database

Este archivo documenta las tablas principales relacionadas con pedidos temporales y ventas finalizadas.

## Enums

| Enum | Valores |
| --- | --- |
| `OrderType` | `MESA`, `PARA_LLEVAR` |
| `CustomerType` | `REGULAR`, `PENSIONER` |
| `OrderStatus` | `ACTIVE`, `CONFIRMED` |
| `PaymentMethod` | `EFECTIVO`, `YAPE` |

## `orders`

Pedidos temporales aun no pagados.

| Columna | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `TEXT` PK | Identificador cuid |
| `tableNumber` | `TEXT` nullable | Mesa cuando `type = MESA` |
| `type` | `OrderType` | Mesa o para llevar |
| `customerType` | `CustomerType` | Regular o pensionista |
| `pensionerId` | `INT` nullable FK | Usuario pensionista asociado |
| `status` | `OrderStatus` | `ACTIVE` o `CONFIRMED` |
| `total` | `DECIMAL(10,2)` | Total calculado del pedido |
| `notes` | `TEXT` nullable | Observaciones |
| `createdAt` | `TIMESTAMP` | Fecha de creacion |
| `updatedAt` | `TIMESTAMP` | Ultima actualizacion |

## `order_items`

Productos de un pedido temporal. Guarda precio unitario y subtotal como snapshot.

| Columna | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `TEXT` PK | Identificador cuid |
| `orderId` | `TEXT` FK | Pedido |
| `productoId` | `INT` FK | Producto |
| `quantity` | `INT` | Cantidad |
| `unitPrice` | `DECIMAL(10,2)` | Precio al momento de agregar |
| `subtotal` | `DECIMAL(10,2)` | `quantity * unitPrice` |
| `isTakeaway` | `BOOLEAN` | Si ese item especifico es para llevar |
| `createdAt` | `TIMESTAMP` | Fecha de creacion |
| `updatedAt` | `TIMESTAMP` | Ultima actualizacion |

## `sales`

Ventas finalizadas. Al pagar un pedido, se crea una venta y el pedido se elimina de `orders`.

| Columna | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `TEXT` PK | Identificador cuid |
| `sourceOrderId` | `TEXT` UNIQUE nullable | ID del pedido original |
| `tableNumber` | `TEXT` nullable | Mesa original cuando aplica |
| `type` | `OrderType` | Mesa o para llevar |
| `customerType` | `CustomerType` | Regular o pensionista |
| `pensionerId` | `INT` nullable FK | Usuario pensionista asociado |
| `customerLabel` | `TEXT` nullable | Texto listo para UI, por ejemplo `Mesa 4` o `Para llevar` |
| `total` | `DECIMAL(10,2)` | Total final |
| `soldAt` | `TIMESTAMP` | Fecha de venta |
| `createdAt` | `TIMESTAMP` | Fecha de creacion |
| `updatedAt` | `TIMESTAMP` | Ultima actualizacion |

## `sale_items`

Snapshot permanente de productos vendidos.

| Columna | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `TEXT` PK | Identificador cuid |
| `saleId` | `TEXT` FK | Venta |
| `productoId` | `INT` FK | Producto original |
| `productName` | `TEXT` | Nombre del producto al vender |
| `quantity` | `INT` | Cantidad |
| `unitPrice` | `DECIMAL(10,2)` | Precio unitario vendido |
| `subtotal` | `DECIMAL(10,2)` | Subtotal vendido |
| `isTakeaway` | `BOOLEAN` | Si ese item especifico fue para llevar |
| `createdAt` | `TIMESTAMP` | Fecha de creacion |

## `sale_payments`

Pagos asociados a una venta. Permite efectivo, Yape y pagos mixtos.

| Columna | Tipo | Descripcion |
| --- | --- | --- |
| `id` | `TEXT` PK | Identificador cuid |
| `saleId` | `TEXT` FK | Venta |
| `method` | `PaymentMethod` | `EFECTIVO` o `YAPE` |
| `amount` | `DECIMAL(10,2)` | Monto pagado por ese metodo |
| `createdAt` | `TIMESTAMP` | Fecha de registro |

## Reglas

- Un pedido temporal vive en `orders` hasta que se paga.
- El pago se registra en una transaccion: crea `sales`, `sale_items`, `sale_payments` y elimina el pedido original.
- La suma de `sale_payments.amount` debe ser exactamente igual a `sales.total`.
- `order_items.isTakeaway` y `sale_items.isTakeaway` permiten mezclar productos de mesa y para llevar dentro del mismo pedido.
