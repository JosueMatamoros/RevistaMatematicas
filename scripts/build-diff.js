#!/usr/bin/env node
/**
 * build-diff.js
 *
 * Compara el contenido actual de `out/` con los checksums guardados del
 * último deploy. Muestra qué archivos subir a FileZilla.
 *
 * Uso:
 *   npm run diff          → ver archivos que cambiaron
 *   npm run diff -- --save → guardar checksums (ejecutar DESPUÉS de subir)
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const OUT_DIR = path.resolve(__dirname, "../out");
const CHECKSUMS_FILE = path.resolve(__dirname, "../.build-checksums.json");
const SAVE_MODE = process.argv.includes("--save");

// Calcula el MD5 de un archivo
function md5(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(content).digest("hex");
}

// Recorre recursivamente el directorio y devuelve { "ruta/relativa": "hash" }
function scanDir(dir, baseDir = dir) {
  const result = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      Object.assign(result, scanDir(fullPath, baseDir));
    } else {
      result[relPath] = md5(fullPath);
    }
  }
  return result;
}

// ── Guardar checksums ────────────────────────────────────────────────────────
if (SAVE_MODE) {
  console.log("Escaneando out/ y guardando checksums...");
  const current = scanDir(OUT_DIR);
  fs.writeFileSync(CHECKSUMS_FILE, JSON.stringify(current, null, 2));
  console.log(`✓ Checksums guardados (${Object.keys(current).length} archivos)`);
  console.log(`  Archivo: .build-checksums.json`);
  process.exit(0);
}

// ── Comparar con el build anterior ──────────────────────────────────────────
if (!fs.existsSync(CHECKSUMS_FILE)) {
  console.log("No hay checksums guardados aún.");
  console.log("Esto parece ser el primer deploy.");
  console.log("");
  console.log("→ Sube TODO el contenido de out/ a FileZilla.");
  console.log("");
  console.log("Cuando termines de subir, ejecuta:");
  console.log("  npm run diff -- --save");
  process.exit(0);
}

console.log("Escaneando out/...");
const current = scanDir(OUT_DIR);
const previous = JSON.parse(fs.readFileSync(CHECKSUMS_FILE, "utf8"));

const added = [];
const modified = [];
const deleted = [];

// Archivos nuevos o modificados
for (const [file, hash] of Object.entries(current)) {
  if (!(file in previous)) {
    added.push(file);
  } else if (previous[file] !== hash) {
    modified.push(file);
  }
}

// Archivos eliminados
for (const file of Object.keys(previous)) {
  if (!(file in current)) {
    deleted.push(file);
  }
}

const totalChanges = added.length + modified.length + deleted.length;

if (totalChanges === 0) {
  console.log("✓ Sin cambios — el servidor ya está actualizado.");
  process.exit(0);
}

// ── Reporte ──────────────────────────────────────────────────────────────────
console.log("");
console.log("═══════════════════════════════════════════════════════");
console.log("  ARCHIVOS QUE DEBES SUBIR A FILEZILLA");
console.log("═══════════════════════════════════════════════════════");

if (added.length > 0) {
  console.log(`\n[NUEVOS] (${added.length} archivos)`);
  added.forEach((f) => console.log(`  + ${f}`));
}

if (modified.length > 0) {
  console.log(`\n[MODIFICADOS] (${modified.length} archivos)`);
  modified.forEach((f) => console.log(`  ~ ${f}`));
}

if (deleted.length > 0) {
  console.log(`\n[ELIMINADOS del servidor] (${deleted.length} archivos)`);
  deleted.forEach((f) => console.log(`  - ${f}`));
}

console.log("");
console.log("═══════════════════════════════════════════════════════");
console.log(`  Total: ${totalChanges} archivo(s) a actualizar`);
console.log("═══════════════════════════════════════════════════════");
console.log("");
console.log("Cuando termines de subir los archivos, ejecuta:");
console.log("  npm run diff -- --save");
console.log("");

// Exportar lista a txt para referencia
const lines = [
  "ARCHIVOS A SUBIR - " + new Date().toLocaleString("es-CR"),
  "",
];
if (added.length) lines.push("[NUEVOS]", ...added.map((f) => "+ " + f), "");
if (modified.length) lines.push("[MODIFICADOS]", ...modified.map((f) => "~ " + f), "");
if (deleted.length) lines.push("[ELIMINAR DEL SERVIDOR]", ...deleted.map((f) => "- " + f), "");

fs.writeFileSync(
  path.resolve(__dirname, "../upload-list.txt"),
  lines.join("\n")
);
console.log("Lista también guardada en: upload-list.txt");
