# Frontend del Juego Tres en Raya

Este documento describe el frontend del juego Tres en Raya, construido con Next.js y React.

## Tabla de Contenidos

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Interacción con el Backend](#interacción-con-el-backend)
- [Pruebas (Opcional)](#pruebas-opcional)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/): Framework de React para la creación de aplicaciones web con renderizado del lado del servidor.
- [React](https://react.dev/): Biblioteca de JavaScript para construir interfaces de usuario.
- [useCallback](https://react.dev/reference/react/useCallback): Hook de React para memoizar funciones.
- [useState](https://react.dev/reference/react/useState): Hook de React para gestionar el estado local.
- [useEffect](https://react.dev/reference/react/useEffect): Hook de React para gestionar efectos secundarios.
- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): Interfaz para realizar peticiones HTTP.

## Instalación

1. **Requisitos:** Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) (o [yarn](https://yarnpkg.com/)) instalados en tu sistema.
2. **Clonar el repositorio:** `git clone https://github.com/JesusLemos/frontend3enraya.git`
3. **Navegar al directorio del frontend:** `cd frontend3enraya`
4. **Instalar las dependencias:** `npm install` (o `yarn install`)

## Ejecución

1. **Navegar al directorio del frontend:** `cd frontend3enraya`
2. **Iniciar la aplicación en modo desarrollo:** `npm run dev`
   - Esto iniciará el servidor de desarrollo de Next.js (normalmente en `http://localhost:3000`).

## Estructura del Proyecto

frontend3enraya/
├── app/
│ ├── api/
│ │ ├── gameover/
│ │ │ └── route.js # API Route para /api/gameover del backend
│ │ ├── move/
│ │ │ └── route.js # API Route para /api/move del backend
│ │ └── ranking/
│ │ └── route.js # API Route para /api/ranking del backend
│ └── page.js # Componente principal de la interfaz de usuario
├── public/
│ └── ...
├── styles/
│ └── ...
├── package.json
├── package-lock.json
