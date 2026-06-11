# Backend Architecture & Context

## Overview

**Framework:** NestJS (TypeScript)
**ORM:** Prisma
**Database:** PostgreSQL (hosted on Render)
**Auth:** JWT (access_token + refresh_token en cookies HttpOnly)
**File uploads:** Multer (disk storage en `./uploads/`)
**Port:** 4000

---

## Project Structure

```
shadam-qr-backend/
├── docs/                    # Documentation (api.md, architecture.md, database.md)
├── prisma/
│   ├── schema.prisma        # Database schema (source of truth)
│   ├── migrations/          # SQL migrations (chronological)
│   └── seed.ts              # Seed data
├── src/
│   ├── main.ts              # App bootstrap (port, CORS, cookies, validation pipe)
│   ├── app.module.ts        # Root module
│   ├── prisma/              # PrismaService (singleton DB client)
│   ├── auth/                # JWT auth (login, refresh, logout, guards, decorators)
│   ├── users/               # User/pensioner CRUD + profile update
│   ├── productos/           # Product catalog CRUD
│   ├── menus/               # Daily menu management
│   ├── orders/              # Temporary orders (pedidos)
│   ├── payments/            # Payment alias endpoint
│   ├── sales/               # Finalized sales (ventas)
│   ├── consumptions/        # Pensionista consumption tracking
│   └── config/              # System configuration (meal prices)
├── uploads/                 # Static image files (served publicly)
├── generated/               # Prisma generated client (auto-generated, do not edit)
└── package.json
```

---

## Module Pattern

Each module follows NestJS convention:
```
module-name/
├── dto/                     # Data Transfer Objects (validation with class-validator)
│   ├── create-*.dto.ts
│   └── update-*.dto.ts
├── module-name.controller.ts   # Route handlers (decorators: @Get, @Post, @Patch, @Delete)
├── module-name.service.ts      # Business logic (injected PrismaService)
└── module-name.module.ts       # Module declaration (controllers + providers)
```

---

## Database Models & Relationships

### Core Entities

| Model | PK Type | Table Name | Description |
|-------|---------|------------|-------------|
| User | Int (autoincrement) | `users` | Admins and pensioners (with `pensioner_type`) |
| Producto | Int (autoincrement) | `productos` | Product catalog |
| Menus | String (cuid) | `menus` | Daily menus (only one active) |
| MenusProductos | String (cuid) | `menus_productos` | Pivot: menu <-> product (with `visible` toggle) |
| Order | String (cuid) | `orders` | Temporary active orders |
| OrderItem | String (cuid) | `order_items` | Items in an order |
| Sale | String (cuid) | `sales` | Finalized sales (after payment) |
| SaleItem | String (cuid) | `sale_items` | Items in a sale (snapshot of product name + price) |
| SalePayment | String (cuid) | `sale_payments` | Payment records per sale |
| Consumption | String (cuid) | `consumptions` | Pensionista meal consumption records |
| PriceConfig | String (cuid) | `price_config` | Meal prices for TRABAJADOR pensionistas |

### Key Relationships

```
User 1──N Order (pensionerId?)
User 1──N Sale (pensionerId?)
User 1──N Consumption

Producto 1──N MenusProductos ──N Menus        (many-to-many via pivot)
Producto 1──N OrderItem                        (onDelete: Cascade)
Producto 1──N SaleItem                         (onDelete: SetNull, nullable FK)

Order 1──N OrderItem                           (onDelete: Cascade)
Sale 1──N SaleItem                             (onDelete: Cascade)
Sale 1──N SalePayment                          (onDelete: Cascade)
```

### Enums

```
PensionerType: ESTUDIANTE | TRABAJADOR
MealType: DESAYUNO | ALMUERZO | CENA
Categoria: ENTRADA | MENU
OrderType: MESA | PARA_LLEVAR
CustomerType: REGULAR | PENSIONER
OrderStatus: ACTIVE | CONFIRMED
PaymentMethod: EFECTIVO | YAPE
```

---

## Business Rules

### Products
- Products belong to a catalog (independent of menus).
- Deleting a product cascades to menus and order items; sale items keep the `productName` snapshot.
- Image files are stored in `./uploads/` and served statically.

### Menus
- Only ONE menu can be `activo = true` at a time.
- Creating or activating a menu auto-deactivates all others.
- Products are added to menus via the pivot table and can be toggled `visible/invisible`.
- The public endpoint `/menus/actual` only returns visible products from the active menu.

### Orders (Pedidos)
- Orders are temporary (ACTIVE -> CONFIRMED -> paid -> becomes Sale).
- Products must exist in the active menu AND be visible to be ordered.
- Price is snapshotted at order creation time (`unitPrice`, `subtotal`).
- Deleting an order cascades to its items.

### Sales (Ventas)
- Created from orders via the checkout flow (transaction).
- Snapshot strategy: `productName` + `unitPrice` + `subtotal` are copied at sale time.
- `productoId` is nullable (product can be deleted without breaking sales history).
- Orders are deleted after successful checkout.

### Pensionistas & Consumptions
- Two types: `ESTUDIANTE` and `TRABAJADOR`.
- Each pensionista gets a unique `qr_token` (format: `PEN-XXXXXXXXXXXX`) at creation.
- **TRABAJADOR** pricing: charged immediately per consumption at the configured price (from `PriceConfig` table).
- **ESTUDIANTE** pricing: charged S/ 16.66 every 3 consumptions (regardless of meal type).
- A pensionista can only consume each meal type (DESAYUNO/ALMUERZO/CENA) once per day.
- Balance is deducted from the `User.balance` field.
- Consumption schedule: DESAYUNO (6:00-10:00), ALMUERZO (11:30-15:00), CENA (17:30-21:00).
- `qr_token` is used by the receptionist to identify the pensionista (scan or manual entry).
- First login: password is the DNI, `first_login = true` triggers onboarding flow.

### Auth
- JWT stored in HttpOnly cookies (`access_token`: 15min, `refresh_token`: 7d).
- Guards: `JwtGuard` (authentication) + `RolesGuard` (authorization).
- Decorator: `@Roles('admin')` or `@Roles('pensioner')` restricts endpoints.
- Products and menus endpoints are currently PUBLIC (no auth guard).
- Orders, sales, payments, consumptions (admin), and config require `admin` role.
- Pensionista profile/consumption endpoints require `pensioner` role.

---

## API Endpoints Summary

| Module | Base Path | Auth Required |
|--------|-----------|---------------|
| Auth | `/auth` | No (login/refresh/logout), Yes (me) |
| Users | `/users` | Yes (admin for CRUD, pensioner for me/profile) |
| Products | `/productos` | No |
| Menus | `/menus` | No |
| Orders | `/pedidos` | Yes (admin) |
| Payments | `/pagos` | Yes (admin) |
| Sales | `/ventas` | Yes (admin) |
| Consumptions | `/consumptions` | Yes (admin for register/validate, pensioner for me/*) |
| Config | `/config` | Yes (admin) |

Full API documentation: `docs/api.md`

---

## Development Commands

```bash
npm run start:dev          # Start in watch mode
npx prisma generate        # Regenerate Prisma client after schema changes
npx prisma migrate dev     # Create + apply migration
npx prisma migrate deploy  # Apply pending migrations (production)
npx prisma studio          # Visual DB browser
npx tsc --noEmit           # Type check without building
```

---

## Environment Variables

```env
DATABASE_URL=postgresql://...     # PostgreSQL connection string
JWT_SECRET=...                    # Secret for signing JWTs
JWT_REFRESH_SECRET=...            # Secret for refresh tokens
```
