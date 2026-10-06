class rolaccionfuncionalidad extends Validations{

	/**
	 * @param {string} accion 'test' para crear la entidad sin formulario (Data_Test / Unit_Test)
	 *                        o 'ADD' / 'EDIT' / 'SEARCH' para pintar el formulario de esa accion
	 */
	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'rolaccionfuncionalidad';

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
	 * de la accion actual (this.accion) y el submit a <accion>_submit_rolaccionfuncionalidad
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id="form_rolaccionfuncionalidad" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_rolaccionfuncionalidad']() === 'object') {return false} else {return true};">

			<h3 id="titulo_accion"></h3>

			<label class="label_id_funcionalidad">Id Funcionalidad</label>
			<input type='text' id='id_funcionalidad' name='id_funcionalidad' onblur="return entidad[entidad.accion+'_id_funcionalidad_validation']();"></input>
			<span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
			<br>

			<label class="label_id_accion">Id Acción</label>
			<input type='text' id='id_accion' name='id_accion' onblur="return entidad[entidad.accion+'_id_accion_validation']();"></input>
			<span id="span_error_id_accion"><a id="error_id_accion"></a></span>
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
	 *  EDIT -> id_funcionalidad, id_accion e id_rol de solo lectura (forman la PK compuesta)
	 */
	ajustar_formulario_accion(){
		document.getElementById('titulo_accion').innerHTML = this.accion;
		document.getElementById('form_rolaccionfuncionalidad').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				break;
			case 'EDIT':
				document.getElementById('id_funcionalidad').readOnly = true;
				document.getElementById('id_accion').readOnly = true;
				document.getElementById('id_rol').readOnly = true;
				break;
			case 'SEARCH':
				break;
		}
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

	ADD_id_funcionalidad_validation(){
		if (!(this.min_size('id_funcionalidad',1))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_min_size_ko');
		}
		if (!(this.max_size('id_funcionalidad',11))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_max_size_ko');
		}
		// solo digitos
		if (!(this.format('id_funcionalidad','^[0-9]+$'))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_format_ko');
		}
		return this.exito_campo('id_funcionalidad');
	}

	ADD_id_accion_validation(){
		if (!(this.min_size('id_accion',1))){
			return this.error_campo('id_accion','id_accion_min_size_ko');
		}
		if (!(this.max_size('id_accion',11))){
			return this.error_campo('id_accion','id_accion_max_size_ko');
		}
		// solo digitos
		if (!(this.format('id_accion','^[0-9]+$'))){
			return this.error_campo('id_accion','id_accion_format_ko');
		}
		return this.exito_campo('id_accion');
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

	EDIT_id_funcionalidad_validation(){
		return this.ADD_id_funcionalidad_validation();
	}

	EDIT_id_accion_validation(){
		return this.ADD_id_accion_validation();
	}

	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	/**********************************************************************************************
		fields validations for SEARCH (campos opcionales, se permiten valores parciales)
	***********************************************************************************************/

	SEARCH_id_funcionalidad_validation(){
		if (!(this.max_size('id_funcionalidad',11))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_max_size_ko');
		}
		if (!(this.format('id_funcionalidad','^[0-9]*$'))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_format_ko');
		}
		return this.exito_campo('id_funcionalidad');
	}

	SEARCH_id_accion_validation(){
		if (!(this.max_size('id_accion',11))){
			return this.error_campo('id_accion','id_accion_max_size_ko');
		}
		if (!(this.format('id_accion','^[0-9]*$'))){
			return this.error_campo('id_accion','id_accion_format_ko');
		}
		return this.exito_campo('id_accion');
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
		var campos = ['id_funcionalidad','id_accion','id_rol'];
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

	ADD_submit_rolaccionfuncionalidad(){
		return this.submit_accion('ADD');
	}

	EDIT_submit_rolaccionfuncionalidad(){
		return this.submit_accion('EDIT');
	}

	SEARCH_submit_rolaccionfuncionalidad(){
		return this.submit_accion('SEARCH');
	}

}