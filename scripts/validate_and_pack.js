const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ENTIDADES = [
  'persona',
  'usuario',
  'rol',
  'accion',
  'funcionalidad',
  'funcionalidad_accion',
  'rolaccionfuncionalidad'
];

const DIR_ET1 = path.join(__dirname, '../ET1/ET1_UI262708');

console.log("=== INICIANDO VALIDACIÓN ESTÁTICA PARA ET1_UI262708 ===");

let hasErrors = false;

// 1. Validar presencia de ficheros
ENTIDADES.forEach(entidad => {
  const file = path.join(DIR_ET1, `${entidad}_tests.js`);
  if (!fs.existsSync(file)) {
    console.error(`Faltante archivo obligatorio: ${entidad}_tests.js`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error("Abortando: Corrige los archivos faltantes.");
  process.exit(1);
}

// 2. Validar sintaxis y correlatividad de IDs en variables
ENTIDADES.forEach(entidad => {
  const filePath = path.join(DIR_ET1, `${entidad}_tests.js`);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Evaluar en contexto aislado para extraer las variables
  const sandbox = {};
  try {
    eval(`
      (function() {
        ${content};
        sandbox.def = typeof ${entidad}_def_tests !== 'undefined' ? ${entidad}_def_tests : null;
        sandbox.pruebas = typeof ${entidad}_pruebas !== 'undefined' ? ${entidad}_pruebas : null;
      })()
    `);
  } catch (err) {
    console.error(`Error de sintaxis JS en ${entidad}_tests.js:`, err.message);
    hasErrors = true;
    return;
  }

  // Verificar arrays
  if (!sandbox.def || !Array.isArray(sandbox.def)) {
    console.error(` '${entidad}_def_tests' no está definido o no es un Array.`);
    hasErrors = true;
  } else {
    // Validar orden secuencial en def_tests (índice 3)
    sandbox.def.forEach((item, index) => {
      const expectedId = index + 1;
      const actualId = item[3];
      if (actualId !== expectedId) {
        console.error(`[${entidad}_def_tests] Salto de ID en fila ${index}. Esperado: ${expectedId}, Encontrado: ${actualId}`);
        hasErrors = true;
      }
    });
  }

  if (!sandbox.pruebas || !Array.isArray(sandbox.pruebas)) {
    console.error(` '${entidad}_pruebas' no está definido o no es un Array.`);
    hasErrors = true;
  } else {
    // Validar orden secuencial en pruebas (índice 3)
    sandbox.pruebas.forEach((item, index) => {
      const expectedId = index + 1;
      const actualId = item[3];
      if (actualId !== expectedId) {
        console.error(`[${entidad}_pruebas] Salto de ID en prueba ${index}. Esperado: ${expectedId}, Encontrado: ${actualId}`);
        hasErrors = true;
      }
    });
  }
});

if (hasErrors) {
  console.error(" La validación ha fallado. Revisa la secuencia de los IDs antes de empaquetar.");
  process.exit(1);
}

console.log("Validación de IDs y sintaxis correcta. Generando ET1_UI262708.rar...");

// 3. Generar archivo .rar
try {
  const targetRar = path.join(__dirname, '../ET1/ET1_UI262708.rar');
  if (fs.existsSync(targetRar)) fs.unlinkSync(targetRar);

  // Comando WinRAR / rar / 7z según SO
  execSync(`rar a -r "${targetRar}" "${DIR_ET1}"`, { stdio: 'inherit' });
  console.log(" ¡Empaquetado completado con éxito! Archivo: ET1_UI262708.rar");
} catch (e) {
  console.log("Si el comando 'rar' falla en tu CLI, comprime manualmente la carpeta 'ET1_UI262708' en formato .rar desde tu gestor de archivos.");
}