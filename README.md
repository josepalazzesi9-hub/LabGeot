# MapAPELL — Visor Geoespacial APELL Bahía Blanca

[![Proceso APELL](https://img.shields.io/badge/APELL-Bahía%20Blanca-2e7d32)](https://web.client/index.html)

**MapAPELL** es un visor cartográfico interactivo desarrollado para el **Proceso APELL Bahía Blanca** (Awareness and Preparedness for Emergencies at Local Level). Permite consultar, visualizar y descargar capas geoespaciales relacionadas con la gestión del riesgo y la respuesta ante emergencias en el área del Polo Petroquímico de Bahía Blanca.

## 🗺️ Funcionalidades

- Visualización de capas GeoJSON sobre mapa interactivo (Leaflet.js)
- Capas temáticas:
  - **Barrios Proceso APELL** — Polígonos de los barrios del área de influencia
  - **Centros de Evacuados** — Refugios y puntos de concentración durante emergencias
  - **Centros de Salud** — Infraestructura de salud pública (Hospitales, Unidades Sanitarias, CAPS, Salas Médicas)
  - **Comedores Comunitarios** — Puntos de asistencia alimentaria
  - **Establecimientos Deportivos** — Clubes e instalaciones como zonas de concentración masiva
  - **Respuesta Primaria** — Bomberos, policía, defensa civil y atención médica
- Búsqueda global por nombre de ubicación
- Filtro de capas en el panel lateral
- Selector de mapa base (Carto Light, OSM, Google Streets, Google Satélite)
- Portal de descargas en formato GeoJSON

## 📁 Estructura

```
web/client/
├── index.html          # Visor principal del mapa
├── descargas.html      # Portal de descargas de capas
└── data/
    ├── barrios.js      # Datos GeoJSON - Barrios APELL
    ├── centros.js      # Datos GeoJSON - Centros de evacuados
    ├── centros_salud.js # Datos GeoJSON - Centros de Salud (EPSG:4326)
    ├── comedores.js    # Datos GeoJSON - Comedores comunitarios (EPSG:4326)
    ├── deportivos.js   # Datos GeoJSON - Establecimientos deportivos
    ├── respuesta.js    # Datos GeoJSON - Respuesta primaria (EPSG:4326)
    └── *.json/*.geojson # Archivos GeoJSON originales para descarga
```

## 🚀 Uso

El proyecto es completamente estático (HTML + JS + CSS). Para ejecutarlo localmente:

```bash
# Con Python
python -m http.server 8080

# Con Node.js
npx serve .

# O simplemente abrí index.html en tu navegador
```

Para publicarlo en la web, bastará con subir la carpeta `web/client/` a cualquier servicio de hosting estático (GitHub Pages, Netlify, Vercel, etc.).

## 🛠️ Tecnologías

- [Leaflet.js](https://leafletjs.com/) v1.9.4 — Librería de mapas interactivos
- [Proj4js](https://proj4js.org/) v2.9.0 — Transformación de proyecciones cartográficas
- [Font Awesome](https://fontawesome.com/) 6.4.0 — Iconografía
- [Google Fonts](https://fonts.google.com/) — Tipografía (Roboto)

## 📦 Datos

Los datos geoespaciales son producidos y mantenidos por el **Laboratorio de Geotecnologías (LabGeot)** — Mateo Asensi y colaboradores.

Las capas se proveen en formato GeoJSON y pueden descargarse libremente desde el [Portal de Descargas](web/client/descargas.html).

## 📄 Licencia

Datos y código © Proceso APELL Bahía Blanca / LabGeot. Uso libre con atribución.
