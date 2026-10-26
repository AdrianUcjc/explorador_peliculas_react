# Explorador de películas con React
Aplicación web con React + Vite que consume la API de The Movie Database. Permite buscar películas, ver las populares y gestionar favoritos guardados en `localStorage`.

## Requisitos

- Node.js 18 o superior
- Una API Key v3 de TMDB: https://www.themoviedb.org/settings/api

## Instalación

```bash
npm install
cp .env.example .env.local
```

Abre `.env.local` y sustituye el valor de `VITE_TMDB_API_KEY` por tu API Key:

```env
VITE_TMDB_API_KEY=tu_api_key_real
```

Después, inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la URL local en la terminal. Para comprobar la compilación de producción:

```bash
npm run build
npm run preview
```

## Funcionalidades

- Carga inicial de películas populares (`GET /movie/popular`).
- Búsqueda por título (`GET /search/movie`), con debounce para evitar peticiones por cada tecla.
- Indicadores de carga, estados vacíos y mensajes de error.
- Favoritos compartidos mediante Context API y persistidos en `localStorage`.
- Navegación con React Router: `/` y `/favorites`.
- Diseño adaptable a móvil, tableta y escritorio.

## Seguridad de la API Key

- `.env.local` y otros archivos `.env.*` están excluidos por `.gitignore`.
- `.env.example` se conserva en Git como plantilla sin secretos.
- Comprueba la exclusión con `git check-ignore -v .env.local`.
- No publiques una API Key real en el repositorio.

**Nota:** una variable `VITE_*` se incorpora al bundle del navegador y no es un secreto confidencial en una aplicación frontend. Para una protección más fuerte, utiliza un backend o proxy que mantenga la clave fuera del cliente y aplique límites de uso.

## Estructura

```text
src/
├── api/tmdb.js
├── components/
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── NavBar.jsx
│   └── Status.jsx
├── context/MovieContext.jsx
├── pages/
│   ├── Favorites.jsx
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── styles.css
```