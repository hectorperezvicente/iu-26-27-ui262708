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
     *  - ocultar la gestion de la entidad (titulo, iconos y tabla de datos) y el formulario modal,
     *    para que solo se vea el resultado de los tests
     *  - colocar un boton para volver a la gestion de la entidad
     *  - cerrar el resultado de los tests cuando se elige una entidad del menu
     */
    data_test_class(){
        this.dom = new entity_dom_fields();
        this.dom.vaciarDiv('contenedor_IU_form');
        this.dom.vaciarDiv('IU_Test_result_nofile');

        this.dom.hide_element('IU_manage_entity');
        this.dom.hide_element('Div_IU_form');

        let resultado = super.data_test_class();

        this.colocar_boton_volver();
        this.cerrar_al_cambiar_de_entidad();
        return resultado;
    }

    /**
     * coloca al principio del resultado de los tests un icono para cerrarlo y
     * volver a ver la gestion de la entidad (titulo, iconos y tabla de datos)
     */
    colocar_boton_volver(){
        let boton = document.createElement('img');
        boton.id = 'boton_volver_test';
        boton.src = './iconos/BACK.png';
        boton.onclick = () => {
            this.cerrar_tests();
            this.dom.show_element('IU_manage_entity');
        };
        document.getElementById('IU_Test_result_nofile').prepend(boton);
    }

    /**
     * borra el resultado de los tests y deja de escuchar el menu
     */
    cerrar_tests(){
        this.dom.vaciarDiv('IU_Test_result_nofile');
        if (entity_Test_Data.manejador_menu){
            document.getElementById('div-menu').removeEventListener('click', entity_Test_Data.manejador_menu);
            entity_Test_Data.manejador_menu = null;
        }
    }

    /**
     * Si con los tests abiertos se elige una entidad del menu, se cierran los tests.
     * El evento sube (bubbling) hasta el aside despues de ejecutarse el onclick de la opcion,
     * es decir, cuando la nueva entidad ya se ha creado y ha mostrado su gestion.
     * Solo hay un manejador a la vez: se quita el de una ejecucion anterior de los tests.
     */
    cerrar_al_cambiar_de_entidad(){
        let menu = document.getElementById('div-menu');
        if (entity_Test_Data.manejador_menu){
            menu.removeEventListener('click', entity_Test_Data.manejador_menu);
        }
        entity_Test_Data.manejador_menu = (evento) => {
            if (evento.target.closest('.opcionmenu')){
                this.cerrar_tests();
            }
        };
        menu.addEventListener('click', entity_Test_Data.manejador_menu);
    }

}