let usuario_def_tests = [

    /* ==================== USUARIO ==================== */

    Array('usuario','usuario','input',1,'cumple tamaño minimo','min_size','ADD','usuario_min_size_ko','El usuario es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('usuario','usuario','input',2,'cumple tamaño maximo','max_size','ADD','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',3,'cumple formato','format','ADD','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','usuario','input',4,'valor correcto','valid','ADD',true,'El usuario es correcto.'),

    Array('usuario','usuario','input',5,'cumple tamaño minimo','min_size','EDIT','usuario_min_size_ko','El usuario es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('usuario','usuario','input',6,'cumple tamaño maximo','max_size','EDIT','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',7,'cumple formato','format','EDIT','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','usuario','input',8,'valor correcto','valid','EDIT',true,'El usuario es correcto.'),

    Array('usuario','usuario','input',9,'cumple tamaño maximo','max_size','SEARCH','usuario_max_size_ko','El usuario es demasiado largo. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','usuario','input',10,'cumple formato','format','SEARCH','usuario_format_ko','El usuario tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','usuario','input',11,'valor correcto','valid','SEARCH',true,'El usuario es correcto.'),

    /* ==================== CONTRASENA ==================== */

    Array('usuario','contrasena','input',12,'cumple tamaño minimo','min_size','ADD','contrasena_min_size_ko','La contrasena es demasiado corta. Introduzca al menos 8 caracteres'),
    Array('usuario','contrasena','input',13,'cumple tamaño maximo','max_size','ADD','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',14,'cumple formato','format','ADD','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','contrasena','input',15,'valor correcto','valid','ADD',true,'La contrasena es correcta.'),

    Array('usuario','contrasena','input',16,'cumple tamaño minimo','min_size','EDIT','contrasena_min_size_ko','La contrasena es demasiado corta. Introduzca al menos 8 caracteres'),
    Array('usuario','contrasena','input',17,'cumple tamaño maximo','max_size','EDIT','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',18,'cumple formato','format','EDIT','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','contrasena','input',19,'valor correcto','valid','EDIT',true,'La contrasena es correcta.'),

    Array('usuario','contrasena','input',20,'cumple tamaño maximo','max_size','SEARCH','contrasena_max_size_ko','La contrasena es demasiado larga. Introduzca hasta un maximo de 45 caracteres'),
    Array('usuario','contrasena','input',21,'cumple formato','format','SEARCH','contrasena_format_ko','La contrasena tiene un formato incorrecto. Introduzca solo letras sin ñ'),
    Array('usuario','contrasena','input',22,'valor correcto','valid','SEARCH',true,'La contrasena es correcta.')

];

let usuario_pruebas = [

    /* ==================== USUARIO ==================== */

    Array('usuario','usuario',1,1,'ADD',{ usuario: 'hola' },'usuario_min_size_ko'),
    Array('usuario','usuario',2,2,'ADD',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',3,3,'ADD',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',4,4,'ADD',{ usuario: 'usuario' },true),

    Array('usuario','usuario',5,5,'EDIT',{ usuario: 'hola' },'usuario_min_size_ko'),
    Array('usuario','usuario',6,6,'EDIT',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',7,7,'EDIT',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',8,8,'EDIT',{ usuario: 'usuario' },true),

    Array('usuario','usuario',9,9,'SEARCH',{ usuario: 'a'.repeat(46) },'usuario_max_size_ko'),
    Array('usuario','usuario',10,10,'SEARCH',{ usuario: 'usuarioñ' },'usuario_format_ko'),
    Array('usuario','usuario',11,11,'SEARCH',{ usuario: 'usuario' },true),

    /* ==================== CONTRASENA ==================== */

    Array('usuario','contrasena',12,12,'ADD',{ contrasena: 'passwor' },'contrasena_min_size_ko'),
    Array('usuario','contrasena',13,13,'ADD',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',14,14,'ADD',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',15,15,'ADD',{ contrasena: 'password' },true),

    Array('usuario','contrasena',16,16,'EDIT',{ contrasena: 'passwor' },'contrasena_min_size_ko'),
    Array('usuario','contrasena',17,17,'EDIT',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',18,18,'EDIT',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',19,19,'EDIT',{ contrasena: 'password' },true),

    Array('usuario','contrasena',20,20,'SEARCH',{ contrasena: 'a'.repeat(46) },'contrasena_max_size_ko'),
    Array('usuario','contrasena',21,21,'SEARCH',{ contrasena: 'passwordñ' },'contrasena_format_ko'),
    Array('usuario','contrasena',22,22,'SEARCH',{ contrasena: 'password' },true)

];