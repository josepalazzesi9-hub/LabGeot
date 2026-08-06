# 🚀 Vercel Features Playground & Testing Suite

Un repositorio ligero, moderno e interactivo diseñado para experimentar y aprender cómo funcionan las características clave de **Vercel** (Serverless Functions, Edge Headers, `vercel.json` y Variables de Entorno).

---

## 🌟 ¿Qué incluye este repositorio?

1. **⚡ Serverless Functions (`/api/*`)**:
   - `api/time.js`: Retorna el timestamp del servidor, zona horaria y datos de la instancia Vercel.
   - `api/geo.js`: Lee las cabeceras HTTP que la red Edge de Vercel inyecta automáticamente (`x-vercel-ip-country`, `x-vercel-ip-city`, `x-vercel-execution-region`).
   - `api/echo.js`: Recibe solicitudes `POST`/`GET` con JSON y responde analizando el payload.

2. **⚙️ Configuración Vercel (`vercel.json`)**:
   - Demuestra el uso de **Rewrites** (ej. `/ping` redirige internamente a `/api/time`).
   - Demuestra el uso de **Redirects** (ej. `/vercel-docs` redirige a la documentación).
   - Inyección de **Headers CORS y personalizados** (`X-Custom-Vercel-Header`).

3. **🖥️ Dashboard Interactivo (`index.html`)**:
   - Interfaz web con diseño oscuro al estilo Vercel (*Vercel Dark Mode*) para ejecutar pruebas con un clic y visualizar las respuestas JSON en tiempo real con sintaxis resaltada y tiempos de latencia.

---

## 🚀 Cómo desplegar en Vercel (Paso a Paso)

### Opción 1: Desde GitHub (Recomendada)
1. Crea un nuevo repositorio en tu cuenta de GitHub (ejemplo: `pruebas-vercel`).
2. Sube el código local ejecutando los siguientes comandos en tu terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial Vercel Playground commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/pruebas-vercel.git
   git push -u origin main
   ```
3. Entra a [Vercel Import Dashboard](https://vercel.com/new).
4. Selecciona tu repositorio `pruebas-vercel`.
5. Haz clic en **Deploy**. ¡Vercel detectará la configuración automáticamente y te entregará una URL publica HTTPS en segundos!

---

### Opción 2: Usando Vercel CLI (Línea de Comandos)
Si tienes instalado Node.js o el CLI de Vercel:
```bash
npx vercel
```
Sigue las instrucciones en la pantalla para enlazar con tu cuenta de Vercel y desplegar directamente desde la consola.

---

## 🧪 Pruebas que puedes realizar una vez desplegado

* **Ver tu ubicación según la CDN Edge de Vercel**: Presiona el botón *"Probar Geolocalización Edge"* en el dashboard para ver tu país y ciudad detectados por las cabeceras de Vercel.
* **Probar APIs Serverless**: Haz clic en `GET /api/time` o `POST /api/echo` para verificar las respuestas Serverless.
* **Probar Rewrites**: Ingresa a `TU_DOMINIO_VERCEL.app/ping` en tu navegador para comprobar cómo `vercel.json` reescribe la ruta sin cambiar la URL.

---

## 📄 Licencia
MIT - Siéntete libre de modificar este código para tus propios proyectos.
