/*
  persona_tests.js
  Definicion de tests (persona_def_tests) y bateria de pruebas (persona_pruebas)
  de la entidad persona, separados por campo y por accion (ADD, EDIT, SEARCH).
  Entrega ET1 - Interfaces de Usuario 2026-2027

  Estructura persona_def_tests:
  [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado_esperado, mensaje]
  Estructura persona_pruebas:
  [entidad, campo, num_test, num_prueba, accion, {campo: valor}, resultado_esperado]
*/
let persona_def_tests = Array(

	// ============================================================
	// CAMPO: dni
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
	Array('persona', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
	Array('persona', 'dni', 'input', 3, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato de DNI incorrecto. Debe ser 8 numeros seguidos de una letra mayuscula'),
	Array('persona', 'dni', 'input', 4, 'cumple letra dni', 'personalized', 'ADD', 'dni_personalized_ko', 'La letra del DNI no corresponde con el numero'),
	Array('persona', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'),

	// ---------- EDIT ----------
	Array('persona', 'dni', 'input', 6, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
	Array('persona', 'dni', 'input', 7, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
	Array('persona', 'dni', 'input', 8, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato de DNI incorrecto. Debe ser 8 numeros seguidos de una letra mayuscula'),
	Array('persona', 'dni', 'input', 9, 'cumple letra dni', 'personalized', 'EDIT', 'dni_personalized_ko', 'La letra del DNI no corresponde con el numero'),
	Array('persona', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'),

	// ---------- SEARCH ----------
	Array('persona', 'dni', 'input', 11, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener como maximo 9 caracteres'),
	Array('persona', 'dni', 'input', 12, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato de busqueda de DNI incorrecto. Solo se permiten numeros y letras mayusculas'),
	Array('persona', 'dni', 'input', 13, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por DNI correcta'),

	// ============================================================
	// CAMPO: nombre_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'nombre_persona', 'input', 14, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_persona_min_size_ko', 'Nombre demasiado corto. Debe tener entre 2 y 45 caracteres'),
	Array('persona', 'nombre_persona', 'input', 15, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Debe tener entre 2 y 45 caracteres'),
	Array('persona', 'nombre_persona', 'input', 16, 'cumple formato', 'format', 'ADD', 'nombre_persona_format_ko', 'Formato de nombre incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'nombre_persona', 'input', 17, 'es correcto', 'valid', 'ADD', true, 'Nombre correcto'),

	// ---------- EDIT ----------
	Array('persona', 'nombre_persona', 'input', 18, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_persona_min_size_ko', 'Nombre demasiado corto. Debe tener entre 2 y 45 caracteres'),
	Array('persona', 'nombre_persona', 'input', 19, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Debe tener entre 2 y 45 caracteres'),
	Array('persona', 'nombre_persona', 'input', 20, 'cumple formato', 'format', 'EDIT', 'nombre_persona_format_ko', 'Formato de nombre incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'nombre_persona', 'input', 21, 'es correcto', 'valid', 'EDIT', true, 'Nombre correcto'),

	// ---------- SEARCH ----------
	Array('persona', 'nombre_persona', 'input', 22, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Debe tener como maximo 45 caracteres'),
	Array('persona', 'nombre_persona', 'input', 23, 'cumple formato', 'format', 'SEARCH', 'nombre_persona_format_ko', 'Formato de busqueda de nombre incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'nombre_persona', 'input', 24, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por nombre correcta'),

	// ============================================================
	// CAMPO: apellidos_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'apellidos_persona', 'input', 25, 'cumple tamaño minimo', 'min_size', 'ADD', 'apellidos_persona_min_size_ko', 'Apellidos demasiado corto. Debe tener entre 3 y 100 caracteres'),
	Array('persona', 'apellidos_persona', 'input', 26, 'cumple tamaño maximo', 'max_size', 'ADD', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largo. Debe tener entre 3 y 100 caracteres'),
	Array('persona', 'apellidos_persona', 'input', 27, 'cumple formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato de apellidos incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'apellidos_persona', 'input', 28, 'es correcto', 'valid', 'ADD', true, 'Apellidos correcto'),

	// ---------- EDIT ----------
	Array('persona', 'apellidos_persona', 'input', 29, 'cumple tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Apellidos demasiado corto. Debe tener entre 3 y 100 caracteres'),
	Array('persona', 'apellidos_persona', 'input', 30, 'cumple tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largo. Debe tener entre 3 y 100 caracteres'),
	Array('persona', 'apellidos_persona', 'input', 31, 'cumple formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato de apellidos incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'apellidos_persona', 'input', 32, 'es correcto', 'valid', 'EDIT', true, 'Apellidos correcto'),

	// ---------- SEARCH ----------
	Array('persona', 'apellidos_persona', 'input', 33, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largo. Debe tener como maximo 100 caracteres'),
	Array('persona', 'apellidos_persona', 'input', 34, 'cumple formato', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato de busqueda de apellidos incorrecto. Solo se permiten letras (incluidas ñ y acentos), puntos, guiones y espacios'),
	Array('persona', 'apellidos_persona', 'input', 35, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por apellidos correcta'),

	// ============================================================
	// CAMPO: fechaNacimiento_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'fechaNacimiento_persona', 'input', 36, 'cumple tamaño minimo', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_ko', 'Fecha demasiado corta. Debe tener el formato dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 37, 'cumple tamaño maximo', 'max_size', 'ADD', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Debe tener el formato dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 38, 'cumple formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato de fecha incorrecto. Debe ser dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 39, 'cumple fecha existente', 'personalized', 'ADD', 'fechaNacimiento_persona_personalized_ko', 'La fecha no existe en el calendario'),
	Array('persona', 'fechaNacimiento_persona', 'input', 40, 'cumple fecha no posterior a la actual', 'personalized', 'ADD', 'fechaNacimiento_persona_future_date_ko', 'La fecha de nacimiento no puede ser posterior a la fecha actual'),
	Array('persona', 'fechaNacimiento_persona', 'input', 41, 'es correcto', 'valid', 'ADD', true, 'Fecha de nacimiento correcta'),

	// ---------- EDIT ----------
	Array('persona', 'fechaNacimiento_persona', 'input', 42, 'cumple tamaño minimo', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_ko', 'Fecha demasiado corta. Debe tener el formato dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 43, 'cumple tamaño maximo', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Debe tener el formato dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 44, 'cumple formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato de fecha incorrecto. Debe ser dd/mm/aaaa'),
	Array('persona', 'fechaNacimiento_persona', 'input', 45, 'cumple fecha existente', 'personalized', 'EDIT', 'fechaNacimiento_persona_personalized_ko', 'La fecha no existe en el calendario'),
	Array('persona', 'fechaNacimiento_persona', 'input', 46, 'cumple fecha no posterior a la actual', 'personalized', 'EDIT', 'fechaNacimiento_persona_future_date_ko', 'La fecha de nacimiento no puede ser posterior a la fecha actual'),
	Array('persona', 'fechaNacimiento_persona', 'input', 47, 'es correcto', 'valid', 'EDIT', true, 'Fecha de nacimiento correcta'),

	// ---------- SEARCH ----------
	Array('persona', 'fechaNacimiento_persona', 'input', 48, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Debe tener como maximo 10 caracteres'),
	Array('persona', 'fechaNacimiento_persona', 'input', 49, 'cumple formato', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato de busqueda de fecha incorrecto. Solo se permiten numeros y /'),
	Array('persona', 'fechaNacimiento_persona', 'input', 50, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por fecha correcta'),

	// ============================================================
	// CAMPO: direccion_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'direccion_persona', 'textarea', 51, 'cumple tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Direccion demasiado corta. Debe tener entre 10 y 200 caracteres'),
	Array('persona', 'direccion_persona', 'textarea', 52, 'cumple tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Direccion demasiado larga. Debe tener entre 10 y 200 caracteres'),
	Array('persona', 'direccion_persona', 'textarea', 53, 'cumple formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato de direccion incorrecto. Solo se permiten letras (incluidas ñ y acentos), numeros, puntos, guiones, punto y coma, espacios y /'),
	Array('persona', 'direccion_persona', 'textarea', 54, 'es correcto', 'valid', 'ADD', true, 'Direccion correcta'),

	// ---------- EDIT ----------
	Array('persona', 'direccion_persona', 'textarea', 55, 'cumple tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Direccion demasiado corta. Debe tener entre 10 y 200 caracteres'),
	Array('persona', 'direccion_persona', 'textarea', 56, 'cumple tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Direccion demasiado larga. Debe tener entre 10 y 200 caracteres'),
	Array('persona', 'direccion_persona', 'textarea', 57, 'cumple formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato de direccion incorrecto. Solo se permiten letras (incluidas ñ y acentos), numeros, puntos, guiones, punto y coma, espacios y /'),
	Array('persona', 'direccion_persona', 'textarea', 58, 'es correcto', 'valid', 'EDIT', true, 'Direccion correcta'),

	// ---------- SEARCH ----------
	Array('persona', 'direccion_persona', 'textarea', 59, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Direccion demasiado larga. Debe tener como maximo 200 caracteres'),
	Array('persona', 'direccion_persona', 'textarea', 60, 'cumple formato', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato de busqueda de direccion incorrecto. Solo se permiten letras (incluidas ñ y acentos), numeros, puntos, guiones, punto y coma, espacios y /'),
	Array('persona', 'direccion_persona', 'textarea', 61, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por direccion correcta'),

	// ============================================================
	// CAMPO: telefono_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'telefono_persona', 'input', 62, 'cumple tamaño minimo', 'min_size', 'ADD', 'telefono_persona_min_size_ko', 'Telefono demasiado corto. Debe tener 9 digitos'),
	Array('persona', 'telefono_persona', 'input', 63, 'cumple tamaño maximo', 'max_size', 'ADD', 'telefono_persona_max_size_ko', 'Telefono demasiado largo. Debe tener 9 digitos'),
	Array('persona', 'telefono_persona', 'input', 64, 'cumple formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato de telefono incorrecto. Deben ser 9 digitos empezando por 6, 7, 8 o 9'),
	Array('persona', 'telefono_persona', 'input', 65, 'es correcto', 'valid', 'ADD', true, 'Telefono correcto'),

	// ---------- EDIT ----------
	Array('persona', 'telefono_persona', 'input', 66, 'cumple tamaño minimo', 'min_size', 'EDIT', 'telefono_persona_min_size_ko', 'Telefono demasiado corto. Debe tener 9 digitos'),
	Array('persona', 'telefono_persona', 'input', 67, 'cumple tamaño maximo', 'max_size', 'EDIT', 'telefono_persona_max_size_ko', 'Telefono demasiado largo. Debe tener 9 digitos'),
	Array('persona', 'telefono_persona', 'input', 68, 'cumple formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato de telefono incorrecto. Deben ser 9 digitos empezando por 6, 7, 8 o 9'),
	Array('persona', 'telefono_persona', 'input', 69, 'es correcto', 'valid', 'EDIT', true, 'Telefono correcto'),

	// ---------- SEARCH ----------
	Array('persona', 'telefono_persona', 'input', 70, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'telefono_persona_max_size_ko', 'Telefono demasiado largo. Debe tener como maximo 9 digitos'),
	Array('persona', 'telefono_persona', 'input', 71, 'cumple formato', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato de busqueda de telefono incorrecto. Solo se permiten digitos'),
	Array('persona', 'telefono_persona', 'input', 72, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por telefono correcta'),

	// ============================================================
	// CAMPO: email_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'email_persona', 'input', 73, 'cumple tamaño maximo', 'max_size', 'ADD', 'email_persona_max_size_ko', 'Email demasiado largo. Debe tener como maximo 45 caracteres'),
	Array('persona', 'email_persona', 'input', 74, 'cumple formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato de email incorrecto. Debe ser del tipo usuario@dominio.ext'),
	Array('persona', 'email_persona', 'input', 75, 'es correcto', 'valid', 'ADD', true, 'Email correcto'),

	// ---------- EDIT ----------
	Array('persona', 'email_persona', 'input', 76, 'cumple tamaño maximo', 'max_size', 'EDIT', 'email_persona_max_size_ko', 'Email demasiado largo. Debe tener como maximo 45 caracteres'),
	Array('persona', 'email_persona', 'input', 77, 'cumple formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato de email incorrecto. Debe ser del tipo usuario@dominio.ext'),
	Array('persona', 'email_persona', 'input', 78, 'es correcto', 'valid', 'EDIT', true, 'Email correcto'),

	// ---------- SEARCH ----------
	Array('persona', 'email_persona', 'input', 79, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'email_persona_max_size_ko', 'Email demasiado largo. Debe tener como maximo 45 caracteres'),
	Array('persona', 'email_persona', 'input', 80, 'cumple formato', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato de busqueda de email incorrecto. Solo se permiten letras sin acentos, numeros y . _ % + - @'),
	Array('persona', 'email_persona', 'input', 81, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por email correcta'),

	// ============================================================
	// CAMPO: foto_persona
	// ============================================================

	// ---------- SEARCH ----------
	Array('persona', 'foto_persona', 'input', 82, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'foto_persona_max_size_ko', 'Nombre de foto demasiado largo. Debe tener como maximo 15 caracteres'),
	Array('persona', 'foto_persona', 'input', 83, 'cumple formato', 'format', 'SEARCH', 'foto_persona_format_ko', 'Formato de busqueda de foto incorrecto. Solo se permiten letras sin acentos y puntos'),
	Array('persona', 'foto_persona', 'input', 84, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por foto correcta'),

	// ============================================================
	// CAMPO: nuevo_foto_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'nuevo_foto_persona', 'file', 85, 'existe fichero', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_ko', 'No se ha seleccionado foto. Debe subir una foto jpg o jpeg'),
	Array('persona', 'nuevo_foto_persona', 'file', 86, 'cumple tamaño minimo nombre fichero', 'min_size_name_file', 'ADD', 'nuevo_foto_persona_min_size_name_file_ko', 'Nombre de foto demasiado corto. Debe tener entre 3 y 15 caracteres'),
	Array('persona', 'nuevo_foto_persona', 'file', 87, 'cumple tamaño maximo nombre fichero', 'max_size_name_file', 'ADD', 'nuevo_foto_persona_max_size_name_file_ko', 'Nombre de foto demasiado largo. Debe tener entre 3 y 15 caracteres'),
	Array('persona', 'nuevo_foto_persona', 'file', 88, 'cumple formato nombre fichero', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_ko', 'Nombre de foto incorrecto. Solo letras sin acentos y puntos, con extension .jpg o .jpeg'),
	Array('persona', 'nuevo_foto_persona', 'file', 89, 'cumple tipo fichero', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero incorrecto. La foto debe ser jpg o jpeg'),
	Array('persona', 'nuevo_foto_persona', 'file', 90, 'cumple tamaño maximo fichero', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_ko', 'Tamaño de foto excesivo. Debe ser como maximo 2 MB (2097152 bytes)'),
	Array('persona', 'nuevo_foto_persona', 'file', 91, 'es correcto', 'valid', 'ADD', true, 'Foto correcta'),

	// ---------- EDIT ----------
	Array('persona', 'nuevo_foto_persona', 'file', 92, 'cumple tamaño minimo nombre fichero', 'min_size_name_file', 'EDIT', 'nuevo_foto_persona_min_size_name_file_ko', 'Nombre de foto demasiado corto. Debe tener entre 3 y 15 caracteres'),
	Array('persona', 'nuevo_foto_persona', 'file', 93, 'cumple tamaño maximo nombre fichero', 'max_size_name_file', 'EDIT', 'nuevo_foto_persona_max_size_name_file_ko', 'Nombre de foto demasiado largo. Debe tener entre 3 y 15 caracteres'),
	Array('persona', 'nuevo_foto_persona', 'file', 94, 'cumple formato nombre fichero', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_ko', 'Nombre de foto incorrecto. Solo letras sin acentos y puntos, con extension .jpg o .jpeg'),
	Array('persona', 'nuevo_foto_persona', 'file', 95, 'cumple tipo fichero', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero incorrecto. La foto debe ser jpg o jpeg'),
	Array('persona', 'nuevo_foto_persona', 'file', 96, 'cumple tamaño maximo fichero', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_ko', 'Tamaño de foto excesivo. Debe ser como maximo 2 MB (2097152 bytes)'),
	Array('persona', 'nuevo_foto_persona', 'file', 97, 'es correcto', 'valid', 'EDIT', true, 'Foto correcta')
);

let persona_pruebas = Array(

	// ============================================================
	// CAMPO: dni
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'dni', 1, 1, 'ADD', { dni: '1234567Z' }, 'dni_min_size_ko'),
	Array('persona', 'dni', 2, 2, 'ADD', { dni: '123456789Z' }, 'dni_max_size_ko'),
	Array('persona', 'dni', 3, 3, 'ADD', { dni: '12345678z' }, 'dni_format_ko'),
	Array('persona', 'dni', 4, 4, 'ADD', { dni: '12345678A' }, 'dni_personalized_ko'),
	Array('persona', 'dni', 5, 5, 'ADD', { dni: '12345678Z' }, true),

	// ---------- EDIT ----------
	Array('persona', 'dni', 6, 6, 'EDIT', { dni: '1234567Z' }, 'dni_min_size_ko'),
	Array('persona', 'dni', 7, 7, 'EDIT', { dni: '123456789Z' }, 'dni_max_size_ko'),
	Array('persona', 'dni', 8, 8, 'EDIT', { dni: '12345678z' }, 'dni_format_ko'),
	Array('persona', 'dni', 9, 9, 'EDIT', { dni: '12345678A' }, 'dni_personalized_ko'),
	Array('persona', 'dni', 10, 10, 'EDIT', { dni: '12345678Z' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'dni', 11, 11, 'SEARCH', { dni: '1234567890' }, 'dni_max_size_ko'),
	Array('persona', 'dni', 12, 12, 'SEARCH', { dni: '1234-5' }, 'dni_format_ko'),
	Array('persona', 'dni', 13, 13, 'SEARCH', { dni: '1234' }, true),

	// ============================================================
	// CAMPO: nombre_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'nombre_persona', 14, 14, 'ADD', { nombre_persona: 'J' }, 'nombre_persona_min_size_ko'),
	Array('persona', 'nombre_persona', 15, 15, 'ADD', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'),
	Array('persona', 'nombre_persona', 16, 16, 'ADD', { nombre_persona: 'Juan2' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 17, 'ADD', { nombre_persona: 'Juan_Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 18, 'ADD', { nombre_persona: 'Juan, Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 19, 'ADD', { nombre_persona: "D'Artagnan" }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 20, 'ADD', { nombre_persona: 'Juan@Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 21, 'ADD', { nombre_persona: 'Juan (Carlos)' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 22, 'ADD', { nombre_persona: 'Juan;Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 23, 'ADD', { nombre_persona: 'Juan/Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 16, 24, 'ADD', { nombre_persona: 'Juan#1' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 17, 25, 'ADD', { nombre_persona: 'José Ángel' }, true),
	Array('persona', 'nombre_persona', 17, 26, 'ADD', { nombre_persona: 'José-María' }, true),
	Array('persona', 'nombre_persona', 17, 27, 'ADD', { nombre_persona: 'J. Ángel Muñoz' }, true),

	// ---------- EDIT ----------
	Array('persona', 'nombre_persona', 18, 28, 'EDIT', { nombre_persona: 'J' }, 'nombre_persona_min_size_ko'),
	Array('persona', 'nombre_persona', 19, 29, 'EDIT', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'),
	Array('persona', 'nombre_persona', 20, 30, 'EDIT', { nombre_persona: 'Juan2' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 31, 'EDIT', { nombre_persona: 'Juan_Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 32, 'EDIT', { nombre_persona: 'Juan, Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 33, 'EDIT', { nombre_persona: "D'Artagnan" }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 34, 'EDIT', { nombre_persona: 'Juan@Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 35, 'EDIT', { nombre_persona: 'Juan (Carlos)' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 36, 'EDIT', { nombre_persona: 'Juan;Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 37, 'EDIT', { nombre_persona: 'Juan/Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 20, 38, 'EDIT', { nombre_persona: 'Juan#1' }, 'nombre_persona_format_ko'),

	Array('persona', 'nombre_persona', 21, 39, 'EDIT', { nombre_persona: 'José Ángel' }, true),
	Array('persona', 'nombre_persona', 20, 40, 'EDIT', { nombre_persona: 'José-María' }, true),
	Array('persona', 'nombre_persona', 20, 41, 'EDIT', { nombre_persona: 'J. Ángel Muñoz' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'nombre_persona', 22, 42, 'SEARCH', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'),
	Array('persona', 'nombre_persona', 23, 43, 'SEARCH', { nombre_persona: 'Ju4n' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 44, 'SEARCH', { nombre_persona: 'Juan_Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 45, 'SEARCH', { nombre_persona: 'Juan, Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 46, 'SEARCH', { nombre_persona: "D'Artagnan" }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 47, 'SEARCH', { nombre_persona: 'Juan@Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 48, 'SEARCH', { nombre_persona: 'Juan (Carlos)' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 49, 'SEARCH', { nombre_persona: 'Juan;Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 50, 'SEARCH', { nombre_persona: 'Juan/Carlos' }, 'nombre_persona_format_ko'),
	Array('persona', 'nombre_persona', 23, 51, 'SEARCH', { nombre_persona: 'Juan#1' }, 'nombre_persona_format_ko'),

	Array('persona', 'nombre_persona', 24, 52, 'SEARCH', { nombre_persona: 'Jo' }, true),
	Array('persona', 'nombre_persona', 24, 53, 'SEARCH', { nombre_persona: 'José-María' }, true),
	Array('persona', 'nombre_persona', 24, 54, 'SEARCH', { nombre_persona: 'J. Ángel Muñoz' }, true),


	// ============================================================
	// CAMPO: apellidos_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'apellidos_persona', 25, 55, 'ADD', { apellidos_persona: 'Ga' }, 'apellidos_persona_min_size_ko'),
	Array('persona', 'apellidos_persona', 26, 56, 'ADD', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'),
	Array('persona', 'apellidos_persona', 27, 57, 'ADD', { apellidos_persona: 'Juan2' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 58, 'ADD', { apellidos_persona: 'Pérez_López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 59, 'ADD', { apellidos_persona: 'Pérez, López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 60, 'ADD', { apellidos_persona: "O'Donnell" }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 61, 'ADD', { apellidos_persona: 'López@García' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 62, 'ADD', { apellidos_persona: 'García (hijo)' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 63, 'ADD', { apellidos_persona: 'García;López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 64, 'ADD', { apellidos_persona: 'García/López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 27, 65, 'ADD', { apellidos_persona: 'García3' }, 'apellidos_persona_format_ko'),

	Array('persona', 'apellidos_persona', 28, 66, 'ADD', { apellidos_persona: 'Muñoz García' }, true),
	Array('persona', 'apellidos_persona', 28, 67, 'ADD', { apellidos_persona: 'Pérez-López' }, true),
	Array('persona', 'apellidos_persona', 28, 68, 'ADD', { apellidos_persona: 'Fernández P.' }, true),

	// ---------- EDIT ----------
	Array('persona', 'apellidos_persona', 29, 69, 'EDIT', { apellidos_persona: 'Ga' }, 'apellidos_persona_min_size_ko'),
	Array('persona', 'apellidos_persona', 30, 70, 'EDIT', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'),
	Array('persona', 'apellidos_persona', 31, 71, 'EDIT', { apellidos_persona: 'Juan2' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 72, 'EDIT', { apellidos_persona: 'Pérez_López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 73, 'EDIT', { apellidos_persona: 'Pérez, López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 74, 'EDIT', { apellidos_persona: "O'Donnell" }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 75, 'EDIT', { apellidos_persona: 'López@García' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 76, 'EDIT', { apellidos_persona: 'García (hijo)' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 77, 'EDIT', { apellidos_persona: 'García;López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 78, 'EDIT', { apellidos_persona: 'García/López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 31, 79, 'EDIT', { apellidos_persona: 'García3' }, 'apellidos_persona_format_ko'),

	Array('persona', 'apellidos_persona', 32, 80, 'EDIT', { apellidos_persona: 'Muñoz García' }, true),
	Array('persona', 'apellidos_persona', 32, 81, 'EDIT', { apellidos_persona: 'Pérez-López' }, true),
	Array('persona', 'apellidos_persona', 32, 82, 'EDIT', { apellidos_persona: 'Fernández P.' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'apellidos_persona', 33, 83, 'SEARCH', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'),
	Array('persona', 'apellidos_persona', 34, 84, 'SEARCH', { apellidos_persona: 'Ju4n' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 85, 'SEARCH', { apellidos_persona: 'Pérez_López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 86, 'SEARCH', { apellidos_persona: 'Pérez, López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 87, 'SEARCH', { apellidos_persona: "O'Donnell" }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 88, 'SEARCH', { apellidos_persona: 'López@García' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 89, 'SEARCH', { apellidos_persona: 'García (hijo)' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 90, 'SEARCH', { apellidos_persona: 'García;López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 91, 'SEARCH', { apellidos_persona: 'García/López' }, 'apellidos_persona_format_ko'),
	Array('persona', 'apellidos_persona', 34, 92, 'SEARCH', { apellidos_persona: 'García3' }, 'apellidos_persona_format_ko'),

	Array('persona', 'apellidos_persona', 35, 93, 'SEARCH', { apellidos_persona: 'Jo' }, true),
	Array('persona', 'apellidos_persona', 35, 94, 'SEARCH', { apellidos_persona: 'Pérez-López' }, true),
	Array('persona', 'apellidos_persona', 35, 95, 'SEARCH', { apellidos_persona: 'Fernández P.' }, true),


	// ============================================================
	// CAMPO: fechaNacimiento_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'fechaNacimiento_persona', 36, 96, 'ADD', { fechaNacimiento_persona: '1/1/200' }, 'fechaNacimiento_persona_min_size_ko'),
	Array('persona', 'fechaNacimiento_persona', 37, 97, 'ADD', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'),
	Array('persona', 'fechaNacimiento_persona', 38, 98, 'ADD', { fechaNacimiento_persona: '01-01-2000' }, 'fechaNacimiento_persona_format_ko'),
	Array('persona', 'fechaNacimiento_persona', 39, 99, 'ADD', { fechaNacimiento_persona: '31/02/2000' }, 'fechaNacimiento_persona_personalized_ko'),
	Array('persona', 'fechaNacimiento_persona', 40, 100, 'ADD', { fechaNacimiento_persona: '31/12/2999' }, 'fechaNacimiento_persona_future_date_ko'),
	Array('persona', 'fechaNacimiento_persona', 41, 101, 'ADD', { fechaNacimiento_persona: '15/08/1990' }, true),

	// ---------- EDIT ----------
	Array('persona', 'fechaNacimiento_persona', 42, 102, 'EDIT', { fechaNacimiento_persona: '1/1/200' }, 'fechaNacimiento_persona_min_size_ko'),
	Array('persona', 'fechaNacimiento_persona', 43, 103, 'EDIT', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'),
	Array('persona', 'fechaNacimiento_persona', 44, 104, 'EDIT', { fechaNacimiento_persona: '01-01-2000' }, 'fechaNacimiento_persona_format_ko'),
	Array('persona', 'fechaNacimiento_persona', 45, 105, 'EDIT', { fechaNacimiento_persona: '31/02/2000' }, 'fechaNacimiento_persona_personalized_ko'),
	Array('persona', 'fechaNacimiento_persona', 46, 106, 'EDIT', { fechaNacimiento_persona: '31/12/2999' }, 'fechaNacimiento_persona_future_date_ko'),
	Array('persona', 'fechaNacimiento_persona', 47, 107, 'EDIT', { fechaNacimiento_persona: '15/08/1990' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'fechaNacimiento_persona', 48, 108, 'SEARCH', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'),
	Array('persona', 'fechaNacimiento_persona', 49, 109, 'SEARCH', { fechaNacimiento_persona: '01-01' }, 'fechaNacimiento_persona_format_ko'),
	Array('persona', 'fechaNacimiento_persona', 50, 110, 'SEARCH', { fechaNacimiento_persona: '1990' }, true),

	// ============================================================
	// CAMPO: direccion_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'direccion_persona', 51, 111, 'ADD', { direccion_persona: 'Calle 1 A' }, 'direccion_persona_min_size_ko'),
	Array('persona', 'direccion_persona', 52, 112, 'ADD', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'),
	Array('persona', 'direccion_persona', 53, 113, 'ADD', { direccion_persona: 'Calle Mayor, 5' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 114, 'ADD', { direccion_persona: 'Calle Mayor, 12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 115, 'ADD', { direccion_persona: 'Calle_Mayor_12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 116, 'ADD', { direccion_persona: "Calle O'Donnell 5" }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 117, 'ADD', { direccion_persona: 'Calle Mayor @12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 118, 'ADD', { direccion_persona: 'Calle Mayor (12)' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 119, 'ADD', { direccion_persona: 'Calle Mayor #12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 53, 120, 'ADD', { direccion_persona: 'Calle Mayor 12%' }, 'direccion_persona_format_ko'),


	Array('persona', 'direccion_persona', 54, 121, 'ADD', { direccion_persona: 'Rúa do Progreso 12; 3-B' }, true),
	Array('persona', 'direccion_persona', 54, 122, 'ADD', { direccion_persona: 'C/ Mayor 12' }, true),
	Array('persona', 'direccion_persona', 54, 123, 'ADD', { direccion_persona: 'Calle Mayor 12; 2 B' }, true),
	Array('persona', 'direccion_persona', 54, 124, 'ADD', { direccion_persona: 'Avda. de la Paz 5-7' }, true),

	// ---------- EDIT ----------
	Array('persona', 'direccion_persona', 55, 125, 'EDIT', { direccion_persona: 'Calle 1 A' }, 'direccion_persona_min_size_ko'),
	Array('persona', 'direccion_persona', 56, 126, 'EDIT', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'),
	Array('persona', 'direccion_persona', 57, 127, 'EDIT', { direccion_persona: 'Calle Mayor, 5' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 128, 'EDIT', { direccion_persona: 'Calle Mayor, 12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 129, 'EDIT', { direccion_persona: 'Calle_Mayor_12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 130, 'EDIT', { direccion_persona: "Calle O'Donnell 5" }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 131, 'EDIT', { direccion_persona: 'Calle Mayor @12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 132, 'EDIT', { direccion_persona: 'Calle Mayor (12)' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 133, 'EDIT', { direccion_persona: 'Calle Mayor #12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 57, 134, 'EDIT', { direccion_persona: 'Calle Mayor 12%' }, 'direccion_persona_format_ko'),

	Array('persona', 'direccion_persona', 58, 135, 'EDIT', { direccion_persona: 'Rúa do Progreso 12; 3-B' }, true),
	Array('persona', 'direccion_persona', 58, 136, 'EDIT', { direccion_persona: 'C/ Mayor 12' }, true),
	Array('persona', 'direccion_persona', 58, 137, 'EDIT', { direccion_persona: 'Calle Mayor 12; 2 B' }, true),
	Array('persona', 'direccion_persona', 58, 138, 'EDIT', { direccion_persona: 'Avda. de la Paz 5-7' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'direccion_persona', 59, 139, 'SEARCH', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'),
	Array('persona', 'direccion_persona', 60, 140, 'SEARCH', { direccion_persona: 'Mayor, 5' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 141, 'SEARCH', { direccion_persona: 'Calle Mayor, 12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 142, 'SEARCH', { direccion_persona: 'Calle_Mayor_12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 143, 'SEARCH', { direccion_persona: "Calle O'Donnell 5" }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 144, 'SEARCH', { direccion_persona: 'Calle Mayor @12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 145, 'SEARCH', { direccion_persona: 'Calle Mayor (12)' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 146, 'SEARCH', { direccion_persona: 'Calle Mayor #12' }, 'direccion_persona_format_ko'),
	Array('persona', 'direccion_persona', 60, 147, 'SEARCH', { direccion_persona: 'Calle Mayor 12%' }, 'direccion_persona_format_ko'),

	Array('persona', 'direccion_persona', 61, 148, 'SEARCH', { direccion_persona: 'Rúa' }, true),
	Array('persona', 'direccion_persona', 61, 149, 'SEARCH', { direccion_persona: 'C/ Mayor 12' }, true),
	Array('persona', 'direccion_persona', 61, 150, 'SEARCH', { direccion_persona: 'Calle Mayor 12; 2 B' }, true),
	Array('persona', 'direccion_persona', 61, 151, 'SEARCH', { direccion_persona: 'Avda. de la Paz 5-7' }, true),


	// ============================================================
	// CAMPO: telefono_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'telefono_persona', 62, 152, 'ADD', { telefono_persona: '98812345' }, 'telefono_persona_min_size_ko'),
	Array('persona', 'telefono_persona', 63, 153, 'ADD', { telefono_persona: '9881234567' }, 'telefono_persona_max_size_ko'),
	Array('persona', 'telefono_persona', 64, 154, 'ADD', { telefono_persona: '512345678' }, 'telefono_persona_format_ko'),
	Array('persona', 'telefono_persona', 65, 155, 'ADD', { telefono_persona: '988123456' }, true),

	// ---------- EDIT ----------
	Array('persona', 'telefono_persona', 66, 156, 'EDIT', { telefono_persona: '98812345' }, 'telefono_persona_min_size_ko'),
	Array('persona', 'telefono_persona', 67, 157, 'EDIT', { telefono_persona: '9881234567' }, 'telefono_persona_max_size_ko'),
	Array('persona', 'telefono_persona', 68, 158, 'EDIT', { telefono_persona: '512345678' }, 'telefono_persona_format_ko'),
	Array('persona', 'telefono_persona', 69, 159, 'EDIT', { telefono_persona: '988123456' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'telefono_persona', 70, 160, 'SEARCH', { telefono_persona: '6123456789' }, 'telefono_persona_max_size_ko'),
	Array('persona', 'telefono_persona', 71, 161, 'SEARCH', { telefono_persona: '612-34' }, 'telefono_persona_format_ko'),
	Array('persona', 'telefono_persona', 72, 162, 'SEARCH', { telefono_persona: '988' }, true),

	// ============================================================
	// CAMPO: email_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'email_persona', 73, 163, 'ADD', { email_persona: 'a'.repeat(36) + '@correo.es' }, 'email_persona_max_size_ko'),
	Array('persona', 'email_persona', 74, 164, 'ADD', { email_persona: 'usuario.correo.es' }, 'email_persona_format_ko'),
	Array('persona', 'email_persona', 75, 165, 'ADD', { email_persona: 'mateo.perez@uvigo.es' }, true),

	// ---------- EDIT ----------
	Array('persona', 'email_persona', 76, 166, 'EDIT', { email_persona: 'a'.repeat(36) + '@correo.es' }, 'email_persona_max_size_ko'),
	Array('persona', 'email_persona', 77, 167, 'EDIT', { email_persona: 'usuario.correo.es' }, 'email_persona_format_ko'),
	Array('persona', 'email_persona', 78, 168, 'EDIT', { email_persona: 'mateo.perez@uvigo.es' }, true),

	// ---------- SEARCH ----------
	Array('persona', 'email_persona', 79, 169, 'SEARCH', { email_persona: 'a'.repeat(36) + '@correo.es' }, 'email_persona_max_size_ko'),
	Array('persona', 'email_persona', 80, 170, 'SEARCH', { email_persona: 'mañana@uvigo.es' }, 'email_persona_format_ko'),
	Array('persona', 'email_persona', 81, 171, 'SEARCH', { email_persona: '@uvigo' }, true),

	// ============================================================
	// CAMPO: foto_persona
	// ============================================================

	// ---------- SEARCH ----------
	Array('persona', 'foto_persona', 82, 172, 'SEARCH', { foto_persona: 'a'.repeat(16) }, 'foto_persona_max_size_ko'),
	Array('persona', 'foto_persona', 83, 173, 'SEARCH', { foto_persona: 'foto1.jpg' }, 'foto_persona_format_ko'),
	Array('persona', 'foto_persona', 84, 174, 'SEARCH', { foto_persona: 'foto.jpg' }, true),

	// ============================================================
	// CAMPO: nuevo_foto_persona
	// ============================================================

	// ---------- ADD ----------
	Array('persona', 'nuevo_foto_persona', 85, 175, 'ADD', {}, 'nuevo_foto_persona_exist_file_ko'),
	Array('persona', 'nuevo_foto_persona', 86, 176, 'ADD', { nuevo_foto_persona: { format_name_file: 'ab', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_min_size_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 87, 177, 'ADD', { nuevo_foto_persona: { format_name_file: 'fotodemasiadolarga.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_max_size_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 88, 178, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 89, 179, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200 } }, 'nuevo_foto_persona_type_file_ko'),
	Array('persona', 'nuevo_foto_persona', 90, 180, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2097153 } }, 'nuevo_foto_persona_max_size_file_ko'),
	Array('persona', 'nuevo_foto_persona', 91, 181, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, true),

	// ---------- EDIT ----------
	Array('persona', 'nuevo_foto_persona', 92, 182, 'EDIT', { nuevo_foto_persona: { format_name_file: 'ab', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_min_size_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 93, 183, 'EDIT', { nuevo_foto_persona: { format_name_file: 'fotodemasiadolarga.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_max_size_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 94, 184, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'),
	Array('persona', 'nuevo_foto_persona', 95, 185, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200 } }, 'nuevo_foto_persona_type_file_ko'),
	Array('persona', 'nuevo_foto_persona', 96, 186, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2097153 } }, 'nuevo_foto_persona_max_size_file_ko'),
	Array('persona', 'nuevo_foto_persona', 97, 187, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, true)
);
