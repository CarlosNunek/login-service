# 🔐 Login-Service

Microservicio para autenticación de usuarios usando Node.js, MongoDB y Redis. 

## 🧱 Arquitectura

Este microservicio forma parte de un sistema basado en microservicios, siguiendo una arquitectura orientada a eventos con Redis (Pub/Sub). Se conecta a una base de datos MongoDB para validar credenciales y publica eventos de login exitoso.


## ⚙️ Tecnologías

- **Node.js** + Express
- **MongoDB** (vía `mongodb` driver)
- **Redis** para eventos
- **dotenv** para configuración

## 🧠 Patrones de diseño

- **Capas**: Separación clara entre controlador, rutas, lógica de negocio y conexión a base de datos.
- **DRY / KISS**: Código reutilizable y simple.
- **Publisher (Event-Driven)**: Publica eventos en Redis para ser escuchados por otros microservicios.

## 🛠 Instalación local

```bash
npm install
node index.js

