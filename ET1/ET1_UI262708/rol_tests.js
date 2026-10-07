let rol_def_tests = [
    /* ==================== ID_ROL ==================== */

    Array('rol','id_rol','input',1,'cumple tamaño minimo','min_size','ADD','id_rol_min_size_ko','El id de rol es demasiado corto. Introduzca al menos 1 numero'),
    Array('rol','id_rol','input',2,'cumple tamaño maximo','max_size','ADD','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('rol','id_rol','input',3,'cumple formato','format','ADD','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('rol','id_rol','input',4,'valor correcto','valid','ADD',true,'El id de rol es correcto.'),

    Array('rol','id_rol','input',5,'cumple tamaño minimo','min_size','EDIT','id_rol_min_size_ko','El id de rol es demasiado corto. Introduzca al menos 1 numero'),
    Array('rol','id_rol','input',6,'cumple tamaño maximo','max_size','EDIT','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('rol','id_rol','input',7,'cumple formato','format','EDIT','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('rol','id_rol','input',8,'valor correcto','valid','EDIT',true,'El id de rol es correcto.'),

    Array('rol','id_rol','input',9,'cumple tamaño maximo','max_size','SEARCH','id_rol_max_size_ko','El id de rol es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('rol','id_rol','input',10,'cumple formato','format','SEARCH','id_rol_format_ko','El id de rol tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('rol','id_rol','input',11,'valor correcto','valid','SEARCH',true,'El id de rol es correcto.'),

    /* ==================== ROL_NAME ==================== */

    Array('rol','rol_name','input',12,'cumple tamaño minimo','min_size','ADD','rol_name_min_size_ko','El nombre de rol es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('rol','rol_name','input',13,'cumple tamaño maximo','max_size','ADD','rol_name_max_size_ko','El nombre de rol es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('rol','rol_name','input',14,'cumple formato','format','ADD','rol_name_format_ko','El nombre de rol tiene un formato incorrecto. Solo se permiten letras alfabeticas'),
    Array('rol','rol_name','input',15,'valor correcto','valid','ADD',true,'El nombre de rol es correcto.'),

    Array('rol','rol_name','input',16,'cumple tamaño minimo','min_size','EDIT','rol_name_min_size_ko','El nombre de rol es demasiado corto. Introduzca al menos 5 caracteres'),
    Array('rol','rol_name','input',17,'cumple tamaño maximo','max_size','EDIT','rol_name_max_size_ko','El nombre de rol es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('rol','rol_name','input',18,'cumple formato','format','EDIT','rol_name_format_ko','El nombre de rol tiene un formato incorrecto. Solo se permiten letras alfabeticas'),
    Array('rol','rol_name','input',19,'valor correcto','valid','EDIT',true,'El nombre de rol es correcto.'),

    Array('rol','rol_name','input',20,'cumple tamaño maximo','max_size','SEARCH','rol_name_max_size_ko','El termino de busqueda es demasiado largo. Introduzca hasta un maximo de 48 caracteres'),
    Array('rol','rol_name','input',21,'cumple formato','format','SEARCH','rol_name_format_ko','El termino de busqueda contiene caracteres no permitidos. Solo se permiten letras alfabeticas'),
    Array('rol','rol_name','input',22,'valor correcto','valid','SEARCH',true,'El termino de busqueda es correcto.'),

    /* ==================== ROL_DESCRIPTION ==================== */

    Array('rol','rol_description','textarea',23,'cumple tamaño minimo','min_size','ADD','rol_description_min_size_ko','La descripcion de rol es demasiado corta. Introduzca al menos 5 caracteres'),
    Array('rol','rol_description','textarea',24,'cumple tamaño maximo','max_size','ADD','rol_description_max_size_ko','La descripcion de rol es demasiado larga. Introduzca hasta un maximo de 200 caracteres'),
    Array('rol','rol_description','textarea',25,'cumple formato','format','ADD','rol_description_format_ko','La descripcion de rol tiene un formato incorrecto. Introduzca texto alfabetico permitiendo ñ, espacios y signos de puntuacion'),
    Array('rol','rol_description','textarea',26,'valor correcto','valid','ADD',true,'La descripcion de rol es correcta.'),

    Array('rol','rol_description','textarea',27,'cumple tamaño minimo','min_size','EDIT','rol_description_min_size_ko','La descripcion de rol es demasiado corta. Introduzca al menos 5 caracteres'),
    Array('rol','rol_description','textarea',28,'cumple tamaño maximo','max_size','EDIT','rol_description_max_size_ko','La descripcion de rol es demasiado larga. Introduzca hasta un maximo de 200 caracteres'),
    Array('rol','rol_description','textarea',29,'cumple formato','format','EDIT','rol_description_format_ko','La descripcion de rol tiene un formato incorrecto. Introduzca texto alfabetico permitiendo ñ, espacios y signos de puntuacion'),
    Array('rol','rol_description','textarea',30,'valor correcto','valid','EDIT',true,'La descripcion de rol es correcta.'),

    Array('rol','rol_description','textarea',31,'cumple tamaño maximo','max_size','SEARCH','rol_description_max_size_ko','El termino de busqueda es demasiado largo. Introduzca hasta un maximo de 200 caracteres'),
    Array('rol','rol_description','textarea',32,'cumple formato','format','SEARCH','rol_description_format_ko','El termino de busqueda contiene caracteres no permitidos. Solo se permiten letras, ñ, espacios y signos de puntuacion'),
    Array('rol','rol_description','textarea',33,'valor correcto','valid','SEARCH',true,'El termino de busqueda es correcto.')
];

let rol_pruebas = [

    /* ==================== ID_ROL ==================== */

    Array('rol','id_rol',1,1,'ADD',{ id_rol: '' },'id_rol_min_size_ko'),
    Array('rol','id_rol',2,2,'ADD',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('rol','id_rol',3,3,'ADD',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('rol','id_rol',4,4,'ADD',{ id_rol: '12345' },true),

    Array('rol','id_rol',5,5,'EDIT',{ id_rol: '' },'id_rol_min_size_ko'),
    Array('rol','id_rol',6,6,'EDIT',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('rol','id_rol',7,7,'EDIT',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('rol','id_rol',8,8,'EDIT',{ id_rol: '12345' },true),

    Array('rol','id_rol',9,9,'SEARCH',{ id_rol: '123456789012' },'id_rol_max_size_ko'),
    Array('rol','id_rol',10,10,'SEARCH',{ id_rol: '12a' },'id_rol_format_ko'),
    Array('rol','id_rol',11,11,'SEARCH',{ id_rol: '12345' },true),

    /* ==================== ROL_NAME ==================== */

    Array('rol','rol_name',12,12,'ADD',{ rol_name: 'hola' },'rol_name_min_size_ko'),
    Array('rol','rol_name',13,13,'ADD',{ rol_name: 'a'.repeat(49) },'rol_name_max_size_ko'),
    Array('rol','rol_name',14,14,'ADD',{ rol_name: 'Admin123' },'rol_name_format_ko'),
    Array('rol','rol_name',15,15,'ADD',{ rol_name: 'Administrador' },true),

    Array('rol','rol_name',16,16,'EDIT',{ rol_name: 'hola' },'rol_name_min_size_ko'),
    Array('rol','rol_name',17,17,'EDIT',{ rol_name: 'a'.repeat(49) },'rol_name_max_size_ko'),
    Array('rol','rol_name',18,18,'EDIT',{ rol_name: 'Admin123' },'rol_name_format_ko'),
    Array('rol','rol_name',19,19,'EDIT',{ rol_name: 'Administrador' },true),

    Array('rol','rol_name',20,20,'SEARCH',{ rol_name: 'a'.repeat(49) },'rol_name_max_size_ko'),
    Array('rol','rol_name',21,21,'SEARCH',{ rol_name: 'Admin123' },'rol_name_format_ko'),
    Array('rol','rol_name',22,22,'SEARCH',{ rol_name: 'Administrador' },true),

    /* ==================== ROL_DESCRIPTION ==================== */

    Array('rol','rol_description',23,23,'ADD',{ rol_description: 'hola' },'rol_description_min_size_ko'),
    Array('rol','rol_description',24,24,'ADD',{ rol_description: 'a'.repeat(201) },'rol_description_max_size_ko'),
    Array('rol','rol_description',25,25,'ADD',{ rol_description: 'Descripcion con version 1.0' },'rol_description_format_ko'),
    Array('rol','rol_description',26,26,'ADD',{ rol_description: 'Esta es una descripcion valida, con ñ y signos.' },true),

    Array('rol','rol_description',27,27,'EDIT',{ rol_description: 'hola' },'rol_description_min_size_ko'),
    Array('rol','rol_description',28,28,'EDIT',{ rol_description: 'a'.repeat(201) },'rol_description_max_size_ko'),
    Array('rol','rol_description',29,29,'EDIT',{ rol_description: 'Descripcion con version 1.0' },'rol_description_format_ko'),
    Array('rol','rol_description',30,30,'EDIT',{ rol_description: 'Esta es una descripcion valida, con ñ y signos.' },true),

    Array('rol','rol_description',31,31,'SEARCH',{ rol_description: 'a'.repeat(201) },'rol_description_max_size_ko'),
    Array('rol','rol_description',32,32,'SEARCH',{ rol_description: 'Descripcion con version 1.0' },'rol_description_format_ko'),
    Array('rol','rol_description',33,33,'SEARCH',{ rol_description: 'Esta es una descripcion valida, con ñ y signos.' },true)
];