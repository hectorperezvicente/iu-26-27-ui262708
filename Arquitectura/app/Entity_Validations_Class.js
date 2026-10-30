/**
 * clase para refactorizar los metodos de Validations que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_Validations extends Validations{
    constructor(){
        super();
    }

    /**
     * indica si el elemento tiene un valor de texto comparable por longitud:
     * cualquier input que no sea file (incluye password) y los select y textarea
     * @param {object} elemento elemento DOM
     * @returns {bool}
     */
    es_campo_de_texto(elemento){
        return ((elemento.tagName == 'INPUT' && elemento.type != 'file') ||
                elemento.tagName == 'SELECT' ||
                elemento.tagName == 'TEXTAREA');
    }

    /**
     * Validations.min_size devuelve undefined para select y para input password.
     * Aqui se comprueba la longitud del valor en esos casos y en el resto se delega en la clase padre
     * @param {string} id id del campo
     * @param {number} minsize longitud minima
     * @returns {bool} true si el valor tiene al menos minsize caracteres
     */
    min_size(id, minsize){
        let elemento = document.getElementById(id);
        if (this.es_campo_de_texto(elemento)){
            return elemento.value.length >= minsize;
        }
        return super.min_size(id, minsize);
    }

    /**
     * Igual que min_size pero para la longitud maxima
     * @param {string} id id del campo
     * @param {number} maxsize longitud maxima
     * @returns {bool} true si el valor tiene como mucho maxsize caracteres
     */
    max_size(id, maxsize){
        let elemento = document.getElementById(id);
        if (this.es_campo_de_texto(elemento)){
            return elemento.value.length <= maxsize;
        }
        return super.max_size(id, maxsize);
    }
}