class Validations{

	constructor(){
		
	}
	
	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
					case 'password':	// AÑADIDO: campo contrasena
						let valorelemento = elemento.value;
						if (valorelemento.length<minsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			// ==================== AÑADIDO: textarea ====================
			case 'TEXTAREA':
				return (elemento.value.length >= minsize);
			// ============================================================
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
					case 'password':	// AÑADIDO: campo contrasena
						let valorelemento = elemento.value;
						if (valorelemento.length>maxsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			// ==================== AÑADIDO: textarea ====================
			case 'TEXTAREA':
				return (elemento.value.length <= maxsize);
			// ============================================================
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	/**
	@param {string} id of html element
	@param {string} regular expression to testing id html element value
	@return {bool} result of regular expression testing  
	*/
	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	/**
	 * 
	 */
	exist_file(id){
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0){
			return false;
		}
		return true;
	}
	/**
	@param {string} id of html file element
	@param {number} maxsize max size allowed for fiel
	@return {bool} result of size comparison
	*/
	max_size_file(id, maxsize){
		let objfile = document.getElementById(id);
		if (objfile.files[0].size>maxsize){
			return false;
		}
		return true;
	}

	type_file(id, array_tipos){
		let objfile = document.getElementById(id);
		if (!(array_tipos.includes(objfile.files[0].type))){
			return false;
		}
		return true;
	}

	format_name_file(id, exprreg){
		let objfile = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.files[0].name;
		return expresionregular.test(valor);
	}


	// ==================== AÑADIDO: tamaño del nombre de fichero ====================

	/**
	@param {string} id of html file element
	@param {number} minsize tamaño minimo del nombre del fichero
	@return {bool}
	*/
	min_size_name_file(id, minsize){
		let objfile = document.getElementById(id);
		return (objfile.files[0].name.length >= minsize);
	}

	/**
	@param {string} id of html file element
	@param {number} maxsize tamaño maximo del nombre del fichero
	@return {bool}
	*/
	max_size_name_file(id, maxsize){
		let objfile = document.getElementById(id);
		return (objfile.files[0].name.length <= maxsize);
	}
	// ==============================================================================

}
