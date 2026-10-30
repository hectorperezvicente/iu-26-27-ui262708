var textos_EN = {

	// textos titulos generales
	'text_titulo_app': 'IU ET2 Interface',
	'text_titulo_menu': 'Menu Options',
	'text_titulo_pie': 'Footer',
    'label_seleccioncolumnas': 'Select columns ',
    
    // textos de test
    /*'res_estructura_tests':'Tabla verificacion estructura de test',
	'resultadodef':'formato correcto estructura definicion tests',
	'res_estructura_pruebas':'Tabla verificacion estructura de pruebas',
	'resultadoprueba':'formato correcto estructura pruebas',
	'res_pruebas':'Tabla ejecución de pruebas',
	'resultadotest':'Resultado ejecucion pruebas',
    */

    // textos menu
	'text_menu_persona': 'Person Management',
	'text_menu_usuario': 'User Management',
	'text_menu_rolaccionfuncionalidad': 'Role-Action-Functionality Management',
	'text_menu_funcionalidad_accion': 'Functionality-Action Management',

    // textos entidad persona
	'text_titulo_page_persona' : 'Personal Data Management',
    'text_contenido_titulo_form_persona_ADD': 'Personal Data ADD Form',
	'text_contenido_titulo_form_persona_EDIT': 'Personal Data EDIT Form',
	'text_contenido_titulo_form_persona_DELETE': 'Personal Data DELETE Form',
	'text_contenido_titulo_form_persona_SHOWCURRENT': 'Personal Data SHOWCURRENT Form',
    'text_contenido_titulo_form_persona_SEARCH': 'Personal Data SEARCH Form',

	// atributos
	'dni': 'Identification',
    'nombre_persona': 'First Name',
    'apellidos_persona': 'Last Name',
    'fechaNacimiento_persona': 'Date of Birth',
    'direccion_persona': 'Address',
    'telefono_persona': 'Phone',
    'email_persona': 'Email',
    'foto_persona': 'Photo',

	// labels
	'label_dni': 'Identification',
	'label_nombre_persona': 'First Name',
	'label_apellidos_persona': 'Last Name',
	'label_fechaNacimiento_persona': 'Date of Birth',
	'label_direccion_persona': 'Address',
	'label_telefono_persona': 'Phone',
	'label_email_persona': 'Email',
	'label_foto_persona': 'Photo',
	'label_nuevo_foto_persona': 'New Photo',

	// errores validaciones formulario
	// ADD/EDIT

	// dni
	'dni_min_size_ko':'ID number too short. Must have 8 numbers and 1 alphabetical character',
    'dni_max_size_ko':'ID number too long. Must have 8 numbers and 1 alphabetical character',
    'dni_format_ko':'Incorrect ID/foreign ID format. ID number 8 digits 1 letter, foreign ID number 1 letter 7 digits 1 letter',
    // nombre_persona
    'nombre_persona_min_size_ko':'Name too short. Must have more than 4 alphabetical characters',
    'nombre_persona_max_size_ko':'Name too long. Must have less than 15 alphabetic characters',
    'nombre_persona_format_ko':'Incorrect name. Only alphabetic characters are allowed',

    // apellidos_persona
    'apellidos_persona_min_size_ko': 'Last name too short. Must have more than 4 alphabetic characters or spaces',
    'apellidos_persona_max_size_ko': 'Last name too long. Must have less than 20 alphabetic characters or spaces',
    'apellidos_persona_format_ko': 'Last name incorrect. Only alphabetic characters and spaces are allowed',

    //fechaNacimiento_persona
    'fechaNacimiento_persona_format_ko': 'Date is incorrect. Must be in dd/mm/yyyy format',
    'fechaNacimiento_persona_valid_ko': 'Date is invalid. The date must exist',


	// email persona
	'email_persona_min_size_ko': '',
	'email_persona_max_size_ko':'',
	'email_persona_format_ko':'',

	// nuevo foto persona	
	'nuevo_foto_persona_exist_file_ko':'The file does not exist. A photo in jpg format must be uploaded.',
	'nuevo_foto_persona_max_size_file_ko':'',
	'nuevo_foto_persona_type_file_ko':'',
	'nuevo_foto_persona_format_name_file_ko':'',
	'nuevo_foto_persona_min_size_ko':'',
	'nuevo_foto_persona_max_size_ko':'',

	//SEARCH
	// foto persona
	'foto_persona_max_size_ko':'',
	'foto_persona_format_ko':'',
	

	//errores acciones
	'RECORDSET_VACIO' : 'There are not results for your search',
	'dni_es_nulo_ko':'DNI can not be empty',

	'admin_no_se_puede_modificar_ko':'The admin cannot be modified',

	// textos entidad usuario
	'text_titulo_page_usuario' : 'User Management',
	'text_contenido_titulo_form_usuario_ADD': 'User ADD Form',
	'text_contenido_titulo_form_usuario_EDIT': 'User EDIT Form',
	'text_contenido_titulo_form_usuario_DELETE': 'User DELETE Form',
	'text_contenido_titulo_form_usuario_SHOWCURRENT': 'User SHOWCURRENT Form',
	'text_contenido_titulo_form_usuario_SEARCH': 'User SEARCH Form',

	// atributos (cabeceras de la tabla; 'dni' ya existe)
	'usuario': 'User',
	'contrasena': 'Password',
	'id_rol': 'Role Id',

	// labels ('label_dni' ya existe)
	'label_usuario': 'User',
	'label_contrasena': 'Password',
	'label_id_rol': 'Role Id',

	// errores validaciones formulario
	// dni (letra, comun con persona)
	'dni_personalized_ko':'The ID letter does not match the number',

	// usuario
	'usuario_min_size_ko':'User too short. Must have at least 5 characters',
	'usuario_max_size_ko':'User too long. Must have at most 45 characters',
	'usuario_format_ko':'Incorrect user. Only letters without accents or ñ are allowed',

	// contrasena
	'contrasena_min_size_ko':'Password too short. Must have at least 8 characters',
	'contrasena_max_size_ko':'Password too long. Must have at most 45 characters',
	'contrasena_format_ko':'Incorrect password. Only letters are allowed',

	// id_rol
	'id_rol_min_size_ko':'Role id cannot be empty',
	'id_rol_max_size_ko':'Role id too long. Must have at most 11 digits',
	'id_rol_format_ko':'Incorrect role id. Only numbers are allowed',

	// textos entidad rolaccionfuncionalidad
	'text_titulo_page_rolaccionfuncionalidad' : 'Role, Action and Functionality Management',
	'text_contenido_titulo_form_rolaccionfuncionalidad_ADD': 'Role-Action-Functionality ADD Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_EDIT': 'Role-Action-Functionality EDIT Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_DELETE': 'Role-Action-Functionality DELETE Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_SHOWCURRENT': 'Role-Action-Functionality SHOWCURRENT Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_SEARCH': 'Role-Action-Functionality SEARCH Form',

	// atributos (cabeceras de la tabla; 'id_rol' ya existe)
	'id_funcionalidad': 'Functionality Id',
	'id_accion': 'Action Id',

	// labels ('label_id_rol' ya existe)
	'label_id_funcionalidad': 'Functionality Id',
	'label_id_accion': 'Action Id',

	// errores validaciones formulario (los de id_rol ya existen)
	// id_funcionalidad
	'id_funcionalidad_min_size_ko':'Functionality id cannot be empty',
	'id_funcionalidad_max_size_ko':'Functionality id too long. Must have at most 11 digits',
	'id_funcionalidad_format_ko':'Incorrect functionality id. Only numbers are allowed',

	// id_accion
	'id_accion_min_size_ko':'Action id cannot be empty',
	'id_accion_max_size_ko':'Action id too long. Must have at most 11 digits',
	'id_accion_format_ko':'Incorrect action id. Only numbers are allowed',

	// textos entidad funcionalidad_accion (id_funcionalidad e id_accion ya tienen atributos, labels y errores)
	'text_titulo_page_funcionalidad_accion' : 'Functionality and Action Management',
	'text_contenido_titulo_form_funcionalidad_accion_ADD': 'Functionality-Action ADD Form',
	'text_contenido_titulo_form_funcionalidad_accion_EDIT': 'Functionality-Action EDIT Form',
	'text_contenido_titulo_form_funcionalidad_accion_DELETE': 'Functionality-Action DELETE Form',
	'text_contenido_titulo_form_funcionalidad_accion_SHOWCURRENT': 'Functionality-Action SHOWCURRENT Form',
	'text_contenido_titulo_form_funcionalidad_accion_SEARCH': 'Functionality-Action SEARCH Form',

	// resultado de un test correcto (Data_Test busca traduccion[true])
	'true':'Correct value',

}