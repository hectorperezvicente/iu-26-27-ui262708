/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definicion y para inclusion de nuevos metodos
 *
 * NUEVOS:
 *  - crearOpcionesSelect: rellena un select con opciones ya conocidas (atributos FK)
 *  - cargar_select_fk: pide al back las tuplas de una entidad y las añade como opciones de un select (FK)
 *  - bloquear_select: deja en el select solo la opcion seleccionada
 *
 * REFACTORIZADOS:
 *  - crearElementoHtml: el original no rellena textarea ni crea select (los crea vacios) y si la prueba
 *    de un input no trae valor no crea el elemento. Aqui se crean input, textarea, select (con una unica
 *    opcion seleccionada con el valor de la prueba), file, submit y el resto de tags.
 *  - mostrar_error_campo / mostrar_exito_campo: el original acumula las clases de error en el <a>,
 *    y setLang podia acabar pintando el mensaje de un error anterior.
 *  - abrirModalError: el original hace classList.add = codigo (asignacion, no llamada),
 *    asi que el mensaje de error de accion nunca se traducia. Ahora ademas da un mensaje
 *    generico traducido si el back devuelve un codigo que no esta en los ficheros de idioma.
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
	 * metodo nuevo: rellena un select con opciones ya conocidas (para atributos FK)
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

	/**
	 * metodo nuevo: pide al back todas las tuplas de una entidad y las añade como opciones a un select (clave ajena).
	 * value de la opcion = columna id; texto = id + primera columna no objeto distinta del id (el nombre).
	 * Debe terminar ANTES de rellenarvaloresform, que asigna el value al select.
	 *
	 * @param {string} idselect id del select del formulario
	 * @param {string} controlador entidad del back de la que se piden las tuplas (rol, accion, funcionalidad...)
	 * @param {string} columnaid nombre de la columna que contiene el id en esa entidad
	 */
	async cargar_select_fk(idselect, controlador, columnaid){
		let respuesta = await new ExternalAccess().peticionBackGeneral('', controlador, 'SEARCH');
		let select = document.getElementById(idselect);

		if (respuesta['code'] == 'RECORDSET_DATOS'){
			for (let i=0;i<respuesta['resource'].length;i++){
				let fila = respuesta['resource'][i];
				let columnanombre = Object.keys(fila).find(c => (c != columnaid) && (typeof fila[c] != 'object'));

				let option = document.createElement('option');
				option.value = fila[columnaid];
				option.textContent = fila[columnaid] + ((columnanombre) ? ' - '+fila[columnanombre] : '');
				select.append(option);
			}
		}
	}

	/**
	 * metodo nuevo: deja en el select solo la opcion seleccionada: el usuario no puede cambiarlo
	 * y el valor sigue viajando en el FormData (un select disabled no se envia)
	 * @param {string} id id del select
	 */
	bloquear_select(id){
		let select = document.getElementById(id);
		for (let i=select.options.length-1;i>=0;i--){
			if (!select.options[i].selected){
				select.remove(i);
			}
		}
	}
}
/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_dom_fields extends dom_fields{
    constructor(){
        super();
    }

    /**
     * Igual que dom_fields.crearElementoHtml pero añade el tag 'select' (claves ajenas):
     * crea un select con id y name igual al campo y una unica opcion seleccionada con el
     * valor de la prueba, para que los tests puedan validar su valor.
     * Para el resto de tags se delega en la clase padre.
     *
     * @param {string} contenedor id del contenedor donde se coloca el elemento
     * @param {string} tag tag html a crear
     * @param {string} nombrecampo name e id del elemento
     * @param {object} valores objeto con los valores de la prueba
     * @param {object} extra opcional
     */
    crearElementoHtml(contenedor, tag, nombrecampo, valores, extra=null){
        if (tag == 'select'){
            let select = document.createElement('select');
            select.id = nombrecampo;
            select.name = nombrecampo;

            let option = document.createElement('option');
            option.value = (valores[nombrecampo] === undefined) ? '' : valores[nombrecampo];
            option.selected = true;
            select.append(option);

            this.colocarelemento(select, contenedor);
        }
        else{
            super.crearElementoHtml(contenedor, tag, nombrecampo, valores, extra);
        }
    }

    /**
     * Pide al back todas las tuplas de una entidad y las añade como opciones a un select (clave ajena).
     * value de la opcion = columna id; texto = id + primera columna no objeto distinta del id (el nombre).
     * Debe terminar ANTES de rellenarvaloresform, que asigna el value al select.
     *
     * @param {string} idselect id del select del formulario
     * @param {string} controlador entidad del back de la que se piden las tuplas (rol, accion, funcionalidad...)
     * @param {string} columnaid nombre de la columna que contiene el id en esa entidad
     */
    async cargar_select_fk(idselect, controlador, columnaid){
        let respuesta = await new ExternalAccess().peticionBackGeneral('', controlador, 'SEARCH');
        let select = document.getElementById(idselect);

        if (respuesta['code'] == 'RECORDSET_DATOS'){
            for (let i=0;i<respuesta['resource'].length;i++){
                let fila = respuesta['resource'][i];
                let columnanombre = Object.keys(fila).find(c => (c != columnaid) && (typeof fila[c] != 'object'));

                let option = document.createElement('option');
                option.value = fila[columnaid];
                option.textContent = fila[columnaid] + ((columnanombre) ? ' - '+fila[columnanombre] : '');
                select.append(option);
            }
        }
    }

    /**
     * Deja en el select solo la opcion seleccionada: el usuario no puede cambiarlo
     * y el valor sigue viajando en el FormData (un select disabled no se envia)
     * @param {string} id id del select
     */
    bloquear_select(id){
        let select = document.getElementById(id);
        for (let i=select.options.length-1;i>=0;i--){
            if (!select.options[i].selected){
                select.remove(i);
            }
        }
    }

    /**
     * abrir el modal de error de accion. Se redefine porque la version de dom hace
     * classList.add = errorMsg (asigna en vez de llamar al metodo) y el codigo de error
     * nunca llega a ponerse como clase, con lo que setLang() no puede traducirlo
     * @param {string} errorMsg codigo de error devuelto por el back
     */
    abrirModalError(errorMsg){
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        document.getElementById('error_action_msg').classList.add(errorMsg);
        setLang();
    }
}
