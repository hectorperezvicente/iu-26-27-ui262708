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