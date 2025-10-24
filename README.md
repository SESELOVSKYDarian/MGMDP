# Clon Frontend de MG Argentina

Este proyecto replica la experiencia visual del sitio [mgargentina.ar](https://mgargentina.ar/) utilizando React y Vite. Incluye una landing page completa con encabezado fijo, hero inmersivo, presentación de modelos, secciones de tecnología y experiencia, además de un banner de llamado a la acción y pie de página corporativo.

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Instalación

1. Cloná este repositorio.
2. Instalá las dependencias del proyecto:

   ```bash
   npm install
   ```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo de Vite en `http://localhost:5173`.
- `npm run build`: genera la versión optimizada para producción en la carpeta `dist`.
- `npm run preview`: sirve la build de producción para validación local.

## Estructura principal

```
.
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── ModelsShowcase.jsx
│       ├── TechnologySection.jsx
│       ├── ExperienceSection.jsx
│       ├── CtaBanner.jsx
│       └── Footer.jsx
└── vite.config.js
```

## Personalización

- Todas las imágenes de fondo provienen de Pexels y se pueden reemplazar modificando las URLs definidas en los componentes o en las reglas CSS.
- Los contenidos de texto están en español rioplatense y pueden actualizarse directamente en los componentes correspondientes.

## Deploy

1. Ejecutá `npm run build` para generar la carpeta `dist`.
2. Subí el contenido de `dist` a tu servicio de hosting estático preferido (Vercel, Netlify, GitHub Pages, etc.).

---

Creado con ❤ para recrear la experiencia MG Argentina con tecnologías modernas.
