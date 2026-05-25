# Base URL
http://localhost:4000

---

# 🔐 Auth

## POST /auth/login

Autentica un usuario y setea las cookies de sesión.

### Request Body

```json
{
  "email": "12345678@gmail.com",
  "password": "12345678"
}
```

### Response 200

```json
{
  "first_login": true,
  "role": "pensioner"
}
```

### Response 401

```json
{
  "statusCode": 401,
  "message": "Credenciales inválidas"
}
```

### Cookies seteadas automáticamente

| Cookie        | Duración   |
| ------------- | ---------- |
| access_token  | 15 minutos |
| refresh_token | 7 días     |

---

## 🔄 POST /auth/refresh

Renueva el `access_token` usando el `refresh_token` de la cookie.

---

### Response 200

```json
{
  "message": "Token renovado"
}
````

---

### Response 401

```json
{
  "statusCode": 401,
  "message": "Refresh token inválido o expirado"
}
```

## POST /auth/logout

Cierra la sesión eliminando las cookies.

### Response 200

```json
{
  "message": "Sesión cerrada"
}
```




### POST `/users`
Crea un pensionista. Solo accesible para admin.

**Headers:**
Cookie: access_token=tu_token

**Request Body:**

```json
{
  "name": "Juan Pérez",
  "dni": "12345678"
}

```
**Response 201:**


```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "12345678",
  "role": "pensioner"
}
```

**Response 401:** Token inválido o ausente
**Response 403:** No tienes permiso para esto
**Response 409:** Ya existe un usuario con ese DNI


Aquí la documentación de los nuevos endpoints:





---

# 🛍️ Productos

---

## POST `/productos`

**Método:** `POST`
**URL:** `http://localhost:4000/productos`
**Body:** `form-data`

| Key | Tipo | Requerido |
|---|---|---|
| nombre | text | ✅ |
| descripcion | text | ❌ |
| precio | text | ✅ |
| categoria | text | ✅ |
| imagen | file | ❌ |

> `categoria` acepta: `"ENTRADA"` | `"MENU"`
> `precio` se envía como texto, el backend lo convierte a número automáticamente.

**Response 201:**
```json
{
  "id": 1,
  "nombre": "Caldo de gallina",
  "descripcion": "Plato de entrada caliente",
  "precio": "5.50",
  "imagen": "/uploads/1234567890-imagen.jpg",
  "categoria": "ENTRADA",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

> `imagen` puede ser `null` si no se envió archivo.
> La imagen es accesible en `http://localhost:4000/uploads/nombre-archivo.jpg`

---

---

## GET `/productos`
Retorna todos los productos ordenados por fecha de creación (más recientes primero).

**Response 200:**
```json
[
  {
    "id": "clxyz123",
    "nombre": "Caldo de gallina",
    "descripcion": "Plato de entrada caliente",
    "precio": "5.50",
    "imagen": "https://ejemplo.com/imagen.jpg",
    "categoria": "ENTRADA",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
]
```

---

## GET `/productos/:id`
Retorna un producto por su ID.

**Params:**
| Param | Tipo   | Descripción        |
| ----- | ------ | ------------------ |
| id    | string | ID cuid del producto |

