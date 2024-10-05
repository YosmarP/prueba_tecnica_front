## Resumen de la Aplicación Frontend

### Estructura de la Aplicación
La aplicación está construida utilizando **AngularJS (Angular 1)** y se organiza en **componentes** y **directivas** para una mejor modularidad y reutilización del código.

### Componentes
- **newsItemComponent**: Muestra detalles de cada noticia. Utiliza `bindings` para recibir datos y ejecutar acciones específicas.
- **newsToggleButtonComponent**: Permite al usuario alternar entre las vistas de "Nuevas" y "Archivadas". Incluye métodos para determinar la ruta actual de la aplicación.

### Directivas
Se utilizaron **directivas personalizadas** para mejorar la interacción y el comportamiento de la interfaz, haciendo que la aplicación sea más dinámica y fácil de usar.

### Estilos
- **Bootstrap**: Utilizado para la maquetación y los estilos, asegurando que la aplicación sea responsiva y visualmente atractiva.
- **CSS Personalizado**: Se crearon estilos para diferenciar claramente las secciones de la aplicación, mejorar la legibilidad y proporcionar una mejor experiencia de usuario. Los estilos incluyen:
  - Diferenciación de colores para botones de acción.
  - Espaciado y márgenes consistentes para las tarjetas de noticias.

### Routing
Se implementó el **enrutamiento** utilizando AngularJS para manejar la navegación entre diferentes vistas de la aplicación, permitiendo una experiencia de usuario fluida y organizada.

### Variables de Entorno
Se utilizan variables de entorno para almacenar la dirección de la API. Asegúrate de crear un archivo `environment.js` en la carpeta `config` 

### Optimización y Mejores Prácticas
Se siguieron las **mejores prácticas** en la escritura de código, incluyendo la organización del código y la modularidad para asegurar la calidad del código.

### Despliegue
La aplicación está diseñada para ser fácilmente desplegable en servidores web, con rutas bien definidas y recursos organizados, lo que facilita su mantenimiento y escalabilidad.

### Iniciar un servidor estático para el frontend 
npx http-server