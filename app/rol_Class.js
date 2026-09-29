class rol extends Validations{

	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'rol';

		if (accion == 'test'){
			
		}
		else{
			this.accion = accion;
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
			this.ajustar_formulario_accion();
		}
	}

	manual_form_creation(){
		var form_content = `
			<form id="form_rol" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_rol']() === 'object') {return false} else {return true};">

			<h3 id="titulo_accion"></h3>

			<label class="label_id_rol">Id Rol</label>
			<input type='text' id='id_rol' name='id_rol' onblur="return entidad[entidad.accion+'_id_rol_validation']();"></input>
			<span id="span_error_id_rol"><a id="error_id_rol"></a></span>
			<br>
			
			<label class="label_rol_name">Nombre Rol</label>
			<input type='text' id='rol_name' name='rol_name' onblur="return entidad[entidad.accion+'_rol_name_validation']();"></input>
			<span id="span_error_rol_name"><a id="error_rol_name"></a></span>
			<br>
			
			<label class="label_rol_description">Descripción Rol</label>
			<textarea rows="5" cols="33" id='rol_description' name='rol_description' onblur="return entidad[entidad.accion+'_rol_description_validation']();"></textarea>
			<span id="span_error_rol_description"><a id="error_rol_description"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
		return form_content;
	}

	ajustar_formulario_accion(){
		document.getElementById('titulo_accion').innerHTML = this.accion;
		document.getElementById('form_rol').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				break;
			case 'EDIT':
				document.getElementById('id_rol').readOnly = true;
				break;
			case 'SEARCH':
				break;
		}
	}

	
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

	ADD_rol_name_validation(){
		if (!(this.min_size('rol_name',5))){
			return this.error_campo('rol_name','rol_name_min_size_ko');
		}
		if (!(this.max_size('rol_name',48))){
			return this.error_campo('rol_name','rol_name_max_size_ko');
		}
		// alfabetico: solo letras sin ñ ni acentos, sin espacios
		if (!(this.format('rol_name','^[A-Za-z]+$'))){
			return this.error_campo('rol_name','rol_name_format_ko');
		}
		return this.exito_campo('rol_name');
	}

	ADD_rol_description_validation(){
		if (!(this.min_size('rol_description',5))){
			return this.error_campo('rol_description','rol_description_min_size_ko');
		}
		if (!(this.max_size('rol_description',200))){
			return this.error_campo('rol_description','rol_description_max_size_ko');
		}
		// letras con ñ y acentos, espacio y signos de puntuacion (. , ; : ! ? ¡ ¿ ( ) " -)
		if (!(this.format('rol_description','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1 .,;:!?\u00A1\u00BF()"-]+$'))){
			return this.error_campo('rol_description','rol_description_format_ko');
		}
		return this.exito_campo('rol_description');
	}


	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	EDIT_rol_name_validation(){
		return this.ADD_rol_name_validation();
	}

	EDIT_rol_description_validation(){
		return this.ADD_rol_description_validation();
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

	SEARCH_rol_name_validation(){
		if (!(this.max_size('rol_name',48))){
			return this.error_campo('rol_name','rol_name_max_size_ko');
		}
		if (!(this.format('rol_name','^[A-Za-z]*$'))){
			return this.error_campo('rol_name','rol_name_format_ko');
		}
		return this.exito_campo('rol_name');
	}

	SEARCH_rol_description_validation(){
		if (!(this.max_size('rol_description',200))){
			return this.error_campo('rol_description','rol_description_max_size_ko');
		}
		if (!(this.format('rol_description','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1 .,;:!?\u00A1\u00BF()"-]*$'))){
			return this.error_campo('rol_description','rol_description_format_ko');
		}
		return this.exito_campo('rol_description');
	}

	submit_accion(accion){
		var campos = ['id_rol','rol_name','rol_description'];
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

	ADD_submit_rol(){
		return this.submit_accion('ADD');
	}

	EDIT_submit_rol(){
		return this.submit_accion('EDIT');
	}

	SEARCH_submit_rol(){
		return this.submit_accion('SEARCH');
	}

}