## 🗄️ Database Tables

### `users`
# 📦 Users Table

| Columna       | Tipo                          | Descripción                          |
|---------------|-------------------------------|--------------------------------------|
| `id`          | `INT` PK autoincrement        | Identificador único                  |
| `name`        | `VARCHAR(255)`                | Nombre completo                      |
| `email`       | `VARCHAR(255)` UNIQUE         | Email de login                       |
| `password`    | `TEXT`                        | Password hasheada                    |
| `role`        | `VARCHAR(50)`                 | `admin` o `pensioner`                |
| `qr_token`    | `VARCHAR(255)` UNIQUE nullable| Token QR único                       |
| `balance`     | `DECIMAL(10,2)` default `0`   | Crédito disponible                   |
| `first_login` | `BOOLEAN` default `true`      | Fuerza cambio de password            |
| `is_active`   | `BOOLEAN` default `true`      | Estado de la cuenta                  |
| `created_at`  | `TIMESTAMP`                   | Fecha de creación                    |
| `updated_at`  | `TIMESTAMP`                   | Última actualización                 |

---

### `productos`
# 🍽️ Productos Table

| Columna       | Tipo                             | Descripción                            |
|---------------|----------------------------------|----------------------------------------|
| `id`          | `TEXT` PK (`cuid()`)             | Identificador único                    |
| `nombre`      | `TEXT`                           | Nombre del producto                    |
| `descripcion` | `TEXT` nullable                  | Descripción opcional del producto      |
| `precio`      | `DECIMAL(10,2)`                  | Precio del producto                    |
| `imagen`      | `TEXT` nullable                  | URL de la imagen del producto          |
| `categoria`   | `ENUM` (`ENTRADA`, `MENU`)       | Categoría del producto                 |
| `createdAt`   | `TIMESTAMP` default `now()`      | Fecha de creación                      |
| `updatedAt`   | `TIMESTAMP` auto-actualizado     | Última actualización                   |

#### Enum: `Categoria`

| Valor     | Descripción          |
|-----------|----------------------|
| `ENTRADA` | Plato de entrada     |
| `MENU`    | Plato de menú        |

---
