# Clon Frontend de MG Argentina

Este proyecto recrea la experiencia de navegación de [mgargentina.ar](https://mgargentina.ar/) utilizando React, Vite y React
Router. Incluye la landing principal con hero slider, secciones modulares (modelos, cotización, tecnología, red de
concesionarios y test drive) más subpáginas dedicadas para Modelos, MG World, MG Life, MG Care, Servicios, Pauta de
mantenimiento y Garantía. También se incorporan fichas técnicas emergentes con animación y accesos directos a cotizar.

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
│       ├── ServicesPage.jsx
│       ├── MaintenancePage.jsx
│       └── WarrantyPage.jsx
└── vite.config.js
```

## Funcionalidades destacadas

- **Navbar fijo responsive** replicando la jerarquía del sitio oficial: logo con retorno al home, submenús MG World/MG Care y botón "Cotizá tu MG".
- **Sección de modelos** con tarjetas descriptivas, botón de cotización y fichas técnicas emergentes con animación sutil.
- **Hero slider** con tres destacados MG (ZS EV, GT, HS), navegación por flechas, indicadores y autoplay accesible.
- **Módulo de cotización** que replica la grilla de modelos listos para solicitar propuesta comercial.
- **Subpáginas MG** con héroes temáticos y contenido editorial para MG World, MG Life, MG Care, Servicios, Pauta de mantenimiento y Garantía.
- **Estilos premium y responsivos** basados en tipografía Montserrat, gradientes y rejillas adaptativas.

## Deploy

1. Ejecutá `npm run build` para generar la carpeta `dist`.
2. Subí el contenido de `dist` a tu servicio de hosting estático preferido (Vercel, Netlify, GitHub Pages, etc.).

---

Creado con ❤ para recrear la experiencia MG Argentina con tecnologías modernas.
