# 8-Puzzle: Rompecabezas Deslizante

Un juego de rompecabezas deslizante (8-Puzzle) desarrollado como aplicación de escritorio con tecnologías web y **Electron**.

Este proyecto fue creado especialmente para una jornada de puertas abiertas en nuestra institución, donde los estudiantes de nivel secundario visitaron el nivel terciario para conocer, probar e interactuar con los videojuegos desarrollados por nuestra clase bajo la guía del profesor **José Olivera**.

## Características Principales

* **Algoritmo de Mezcla Inteligente (100% Resoluble):** A diferencia de una mezcla aleatoria tradicional que puede generar tableros matemáticamente imposibles de resolver, el juego realiza 100 movimientos válidos simulados desde la posición inicial para garantizar que siempre exista una solución.

* **Cronómetro:** Mide el tiempo exacto en segundos que tarda el jugador en completar el desafío, ideal para fomentar la competencia amistosa durante el evento.

* **Aplicación de Escritorio:** Empaquetado con Electron para ejecutarse de forma nativa en una ventana dedicada de dimensiones fijas (`480x800`), optimizada para una experiencia de usuario limpia y sin distracciones.

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz y contenedor del tablero.

* **CSS3:** Diseño visual y disposición en cuadrícula *(requiere el archivo `styles.css`)*.

* **JavaScript (Vanilla):** Lógica del juego, manipulación del DOM, manejo de matrices bidimensionales y detección de victoria.

* **Electron:** Entorno de ejecución para convertir la aplicación web en un programa de escritorio multiplataforma.

* **Canvas Confetti:** Librería externa cargada vía CDN para los efectos visuales de victoria.

## Estructura del Proyecto

```
├── img/
│   ├── 1.png ... 8.png   # Piezas recortadas del rompecabezas
│   └── logo.jfif         # Imagen completa de referencia
├── index.html            # Interfaz principal de la aplicación
├── main.js               # Proceso principal de Electron (configuración de ventana)
├── script.js             # Lógica del tablero, movimientos, mezcla y temporizador
├── styles.css            # Estilos visuales del juego
└── package.json          # Dependencias y scripts de ejecución

```

## Instalación y Ejecución

Para ejecutar este proyecto de forma local en tu computadora, sigue estos pasos:

### Prerrequisitos

Tener instalado [Node.js](https://nodejs.org/) (que incluye `npm`).

### Pasos

1. **Clona este repositorio:**

   ```
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   
   ```

2. **Ingresa a la carpeta del proyecto:**

   ```
   cd nombre-del-repositorio
   
   ```

3. **Instala las dependencias (Electron):**

   ```
   npm install
   
   ```

4. **Inicia la aplicación:**

   ```
   npm start
   
   ```

   *(Nota: Si aún no tienes configurado el script en tu `package.json`, puedes ejecutar directamente `npx electron .` en la terminal).*

## Cómo Jugar

1. Haz clic en el botón **Empezar** para desplegar el tablero mezclado e iniciar el cronómetro.

2. Haz clic sobre cualquiera de las piezas adyacentes (arriba, abajo, izquierda o derecha) al espacio vacío para deslizarla.

3. Ordena las piezas tomando como guía la imagen superior hasta reconstruir el logo completo, dejando el espacio vacío en la esquina inferior derecha.

4. Si deseas volver a intentarlo o mejorar tu récord, presiona **Reiniciar** en cualquier momento.

## Contexto

* **Evento:** Muestra de proyectos de Nivel Terciario para estudiantes de Nivel Secundario.

* **Docente a cargo:** Prof. José Olivera.