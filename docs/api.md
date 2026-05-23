# Base URL
http://localhost:3000

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