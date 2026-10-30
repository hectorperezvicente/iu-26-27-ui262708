/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
    }

    /**
     * Data_Test lanza este metodo desde su constructor, justo despues de crear this.dom = new dom_fields().
     * Se redefine para:
     *  - usar entity_dom_fields, que sabe crear los campos select (claves ajenas)
     *  - vaciar contenedor_IU_form antes de empezar: contiene el formulario real de la entidad
     *    con los mismos ids que los campos de prueba y getElementById devolveria el real en la primera prueba
     */
    data_test_class(){
        this.dom = new entity_dom_fields();
        this.dom.vaciarDiv('contenedor_IU_form');
        return super.data_test_class();
    }

}