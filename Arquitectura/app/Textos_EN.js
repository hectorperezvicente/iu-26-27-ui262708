var textos_EN = {

	// general titles
	'text_titulo_app': 'IU ET2 Interface',
	'text_titulo_menu': 'Menu Options',
	'text_titulo_pie': 'Footer',
	'label_seleccioncolumnas': 'Select columns',

	// result of a correct validation (used by the test)
	'true': 'Correct',

	// menu
	'text_menu_persona': 'Person management',
	'text_menu_usuario': 'User management',
	'text_menu_rol': 'Role management',
	'text_menu_accion': 'Action management',
	'text_menu_funcionalidad': 'Functionality management',
	'text_menu_funcionalidad_accion': 'Functionality-action management',
	'text_menu_rolaccionfuncionalidad': 'Role-action-functionality permissions',

	// table action columns
	'EDIT': 'Edit',
	'DELETE': 'Delete',
	'SHOWCURRENT': 'Detail',

	// opcion vacia de los select de FK
	'text_opcion_seleccionar': '-- Select --',
	'text_opcion_todos': '-- All --',

	// iconos del boton de submit (alt y title)
	'text_icono_ADD': 'Add',
	'text_icono_EDIT': 'Edit',
	'text_icono_DELETE': 'Delete',
	'text_icono_SEARCH': 'Search',

	// error del back sin traduccion propia
	'text_error_back_desconocido': 'An error occurred while performing the action on the server',

	/*************************************************************************
		PERSONA
	*************************************************************************/

	// titles
	'text_titulo_page_persona': 'Personal Data Management',
	'text_contenido_titulo_form_persona_ADD': 'Add Personal Data Form',
	'text_contenido_titulo_form_persona_EDIT': 'Edit Personal Data Form',
	'text_contenido_titulo_form_persona_DELETE': 'Delete Personal Data Form',
	'text_contenido_titulo_form_persona_SHOWCURRENT': 'Personal Data Detail Form',
	'text_contenido_titulo_form_persona_SEARCH': 'Search Personal Data Form',

	// attributes (table headers and column selector)
	'dni': 'ID number',
	'nombre_persona': 'First name',
	'apellidos_persona': 'Last name',
	'fechaNacimiento_persona': 'Date of birth',
	'direccion_persona': 'Address',
	'telefono_persona': 'Phone',
	'email_persona': 'Email',
	'foto_persona': 'Photo',

	// labels
	'label_dni': 'ID number',
	'label_nombre_persona': 'First name',
	'label_apellidos_persona': 'Last name',
	'label_fechaNacimiento_persona': 'Date of birth',
	'label_direccion_persona': 'Address',
	'label_telefono_persona': 'Phone',
	'label_email_persona': 'Email',
	'label_foto_persona': 'Photo',
	'label_nuevo_foto_persona': 'New photo',

	// validation errors
	// dni
	'dni_min_size_ko': 'ID number too short. It must have 9 characters: 8 digits and 1 uppercase letter',
	'dni_max_size_ko': 'ID number too long. It must have 9 characters: 8 digits and 1 uppercase letter',
	'dni_format_ko': 'Wrong ID number format. It must be 8 digits followed by an uppercase letter',
	'dni_personalized_ko': 'The ID letter does not match the number',
	// nombre_persona
	'nombre_persona_min_size_ko': 'First name too short. It must have between 2 and 45 characters',
	'nombre_persona_max_size_ko': 'First name too long. It must have at most 45 characters',
	'nombre_persona_format_ko': 'Wrong first name format. Only letters (including \u00F1 and accents), dots, hyphens and spaces are allowed',
	// apellidos_persona
	'apellidos_persona_min_size_ko': 'Last name too short. It must have between 3 and 100 characters',
	'apellidos_persona_max_size_ko': 'Last name too long. It must have at most 100 characters',
	'apellidos_persona_format_ko': 'Wrong last name format. Only letters (including \u00F1 and accents), dots, hyphens and spaces are allowed',
	// fechaNacimiento_persona
	'fechaNacimiento_persona_min_size_ko': 'Date too short. It must have between 8 and 10 characters in d/m/yyyy or dd/mm/yyyy format',
	'fechaNacimiento_persona_max_size_ko': 'Date too long. It must have at most 10 characters',
	'fechaNacimiento_persona_format_ko': 'Wrong date format. It must be d/m/yyyy or dd/mm/yyyy',
	'fechaNacimiento_persona_personalized_ko': 'The date does not exist in the calendar',
	'fechaNacimiento_persona_future_date_ko': 'The date of birth cannot be later than today',
	// direccion_persona
	'direccion_persona_min_size_ko': 'Address too short. It must have between 10 and 200 characters',
	'direccion_persona_max_size_ko': 'Address too long. It must have at most 200 characters',
	'direccion_persona_format_ko': 'Wrong address format. Only letters (including \u00F1 and accents), digits, dots, hyphens, semicolons, spaces and / are allowed',
	// telefono_persona
	'telefono_persona_min_size_ko': 'Phone too short. It must have 9 digits',
	'telefono_persona_max_size_ko': 'Phone too long. It must have at most 9 digits',
	'telefono_persona_format_ko': 'Wrong phone format. Only digits are allowed',
	'telefono_persona_personalized_ko': 'Wrong phone. It must start with 6, 7, 8 or 9',
	// email_persona
	'email_persona_min_size_ko': 'Email too short. It must have between 6 and 45 characters',
	'email_persona_max_size_ko': 'Email too long. It must have at most 45 characters',
	'email_persona_format_ko': 'Wrong email format. It must be like user@domain.ext',
	// foto_persona
	'foto_persona_min_size_ko': 'Photo name too short. It must have between 5 and 15 characters',
	'foto_persona_max_size_ko': 'Photo name too long. It must have at most 15 characters',
	'foto_persona_format_ko': 'Wrong photo name format. Only letters without accents and dots, with .jpg or .jpeg extension',
	// nuevo_foto_persona
	'nuevo_foto_persona_exist_file_ko': 'No photo selected. You must upload a jpg or jpeg photo',
	'nuevo_foto_persona_min_size_name_file_ko': 'Photo file name too short. It must have between 5 and 15 characters',
	'nuevo_foto_persona_max_size_name_file_ko': 'Photo file name too long. It must have between 5 and 15 characters',
	'nuevo_foto_persona_format_name_file_ko': 'Wrong photo file name. Only letters without accents and dots, with .jpg or .jpeg extension',
	'nuevo_foto_persona_type_file_ko': 'Wrong file type. The photo must be jpg or jpeg',
	'nuevo_foto_persona_max_size_file_ko': 'Photo too big. It must be at most 2 MB',

	/*************************************************************************
		ACCION
	*************************************************************************/
	'text_titulo_page_accion': 'Action Management',
	'text_contenido_titulo_form_accion_ADD': 'Add Action Form',
	'text_contenido_titulo_form_accion_EDIT': 'Edit Action Form',
	'text_contenido_titulo_form_accion_DELETE': 'Delete Action Form',
	'text_contenido_titulo_form_accion_SHOWCURRENT': 'Action Detail Form',
	'text_contenido_titulo_form_accion_SEARCH': 'Search Action Form',
	'id_accion': 'Action Id',
	'nombre_accion': 'Action name',
	'descrip_accion': 'Action description',
	'label_id_accion': 'Action Id',
	'label_nombre_accion': 'Action name',
	'label_descrip_accion': 'Action description',
	'id_accion_min_size_ko': 'The action id is too short. Enter at least 1 digit',
	'id_accion_max_size_ko': 'The action id is too long. Enter at most 11 digits',
	'id_accion_format_ko': 'Wrong action id format. Only digits are allowed',
	'nombre_accion_min_size_ko': 'The action name is too short. Enter at least 5 characters',
	'nombre_accion_max_size_ko': 'The action name is too long. Enter at most 48 characters',
	'nombre_accion_format_ko': 'Wrong action name format. Only letters (including \u00F1) are allowed',
	'descrip_accion_min_size_ko': 'The action description is too short. Enter at least 5 characters',
	'descrip_accion_max_size_ko': 'The action description is too long. Enter at most 200 characters',
	'descrip_accion_format_ko': 'Wrong action description format. Only letters (including \u00F1), spaces and punctuation marks are allowed',

	/*************************************************************************
		FUNCIONALIDAD
	*************************************************************************/
	'text_titulo_page_funcionalidad': 'Functionality Management',
	'text_contenido_titulo_form_funcionalidad_ADD': 'Add Functionality Form',
	'text_contenido_titulo_form_funcionalidad_EDIT': 'Edit Functionality Form',
	'text_contenido_titulo_form_funcionalidad_DELETE': 'Delete Functionality Form',
	'text_contenido_titulo_form_funcionalidad_SHOWCURRENT': 'Functionality Detail Form',
	'text_contenido_titulo_form_funcionalidad_SEARCH': 'Search Functionality Form',
	'id_funcionalidad': 'Functionality Id',
	'nombre_funcionalidad': 'Functionality name',
	'descrip_funcionalidad': 'Functionality description',
	'label_id_funcionalidad': 'Functionality Id',
	'label_nombre_funcionalidad': 'Functionality name',
	'label_descrip_funcionalidad': 'Functionality description',
	'id_funcionalidad_min_size_ko': 'The functionality id is too short. Enter at least 1 digit',
	'id_funcionalidad_max_size_ko': 'The functionality id is too long. Enter at most 11 digits',
	'id_funcionalidad_format_ko': 'Wrong functionality id format. Only digits are allowed',
	'nombre_funcionalidad_min_size_ko': 'The functionality name is too short. Enter at least 5 characters',
	'nombre_funcionalidad_max_size_ko': 'The functionality name is too long. Enter at most 48 characters',
	'nombre_funcionalidad_format_ko': 'Wrong functionality name format. Only letters (including \u00F1) are allowed',
	'descrip_funcionalidad_min_size_ko': 'The functionality description is too short. Enter at least 5 characters',
	'descrip_funcionalidad_max_size_ko': 'The functionality description is too long. Enter at most 200 characters',
	'descrip_funcionalidad_format_ko': 'Wrong functionality description format. Only letters (including \u00F1), spaces and punctuation marks are allowed',

	/*************************************************************************
		ROL
	*************************************************************************/
	'text_titulo_page_rol': 'Role Management',
	'text_contenido_titulo_form_rol_ADD': 'Add Role Form',
	'text_contenido_titulo_form_rol_EDIT': 'Edit Role Form',
	'text_contenido_titulo_form_rol_DELETE': 'Delete Role Form',
	'text_contenido_titulo_form_rol_SHOWCURRENT': 'Role Detail Form',
	'text_contenido_titulo_form_rol_SEARCH': 'Search Role Form',
	'id_rol': 'Role Id',
	'rol_name': 'Role name',
	'rol_description': 'Role description',
	'label_id_rol': 'Role',
	'label_rol_name': 'Role name',
	'label_rol_description': 'Role description',
	// id_rol: shared by rol and usuario
	'id_rol_min_size_ko': 'The role id is too short. Enter at least 1 digit',
	'id_rol_max_size_ko': 'The role id is too long. Enter at most 11 digits',
	'id_rol_format_ko': 'Wrong role id format. Only digits are allowed',
	'rol_name_min_size_ko': 'The role name is too short. Enter at least 5 characters',
	'rol_name_max_size_ko': 'The role name is too long. Enter at most 48 characters',
	'rol_name_format_ko': 'Wrong role name format. Only letters are allowed',
	'rol_description_min_size_ko': 'The role description is too short. Enter at least 5 characters',
	'rol_description_max_size_ko': 'The role description is too long. Enter at most 200 characters',
	'rol_description_format_ko': 'Wrong role description format. Only letters (including \u00F1), spaces and punctuation marks are allowed',

	/*************************************************************************
		USUARIO (dni and id_rol errors are in persona and rol)
	*************************************************************************/
	'text_titulo_page_usuario': 'User Management',
	'text_contenido_titulo_form_usuario_ADD': 'Add User Form',
	'text_contenido_titulo_form_usuario_EDIT': 'Edit User Form',
	'text_contenido_titulo_form_usuario_DELETE': 'Delete User Form',
	'text_contenido_titulo_form_usuario_SHOWCURRENT': 'User Detail Form',
	'text_contenido_titulo_form_usuario_SEARCH': 'Search User Form',
	'usuario': 'User',
	'contrasena': 'Password',
	'label_usuario': 'User',
	'label_contrasena': 'Password',
	'usuario_min_size_ko': 'The user name is too short. Enter at least 5 characters',
	'usuario_max_size_ko': 'The user name is too long. Enter at most 45 characters',
	'usuario_format_ko': 'Wrong user name format. Only letters without \u00F1 or accents are allowed',
	'contrasena_min_size_ko': 'The password is too short. Enter at least 8 characters',
	'contrasena_max_size_ko': 'The password is too long. Enter at most 45 characters',
	'contrasena_format_ko': 'Wrong password format. Only letters without \u00F1 or accents are allowed',

	/*************************************************************************
		ROLACCIONFUNCIONALIDAD (its attributes, labels and errors are in rol, accion and funcionalidad)
	*************************************************************************/
	'text_titulo_page_rolaccionfuncionalidad': 'Role, Action and Functionality Management',
	'text_contenido_titulo_form_rolaccionfuncionalidad_ADD': 'Role-Action-Functionality ADD Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_EDIT': 'Role-Action-Functionality EDIT Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_DELETE': 'Role-Action-Functionality DELETE Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_SHOWCURRENT': 'Role-Action-Functionality SHOWCURRENT Form',
	'text_contenido_titulo_form_rolaccionfuncionalidad_SEARCH': 'Role-Action-Functionality SEARCH Form',

	/*************************************************************************
		FUNCIONALIDAD_ACCION (its attributes, labels and errors are in funcionalidad and accion)
	*************************************************************************/
	'text_titulo_page_funcionalidad_accion': 'Functionality and Action Management',
	'text_contenido_titulo_form_funcionalidad_accion_ADD': 'Functionality-Action ADD Form',
	'text_contenido_titulo_form_funcionalidad_accion_EDIT': 'Functionality-Action EDIT Form',
	'text_contenido_titulo_form_funcionalidad_accion_DELETE': 'Functionality-Action DELETE Form',
	'text_contenido_titulo_form_funcionalidad_accion_SHOWCURRENT': 'Functionality-Action SHOWCURRENT Form',
	'text_contenido_titulo_form_funcionalidad_accion_SEARCH': 'Functionality-Action SEARCH Form',

	/*************************************************************************
		OLD CODES (from the previous version): delete if no entity uses them
	*************************************************************************/
	'dni_personalized_validate_dni_ko': 'The ID letter does not match the number',
	'fechaNacimiento_persona_valid_ko': 'Date is invalid. The date must exist',

	/*************************************************************************
		ACTION ERRORS (returned by the back end)
	*************************************************************************/
	'RECORDSET_VACIO': 'There are no results for your search',
	'dni_es_nulo_ko': 'The ID number cannot be empty',
	'admin_no_se_puede_modificar_ko': 'The admin cannot be modified',
	'ERROR_UPLOAD_foto_persona_KO': 'Error uploading the photo to the server. Try again or use another photo',

}
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
