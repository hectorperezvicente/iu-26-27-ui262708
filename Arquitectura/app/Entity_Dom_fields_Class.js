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