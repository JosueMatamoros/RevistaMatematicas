# Documentación Técnica del Proyecto
## Revista de Matemáticas – Estructura y Mantenimiento
**Versión:** 1.0
**Autor:** Josué Matamoros Fernandez

---

# Índice

1. [Introducción](#introduccion)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [app](#app)
4. [components](#components)
5. [data](#data)
6. [lib](#lib)

---

<h1 id="introduccion">Introducción</h1>

> [!NOTE]
> Este documento describe la arquitectura general del proyecto, su organización interna y el propósito de cada carpeta principal.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat nibh sed libero dictum, vitae elementum ipsum aliquet.

---

<h1 id="estructura-del-proyecto">Estructura del Proyecto</h1>

> [!TIP]
> El siguiente árbol muestra la estructura completa del proyecto. Cada elemento contiene un enlace que dirige a una sección descriptiva más abajo.

### Vista general

<pre>
src/
├─ <a href="#app">app</a>
│  ├─ <a href="#articulos">Articulos</a>
│  │  ├─ <a href="#vol">[vol]</a>
│  │  │  └─ <a href="#issue">[issue]</a>
│  │  │      ├─ <a href="#slug">[slug]</a>
│  │  │      │   └─ <a href="#pagejsx">page.jsx</a>
│  │  │      └─ <a href="#pagejsx">page.jsx</a>
│  │  └─ <a href="#pagejsx">page.jsx</a>
│  ├─ <a href="#fonts">fonts</a>
│  ├─ <a href="#libros">libros</a>
│  │  ├─ <a href="#id">[id]</a>
│  │  │  └─ <a href="#pagejsx">page.jsx</a>
│  │  └─ <a href="#pagejsx">page.jsx</a>
│  ├─ <a href="#materialdidactico">materialdidactico</a>
│  ├─ <a href="#paginasgenerales">paginasgenerales</a>
│  │  ├─ <a href="#declaracionoriginalidad">declaracionoriginalidad</a>
│  │  │  └─ <a href="#pagejsx">page.jsx</a>
│  │  ├─ <a href="#equipoeditorial">equipoeditorial</a>
│  │  │  └─ <a href="#pagejsx">page.jsx</a>
│  │  ├─ <a href="#instrucciones">instrucciones</a>
│  │  │  └─ <a href="#pagejsx">page.jsx</a>
│  │  ├─ <a href="#politicaeditorial">politicaeditorial</a>
│  │  │  └─ <a href="#pagejsx">page.jsx</a>
│  │  └─ <a href="#sobrelarevista">sobrelarevista</a>
│  │      └─ <a href="#pagejsx">page.jsx</a>
├─ <a href="#components">components</a>
│  ├─ <a href="#articles">articles</a>
│  │  ├─ <a href="#articlepagejsx">ArticlePage.jsx</a>
│  │  ├─ <a href="#articleslistjsx">ArticlesList.jsx</a>
│  │  └─ <a href="#breadcrumbnavjsx">BreadcrumbNav.jsx</a>
│  ├─ <a href="#books">books</a>
│  │  ├─ <a href="#bookpagejsx">BookPage.jsx</a>
│  │  └─ <a href="#bookslistjsx">BooksList.jsx</a>
│  ├─ <a href="#common">common</a>
│  │  ├─ <a href="#personcardjsx">PersonCard.jsx</a>
│  │  └─ <a href="#searchbarjsx">SearchBar.jsx</a>
│  └─ <a href="#home">home</a>
│      ├─ <a href="#footercomponentjsx">FooterComponent.jsx</a>
│      ├─ <a href="#headercomponentjsx">HeaderComponent.jsx</a>
│      ├─ <a href="#indexingcardsjsx">IndexingCards.jsx</a>
│      ├─ <a href="#navscomponentjsx">NavsComponent.jsx</a>
│      └─ <a href="#sidebarcomponentjsx">SidebarComponent.jsx</a>
├─ <a href="#data">data</a>
│  ├─ <a href="#equipodatajs">equipoData.js</a>
│  ├─ <a href="#informacionfaltantejson">informacionFaltante.json</a>
│  ├─ <a href="#issues">issues</a>
│  │  ├─ <a href="#n1_2025json">N1_2025.json</a>
│  │  └─ <a href="#issuesindexjs">index.js</a>
│  ├─ <a href="#librosdata">libros</a>
│  │  └─ <a href="#universitariajson">universitaria.json</a>
│  └─ <a href="#librosinteractivos">libros-interactivos</a>
│      ├─ <a href="#primariajson">primaria.json</a>
│      └─ <a href="#universitariajson">universitaria.json</a>
└─ <a href="#lib">lib</a>
   └─ <a href="#basepathjs">basePath.js</a>
</pre>

# Secciones por carpeta

<h1 id="app">app</h1>

> [!NOTE]
> Carpeta principal del proyecto. Contiene las páginas, rutas, vistas y entradas del framework.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

---

<h2 id="articulos">Articulos</h2>

> [!TIP]
> Contiene los artículos de cada volumen y número.

Lorem ipsum dolor sit amet consectetur adipiscing elit.

<h3 id="vol">[vol]</h3>

> Carpeta para cada volumen publicado.

Lorem ipsum…

<h3 id="issue">[issue]</h3>

> Contiene el número (issue) dentro de un volumen.

<h3 id="slug">[slug]</h3>

> Identificador único del artículo.

<h3 id="pagejsx">page.jsx</h3>

> Página de renderizado del artículo. Contenido editable.

---

<h2 id="fonts">fonts</h2>

> [!NOTE]
> Aquí se encuentran todas las fuentes utilizadas por la interfaz.

Lorem ipsum…

---

<h2 id="libros">libros</h2>

> [!TIP]
> Contenedor de libros digitales y su metadata.

<h3 id="id">[id]</h3>

Representa un identificador único para un libro.

---

<h2 id="materialdidactico">materialdidactico</h2>

> [!NOTE]
> Contiene material adicional de apoyo didáctico.

Lorem ipsum…

---

<h2 id="paginasgenerales">paginasgenerales</h2>

> [!IMPORTANT]
> Páginas estáticas que forman parte de la revista.

<h3 id="declaracionoriginalidad">declaracionoriginalidad</h3>
<h3 id="equipoeditorial">equipoeditorial</h3>
<h3 id="instrucciones">instrucciones</h3>
<h3 id="politicaeditorial">politicaeditorial</h3>
<h3 id="sobrelarevista">sobrelarevista</h3>

Todas estas secciones comparten estructura similar.
Lorem ipsum…

---

<h1 id="components">components</h1>

> [!NOTE]
> Componentes reutilizables de la interfaz.

<h2 id="articles">articles</h2>
<h3 id="articlepagejsx">ArticlePage.jsx</h3>
<h3 id="articleslistjsx">ArticlesList.jsx</h3>
<h3 id="breadcrumbnavjsx">BreadcrumbNav.jsx</h3>

Lorem ipsum…

<h2 id="books">books</h2>
<h3 id="bookpagejsx">BookPage.jsx</h3>
<h3 id="bookslistjsx">BooksList.jsx</h3>

<h2 id="common">common</h2>
<h3 id="personcardjsx">PersonCard.jsx</h3>
<h3 id="searchbarjsx">SearchBar.jsx</h3>

<h2 id="home">home</h2>
<h3 id="footercomponentjsx">FooterComponent.jsx</h3>
<h3 id="headercomponentjsx">HeaderComponent.jsx</h3>
<h3 id="indexingcardsjsx">IndexingCards.jsx</h3>
<h3 id="navscomponentjsx">NavsComponent.jsx</h3>
<h3 id="sidebarcomponentjsx">SidebarComponent.jsx</h3>

---

<h1 id="data">data</h1>

> [!NOTE]
> Almacena todos los datos estructurados del proyecto.

Lorem ipsum…

<h2 id="equipodatajs">equipoData.js</h2>
<h2 id="informacionfaltantejson">informacionFaltante.json</h2>

---

<h2 id="issues">issues</h2>

> [!NOTE]
> En esta sección se almacena toda la información correspondiente a los artículos publicados en cada edición de la revista.
> Cada archivo JSON representa un número completo del volumen y contiene la lista de artículos, sus metadatos y la información necesaria para generar las páginas dinámicas del sitio.

Los archivos dentro de esta carpeta siguen una convención estricta de nombres para asegurar orden, trazabilidad y compatibilidad con el sistema. El formato requerido es:

**V{volumen}_N{númeroDePublicación}_{año}.json**

Por ejemplo:
`V26_N1_2025.json`

Donde:
- **{volumen}** es el volumen al que pertenece la publicación.
- **{númeroDePublicación}** identifica si corresponde a la primera o segunda edición de ese volumen (1 o 2).
- **{año}** representa el año asociado a la edición.

Cada uno de estos archivos contiene una estructura estandarizada que permite al sistema interpretar correctamente la información.
A continuación, se muestra un esqueleto con las etiquetas que deben incluirse y una explicación de lo que debe colocarse en cada espacio:


<h3 id="n1_2025json">V26_N1_2025.json</h3>

```json
{
  "issueTitle": "Título completo del número de la revista. Debe incluir volumen, número y rango de fechas, por ejemplo: 'Volumen 26, Número 1, Agosto 2025 - Febrero 2026'.",

  "articles": [
    {
      "id": "Identificador numérico único del artículo. Debe respetar el orden en que se mostrará en la revista, ejemplo: 1, 2, 3...",

      "title": "Título original del artículo en español.",
      "title_en": "Título equivalente del artículo en inglés.",

      "volume": "Número de volumen al que pertenece este artículo. Ejemplo: 26.",
      "number": "Número de edición dentro del volumen. Ejemplo: 1 para primera edición, 2 para segunda edición.",

      "language": "Idioma original del artículo, tal como 'es', 'en' o 'pt'.",
      "published": "Fecha oficial de publicación con formato 'YYYY-MM-DD'.",

      "authors": [
        {
          "name": "Nombre completo del autor tal como aparece en la publicación.",
          "email": "Correo de contacto institucional o personal del autor.",
          "university": "Nombre de la universidad o institución del autor.",
          "location": "Ubicación geográfica de la institución, por ejemplo 'Heredia, Costa Rica'.",
          "orcid": "Enlace ORCID del autor. Si no existe, dejar vacío o eliminar el campo."
        }
        /* Si hay más autores, se agregan aquí, siempre separados por coma */
      ],

      "category": "Categoría del artículo dentro de la revista. Ejemplos: 'Investigación', 'Didáctica', 'Divulgación'.",

      "slug": "Ruta relativa donde se generará la página dinámica del artículo. Debe coincidir exactamente con la estructura interna, por ejemplo: 'Articulos/V26/N1_2025/Apellido'.",

      "pdf": "Ruta relativa del PDF del artículo dentro de la carpeta /public. Debe coincidir exactamente con el archivo almacenado. Ejemplo: '/Articulos/V26/N1_2025/Apellido/Archivo.pdf'.",

      "doi": "Identificador DOI oficial asignado al artículo. Ejemplo: 'https://doi.org/...'.",

      "received": "Fecha en que se recibió el artículo por primera vez. Mantiene el formato narrativo original enviado por los editores.",
      "accepted": "Fecha en que el artículo fue aceptado oficialmente tras revisión.",

      "abstract_es": "Resumen descriptivo del artículo en español.",
      "abstract_en": "Resumen equivalente del artículo en inglés.",
      "abstract_pt": "Resumen equivalente del artículo en portugués. Opcional, pero recomendado para estandarización.",

      "keywords_es": [
        "Lista de palabras clave en español relacionadas con el contenido."
      ],
      "keywords_en": [
        "Lista de palabras clave equivalentes en inglés."
      ],
      "keywords_pt": [
        "Lista de palavras-chave equivalentes em português."
      ],

      "citation": "Formato completo de citación oficial del artículo, normalmente siguiendo el estilo APA. Debe incluir autores, fecha, título, revista, volumen, número y DOI."
    }
  ]
}
```


<h3 id="issuesindexjs">index.js</h3>

---

<h2 id="librosdata">libros</h2>
<h3 id="universitariajson">universitaria.json</h3>

<h2 id="librosinteractivos">libros-interactivos</h2>
<h3 id="primariajson">primaria.json</h3>

---

<h1 id="lib">lib</h1>

<h2 id="basepathjs">basePath.js</h2>

> Define rutas base internas del proyecto.

Lorem ipsum…
