let funcionalidad_accion_def_tests = [

    // --- id_funcionalidad ---
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_funcionalidad_min_size_ko', 'El id de funcionalidad es demasiado corto. Introduzca al menos 1 numeros'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_funcionalidad_max_size_ko', 'El id de funcionalidad es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_funcionalidad_format_ko', 'El id de funcionalidad tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 4, 'valor correcto', 'valid', 'ADD', true, 'El id de funcionalidad es correcto.'),   
    
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_funcionalidad_min_size_ko', 'El id de funcionalidad es demasiado corto. Introduzca al menos 1 numeros'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_funcionalidad_max_size_ko', 'El id de funcionalidad es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_funcionalidad_format_ko', 'El id de funcionalidad tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 8, 'valor correcto', 'valid', 'EDIT', true, 'El id de funcionalidad es correcto.'),

    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_ko', 'El id de funcionalidad es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_funcionalidad_format_ko', 'El id de funcionalidad tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_funcionalidad', 'input', 11, 'valor correcto', 'valid', 'SEARCH', true, 'El id de funcionalidad es correcto.'),

    // --- id_accion ---
    Array('funcionalidad_accion', 'id_accion', 'input', 12, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'El id de accion es demasiado corto. Introduzca al menos 1 numero'),
    Array('funcionalidad_accion', 'id_accion', 'input', 13, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'El id de accion es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_accion', 'input', 14, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'El id de accion tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_accion', 'input', 15, 'valor correcto', 'valid', 'ADD', true, 'El id de accion es correcto.'),

    Array('funcionalidad_accion', 'id_accion', 'input', 16, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'El id de accion es demasiado corto. Introduzca al menos 1 numero'),
    Array('funcionalidad_accion', 'id_accion', 'input', 17, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'El id de accion es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_accion', 'input', 18, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'El id de accion tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_accion', 'input', 19, 'valor correcto', 'valid', 'EDIT', true, 'El id de accion es correcto.'),

    Array('funcionalidad_accion', 'id_accion', 'input', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'El id de accion es demasiado largo. Introduzca hasta un maximo de 11 numeros'),
    Array('funcionalidad_accion', 'id_accion', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'El id de accion tiene un formato incorrecto. Introduzca el id correctamente con formato numerico'),
    Array('funcionalidad_accion', 'id_accion', 'input', 22, 'valor correcto', 'valid', 'SEARCH', true, 'El id de accion es correcto.'),
    
];

let funcionalidad_accion_pruebas = [

    // --- id_funcionalidad ---
    Array('funcionalidad_accion', 'id_funcionalidad', 1, 1, 'ADD', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 2, 2, 'ADD', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 3, 3, 'ADD', { id_funcionalidad: '12a' }, 'id_funcionalidad_format_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 4, 4, 'ADD', { id_funcionalidad: '12345' }, true),

    Array('funcionalidad_accion', 'id_funcionalidad', 5, 5, 'EDIT', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 6, 6, 'EDIT', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 7, 7, 'EDIT', { id_funcionalidad: '12a' }, 'id_funcionalidad_format_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 8, 8, 'EDIT', { id_funcionalidad: '12345' }, true),

    Array('funcionalidad_accion', 'id_funcionalidad', 9, 9, 'SEARCH', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 10, 10, 'SEARCH', { id_funcionalidad: '12a' }, 'id_funcionalidad_format_ko'),
    Array('funcionalidad_accion', 'id_funcionalidad', 11, 11, 'SEARCH', { id_funcionalidad: '12345' }, true),

    // --- id_accion ---
    Array('funcionalidad_accion', 'id_accion', 12, 12, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'),
    Array('funcionalidad_accion', 'id_accion', 13, 13, 'ADD', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('funcionalidad_accion', 'id_accion', 14, 14, 'ADD', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('funcionalidad_accion', 'id_accion', 15, 15, 'ADD', { id_accion: '12345' }, true),

    Array('funcionalidad_accion', 'id_accion', 16, 16, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'),
    Array('funcionalidad_accion', 'id_accion', 17, 17, 'EDIT', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('funcionalidad_accion', 'id_accion', 18, 18, 'EDIT', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('funcionalidad_accion', 'id_accion', 19, 19, 'EDIT', { id_accion: '12345' }, true),

    Array('funcionalidad_accion', 'id_accion', 20, 20, 'SEARCH', { id_accion: '123456789012' }, 'id_accion_max_size_ko'),
    Array('funcionalidad_accion', 'id_accion', 21, 21, 'SEARCH', { id_accion: 'abc' }, 'id_accion_format_ko'),
    Array('funcionalidad_accion', 'id_accion', 22, 22, 'SEARCH', { id_accion: '12345' }, true),

];