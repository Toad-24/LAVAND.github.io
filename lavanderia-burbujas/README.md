# Lavandería Burbujas 🫧

Sitio web profesional para **Lavandería Burbujas**, construido con HTML5, CSS3 y JavaScript puro (sin frameworks ni dependencias de build). Funciona abriendo directamente `index.html` y está listo para publicarse en **GitHub Pages**.

---

## 📁 Estructura del proyecto

```
lavanderia-burbujas/
│
├── index.html              → Página principal (todo el contenido y secciones)
├── README.md                → Este archivo
├── assets/
│   ├── images/               → Todas las imágenes del sitio (ver abajo cómo reemplazarlas)
│   │   ├── hero-lavanderia.jpg
│   │   ├── lavanderia.jpg
│   │   ├── servicio-lavado.jpg
│   │   ├── servicio-planchado.jpg
│   │   └── servicio-secado.jpg
│   └── icons/
│       └── favicon.svg       → Ícono de la pestaña del navegador
├── css/
│   └── style.css             → Todos los estilos (colores, tipografía, responsive, animaciones)
└── js/
    └── script.js             → Menú móvil, WhatsApp, animaciones al hacer scroll
```

---

## 🖼️ Cómo cambiar las imágenes (incluye imágenes generadas con IA)

Las imágenes actuales son **imágenes de ejemplo** (con la marca de agua "Imagen de ejemplo") generadas para que el sitio se vea completo desde el primer momento. Debes reemplazarlas por tus propias fotos o por imágenes generadas con inteligencia artificial.

**Para cambiar una imagen, entra a `assets/images/` y reemplaza el archivo manteniendo el mismo nombre y formato.**

| Archivo a reemplazar | Dónde se usa | Tamaño recomendado |
|---|---|---|
| `assets/images/hero-lavanderia.jpg` | Imagen principal de la portada (Hero) | 1600×1200 px aprox., formato horizontal |
| `assets/images/lavanderia.jpg` | Imagen grande de la sección intermedia | 1400×1000 px aprox., formato horizontal |
| `assets/images/servicio-lavado.jpg` | Reservada para uso futuro en servicios | 900×900 px, formato cuadrado |
| `assets/images/servicio-planchado.jpg` | Reservada para uso futuro en servicios | 900×900 px, formato cuadrado |
| `assets/images/servicio-secado.jpg` | Reservada para uso futuro en servicios | 900×900 px, formato cuadrado |

**Pasos:**

1. Genera o consigue tu imagen (por ejemplo, con una herramienta de IA: lavadoras modernas, ropa limpia, burbujas, agua, etc.).
2. Guárdala en formato `.jpg` (o cambia la extensión en el HTML si usas `.png` o `.webp`).
3. Ponle **exactamente el mismo nombre** del archivo que estás reemplazando (por ejemplo `hero-lavanderia.jpg`).
4. Cópiala dentro de la carpeta `assets/images/`, reemplazando el archivo existente.
5. Recarga la página — no necesitas tocar ningún código.

Si quieres **agregar una imagen nueva** (por ejemplo, para mostrar tarjetas de servicio con foto), simplemente:

1. Coloca el archivo en `assets/images/` (por ejemplo `assets/images/nueva-foto.jpg`).
2. En `index.html`, agrega una etiqueta `<img src="assets/images/nueva-foto.jpg" alt="Descripción de la imagen">` donde quieras que aparezca.

---

## 🎨 Cómo personalizar el sitio

### 1. Nombre del negocio
Busca en `index.html` el bloque comentado:
```html
<!-- ==============================================
     DATOS DEL NEGOCIO — MODIFICAR AQUÍ
=================================================== -->
```
Y reemplaza el texto "Lavandería Burbujas" donde aparezca (navbar, hero, footer, etc.).

### 2. Número de WhatsApp
El número está centralizado en **un solo lugar** para que sea fácil de cambiar. Abre `js/script.js` y edita esta línea al inicio del archivo:

```js
const WHATSAPP_NUMBER = "51970208167"; // +51 970 208 167
```

Al cambiar este valor, **todos los botones de WhatsApp de la página se actualizan automáticamente** (navbar, hero, sección "Nuestros servicios", CTA, contacto y el botón flotante).

También puedes cambiar el mensaje predeterminado editando:
```js
const WHATSAPP_DEFAULT_MESSAGE = "Hola, Lavandería Burbujas. Quisiera información sobre sus servicios.";
```

### 3. Imágenes
Ver la sección **"Cómo cambiar las imágenes"** más arriba.

### 4. Servicios
En `index.html`, busca la sección `<section class="section" id="servicios">`. Cada servicio es una tarjeta `<article class="card">`. Puedes editar el ícono (clase de Font Awesome, ej. `fa-solid fa-soap`), el título y la descripción, o duplicar una tarjeta para agregar un nuevo servicio.

