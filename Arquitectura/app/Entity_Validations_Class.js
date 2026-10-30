/**
 * clase para refactorizar los metodos existentes en Validations. NO se pueden crear metodos nuevos.
 *
 * REFACTORIZADO: min_size y max_size
 * Validations.min_size / max_size solo miden INPUT de tipo number/email/text y devuelven undefined
 * para TEXTAREA, SELECT e INPUT password. Aqui se mide la longitud del valor en todos ellos
 * (cualquier input que no sea file, select y textarea) y en el resto de casos
 * se delega en la clase padre.
 */
class entity_validations extends Validations{
    constructor(){
        super();
    }

	/**
	 * comprueba que el valor del elemento tiene al menos minsize caracteres
	 * @param {string} id id del elemento html
	 * @param {number} minsize tamano minimo
	 * @returns {bool} true si cumple, false si no
	 */
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		if ((elemento.tagName == 'INPUT' && elemento.type != 'file') ||
			elemento.tagName == 'SELECT' ||
			elemento.tagName == 'TEXTAREA'){
			return elemento.value.length >= minsize;
		}
		return super.min_size(id, minsize);
	}

	/**
	 * comprueba que el valor del elemento tiene como maximo maxsize caracteres
	 * @param {string} id id del elemento html
	 * @param {number} maxsize tamano maximo
	 * @returns {bool} true si cumple, false si no
	 */
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		if ((elemento.tagName == 'INPUT' && elemento.type != 'file') ||
			elemento.tagName == 'SELECT' ||
			elemento.tagName == 'TEXTAREA'){
			return elemento.value.length <= maxsize;
		}
		return super.max_size(id, maxsize);
	}
}
