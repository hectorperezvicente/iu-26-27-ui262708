class persona extends Validations{

	/**
	 * @param {string} accion 'test' para crear la entidad sin formulario (Data_Test / Unit_Test)
	 *                        o 'ADD' / 'EDIT' / 'SEARCH' para pintar el formulario de esa accion
	 */
	constructor(accion = 'ADD'){
		super();
		this.dom = new dom();
		this.nombreentidad = 'persona';

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
	 * de la accion actual (this.accion) y el submit a <accion>_submit_persona
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id="form_persona" action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad[entidad.accion+'_submit_persona']() === 'object') {return false} else {return true};">

			<h3 id="titulo_accion_persona"></h3>

			<label class="label_dni">DNI</label>
			<input type='text' id='dni' name='dni' onblur="return entidad[entidad.accion+'_dni_validation']();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona' onblur="return entidad[entidad.accion+'_nombre_persona_validation']();"></input>
			<span id="span_error_nombre_persona"><a id="error_nombre_persona"></a></span>
			<br>
			
			<label class="label_apellidos_persona">Apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona' onblur="return entidad[entidad.accion+'_apellidos_persona_validation']();"></input>
			<span id="span_error_apellidos_persona"><a id="error_apellidos_persona"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona' placeholder="dd/mm/aaaa" onblur="return entidad[entidad.accion+'_fechaNacimiento_persona_validation']();"></input>
			<span id="span_error_fechaNacimiento_persona"><a id="error_fechaNacimiento_persona"></a></span>
			<br>

			<label class="label_direccion_persona">Dirección Postal</label>
			<textarea rows="5" cols="33" id='direccion_persona' name='direccion_persona' onblur="return entidad[entidad.accion+'_direccion_persona_validation']();"></textarea>
			<span id="span_error_direccion_persona"><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona' onblur="return entidad[entidad.accion+'_telefono_persona_validation']();"></input>
			<span id="span_error_telefono_persona"><a id="error_telefono_persona"></a></span>
			<br>

			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona' onblur="return entidad[entidad.accion+'_email_persona_validation']();"></input>
			<span id="span_error_email_persona"><a id="error_email_persona"></a></span>
			<br>

			<div id="bloque_foto_persona">
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona' onblur="return entidad[entidad.accion+'_foto_persona_validation']();"></input>
			<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			</div>

			<div id="bloque_nuevo_foto_persona">
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona' onchange="return entidad[entidad.accion+'_nuevo_foto_persona_validation']();"></input>
			<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
			</div>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
		return form_content;
	}

	/**
	 * adapta el formulario a la accion:
	 *  ADD    -> no se muestra foto_persona (el nombre lo da el fichero subido)
	 *  EDIT   -> dni y foto_persona de solo lectura (dni es PK)
	 *  SEARCH -> no se muestra el fichero nuevo_foto_persona
	 */
	ajustar_formulario_accion(){
		document.getElementById('titulo_accion_persona').innerHTML = this.accion;
		document.getElementById('form_persona').action += '?accion=' + this.accion;
		switch (this.accion){
			case 'ADD':
				document.getElementById('bloque_foto_persona').style.display = 'none';
				break;
			case 'EDIT':
				document.getElementById('dni').readOnly = true;
				document.getElementById('foto_persona').readOnly = true;
				break;
			case 'SEARCH':
				document.getElementById('bloque_nuevo_foto_persona').style.display = 'none';
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
	 * comprueba que una fecha dd/mm/aaaa existe en el calendario (incluye bisiestos)
	 * @param {string} id id del campo
	 * @returns {bool}
	 */
	personalized_fecha_existe(id){
		let partes = document.getElementById(id).value.split('/');
		let dia = parseInt(partes[0], 10);
		let mes = parseInt(partes[1], 10);
		let anio = parseInt(partes[2], 10);
		let fecha = new Date(anio, mes - 1, dia);
		return (fecha.getFullYear() == anio && fecha.getMonth() == mes - 1 && fecha.getDate() == dia);
	}

	/**
	 * comprueba que una fecha dd/mm/aaaa no es posterior a la fecha actual
	 * @param {string} id id del campo
	 * @returns {bool}
	 */
	personalized_fecha_no_futura(id){
		let partes = document.getElementById(id).value.split('/');
		let fecha = new Date(parseInt(partes[2], 10), parseInt(partes[1], 10) - 1, parseInt(partes[0], 10));
		let hoy = new Date();
		hoy.setHours(0,0,0,0);
		return (fecha <= hoy);
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

	ADD_nombre_persona_validation(){
		if (!(this.min_size('nombre_persona',2))){
			return this.error_campo('nombre_persona','nombre_persona_min_size_ko');
		}
		if (!(this.max_size('nombre_persona',45))){
			return this.error_campo('nombre_persona','nombre_persona_max_size_ko');
		}
		// letras con ñ y acentos, puntos, guiones y espacio
		if (!(this.format('nombre_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1. -]+$'))){
			return this.error_campo('nombre_persona','nombre_persona_format_ko');
		}
		return this.exito_campo('nombre_persona');
	}

	ADD_apellidos_persona_validation(){
		if (!(this.min_size('apellidos_persona',3))){
			return this.error_campo('apellidos_persona','apellidos_persona_min_size_ko');
		}
		if (!(this.max_size('apellidos_persona',100))){
			return this.error_campo('apellidos_persona','apellidos_persona_max_size_ko');
		}
		// letras con ñ y acentos, puntos, guiones y espacio
		if (!(this.format('apellidos_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1. -]+$'))){
			return this.error_campo('apellidos_persona','apellidos_persona_format_ko');
		}
		return this.exito_campo('apellidos_persona');
	}

	ADD_fechaNacimiento_persona_validation(){
		if (!(this.min_size('fechaNacimiento_persona',8))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_min_size_ko');
		}
		if (!(this.max_size('fechaNacimiento_persona',10))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_max_size_ko');
		}
		// dd/mm/aaaa
		if (!(this.format('fechaNacimiento_persona','^[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}$'))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_ko');
		}
		if (!(this.personalized_fecha_existe('fechaNacimiento_persona'))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_personalized_ko');
		}
		if (!(this.personalized_fecha_no_futura('fechaNacimiento_persona'))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_future_date_ko');
		}
		return this.exito_campo('fechaNacimiento_persona');
	}

	ADD_direccion_persona_validation(){
		if (!(this.min_size('direccion_persona',10))){
			return this.error_campo('direccion_persona','direccion_persona_min_size_ko');
		}
		if (!(this.max_size('direccion_persona',200))){
			return this.error_campo('direccion_persona','direccion_persona_max_size_ko');
		}
		// alfanumerico con ñ y acentos, puntos, guiones, punto y coma, espacio y /
		if (!(this.format('direccion_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F10-9.;/ -]+$'))){
			return this.error_campo('direccion_persona','direccion_persona_format_ko');
		}
		return this.exito_campo('direccion_persona');
	}

	ADD_telefono_persona_validation(){
		if (!(this.min_size('telefono_persona',9))){
			return this.error_campo('telefono_persona','telefono_persona_min_size_ko');
		}
		if (!(this.max_size('telefono_persona',9))){
			return this.error_campo('telefono_persona','telefono_persona_max_size_ko');
		}
		// 9 digitos empezando por 6, 7, 8 o 9
		if (!(this.format('telefono_persona','^[6789][0-9]{8}$'))){
			return this.error_campo('telefono_persona','telefono_persona_format_ko');
		}
		return this.exito_campo('telefono_persona');
	}

	ADD_email_persona_validation(){
		if (!(this.max_size('email_persona',45))){
			return this.error_campo('email_persona','email_persona_max_size_ko');
		}
		// usuario@dominio.ext
		if (!(this.format('email_persona','^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'))){
			return this.error_campo('email_persona','email_persona_format_ko');
		}
		return this.exito_campo('email_persona');
	}

	// foto_persona no la rellena el usuario en ADD (se toma del fichero subido)
	ADD_foto_persona_validation(){
		return true;
	}

	ADD_nuevo_foto_persona_validation(){
		if (!(this.exist_file('nuevo_foto_persona'))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_exist_file_ko');
		}
		return this.nuevo_foto_persona_comprobar_fichero();
	}

	/**
	 * validaciones del fichero de foto cuando hay fichero seleccionado (comunes a ADD y EDIT)
	 */
	nuevo_foto_persona_comprobar_fichero(){
		if (!(this.min_size_name_file('nuevo_foto_persona',3))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_min_size_name_file_ko');
		}
		if (!(this.max_size_name_file('nuevo_foto_persona',15))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_name_file_ko');
		}
		// letras sin acentos y puntos, extension jpg o jpeg
		if (!(this.format_name_file('nuevo_foto_persona','^[A-Za-z.]+\\.(jpg|jpeg|JPG|JPEG)$'))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_ko');
		}
		if (!(this.type_file('nuevo_foto_persona',['image/jpeg']))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_ko');
		}
		// 2 MB = 2097152 bytes
		if (!(this.max_size_file('nuevo_foto_persona',2097152))){
			return this.error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_ko');
		}
		return this.exito_campo('nuevo_foto_persona');
	}

	/**********************************************************************************************
		fields validations for EDIT (mismas reglas que ADD salvo la foto, que es opcional)
	***********************************************************************************************/

	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_nombre_persona_validation(){
		return this.ADD_nombre_persona_validation();
	}

	EDIT_apellidos_persona_validation(){
		return this.ADD_apellidos_persona_validation();
	}

	EDIT_fechaNacimiento_persona_validation(){
		return this.ADD_fechaNacimiento_persona_validation();
	}

	EDIT_direccion_persona_validation(){
		return this.ADD_direccion_persona_validation();
	}

	EDIT_telefono_persona_validation(){
		return this.ADD_telefono_persona_validation();
	}

	EDIT_email_persona_validation(){
		return this.ADD_email_persona_validation();
	}

	// foto_persona es de solo lectura en EDIT (muestra la foto actual)
	EDIT_foto_persona_validation(){
		return true;
	}

	// en EDIT la foto nueva es opcional: si no hay fichero es correcto
	EDIT_nuevo_foto_persona_validation(){
		if (!(this.exist_file('nuevo_foto_persona'))){
			return this.exito_campo('nuevo_foto_persona');
		}
		return this.nuevo_foto_persona_comprobar_fichero();
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

	SEARCH_nombre_persona_validation(){
		if (!(this.max_size('nombre_persona',45))){
			return this.error_campo('nombre_persona','nombre_persona_max_size_ko');
		}
		if (!(this.format('nombre_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1. -]*$'))){
			return this.error_campo('nombre_persona','nombre_persona_format_ko');
		}
		return this.exito_campo('nombre_persona');
	}

	SEARCH_apellidos_persona_validation(){
		if (!(this.max_size('apellidos_persona',100))){
			return this.error_campo('apellidos_persona','apellidos_persona_max_size_ko');
		}
		if (!(this.format('apellidos_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F1. -]*$'))){
			return this.error_campo('apellidos_persona','apellidos_persona_format_ko');
		}
		return this.exito_campo('apellidos_persona');
	}

	SEARCH_fechaNacimiento_persona_validation(){
		if (!(this.max_size('fechaNacimiento_persona',10))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_max_size_ko');
		}
		if (!(this.format('fechaNacimiento_persona','^[0-9/]*$'))){
			return this.error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_ko');
		}
		return this.exito_campo('fechaNacimiento_persona');
	}

	SEARCH_direccion_persona_validation(){
		if (!(this.max_size('direccion_persona',200))){
			return this.error_campo('direccion_persona','direccion_persona_max_size_ko');
		}
		if (!(this.format('direccion_persona','^[A-Za-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00DC\u00FC\u00D1\u00F10-9.;/ -]*$'))){
			return this.error_campo('direccion_persona','direccion_persona_format_ko');
		}
		return this.exito_campo('direccion_persona');
	}

	SEARCH_telefono_persona_validation(){
		if (!(this.max_size('telefono_persona',9))){
			return this.error_campo('telefono_persona','telefono_persona_max_size_ko');
		}
		if (!(this.format('telefono_persona','^[0-9]*$'))){
			return this.error_campo('telefono_persona','telefono_persona_format_ko');
		}
		return this.exito_campo('telefono_persona');
	}

	SEARCH_email_persona_validation(){
		if (!(this.max_size('email_persona',45))){
			return this.error_campo('email_persona','email_persona_max_size_ko');
		}
		if (!(this.format('email_persona','^[A-Za-z0-9._%+@-]*$'))){
			return this.error_campo('email_persona','email_persona_format_ko');
		}
		return this.exito_campo('email_persona');
	}

	SEARCH_foto_persona_validation(){
		if (!(this.max_size('foto_persona',15))){
			return this.error_campo('foto_persona','foto_persona_max_size_ko');
		}
		if (!(this.format('foto_persona','^[A-Za-z.]*$'))){
			return this.error_campo('foto_persona','foto_persona_format_ko');
		}
		return this.exito_campo('foto_persona');
	}

	// en SEARCH no se sube fichero
	SEARCH_nuevo_foto_persona_validation(){
		return true;
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
		var campos = ['dni','nombre_persona','apellidos_persona','fechaNacimiento_persona',
					'direccion_persona','telefono_persona','email_persona','foto_persona','nuevo_foto_persona'];
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

	ADD_submit_persona(){
		return this.submit_accion('ADD');
	}

	EDIT_submit_persona(){
		return this.submit_accion('EDIT');
	}

	SEARCH_submit_persona(){
		return this.submit_accion('SEARCH');
	}

}