### 5. Textos generales
Todos los textos (títulos, subtítulos, beneficios, pasos de "¿Cómo funciona?") están directamente en `index.html`, en español y listos para editar sin necesidad de tocar el CSS ni el JS.

### 6. Colores
Todos los colores del sitio están centralizados como variables en la parte superior de `css/style.css`:

```css
:root {
  --color-bg: #fbfeff;
  --color-bg-alt: #eaf6fa;
  --color-primary: #0e7c9c;
  --color-primary-dark: #075872;
  --color-accent: #5fd0e8;
  --color-ink: #0b2530;
  --color-whatsapp: #25d366;
  ...
}
```
Cambia estos valores para ajustar la paleta de colores en todo el sitio de una sola vez.

### 7. Horarios
Actualmente el sitio **no muestra horarios** porque no fueron proporcionados. Hay un espacio ya preparado en la sección de contacto (`<div class="contact__card">`) donde puedes reemplazar el texto "Próximamente..." por tu horario real de atención.

### 8. Dirección física
No se incluyó una dirección porque no fue proporcionada. Si deseas agregarla, ve a la sección de contacto en `index.html` (`<ul class="contact__list">`) y agrega un nuevo elemento `<li>` siguiendo el mismo estilo que el de WhatsApp, por ejemplo:

```html
<li>
  <i class="fa-solid fa-location-dot"></i>
  <span>Dirección: [tu dirección aquí]</span>
</li>
```

### 9. Redes sociales
Tampoco se incluyeron porque no fueron proporcionadas. Puedes agregarlas fácilmente en el `<footer>` como nuevos enlaces con ícono de Font Awesome (por ejemplo `fa-brands fa-instagram`).

---

## 🚀 Cómo publicar el sitio en GitHub Pages

1. **Crea un repositorio en GitHub**
   - Entra a [github.com](https://github.com) e inicia sesión.
   - Haz clic en **New repository**.
   - Ponle un nombre, por ejemplo `lavanderia-burbujas`.
   - Déjalo en público y crea el repositorio (sin agregar README, ya que ya tienes uno).

2. **Sube los archivos del proyecto**
   - Opción sencilla desde el navegador: entra a tu repositorio → botón **Add file → Upload files** → arrastra toda la carpeta `lavanderia-burbujas` (o su contenido) → **Commit changes**.
   - Opción con Git (línea de comandos), desde dentro de la carpeta del proyecto:
     ```bash
     git init
     git add .
     git commit -m "Primer despliegue de Lavandería Burbujas"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/lavanderia-burbujas.git
     git push -u origin main
     ```

3. **Activa GitHub Pages**
   - En tu repositorio, ve a **Settings** (Configuración).
   - En el menú lateral, entra a **Pages**.
   - En **Source**, selecciona la rama **`main`** y la carpeta **`/ (root)`**.
   - Haz clic en **Save**.

4. **Selecciona la rama `main`**
   - Confirma que en la sección **Pages** quedó seleccionada la rama `main` como fuente de publicación.

5. **Accede a tu página publicada**
   - Espera uno o dos minutos. GitHub mostrará un mensaje con la URL pública, normalmente:
     ```
     https://TU-USUARIO.github.io/lavanderia-burbujas/
     ```
   - Esa es la dirección que puedes compartir con tus clientes.

> 💡 Cada vez que subas cambios nuevos a la rama `main`, GitHub Pages actualizará la página automáticamente después de unos minutos.

---

## ✅ Buenas prácticas ya incluidas

- Botón de WhatsApp centralizado: un solo número controla todos los botones de la página.
- Diseño responsive: computadora, laptop, tablet y celular, con menú hamburguesa en pantallas pequeñas.
- Animaciones suaves y discretas (aparición al hacer scroll, hover en tarjetas y botones).
- Etiquetas `alt` descriptivas en todas las imágenes.
- Metadatos SEO básicos (`title`, `meta description`, Open Graph) y favicon propio.
- Sin dependencia de imágenes externas: todo el contenido visual vive dentro de `assets/images/`.
- No se inventó ninguna dirección, horario, precio ni red social: esos espacios están preparados para que los completes cuando tengas la información.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** semántico
- **CSS3** (variables, Grid, Flexbox, animaciones)
- **JavaScript** puro (sin frameworks)
- **Font Awesome** (íconos, vía CDN)
- **Google Fonts** — Outfit (títulos) e Inter (texto), vía CDN

No requiere `npm`, compiladores ni pasos de build: basta con abrir `index.html` en el navegador o publicarlo en GitHub Pages.
