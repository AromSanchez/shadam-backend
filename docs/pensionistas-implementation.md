# Implementación del Sistema de Pensionistas - Resumen

## Cambios Realizados

### Backend (shadam-qr-backend)

#### Schema (prisma/schema.prisma)
- **Nuevo enum** `PensionerType`: ESTUDIANTE | TRABAJADOR
- **Nuevo enum** `MealType`: DESAYUNO | ALMUERZO | CENA
- **Campo nuevo** en `User`: `pensioner_type PensionerType?`
- **Nuevo modelo** `Consumption`: registra cada consumo (userId, mealType, amount, date)
- **Nuevo modelo** `PriceConfig`: precios por tipo de comida (para trabajadores)
- **Cascadas**: `MenusProductos` y `OrderItem` → onDelete: Cascade; `SaleItem` → onDelete: SetNull

#### Módulo Consumptions (src/consumptions/)
- `POST /consumptions` → Registrar consumo (admin/recepcionista)
- `POST /consumptions/validate-qr` → Validar pensionista por QR token
- `GET /consumptions/user/:userId` → Historial de un pensionista (admin)
- `GET /consumptions/user/:userId/today` → Consumos hoy (admin)
- `GET /consumptions/user/:userId/stats` → Estadísticas (admin)
- `GET /consumptions/me/history` → Mi historial (pensionista)
- `GET /consumptions/me/today` → Mis consumos hoy (pensionista)
- `GET /consumptions/me/stats` → Mis estadísticas (pensionista)

#### Módulo Config (src/config/)
- `GET /config/prices` → Obtener precios configurados (admin)
- `PATCH /config/prices` → Actualizar precios (admin)

#### Módulo Users (actualizado)
- `POST /users` → Ahora acepta `pensioner_type` y genera `qr_token` automáticamente
- `PATCH /users/me/profile` → Actualizar email/password (pensionista)
- `PATCH /users/me/skip-onboarding` → Omitir onboarding (pensionista)

#### Auth (actualizado)
- `GET /auth/me` → Ahora incluye `pensioner_type`, `qr_token`, y `todayConsumptions` para pensionistas

#### Migraciones
- `20260611120000_product_delete_cascade` → Cascadas para eliminar productos
- `20260611130000_add_pensioner_consumptions` → Tipos, consumos, config de precios

---

### Frontend (shadam-qr-frontend)

#### App Pensionista (app/pensionista/)
- **context.tsx** → PensionerProvider (auth, user state, redirect on 401)
- **layout.tsx** → Bottom navigation (Inicio, Mi QR, Historial, Perfil)
- **login/page.tsx** → Login exclusivo para pensionistas
- **onboarding/page.tsx** → Cambio de credenciales en primer login
- **page.tsx** → Dashboard con balance, comidas del día, enlaces rápidos
- **qr/page.tsx** → Código QR/token para mostrar al recepcionista
- **consumo/page.tsx** → Historial y estadísticas de consumos
- **profile/page.tsx** → Perfil, cambio de email/password, logout

#### Recepción (app/(staff)/recepcion/components/pensionista/)
- **EscanerQR.tsx** → Scanner QR real con BarcodeDetector API + fallback manual
- **IngresoCodigosMultiples.tsx** → Ingreso manual de código pensionista
- **FlujoPensionista.tsx** → Selector de método (QR o código)

#### Dashboard Admin
- **pensionistas/page.tsx** → Crear con tipo (ESTUDIANTE/TRABAJADOR), muestra QR token
- **configuracion/page.tsx** → Configuración de precios por comida

#### Middleware (actualizado)
- Protege `/pensionista/*` (excepto login) requiriendo rol pensioner o admin

#### API Routes
- **api/products/[id]/route.ts** → Ahora soporta form-data para actualizar con imagen
- **api/users/route.ts** → Envía `pensioner_type` al backend

---

## Lógica de Cobro

| Tipo | Regla | Cuándo se cobra |
|------|-------|-----------------|
| ESTUDIANTE | S/ 16.66 cada 3 consumos | Al registrar el 3ro, 6to, 9no... consumo |
| TRABAJADOR | Precio configurado por comida | Inmediatamente al registrar cada consumo |

---

## Flujo Completo

### Crear Pensionista (Admin)
1. Admin va a Dashboard → Pensionistas → Nuevo
2. Ingresa nombre, DNI, selecciona tipo (Estudiante/Trabajador)
3. Backend crea usuario con password = DNI, genera `qr_token`
4. Admin recarga saldo al pensionista

### Login Pensionista
1. Pensionista ingresa DNI como email y DNI como password
2. Si `first_login = true` → onboarding (cambiar credenciales o omitir)
3. Redirige al dashboard del pensionista

### Registrar Consumo (Recepción)
1. Recepcionista va a Recepción → Atender Pensionista
2. Selecciona: Escanear QR o Ingresar Código
3. Escanea el QR del pensionista (o ingresa código manualmente)
4. Backend valida: usuario activo, saldo suficiente, no duplicado hoy
5. Se muestra info del pensionista + comida actual (auto-detectada por horario)
6. Recepcionista confirma → se registra consumo y descuenta saldo

### Ver Consumos (Pensionista)
1. Pensionista ve en su dashboard las comidas del día
2. En "Historial" ve resumen estadístico y detalle por fecha

---

## Recomendaciones Futuras

1. **Notificaciones push**: Avisar al pensionista cuando se le descuenta saldo
2. **Reportes admin**: Panel de reportes con consumos por fecha, tipo, pensionista
3. **QR dinámico**: Rotar el `qr_token` periódicamente por seguridad
4. **Librería QR**: Instalar `qrcode.react` para generar QR visual real (actualmente se muestra el código de texto)
5. **Librería scanner**: Instalar `html5-qrcode` para scanning más robusto en navegadores sin BarcodeDetector
6. **Historial de recargas**: Tabla para trackear quién recargó, cuándo y cuánto
7. **Límite de consumos**: Configurar máximo de consumos por día/semana
8. **Exportar datos**: CSV/Excel de consumos para contabilidad
9. **Multi-sede**: Si hay múltiples sedes, agregar campo sede al consumo
10. **Recuperar password**: Flujo de "olvidé mi contraseña" para pensionistas
