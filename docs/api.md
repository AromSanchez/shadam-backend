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