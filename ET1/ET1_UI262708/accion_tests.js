let accion_def_tests = [
    /*Array('persona','nombre_persona','input',1,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'),*/
    /* ==================== ID ==================== */

    Array ('accion', 'id_accion', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion','input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion', 'input', 3, 'cumple formato numerico', 'format', 'ADD', 'id_accion_format_ko', 'Formato incorrecto. Debe ser un número entero'),
    Array ('accion', 'id_accion', 'input', 4, 'id valido', 'valid', 'ADD', 'true', 'ID válido'),

    Array ('accion', 'id_accion', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion','input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion', 'input', 7, 'cumple formato numerico', 'format', 'EDIT', 'id_accion_format_ko', 'Formato incorrecto. Debe ser un número entero'),
    Array ('accion', 'id_accion', 'input', 8, 'id valido', 'valid', 'EDIT', 'true', 'ID válido'),

    Array ('accion', 'id_accion', 'input', 9, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion','input', 10, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 1 y 11 caracteres'),
    Array ('accion', 'id_accion', 'input', 11, 'cumple formato numerico', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato incorrecto. Debe ser un número entero'),
    Array ('accion', 'id_accion', 'input', 12, 'id valido', 'valid', 'SEARCH', 'true', 'ID válido'),


    /* ==================== NOMBRE_ACCION ====================*/

    Array('accion','nombre_accion','input',13,'cumple tamaño minimo','min_size','ADD','nombre_accion_min_size_ko','El nombre de accion es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('accion','nombre_accion','input',14,'cumple tamaño maximo','max_size','ADD','nombre_accion_max_size_ko','El nombre de accion es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('accion','nombre_accion','input',15,'cumple formato','format','ADD','nombre_accion_format_ko','El nombre de accion tiene un formato incorrecto. Introduzca el nombre correctamente permitiendo ñ'),
    Array('accion','nombre_accion','input',16,'valor correcto','valid','ADD','true','El nombre de accion es correcto.') ,

    Array('accion','nombre_accion','input',17,'cumple tamaño minimo','min_size','EDIT','nombre_accion_min_size_ko','El nombre de accion es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('accion','nombre_accion','input',18,'cumple tamaño maximo','max_size','EDIT','nombre_accion_max_size_ko','El nombre de accion es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('accion','nombre_accion','input',19,'cumple formato','format','EDIT','nombre_accion_format_ko','El nombre de accion tiene un formato incorrecto. Introduzca el nombre correctamente permitiendo ñ'),
    Array('accion','nombre_accion','input',20,'valor correcto','valid','EDIT','true','El nombre de accion es correcto.'),

    Array('accion','nombre_accion','input',21,'cumple tamaño maximo','max_size','SEARCH','nombre_accion_max_size_ko','El nombre de accion es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('accion','nombre_accion','input',22,'cumple formato','format','SEARCH','nombre_accion_format_ko','El nombre de accion tiene un formato incorrecto. Introduzca el nombre correctamente permitiendo ñ'),
    Array('accion','nombre_accion','input',23,'valor correcto','valid','SEARCH','true','El nombre de accion es correcto.'),




    /* ==================== DESCRIPCION ==================== */

    Array ('accion', 'descrip_accion', 'textarea', 24, 'cumple tamaño minimo', 'min_size', 'ADD', 'descrip_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array ('accion', 'descrip_accion','textarea', 25, 'cumple tamaño maximo', 'max_size', 'ADD', 'descrip_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array ('accion', 'descrip_accion', 'textarea', 26, 'cumple formato', 'format', 'ADD', 'descrip_accion_format_ko', 'Formato incorrecto. Debe ser alfanumérico'),
    Array ('accion', 'descrip_accion', 'textarea', 27, 'descripcion valida', 'valid', 'ADD', 'true', 'Descripción válida'),

    Array ('accion', 'descrip_accion', 'textarea', 28, 'cumple tamaño minimo', 'min_size', 'EDIT', 'descrip_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array ('accion', 'descrip_accion','textarea', 29, 'cumple tamaño maximo', 'max_size', 'EDIT', 'descrip_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array ('accion', 'descrip_accion', 'textarea', 30, 'cumple formato alfabetico', 'format', 'EDIT', 'descrip_accion_format_ko', 'Formato incorrecto. Debe ser alfanumérico'),
    Array ('accion', 'descrip_accion', 'textarea', 31, 'descripcion valida', 'valid', 'EDIT', 'true', 'Descripción válida'),
    
    Array ('accion', 'descrip_accion','textarea', 33, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'descrip_accion_max_size_ko', 'Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array ('accion', 'descrip_accion', 'textarea', 34, 'cumple formato alfanumerico', 'format', 'SEARCH', 'descrip_accion_format_ko', 'Formato incorrecto. Debe ser alfanumérico'),
    Array ('accion', 'descrip_accion', 'textarea', 35, 'descripcion valida', 'valid', 'SEARCH', 'true', 'Descripción válida')


];


    /*let persona_pruebas = [
 
/* ==================== DNI ==================== 
 
Array('persona','dni',1,1,'ADD',{ dni: '1234567A' },'dni_min_size_ko'),
Array('persona','dni',2,2,'ADD',{ dni: '123456789A' },'dni_max_size_ko'),
Array('persona','dni',3,3,'ADD',{ dni: 'A1234567B' },'dni_format_ko'),
Array('persona','dni',4,4,'ADD',{ dni: '12345678Z' },true),
 */
let accion_pruebas = [

    /* ==================== ID_ACCION ==================== */

    Array('accion', 'id_accion', 1, 1, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'),
    Array('accion', 'id_accion', 2, 2, 'ADD', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('accion', 'id_accion', 3, 3, 'ADD', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('accion', 'id_accion', 4, 4, 'ADD', { id_accion: '12345' }, true),

    Array('accion', 'id_accion', 5, 5, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'),
    Array('accion', 'id_accion', 6, 6, 'EDIT', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('accion', 'id_accion', 7, 7, 'EDIT', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('accion', 'id_accion', 8, 8, 'EDIT', { id_accion: '12345' }, true),

    Array('accion', 'id_accion', 9, 9, 'SEARCH', { id_accion: '' }, 'id_accion_min_size_ko'),
    Array('accion', 'id_accion', 10, 10, 'SEARCH', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('accion', 'id_accion', 11, 11, 'SEARCH', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('accion', 'id_accion', 12, 12, 'SEARCH', { id_accion: '12345' }, true),


    /* ==================== NOMBRE_ACCION ==================== */

    Array('accion', 'nombre_accion', 13, 13, 'ADD', { nombre_accion: 'Hola' }, 'nombre_accion_min_size_ko'),
    Array('accion', 'nombre_accion', 14, 14, 'ADD', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'),
    Array('accion', 'nombre_accion', 15, 15, 'ADD', { nombre_accion: 'Accion123!' }, 'nombre_accion_format_ko'),
    Array('accion', 'nombre_accion', 16, 16, 'ADD', { nombre_accion: 'Nombre Accion Valido' }, true),

    Array('accion', 'nombre_accion', 17, 17, 'EDIT', { nombre_accion: 'Hola' }, 'nombre_accion_min_size_ko'),
    Array('accion', 'nombre_accion', 18, 18, 'EDIT', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'),
    Array('accion', 'nombre_accion', 19, 19, 'EDIT', { nombre_accion: 'Accion123!' }, 'nombre_accion_format_ko'),
    Array('accion', 'nombre_accion', 20, 20, 'EDIT', { nombre_accion: 'Nombre Accion Valido' }, true),

    Array('accion', 'nombre_accion', 21, 21, 'SEARCH', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'),
    Array('accion', 'nombre_accion', 22, 22, 'SEARCH', { nombre_accion: 'Accion123!' }, 'nombre_accion_format_ko'),
    Array('accion', 'nombre_accion', 23, 23, 'SEARCH', { nombre_accion: 'Nombre' }, true),


    /* ==================== DESCRIP_ACCION ==================== */

    Array('accion', 'descrip_accion', 24, 24, 'ADD', { descrip_accion: 'Hola' }, 'descrip_accion_min_size_ko'),
    Array('accion', 'descrip_accion', 25, 25, 'ADD', { descrip_accion: 'a'.repeat(201) }, 'descrip_accion_max_size_ko'),
    Array('accion', 'descrip_accion', 26, 26, 'ADD', { descrip_accion: 'Descripcion con @#$' }, 'descrip_accion_format_ko'),
    Array('accion', 'descrip_accion', 27, 27, 'ADD', { descrip_accion: 'Esta es una descripcion valida de la accion' }, true),

    Array('accion', 'descrip_accion', 28, 28, 'EDIT', { descrip_accion: 'Hola' }, 'descrip_accion_min_size_ko'),
    Array('accion', 'descrip_accion', 29, 29, 'EDIT', { descrip_accion: 'a'.repeat(201) }, 'descrip_accion_max_size_ko'),
    Array('accion', 'descrip_accion', 30, 30, 'EDIT', { descrip_accion: 'Descripcion con @#$' }, 'descrip_accion_format_ko'),
    Array('accion', 'descrip_accion', 31, 31, 'EDIT', { descrip_accion: 'Esta es una descripcion valida de la accion' }, true),

    Array('accion', 'descrip_accion', 32, 32, 'SEARCH', { descrip_accion: 'Hola' }, 'descrip_accion_min_size_ko'),
    Array('accion', 'descrip_accion', 33, 33, 'SEARCH', { descrip_accion: 'a'.repeat(201) }, 'descrip_accion_max_size_ko'),
    Array('accion', 'descrip_accion', 34, 34, 'SEARCH', { descrip_accion: 'Descripcion con @#$' }, 'descrip_accion_format_ko'),
    Array('accion', 'descrip_accion', 35, 35, 'SEARCH', { descrip_accion: 'Esta es una descripcion valida de la accion' }, true)

];


