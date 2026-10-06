class accion extends Validations{
 
	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'accion';
 
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
			<form id="form_accion" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_accion']() === 'object') {return false} else {return true};">
 
			<h3 id="titulo_accion"></h3>
 
			<label class="label_id_accion">Id Acción</label>
			<input type='text' id='id_accion' name='id_accion' onblur="return entidad[entidad.accion+'_id_accion_validation']();"></input>
			<span id="span_error_id_accion"><a id="error_id_accion"></a></span>
			<br>
			
			<label class="label_nombre_accion">Nombre Acción</label>
			<input type='text' id='nombre_accion' name='nombre_accion' onblur="return entidad[entidad.accion+'_nombre_accion_validation']();"></input>
			<span id="span_error_nombre_accion"><a id="error_nombre_accion"></a></span>
			<br>
			
			<label class="label_descrip_accion">Descripción Acción</label>
			<textarea rows="5" cols="33" id='descrip_accion' name='descrip_accion' onblur="return entidad[entidad.accion+'_descrip_accion_validation']();"></textarea>
			<span id="span_error_descrip_accion"><a id="error_descrip_accion"></a></span>
			<br>
 
			<input id="submit_button" type="submit" value="Submit">
 
		</form>
		`;
		return form_content;
	}
 
	ajustar_formulario_accion(){
		document.getElementById('titulo_accion').innerHTML = this.accion;
		document.getElementById('form_accion').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				break;
			case 'EDIT':
				document.getElementById('id_accion').readOnly = true;
				break;
			case 'SEARCH':
				break;
		}
	}
 
	
	error_campo(id, codigo){
		this.dom.mostrar_error_campo(id, codigo);
		return codigo;
	}
 
	exito_campo(id){
		this.dom.mostrar_exito_campo(id);
		return true;
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
 
	ADD_nombre_accion_validation(){
		if (!(this.min_size('nombre_accion',5))){
			return this.error_campo('nombre_accion','nombre_accion_min_size_ko');
		}
		if (!(this.max_size('nombre_accion',48))){
			return this.error_campo('nombre_accion','nombre_accion_max_size_ko');
		}
		// alfabetico: letras con ñ y acentos, sin espacios
		if (!(this.format('nombre_accion','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1]+$'))){
			return this.error_campo('nombre_accion','nombre_accion_format_ko');
		}
		return this.exito_campo('nombre_accion');
	}
 
	ADD_descrip_accion_validation(){
		if (!(this.min_size('descrip_accion',5))){
			return this.error_campo('descrip_accion','descrip_accion_min_size_ko');
		}
		if (!(this.max_size('descrip_accion',200))){
			return this.error_campo('descrip_accion','descrip_accion_max_size_ko');
		}
		// letras con ñ y acentos, espacio y signos de puntuacion (. , ; : ! ? ¡ ¿ ( ) " -)
		if (!(this.format('descrip_accion','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1 .,;:!?\u00A1\u00BF()"-]+$'))){
			return this.error_campo('descrip_accion','descrip_accion_format_ko');
		}
		return this.exito_campo('descrip_accion');
	}
 
	EDIT_id_accion_validation(){
		return this.ADD_id_accion_validation();
	}
 
	EDIT_nombre_accion_validation(){
		return this.ADD_nombre_accion_validation();
	}
 
	EDIT_descrip_accion_validation(){
		return this.ADD_descrip_accion_validation();
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
 
	SEARCH_nombre_accion_validation(){
		if (!(this.max_size('nombre_accion',48))){
			return this.error_campo('nombre_accion','nombre_accion_max_size_ko');
		}
		if (!(this.format('nombre_accion','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1]*$'))){
			return this.error_campo('nombre_accion','nombre_accion_format_ko');
		}
		return this.exito_campo('nombre_accion');
	}
 
	SEARCH_descrip_accion_validation(){
		if (!(this.max_size('descrip_accion',200))){
			return this.error_campo('descrip_accion','descrip_accion_max_size_ko');
		}
		if (!(this.format('descrip_accion','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1 .,;:!?\u00A1\u00BF()"-]*$'))){
			return this.error_campo('descrip_accion','descrip_accion_format_ko');
		}
		return this.exito_campo('descrip_accion');
	}
 
    
	submit_accion(accion){
		var campos = ['id_accion','nombre_accion','descrip_accion'];
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
 
	ADD_submit_accion(){
		return this.submit_accion('ADD');
	}
 
	EDIT_submit_accion(){
		return this.submit_accion('EDIT');
	}
 
	SEARCH_submit_accion(){
		return this.submit_accion('SEARCH');
	}
 
}