**Response 200:**
```json
{
  "id": "clxyz123",
  "nombre": "Caldo de gallina",
  "descripcion": "Plato de entrada caliente",
  "precio": "5.50",
  "imagen": "https://ejemplo.com/imagen.jpg",
  "categoria": "ENTRADA",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

**Response 200 (no encontrado):** `null`

> ⚠️ Nota: actualmente `findOne` retorna `null` si no existe en vez de lanzar un 404.

---

# 📋 Menús

---

## POST `/menus`

Crea un nuevo menú del día. Al crearse, **desactiva automáticamente** cualquier menú activo anterior.

**Request Body:**

```json
{
  "nombre": "Menú Lunes 26 Mayo"
}
```

**Response 201:**
```json
{
  "id": "clxyz456",
  "nombre": "Menú Lunes 26 Mayo",
  "activo": true,
  "createdAt": "2025-05-26T12:00:00.000Z",
  "updatedAt": "2025-05-26T12:00:00.000Z"
}
```

> Al crear un menú, todos los menús anteriores se desactivan (`activo = false`).

---

## GET `/menus`

Retorna el historial completo de menús (activos e inactivos), ordenados por fecha de creación (más recientes primero). Incluye los productos asociados.

**Response 200:**
```json
[
  {
    "id": "clxyz456",
    "nombre": "Menú Lunes 26 Mayo",
    "activo": true,
    "createdAt": "2025-05-26T12:00:00.000Z",
    "updatedAt": "2025-05-26T12:00:00.000Z",
    "productos": [
      {
        "id": "clxyz789",
        "menuId": "clxyz456",
        "productoId": 1,
        "visible": true,
        "createdAt": "2025-05-26T12:05:00.000Z",
        "producto": {
          "id": 1,
          "nombre": "Caldo de gallina",
          "descripcion": "Plato de entrada caliente",
          "precio": "5.50",
          "imagen": "/uploads/imagen.jpg",
          "categoria": "ENTRADA",
          "createdAt": "2025-05-25T00:00:00.000Z",
          "updatedAt": "2025-05-25T00:00:00.000Z"
        }
      }
    ]
  }
]
```

---

## GET `/menus/actual`

🌐 **Endpoint público** — Retorna el único menú activo con **solo los productos visibles** (`visible = true`). Este endpoint es el que consumirá el frontend de clientes.

**Response 200:**
```json
{
  "id": "clxyz456",
  "nombre": "Menú Lunes 26 Mayo",
  "activo": true,
  "createdAt": "2025-05-26T12:00:00.000Z",
  "updatedAt": "2025-05-26T12:00:00.000Z",
  "productos": [
    {
      "id": "clxyz789",
      "menuId": "clxyz456",
      "productoId": 1,
      "visible": true,
      "createdAt": "2025-05-26T12:05:00.000Z",
      "producto": {
        "id": 1,
        "nombre": "Caldo de gallina",
        "descripcion": "Plato de entrada caliente",
        "precio": "5.50",
        "imagen": "/uploads/imagen.jpg",
        "categoria": "ENTRADA",
        "createdAt": "2025-05-25T00:00:00.000Z",
        "updatedAt": "2025-05-25T00:00:00.000Z"
      }
    }
  ]
}
```

**Response 404:**
```json
{
  "statusCode": 404,
  "message": "No hay un menú activo actualmente"
}
```

> Solo se incluyen productos con `visible = true`. Los productos ocultos no aparecen.

---

## POST `/menus/:menuId/productos`

Agrega un producto existente a un menú. No permite duplicados.

**Params:**
| Param  | Tipo   | Descripción          |
| ------ | ------ | -------------------- |
| menuId | string | ID cuid del menú     |

**Request Body:**

```json
{
  "productoId": 1
}
```

**Response 201:**
```json
{
  "id": "clxyz999",
  "menuId": "clxyz456",
  "productoId": 1,
  "visible": true,
  "createdAt": "2025-05-26T12:05:00.000Z",
  "producto": {
    "id": 1,
    "nombre": "Caldo de gallina",
    "descripcion": "Plato de entrada caliente",
    "precio": "5.50",
    "imagen": "/uploads/imagen.jpg",
    "categoria": "ENTRADA",
    "createdAt": "2025-05-25T00:00:00.000Z",
    "updatedAt": "2025-05-25T00:00:00.000Z"
  }
}
```

**Response 404:** Menú o producto no encontrado
**Response 409:** El producto ya está agregado a este menú

---

## PATCH `/menus/:menuId/productos/:productoId/toggle`

Alterna la visibilidad de un producto dentro de un menú (`visible: true ↔ false`).

**Params:**
| Param      | Tipo   | Descripción            |
| ---------- | ------ | ---------------------- |
| menuId     | string | ID cuid del menú       |
| productoId | number | ID numérico del producto |

**Response 200:**
```json
{
  "id": "clxyz999",
  "menuId": "clxyz456",
  "productoId": 1,
  "visible": false,
  "createdAt": "2025-05-26T12:05:00.000Z",
  "producto": {
    "id": 1,
    "nombre": "Caldo de gallina",
    "descripcion": "Plato de entrada caliente",
    "precio": "5.50",
    "imagen": "/uploads/imagen.jpg",
    "categoria": "ENTRADA",
    "createdAt": "2025-05-25T00:00:00.000Z",
    "updatedAt": "2025-05-25T00:00:00.000Z"
  }
}
```

**Response 404:** El producto no está asociado a este menú

---

## PATCH `/menus/:menuId/toggle`

Activa o desactiva un menú. Si se **activa**, todos los demás menús se **desactivan** automáticamente (solo uno activo a la vez).

**Params:**
| Param  | Tipo   | Descripción          |
| ------ | ------ | -------------------- |
| menuId | string | ID cuid del menú     |

**Response 200 (activación):**
```json
{
  "id": "clxyz456",
  "nombre": "Menú Lunes 26 Mayo",
  "activo": true,
  "createdAt": "2025-05-26T12:00:00.000Z",
  "updatedAt": "2025-05-26T12:10:00.000Z"
}
```

**Response 200 (desactivación):**
```json
{
  "id": "clxyz456",
  "nombre": "Menú Lunes 26 Mayo",
  "activo": false,
  "createdAt": "2025-05-26T12:00:00.000Z",
  "updatedAt": "2025-05-26T12:10:00.000Z"
}
```

**Response 404:** Menú no encontrado

> ⚠️ Si se activa un menú, todos los demás pasan a `activo = false`.
