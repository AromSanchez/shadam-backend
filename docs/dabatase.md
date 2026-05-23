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
