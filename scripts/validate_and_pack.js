const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CODIGO_GRUPO = 'ET1_UI262708';
const DIR_ET1 = path.join(__dirname, `../ET1/${CODIGO_GRUPO}`);

const ENTIDADES = [
  'persona',
  'usuario',
  'rol',
  'accion',
  'funcionalidad'
];

console.log(`=== INICIANDO VALIDACIÓN ESTÁTICA PARA ${CODIGO_GRUPO} ===\n`);

let hasErrors = false;

// 1. Validar presencia del directorio de entrega
if (!fs.existsSync(DIR_ET1)) {
  console.error(` Error: El directorio '${DIR_ET1}' no existe.`);
  process.exit(1);
}

// 2. Validar fichero de datos generales (ET1_CodigoGrupo.js)
const mainGroupFile = path.join(DIR_ET1, `${CODIGO_GRUPO}.js`);
if (!fs.existsSync(mainGroupFile)) {
  console.error(` Error: Faltante archivo principal de grupo: ${CODIGO_GRUPO}.js`);
  hasErrors = true;
} else {
  const content = fs.readFileSync(mainGroupFile, 'utf-8');
  if (!content.includes('datosgenerales')) {
    console.error(` Error: ${CODIGO_GRUPO}.js debe contener la variable 'datosgenerales'.`);
    hasErrors = true;
  }
}

// 3. Validar presencia de ficheros por entidad
ENTIDADES.forEach(entidad => {
  const file = path.join(DIR_ET1, `${entidad}_tests.js`);
  if (!fs.existsSync(file)) {
    console.error(` Error: Faltante archivo obligatorio: ${entidad}_tests.js`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error("\n Abortando: Falta algún archivo obligatorio.");
  process.exit(1);
}

// 4. Validar sintaxis, estructura, acciones y correlatividad de IDs
ENTIDADES.forEach(entidad => {
  const filePath = path.join(DIR_ET1, `${entidad}_tests.js`);
  const content = fs.readFileSync(filePath, 'utf-8');

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
    console.error(` Error de sintaxis JS en ${entidad}_tests.js:`, err.message);
    hasErrors = true;
    return;
  }

  // --- Validar ${entidad}_def_tests ---
  if (!sandbox.def || !Array.isArray(sandbox.def)) {
    console.error(` '${entidad}_def_tests' no está definido o no es un Array (revisa la 's' final).`);
    hasErrors = true;
  } else {
    sandbox.def.forEach((item, index) => {
      const expectedId = index + 1;
      const actualId = item[3];

      // Estructura (9 campos requeridos)
      if (!Array.isArray(item) || item.length !== 9) {
        console.error(`[${entidad}_def_tests] Fila ${index + 1}: Debe tener exactamente 9 elementos (encontrados: ${item ? item.length : 0}).`);
        hasErrors = true;
      }

      // Correlatividad
      if (actualId !== expectedId) {
        console.error(`[${entidad}_def_tests] Salto de ID en fila ${index + 1}. Esperado: ${expectedId}, Encontrado: ${actualId}`);
        hasErrors = true;
      }

      // Tipo de dato en resultado esperado
      if (item[7] === 'true') {
        console.error(`[${entidad}_def_tests] Fila ${index + 1}: El resultado esperado es el string 'true' en vez del booleano true.`);
        hasErrors = true;
      }
    });
  }

  // --- Validar ${entidad}_pruebas ---
  if (!sandbox.pruebas || !Array.isArray(sandbox.pruebas)) {
    console.error(` '${entidad}_pruebas' no está definido o no es un Array.`);
    hasErrors = true;
  } else {
    sandbox.pruebas.forEach((item, index) => {
      const expectedId = index + 1;
      const actualId = item[3];
      const refDefId = item[2];
      const accionPrueba = item[4];

      // Estructura (7 campos requeridos)
      if (!Array.isArray(item) || item.length !== 7) {
        console.error(`[${entidad}_pruebas] Prueba ${index + 1}: Debe tener exactamente 7 elementos (encontrados: ${item ? item.length : 0}).`);
        hasErrors = true;
      }

      // Correlatividad de num_prueba (índice 3)
      if (actualId !== expectedId) {
        console.error(`[${entidad}_pruebas] Salto de ID en prueba ${index + 1}. Esperado: ${expectedId}, Encontrado: ${actualId}`);
        hasErrors = true;
      }

      // Referencia a un def_test existente (índice 2)
      if (sandbox.def && Array.isArray(sandbox.def)) {
        const defTestCorrespondiente = sandbox.def.find(d => d[3] === refDefId);
        if (!defTestCorrespondiente) {
          console.error(`[${entidad}_pruebas] Prueba ${index + 1}: Hace referencia al num_def_test ${refDefId}, que no existe en ${entidad}_def_tests.`);
          hasErrors = true;
        } else {
          // Coincidencia de acción
          const accionDef = defTestCorrespondiente[6];
          if (accionDef !== accionPrueba) {
            console.error(`[${entidad}_pruebas] Prueba ${index + 1}: La acción '${accionPrueba}' no coincide con la acción '${accionDef}' de su test de definición (ID ${refDefId}).`);
            hasErrors = true;
          }
        }
      }

      // Tipo de dato en resultado esperado
      if (item[6] === 'true') {
        console.error(`[${entidad}_pruebas] Prueba ${index + 1}: El resultado esperado es el string 'true' en vez del booleano true.`);
        hasErrors = true;
      }
    });
  }
});

if (hasErrors) {
  console.error("\n La validación ha fallado. Revisa los errores reportados arriba antes de empaquetar.");
  process.exit(1);
}

console.log("\n Validación completada con éxito sin errores.");
console.log(`Generando ${CODIGO_GRUPO}.rar...`);

// 5. Generar archivo .rar
try {
  const targetRar = path.join(__dirname, `../ET1/${CODIGO_GRUPO}.rar`);
  if (fs.existsSync(targetRar)) fs.unlinkSync(targetRar);

  execSync(`rar a -r "${targetRar}" "${DIR_ET1}"`, { stdio: 'inherit' });
  console.log(` ¡Empaquetado completado con éxito! Archivo creado: ${CODIGO_GRUPO}.rar`);
} catch (e) {
  console.warn("\n El comando 'rar' no está disponible en la consola del sistema.");
  console.warn(` Por favor, comprime manualmente la carpeta '${CODIGO_GRUPO}' en formato .rar desde WinRAR o tu gestor de archivos.`);
}