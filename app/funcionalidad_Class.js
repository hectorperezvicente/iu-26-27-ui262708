class funcionalidad extends Validations{

	/**
	 * @param {string} accion 'test' para crear la entidad sin formulario (Data_Test / Unit_Test)
	 *                        o 'ADD' / 'EDIT' / 'SEARCH' para pintar el formulario de esa accion
	 */
	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'funcionalidad';

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
	 * de la accion actual (this.accion) y el submit a <accion>_submit_funcionalidad
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id="form_funcionalidad" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_funcionalidad']() === 'object') {return false} else {return true};">

			<h3 id="titulo_accion_funcionalidad"></h3>

			<label class="label_id_funcionalidad">Id Funcionalidad</label>
			<input type='text' id='id_funcionalidad' name='id_funcionalidad' onblur="return entidad[entidad.accion+'_id_funcionalidad_validation']();"></input>
			<span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
			<br>

			<label class="label_nombre_funcionalidad">Nombre Funcionalidad</label>
			<input type='text' id='nombre_funcionalidad' name='nombre_funcionalidad' onblur="return entidad[entidad.accion+'_nombre_funcionalidad_validation']();"></input>
			<span id="span_error_nombre_funcionalidad"><a id="error_nombre_funcionalidad"></a></span>
			<br>

			<label class="label_descrip_funcionalidad">Descripción Funcionalidad</label>
			<textarea rows="5" cols="33" id='descrip_funcionalidad' name='descrip_funcionalidad' onblur="return entidad[entidad.accion+'_descrip_funcionalidad_validation']();"></textarea>
			<span id="span_error_descrip_funcionalidad"><a id="error_descrip_funcionalidad"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
		return form_content;
	}

	/**
	 * adapta el formulario a la accion:
	 *  ADD    -> sin cambios
	 *  EDIT   -> id_funcionalidad de solo lectura (es la PK)
	 *  SEARCH -> sin cambios
	 */
	ajustar_formulario_accion(){
		document.getElementById('titulo_accion_funcionalidad').innerHTML = this.accion;
		document.getElementById('form_funcionalidad').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				break;
			case 'EDIT':
				document.getElementById('id_funcionalidad').readOnly = true;
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
		// solo numeros
		if (!(this.format('id_funcionalidad','^[0-9]+$'))){
			return this.error_campo('id_funcionalidad','id_funcionalidad_format_ko');
		}
		return this.exito_campo('id_funcionalidad');
	}

	ADD_nombre_funcionalidad_validation(){
		if (!(this.min_size('nombre_funcionalidad',5))){
			return this.error_campo('nombre_funcionalidad','nombre_funcionalidad_min_size_ko');
		}
		if (!(this.max_size('nombre_funcionalidad',48))){
			return this.error_campo('nombre_funcionalidad','nombre_funcionalidad_max_size_ko');
		}
		// solo letras, incluida la ñ
		if (!(this.format('nombre_funcionalidad','^[A-Za-z\u00F1\u00D1]+$'))){
			return this.error_campo('nombre_funcionalidad','nombre_funcionalidad_format_ko');
		}
		return this.exito_campo('nombre_funcionalidad');
	}

	ADD_descrip_funcionalidad_validation(){
		if (!(this.min_size('descrip_funcionalidad',5))){
			return this.error_campo('descrip_funcionalidad','descrip_funcionalidad_min_size_ko');
		}
		if (!(this.max_size('descrip_funcionalidad',200))){
			return this.error_campo('descrip_funcionalidad','descrip_funcionalidad_max_size_ko');
		}
		// letras con ñ, espacio y signos de puntuacion (. , ; : ! ? ¡ ¿ ( ) " ' -)
		if (!(this.format('descrip_funcionalidad','^[A-Za-z\u00F1\u00D1 .,;:!?\u00A1\u00BF()"\'-]+$'))){
			return this.error_campo('descrip_funcionalidad','descrip_funcionalidad_format_ko');
		}
		return this.exito_campo('descrip_funcionalidad');
	}

	/**********************************************************************************************
		fields validations for EDIT (mismas reglas que ADD)
	***********************************************************************************************/

	EDIT_id_funcionalidad_validation(){
		return this.ADD_id_funcionalidad_validation();
	}

	EDIT_nombre_funcionalidad_validation(){
		return this.ADD_nombre_funcionalidad_validation();
	}

	EDIT_descrip_funcionalidad_validation(){
		return this.ADD_descrip_funcionalidad_validation();
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

	SEARCH_nombre_funcionalidad_validation(){
		if (!(this.max_size('nombre_funcionalidad',48))){
			return this.error_campo('nombre_funcionalidad','nombre_funcionalidad_max_size_ko');
		}
		if (!(this.format('nombre_funcionalidad','^[A-Za-z\u00F1\u00D1]*$'))){
			return this.error_campo('nombre_funcionalidad','nombre_funcionalidad_format_ko');
		}
		return this.exito_campo('nombre_funcionalidad');
	}

	SEARCH_descrip_funcionalidad_validation(){
		if (!(this.max_size('descrip_funcionalidad',200))){
			return this.error_campo('descrip_funcionalidad','descrip_funcionalidad_max_size_ko');
		}
		if (!(this.format('descrip_funcionalidad','^[A-Za-z\u00F1\u00D1 .,;:!?\u00A1\u00BF()"\'-]*$'))){
			return this.error_campo('descrip_funcionalidad','descrip_funcionalidad_format_ko');
		}
		return this.exito_campo('descrip_funcionalidad');
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
		var campos = ['id_funcionalidad','nombre_funcionalidad','descrip_funcionalidad'];
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

	ADD_submit_funcionalidad(){
		return this.submit_accion('ADD');
	}

	EDIT_submit_funcionalidad(){
		return this.submit_accion('EDIT');
	}

	SEARCH_submit_funcionalidad(){
		return this.submit_accion('SEARCH');
	}

}