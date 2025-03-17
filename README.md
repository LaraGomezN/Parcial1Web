# README - Parcial de React

## Instrucciones de Ejecución

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**

   ```sh
   git clone https://github.com/LaraGomezN/Parcial1Web
   cd src
   ```

2. **Instalar dependencias:**

   ```sh
   npm install
   ```

3. **Ejecutar la aplicación:**

   ```sh
   npm start
   ```

4. **Abrir en el navegador:** La aplicación se ejecutará en `http://localhost:3000/`.

## Reporte de Decisiones y Desarrollo

### Decisiones Tomadas

1. **Estructura del Proyecto:**

   - Se utilizó `create-react-app` para la configuración inicial.
   - Se organizó el código en carpetas según componentes y vistas.

2. **Estilización:**

   - Se empleó Tailwind CSS para facilitar el diseño y mantener una apariencia moderna y responsiva.
   - Se priorizó un diseño limpio y funcional.

3. **Gestión de Estado:**

   - Se usó el `useState` para manejar estados locales en algunos componentes.
   - Para compartir estados entre componentes, se utilizó el `useContext`.

4. **Componentización:**

   - Se dividieron las funcionalidades en componentes reutilizables para facilitar el mantenimiento.

### Componentes y Elementos de React Utilizados

1. **Componentes Funcionales:** Se usaron componentes funcionales con Hooks para una mejor legibilidad y mantenimiento.
2. **React Hooks:**
   - `useState` para manejar estados locales.
   - `useEffect` para efectos secundarios, como la carga de datos.
   - `useContext` para compartir datos globales.
3. **React Router:**
   - Se implementó `react-router-dom` para la navegación entre páginas.
4. **Componentes de UI:**
   - `Button`, `Card`, `Modal` creados como componentes reutilizables.
5. **Manejo de Listas y Renderizado Condicional:**
   - Uso de `.map()` para iterar sobre listas de datos.
   - Renderizado condicional basado en estados y propiedades.

## Conclusión

Este proyecto fue desarrollado siguiendo las mejores prácticas de React y asegurando modularidad en los componentes. Cualquier mejora o sugerencia es bienvenida.

