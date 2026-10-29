class usuario extends AbstractEntidad{

	constructor(esTest=null){

		super();

		this.columnasamostrar = ['dni','usuario','id_rol'];
		this.mostrarespecial = [];
		this.nombreentidad = 'usuario';

		this.dom = new entity_dom_fields();
		this.validations = new Validations();
		this.access_functions = new ExternalAccess();

		//init
		if (esTest == 'test'){}
		else{
			//visualizar seccion tabla y botones
			document.getElementById('IU_manage_entity').style.display = 'block';
			document.getElementById('text_title_page').classList.add('text_titulo_page_'+this.nombreentidad);

			//crear el formulario vacio
			document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

			//invocar busqueda en back con el formulario vacio
			this.SEARCH();
		}

	}

	/**
	 * devuelve el html del formulario de la entidad (sin action ni onsubmit ni onblur:
	 * los pone cada createForm_<ACCION> con colocarvalidaciones)
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id='form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label class="label_dni">DNI</label>
				<input type='text' id='dni' name='dni'></input>
				<span id="span_error_dni"><a id="error_dni"></a></span>
				<br>

				<label class="label_usuario">Usuario</label>
				<input type='text' id='usuario' name='usuario'></input>
				<span id="span_error_usuario"><a id="error_usuario"></a></span>
				<br>

				<label class="label_contrasena">Contraseña</label>
				<input type='password' id='contrasena' name='contrasena'></input>
				<span id="span_error_contrasena"><a id="error_contrasena"></a></span>
				<br>

				<label class="label_id_rol">Id Rol</label>
				<input type='text' id='id_rol' name='id_rol'></input>
				<span id="span_error_id_rol"><a id="error_id_rol"></a></span>
				<br>

			</form>
		`;
		return form_content;
	}

	/**********************************************************************************************
		validaciones personalizadas
	***********************************************************************************************/

	/**
	 * comprueba que la letra del dni corresponde a su numero (numero % 23)
	 * @param {string} id id del campo
	 * @returns {bool} true si la letra es correcta
	 */
	personalized_dni_letra(id){
		let valor = document.getElementById(id).value;
		let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
		let numero = parseInt(valor.substring(0,8), 10);
		return (letras.charAt(numero % 23) == valor.charAt(8));
	}

	/**
	 * muestra el error en el campo y devuelve el codigo
	 * @param {string} id id del campo
	 * @param {string} codigo codigo de error (campo_validacion_ko)
	 * @returns {string} codigo
	 */
	error_campo(id, codigo){
		this.dom.mostrar_error_campo(id, codigo);
		return codigo;
	}

	/**
	 * muestra el exito en el campo y devuelve true
	 * @param {string} id id del campo
	 * @returns {bool} true
	 */
	exito_campo(id){
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	/**
	 * ejecuta la validacion de la accion para todos los campos del formulario
	 * @param {string} accion ADD / EDIT / SEARCH
	 * @returns {bool} true si todos son correctos
	 * @returns {object} {id_campo: resultado} si alguno falla
	 */
	submit_accion(accion){
		var campos = ['dni','usuario','contrasena','id_rol'];
		var set_result = {};
		var result = true;

		for (let i=0;i<campos.length;i++){
			set_result[campos[i]] = this[accion+'_'+campos[i]+'_validation']();
			if (set_result[campos[i]] !== true){
				result = false;
			}
		}

		if (result){
			return true;
		}
		else{
			return set_result;
		}
	}

	/**********************************************************************************************
		fields validations for ADD
		@return {string} codigo de error (campo_validacion_ko) o {bool} true si es correcto
	***********************************************************************************************/

	ADD_dni_validation(){
		if (!(this.validations.min_size('dni',9))){
			return this.error_campo('dni','dni_min_size_ko');
		}
		if (!(this.validations.max_size('dni',9))){
			return this.error_campo('dni','dni_max_size_ko');
		}
		// 8 numeros y una letra mayuscula
		if (!(this.validations.format('dni','^[0-9]{8}[A-Z]$'))){
			return this.error_campo('dni','dni_format_ko');
		}
		if (!(this.personalized_dni_letra('dni'))){
			return this.error_campo('dni','dni_personalized_validate_dni_ko');
		}
		return this.exito_campo('dni');
	}

	ADD_usuario_validation(){
		if (!(this.validations.min_size('usuario',5))){
			return this.error_campo('usuario','usuario_min_size_ko');
		}
		if (!(this.validations.max_size('usuario',45))){
			return this.error_campo('usuario','usuario_max_size_ko');
		}
		// solo letras sin acentos ni ñ
		if (!(this.validations.format('usuario','^[A-Za-z]+$'))){
			return this.error_campo('usuario','usuario_format_ko');
		}
		return this.exito_campo('usuario');
	}

	// la contrasena puede quedar vacia (DEFAULT NULL); si se rellena se validan tamano y formato
	ADD_contrasena_validation(){
		if (document.getElementById('contrasena').value.length == 0){
			return this.exito_campo('contrasena');
		}
		if (!(this.validations.min_size('contrasena',8))){
			return this.error_campo('contrasena','contrasena_min_size_ko');
		}
		if (!(this.validations.max_size('contrasena',45))){
			return this.error_campo('contrasena','contrasena_max_size_ko');
		}
		if (!(this.validations.format('contrasena','^[a-zA-Z]+$'))){
			return this.error_campo('contrasena','contrasena_format_ko');
		}
		return this.exito_campo('contrasena');
	}

	ADD_id_rol_validation(){
		if (!(this.validations.min_size('id_rol',1))){
			return this.error_campo('id_rol','id_rol_min_size_ko');
		}
		if (!(this.validations.max_size('id_rol',11))){
			return this.error_campo('id_rol','id_rol_max_size_ko');
		}
		// solo digitos
		if (!(this.validations.format('id_rol','^[0-9]+$'))){
			return this.error_campo('id_rol','id_rol_format_ko');
		}
		return this.exito_campo('id_rol');
	}

	/**
		@return	{bool} true if all fields validations are ok or
		@return {object} object with the ids of elements and error code if a field validation is not ok
	*/
	ADD_submit_usuario(){
		return this.submit_accion('ADD');
	}

	/**********************************************************************************************
		fields validations for EDIT (mismas reglas que ADD; el dni es PK y va en solo lectura)
	***********************************************************************************************/

	EDIT_dni_validation(){return true;}

	EDIT_usuario_validation(){
		return this.ADD_usuario_validation();
	}

	EDIT_contrasena_validation(){
		return this.ADD_contrasena_validation();
	}

	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	EDIT_submit_usuario(){
		return this.submit_accion('EDIT');
	}

	/**********************************************************************************************
		fields validations for SEARCH (campos opcionales, se permiten valores parciales)
	***********************************************************************************************/

	SEARCH_dni_validation(){
		if (!(this.validations.max_size('dni',9))){
			return this.error_campo('dni','dni_max_size_ko');
		}
		if (!(this.validations.format('dni','^[0-9A-Z]*$'))){
			return this.error_campo('dni','dni_format_ko');
		}
		return this.exito_campo('dni');
	}

	SEARCH_usuario_validation(){
		if (!(this.validations.max_size('usuario',45))){
			return this.error_campo('usuario','usuario_max_size_ko');
		}
		if (!(this.validations.format('usuario','^[A-Za-z]*$'))){
			return this.error_campo('usuario','usuario_format_ko');
		}
		return this.exito_campo('usuario');
	}

	SEARCH_contrasena_validation(){
		if (!(this.validations.max_size('contrasena',45))){
			return this.error_campo('contrasena','contrasena_max_size_ko');
		}
		if (!(this.validations.format('contrasena','^[a-zA-Z]*$'))){
			return this.error_campo('contrasena','contrasena_format_ko');
		}
		return this.exito_campo('contrasena');
	}

	SEARCH_id_rol_validation(){
		if (!(this.validations.max_size('id_rol',11))){
			return this.error_campo('id_rol','id_rol_max_size_ko');
		}
		if (!(this.validations.format('id_rol','^[0-9]*$'))){
			return this.error_campo('id_rol','id_rol_format_ko');
		}
		return this.exito_campo('id_rol');
	}

	SEARCH_submit_usuario(){
		return this.submit_accion('SEARCH');
	}

	/**********************************************************************************************
		construccion de formularios por accion
	***********************************************************************************************/

	/**
	 * Construye el formulario para EDIT partiendo del formulario basico definido manualmente
	 * @param {Object} fila objeto con los datos de la ocurrencia a modificar
	 */
	createForm_EDIT(fila){

		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_EDIT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes (dni es PK)
		this.dom.assign_property_value('dni','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}

	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_DELETE');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();

	}

	createForm_SHOWCURRENT(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_SHOWCURRENT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		setLang();

	}

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang();

	}

	/**
	 * transforma el valor de la columna a mostrar en la tabla de datos de la entidad del back
	 * (usuario no tiene columnas especiales: se devuelve el valor tal cual)
	 *
	 * @param {string} columna nombre de la columna a modificar
	 * @param {any} valor valor inicial de la columna
	 * @returns {any} nuevo valor transformado de la columna
	 */
	cambiarmostrarespecial(columna, valor){
		return valor;
	}

}