/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definicion y para inclusion de nuevos metodos
 *
 * NUEVO: crearOpcionesSelect (rellena los select de los atributos FK)
 *
 * REFACTORIZADOS:
 *  - crearElementoHtml: anade el tag 'select' (claves ajenas), con una unica opcion seleccionada con el
 *    valor de la prueba para que los tests puedan validar su valor. Ademas el original no rellena
 *    textarea (lo crea vacio) y si la prueba de un input no trae valor no crea el elemento.
 *  - mostrar_error_campo / mostrar_exito_campo: el original acumula las clases de error en el <a>,
 *    y setLang podia acabar pintando el mensaje de un error anterior.
 *  - abrirModalError: el original hace classList.add = codigo (asignacion, no llamada), con lo que el
 *    codigo de error nunca llegaba a ponerse como clase y setLang() no podia traducirlo.
 *    Ahora ademas da un mensaje generico traducido si el back devuelve un codigo que no esta
 *    en los ficheros de idioma.
 *  - colocarboton: pone clase de traduccion al icono del submit (alt y title traducidos).
 */
class entity_dom_fields extends dom_fields{
    constructor(){
        super();
    }

	/**
	 * crea un elemento del DOM para las pruebas y lo coloca en el contenedor
	 *
	 * @param {string} contenedor id del contenedor donde colocar el elemento
	 * @param {string} tag tipo de elemento (input, textarea, select, file, submit u otro tag)
	 * @param {string} nombrecampo name e id del elemento
	 * @param {object} valores objeto {campo: valor} con el valor de la prueba
	 * @param {object} extra no se usa
	 * @returns void
	 */
	crearElementoHtml(contenedor, tag, nombrecampo, valores, extra=null){

		var element;
		var valorcampo = (valores && (nombrecampo in valores) && valores[nombrecampo] !== undefined) ? valores[nombrecampo] : '';

		switch (tag){
			case 'input':
				element = this.createInput(nombrecampo, 'text');
				element.value = valorcampo;
				this.colocarelemento(element, contenedor);
				break;
			case 'textarea':
				element = document.createElement('textarea');
				element.id = nombrecampo;
				element.name = nombrecampo;
				element.value = valorcampo;
				this.colocarelemento(element, contenedor);
				break;
			case 'select':
				// una unica opcion seleccionada con el valor de la prueba
				element = document.createElement('select');
				element.id = nombrecampo;
				element.name = nombrecampo;
				var opcion = document.createElement('option');
				opcion.value = valorcampo;
				opcion.innerHTML = valorcampo;
				opcion.selected = true;
				element.append(opcion);
				this.colocarelemento(element, contenedor);
				break;
			case 'file':
				element = this.createInput(nombrecampo, 'file');
				this.fillElementFile(element, valores);
				this.colocarelemento(element, contenedor);
				break;
			case 'submit':
				element = this.createInput(nombrecampo, 'input');
				element.type = 'submit';
				this.colocarelemento(element, contenedor);
				break;
			default: // span y a de los errores, sin valor
				element = document.createElement(tag);
				element.id = nombrecampo;
				this.colocarelemento(element, contenedor);
				break;
		}

	}

	/**
	 * muestra el error del campo: borde rojo y mensaje (traducido por setLang con el codigo como clase)
	 * @param {string} id id del campo
	 * @param {string} codigoerror codigo del error
	 */
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById('error_'+id).className = codigoerror;
		document.getElementById(id).style.borderColor = 'red';
		setLang();
	}

	/**
	 * muestra el campo como correcto: borde verde y sin mensaje
	 * @param {string} id id del campo
	 */
	mostrar_exito_campo(id){
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).innerHTML = '';
		document.getElementById('error_'+id).className = '';
		document.getElementById(id).style.borderColor = 'green';
	}

	/**
	 * abre el modal de error de accion con el codigo devuelto por el back (traducido).
	 * Si el codigo no esta en los ficheros de idioma se muestra un mensaje generico traducido
	 * (el codigo queda en el title y en la consola para poder identificarlo)
	 * El formulario no se toca: al cerrar el modal sigue como estaba para corregir el error
	 * @param {string} errorMsg codigo de error
	 */
	abrirModalError(errorMsg){
		let mensaje = document.getElementById('error_action_msg');
		document.getElementById('error_action_modal').style.display = 'block';
		document.getElementById('modal_action_overlay').style.display = 'block';
		setLang();
		if (window.traduccion && window.traduccion[errorMsg]){
			mensaje.className = errorMsg;
			mensaje.innerHTML = errorMsg;
		}
		else{
			console.log('codigo de error del back sin traduccion: '+errorMsg);
			mensaje.className = 'text_error_back_desconocido';
			mensaje.innerHTML = errorMsg;
		}
		mensaje.title = errorMsg;
		setLang();
	}

	/**
	 * REFACTORIZADO: coloca el boton de submit como el original y pone al icono una clase
	 * de traduccion (text_icono_ACCION) para que setLang le ponga alt y title en el idioma elegido
	 * @param {string} accion accion del formulario
	 */
	colocarboton(accion){
		super.colocarboton(accion);
		let icono = document.querySelector('#submit_button img');
		icono.className = 'text_icono_'+accion;
	}

	/**
	 * metodo nuevo: rellena un select con opciones (para atributos FK)
	 * @param {string} idselect id del select
	 * @param {Array} opciones [{valor, texto}]
	 * @param {string} clasevacia si se indica, primera opcion con valor '' y esa clase (texto traducido por setLang)
	 */
	crearOpcionesSelect(idselect, opciones, clasevacia=null){
		let select = document.getElementById(idselect);
		select.innerHTML = '';
		if (clasevacia !== null){
			let vacia = document.createElement('option');
			vacia.value = '';
			vacia.className = clasevacia;
			vacia.innerHTML = '--';
			select.append(vacia);
		}
		for (let opcion of opciones){
			let elemento = document.createElement('option');
			elemento.value = opcion.valor;
			elemento.innerHTML = opcion.texto;
			select.append(elemento);
		}
	}
}
