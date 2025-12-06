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

> Representa ediciones completas de la revista.

<h3 id="n1_2025json">N1_2025.json</h3>

Lorem ipsum…

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
