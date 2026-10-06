class usuario extends Validations{

	/**
	 * @param {string} accion 'test' para crear la entidad sin formulario (Data_Test / Unit_Test)
	 *                        o 'ADD' / 'EDIT' / 'SEARCH' para pintar el formulario de esa accion
	 */
	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'usuario';

		if (accion == 'test'){

		}
		else{
			this.accion = accion;
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
			this.ajustar_formulario_accion();
		}
	}

	/**
	 * crea el formulario de la entidad. Cada campo llama en onblur a la validacion
	 * de la accion actual (this.accion) y el submit a <accion>_submit_usuario
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id="form_usuario" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_usuario']() === 'object') {return false} else {return true};">

			<h3 id="titulo_accion"></h3>

			<label class="label_dni">DNI</label>
			<input type='text' id='dni' name='dni' onblur="return entidad[entidad.accion+'_dni_validation']();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>

			<label class="label_usuario">Usuario</label>
			<input type='text' id='usuario' name='usuario' onblur="return entidad[entidad.accion+'_usuario_validation']();"></input>
			<span id="span_error_usuario"><a id="error_usuario"></a></span>
			<br>

			<label class="label_contrasena">Contraseña</label>
			<input type='password' id='contrasena' name='contrasena' onblur="return entidad[entidad.accion+'_contrasena_validation']();"></input>
			<span id="span_error_contrasena"><a id="error_contrasena"></a></span>
			<br>

			<label class="label_id_rol">Id Rol</label>
			<input type='text' id='id_rol' name='id_rol' onblur="return entidad[entidad.accion+'_id_rol_validation']();"></input>
			<span id="span_error_id_rol"><a id="error_id_rol"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
		return form_content;
	}

	/**
	 * adapta el formulario a la accion:
	 *  EDIT -> dni de solo lectura (es PK)
	 */
	ajustar_formulario_accion(){
		document.getElementById('titulo_accion').innerHTML = this.accion;
		document.getElementById('form_usuario').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				break;
			case 'EDIT':
				document.getElementById('dni').readOnly = true;
				break;
			case 'SEARCH':
				break;
		}
	}

	/**********************************************************************************************
		validaciones personalizadas
	***********************************************************************************************/

	/**
	 * comprueba que la letra del dni corresponde a su numero (numero % 23)
	 * @param {string} id id del campo
	 * @returns {bool}
	 */
	personalized_dni_letra(id){
		let valor = document.getElementById(id).value;
		let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
		let numero = parseInt(valor.substring(0,8), 10);
		return (letras.charAt(numero % 23) == valor.charAt(8));
	}

	/**
	 * muestra el error en el campo y devuelve el codigo
	 */
	error_campo(id, codigo){
		this.dom.mostrar_error_campo(id, codigo);
		return codigo;
	}

	/**
	 * muestra el exito en el campo y devuelve true
	 */
	exito_campo(id){
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	/**********************************************************************************************
		fields validations for ADD
		@return {string} codigo de error (campo_validacion_ko) o {bool} true si es correcto
	***********************************************************************************************/

	ADD_dni_validation(){
		if (!(this.min_size('dni',9))){
			return this.error_campo('dni','dni_min_size_ko');
		}
		if (!(this.max_size('dni',9))){
			return this.error_campo('dni','dni_max_size_ko');
		}
		// 8 numeros y una letra mayuscula
		if (!(this.format('dni','^[0-9]{8}[A-Z]$'))){
			return this.error_campo('dni','dni_format_ko');
		}
		if (!(this.personalized_dni_letra('dni'))){
			return this.error_campo('dni','dni_personalized_ko');
		}
		return this.exito_campo('dni');
	}

	ADD_usuario_validation(){
		if (!(this.min_size('usuario',5))){
			return this.error_campo('usuario','usuario_min_size_ko');
		}
		if (!(this.max_size('usuario',45))){
			return this.error_campo('usuario','usuario_max_size_ko');
		}
		// solo letras sin acentos ni ñ
		if (!(this.format('usuario','^[A-Za-z]+$'))){
    		return this.error_campo('usuario','usuario_format_ko');
		}
		return this.exito_campo('usuario');
	}

	// la contrasena puede quedar vacia (DEFAULT NULL); si se rellena se validan tamano y formato
	ADD_contrasena_validation(){
		if (document.getElementById('contrasena').value.length == 0){
			return this.exito_campo('contrasena');
		}
		if (!(this.min_size('contrasena',8))){
			return this.error_campo('contrasena','contrasena_min_size_ko');
		}
		if (!(this.max_size('contrasena',45))){
			return this.error_campo('contrasena','contrasena_max_size_ko');
		}
		if (!(this.format('contrasena','^[a-zA-Z]+$'))){
    		return this.error_campo('contrasena','contrasena_format_ko');
		}
		return this.exito_campo('contrasena');
	}

	ADD_id_rol_validation(){
		if (!(this.min_size('id_rol',1))){
			return this.error_campo('id_rol','id_rol_min_size_ko');
		}
		if (!(this.max_size('id_rol',11))){
			return this.error_campo('id_rol','id_rol_max_size_ko');
		}
		// solo digitos
		if (!(this.format('id_rol','^[0-9]+$'))){
			return this.error_campo('id_rol','id_rol_format_ko');
		}
		return this.exito_campo('id_rol');
	}

	/**********************************************************************************************
		fields validations for EDIT (mismas reglas que ADD)
	***********************************************************************************************/

	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_usuario_validation(){
		return this.ADD_usuario_validation();
	}

	EDIT_contrasena_validation(){
		return this.ADD_contrasena_validation();
	}

	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	/**********************************************************************************************
		fields validations for SEARCH (campos opcionales, se permiten valores parciales)
	***********************************************************************************************/

	SEARCH_dni_validation(){
		if (!(this.max_size('dni',9))){
			return this.error_campo('dni','dni_max_size_ko');
		}
		if (!(this.format('dni','^[0-9A-Z]*$'))){
			return this.error_campo('dni','dni_format_ko');
		}
		return this.exito_campo('dni');
	}

	SEARCH_usuario_validation(){
		if (!(this.max_size('usuario',45))){
			return this.error_campo('usuario','usuario_max_size_ko');
		}
		if (!(this.format('usuario','^[A-Za-z]+$'))){
    		return this.error_campo('usuario','usuario_format_ko');
		}
		return this.exito_campo('usuario');
	}

	SEARCH_contrasena_validation(){
		if (!(this.max_size('contrasena',45))){
			return this.error_campo('contrasena','contrasena_max_size_ko');
		}
		if (!(this.format('contrasena','^[a-zA-Z]+$'))){
			return this.error_campo('contrasena','contrasena_format_ko');
		}
		return this.exito_campo('contrasena');
	}

	SEARCH_id_rol_validation(){
		if (!(this.max_size('id_rol',11))){
			return this.error_campo('id_rol','id_rol_max_size_ko');
		}
		if (!(this.format('id_rol','^[0-9]*$'))){
			return this.error_campo('id_rol','id_rol_format_ko');
		}
		return this.exito_campo('id_rol');
	}

	/**********************************************************************************************
		submits
		@return {bool} true si todos los campos son correctos
		@return {object} {id_campo: resultado} si alguno falla
	***********************************************************************************************/

	/**
	 * ejecuta la validacion de la accion para todos los campos
	 * @param {string} accion ADD / EDIT / SEARCH
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

	ADD_submit_usuario(){
		return this.submit_accion('ADD');
	}

	EDIT_submit_usuario(){
		return this.submit_accion('EDIT');
	}

	SEARCH_submit_usuario(){
		return this.submit_accion('SEARCH');
	}

}