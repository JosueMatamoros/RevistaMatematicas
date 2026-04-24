# Revista Matematica - Guia para Claude

## Jobs

Al iniciar una sesion, mostrar la lista de jobs disponibles:

```
Jobs disponibles:
1. Agregar un numero nuevo
```

---

### Job: Agregar un numero nuevo

**Trigger:** El usuario selecciona este job o pide agregar un nuevo numero/issue.

**Paso 1 - Pedir informacion:**
- Preguntar: "Cual es el nombre del issue? (ejemplo: V27_N1_2026)"
- El formato esperado es `V{volumen}_N{numero}_{ano}`

**Paso 2 - Validar convencion de anos en carpetas:**
La convencion de anos para las carpetas en `public/Articulos/` y los archivos JSON en `src/data/issues/` es:
- **N2** (segundo numero): el ano es **el mismo** que el volumen. Ejemplo: V22 -> N2_2022
- **N1** (primer numero): el ano es **el anterior** al volumen. Ejemplo: V22 -> N1_2021

Verificar que:
1. La carpeta en `public/Articulos/V{vol}/N{num}_{ano}/` exista y el ano sea correcto segun la regla.
2. El archivo JSON `src/data/issues/V{vol}_N{num}_{ano}.json` use el ano correcto.
3. Todos los `slug` dentro del JSON usen la ruta `Articulos/V{vol}/N{num}_{ano}/{Autor}` sin tildes.
4. El `id` en `src/data/issues/index.js` coincida con el nombre del JSON.
5. El campo `issueTitle` siga el formato largo: `"Volumen {vol}, Número {num}, {Mes_inicio} {ano_inicio} - {Mes_fin} {ano_fin}"`
   - Correcto: `"Volumen 22, Número 1, Agosto 2021 - Febrero 2022"`
   - Incorrecto: `"Vol 22, No 1. Agosto - Marzo, 2021"` (abreviado, sin años en cada mes)
   - Incorrecto: usar guión largo `−` en vez de guión simple `-`

Si algo no cumple, reportar el error y ofrecer corregirlo.

**Paso 3 - Validar PDFs:**
Para cada articulo en el JSON del issue:
1. El campo `pdf` debe tener el formato: `/Articulos/V{vol}/N{num}_{ano}/{Autor}/V{vol}_n{num}_{Autor}.pdf`
   - Ejemplo correcto: `/Articulos/V22/N2_2022/Jimenez/V22_n2_Jimenez.pdf`
   - `{Autor}` es el **primer apellido del primer autor**, sin tildes ni caracteres especiales.
   - Las carpetas y nombres de PDF **no deben tener tildes ni acentos** (ej: `Jimenez` no `Jiménez`, `Ramirez` no `Ramírez`).
2. Verificar que el archivo PDF **existe fisicamente** en `public/` + la ruta del campo `pdf`.
3. Si el nombre del PDF no sigue el formato `V{vol}_n{num}_{Autor}.pdf`, reportar y ofrecer renombrarlo.
4. Si la ruta en el JSON no coincide con el archivo en disco, reportar y ofrecer corregirla.
5. Si el nombre del autor en la carpeta o PDF tiene tildes, reportar y ofrecer renombrarlo sin tildes.

**Paso 4 - Validar index.js:**
Verificar que `src/data/issues/index.js`:
1. Tenga un `import` para el JSON del issue.
2. Tenga una entrada en el array `issues` con el `id`, `volume`, `number`, `date` y `data` correctos.
Si falta, ofrecer agregarlo.

**Paso 5 - Resumen:**
Mostrar un resumen de lo validado:
- Carpeta de articulos: OK / ERROR
- Archivo JSON: OK / ERROR
- Nombres de PDFs: OK / ERROR (listar cuales fallan)
- Rutas de PDFs en JSON: OK / ERROR (listar cuales fallan)
- PDFs existen en disco: OK / ERROR (listar cuales faltan)
- index.js: OK / ERROR
