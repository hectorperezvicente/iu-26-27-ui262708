let usuario_def_tests = [

    Array('usuario', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
    Array('usuario', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
    Array('usuario', 'dni', 'input', 3, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato de DNI incorrecto. Debe ser 8 numeros seguidos de una letra mayuscula'),
    Array('usuario', 'dni', 'input', 4, 'cumple letra dni', 'personalized', 'ADD', 'dni_personalized_ko', 'La letra del DNI no corresponde con el numero'),
    Array('usuario', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'),

    // ---------- EDIT ----------
    Array('usuario', 'dni', 'input', 6, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
    Array('usuario', 'dni', 'input', 7, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 numeros y 1 letra mayuscula'),
    Array('usuario', 'dni', 'input', 8, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato de DNI incorrecto. Debe ser 8 numeros seguidos de una letra mayuscula'),
    Array('usuario', 'dni', 'input', 9, 'cumple letra dni', 'personalized', 'EDIT', 'dni_personalized_ko', 'La letra del DNI no corresponde con el numero'),
    Array('usuario', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'),

    // ---------- SEARCH ----------
    Array('usuario', 'dni', 'input', 11, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener como maximo 9 caracteres'),
    Array('usuario', 'dni', 'input', 12, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato de busqueda de DNI incorrecto. Solo se permiten numeros y letras mayusculas'),
    Array('usuario', 'dni', 'input', 13, 'es correcto', 'valid', 'SEARCH', true, 'Busqueda por DNI correcta'),


    /* ==================== USUARIO ==================== */

    Array('usuario','usuario','input',14,'cumple tamaño minimo','min_size','ADD','usuario_min_size_ko','El usuario es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('usuario','usuario','input',15,'cumple tamaño maximo','max_size','ADD','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',16,'cumple formato','format','ADD','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','usuario','input',17,'valor correcto','valid','ADD',true,'El usuario es correcto.'),

    Array('usuario','usuario','input',18,'cumple tamaño minimo','min_size','EDIT','usuario_min_size_ko','El usuario es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('usuario','usuario','input',19,'cumple tamaño maximo','max_size','EDIT','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',20,'cumple formato','format','EDIT','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','usuario','input',21,'valor correcto','valid','EDIT',true,'El usuario es correcto.'),

    Array('usuario','usuario','input',22,'cumple tamaño maximo','max_size','SEARCH','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',23,'cumple formato','format','SEARCH','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','usuario','input',24,'valor correcto','valid','SEARCH',true,'El usuario es correcto.'),

    /* ==================== CONTRASENA ==================== */

    Array('usuario','contrasena','input',25,'cumple tamaño minimo','min_size','ADD','contrasena_min_size_ko','La contrasena es demasiado corta. Introduzca al menos 8 caracteres'),
    Array('usuario','contrasena','input',26,'cumple tamaño maximo','max_size','ADD','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',27,'cumple formato','format','ADD','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','contrasena','input',28,'valor correcto','valid','ADD',true,'La contrasena es correcta.'),

    Array('usuario','contrasena','input',29,'cumple tamaño minimo','min_size','EDIT','contrasena_min_size_ko','La contrasena es demasiado corta. Introduzca al menos 8 caracteres'),
    Array('usuario','contrasena','input',30,'cumple tamaño maximo','max_size','EDIT','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',31,'cumple formato','format','EDIT','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','contrasena','input',32,'valor correcto','valid','EDIT',true,'La contrasena es correcta.'),

    Array('usuario','contrasena','input',33,'cumple tamaño maximo','max_size','SEARCH','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',34,'cumple formato','format','SEARCH','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras, sin ñ ni acentos'),
    Array('usuario','contrasena','input',35,'valor correcto','valid','SEARCH',true,'La contrasena es correcta.'),


    // Corregido a 'select' por ser clave ajena
    Array('usuario','id_rol','select',36,'cumple tamaño minimo','min_size','ADD','id_rol_min_size_ko','El id de rol es demasiado corto. Introduzca al menos 1 numero'),
    Array('usuario','id_rol','select',37,'cumple tamaño maximo','max_size','ADD','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('usuario','id_rol','select',38,'cumple formato','format','ADD','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('usuario','id_rol','select',39,'valor correcto','valid','ADD',true,'El id de rol es correcto.'),

    Array('usuario','id_rol','select',40,'cumple tamaño minimo','min_size','EDIT','id_rol_min_size_ko','El id de rol es demasiado corto. Introduzca al menos 1 numero'),
    Array('usuario','id_rol','select',41,'cumple tamaño maximo','max_size','EDIT','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('usuario','id_rol','select',42,'cumple formato','format','EDIT','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('usuario','id_rol','select',43,'valor correcto','valid','EDIT',true,'El id de rol es correcto.'),

    Array('usuario','id_rol','select',44,'cumple tamaño maximo','max_size','SEARCH','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('usuario','id_rol','select',45,'cumple formato','format','SEARCH','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('usuario','id_rol','select',46,'valor correcto','valid','SEARCH',true,'El id de rol es correcto.'),

];

let usuario_pruebas = [

    Array('usuario', 'dni', 1, 1, 'ADD', {dni:'1234567Z'}, 'dni_min_size_ko'),
    Array('usuario', 'dni', 2, 2, 'ADD', {dni:'123456789Z'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 3, 3, 'ADD', {dni:'12345678z'}, 'dni_format_ko'),
    Array('usuario', 'dni', 4, 4, 'ADD', {dni:'12345678A'}, 'dni_personalized_ko'),
    Array('usuario', 'dni', 5, 5, 'ADD', {dni:'12345678Z'}, true),

    // ---------- EDIT ----------
    Array('usuario', 'dni', 6, 6, 'EDIT', {dni:'1234567Z'}, 'dni_min_size_ko'),
    Array('usuario', 'dni', 7, 7, 'EDIT', {dni:'123456789Z'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 8, 8, 'EDIT', {dni:'12345678z'}, 'dni_format_ko'),
    Array('usuario', 'dni', 9, 9, 'EDIT', {dni:'12345678A'}, 'dni_personalized_ko'),
    Array('usuario', 'dni', 10, 10, 'EDIT', {dni:'12345678Z'}, true),

    // ---------- SEARCH ----------
    Array('usuario', 'dni', 11, 11, 'SEARCH', {dni:'1234567890'}, 'dni_max_size_ko'),
    Array('usuario', 'dni', 12, 12, 'SEARCH', {dni:'1234-5'}, 'dni_format_ko'),
    Array('usuario', 'dni', 13, 13, 'SEARCH', {dni:'1234'}, true),


    /* ==================== USUARIO ==================== */

    Array('usuario','usuario',14,14,'ADD',{ usuario: 'hola' },'usuario_min_size_ko'),
    Array('usuario','usuario',15,15,'ADD',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',16,16,'ADD',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',16,17,'ADD',{ usuario: 'usuarioá' },'usuario_format_ko'),
    Array('usuario','usuario',17,18,'ADD',{ usuario: 'usuario' },true),

    Array('usuario','usuario',18,19,'EDIT',{ usuario: 'hola' },'usuario_min_size_ko'),
    Array('usuario','usuario',19,20,'EDIT',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',20,21,'EDIT',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',20,22,'EDIT',{ usuario: 'usuarioá' },'usuario_format_ko'),
    Array('usuario','usuario',21,23,'EDIT',{ usuario: 'usuario' },true),

    Array('usuario','usuario',22,24,'SEARCH',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',23,25,'SEARCH',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',24,26,'SEARCH',{ usuario: 'usuario' },true),

    /* ==================== CONTRASENA ==================== */

    Array('usuario','contrasena',25,27,'ADD',{ contrasena: 'passwor' },'contrasena_min_size_ko'),
    Array('usuario','contrasena',26,28,'ADD',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',27,29,'ADD',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',28,30,'ADD',{ contrasena: 'password' },true),

    Array('usuario','contrasena',29,31,'EDIT',{ contrasena: 'passwor' },'contrasena_min_size_ko'),
    Array('usuario','contrasena',30,32,'EDIT',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',31,33,'EDIT',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',32,34,'EDIT',{ contrasena: 'password' },true),

    Array('usuario','contrasena',33,35,'SEARCH',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',34,36,'SEARCH',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',35,37,'SEARCH',{ contrasena: 'password' },true),

   
    Array('usuario','id_rol',36,38,'ADD',{ id_rol: '' },'id_rol_min_size_ko'),
    Array('usuario','id_rol',37,39,'ADD',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('usuario','id_rol',38,40,'ADD',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('usuario','id_rol',39,41,'ADD',{ id_rol: '12345' },true),

    Array('usuario','id_rol',40,42,'EDIT',{ id_rol: '' },'id_rol_min_size_ko'),
    Array('usuario','id_rol',41,43,'EDIT',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('usuario','id_rol',42,44,'EDIT',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('usuario','id_rol',43,45,'EDIT',{ id_rol: '12345' },true),

    Array('usuario','id_rol',44,46,'SEARCH',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('usuario','id_rol',45,47,'SEARCH',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('usuario','id_rol',46,48,'SEARCH',{ id_rol: '12345' },true),


];