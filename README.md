# Clon Frontend de MG Argentina

Este proyecto recrea la experiencia de navegación de [mgargentina.ar](https://mgargentina.ar/) utilizando React, Vite y React
Router. Incluye la landing principal con secciones modulares (modelos, cotización, tecnología, red de concesionarios y test
drive) más subpáginas dedicadas para toda la gama, MG World, MG Life, MG Care, pauta de mantenimiento y garantía/servicios.
También se incorporan fichas técnicas emergentes con animación y accesos directos a cotización y test drive.

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
│   ├── layouts
│   │   └── MainLayout.jsx
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ModelsShowcase.jsx
│   │   ├── CotizarSection.jsx
│   │   ├── TechnologySection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── CtaBanner.jsx
│   │   └── Footer.jsx
│   └── pages
│       ├── Home.jsx
│       ├── ModelsPage.jsx
│       ├── MgWorldPage.jsx
│       ├── MgLifePage.jsx
│       ├── MgCarePage.jsx
│       ├── MaintenancePage.jsx
│       └── WarrantyPage.jsx
└── vite.config.js
```

## Funcionalidades destacadas

- **Menú fijo responsive** con navegación entre secciones internas y subpáginas, más accesos rápidos para cotizar y test drive.
- **Sección de modelos** con tarjetas descriptivas, botón de cotización y fichas técnicas emergentes con animación sutil.
- **Módulo de cotización** que replica la grilla de modelos listos para solicitar propuesta comercial.
- **Subpáginas MG** con héroes temáticos y contenido editorial para MG World, MG Life, MG Care, mantenimiento y garantía.
- **Estilos premium y responsivos** basados en tipografía Montserrat, gradientes y rejillas adaptativas.

## Deploy

1. Ejecutá `npm run build` para generar la carpeta `dist`.
2. Subí el contenido de `dist` a tu servicio de hosting estático preferido (Vercel, Netlify, GitHub Pages, etc.).

---

Creado con ❤ para recrear la experiencia MG Argentina con tecnologías modernas.
