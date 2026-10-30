/**
 * clase para poder refactorizar los metodos que se consideren adecuados manteniendo la definicion de los mismos y para inclusion de nuevos metodos
 *
 * REFACTORIZADO: data_test_class
 *  - usa entity_dom_fields (Data_Test crea un dom_fields, que no sabe crear textarea ni select)
 *  - vacia el contenedor del formulario antes de las pruebas (si estaba el formulario de la entidad
 *    cargado, getElementById devolveria sus campos en vez de los de la prueba)
 *  - oculta la gestion de la entidad y el formulario modal para que solo se vea el resultado
 *  - boton para volver a la gestion de la entidad (restaura ademas el formulario previo)
 *  - cierra el resultado de los tests al elegir una entidad del menu
 *
 * NUEVO: data_test_class_ventana
 *  - alternativa a data_test_class: muestra el resultado en una ventana nueva con un resumen
 *    de correctas/incorrectas/sin traduccion. No se ejecuta sola: hay que llamarla expresamente.
 */
class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
    }

    /**
     * Data_Test lanza este metodo desde su constructor, justo despues de crear this.dom = new dom_fields().
     * Se redefine para:
     *  - usar entity_dom_fields, que sabe crear los campos select (claves ajenas) y textarea
     *  - guardar y vaciar contenedor_IU_form antes de empezar: contiene el formulario real de la entidad
     *    con los mismos ids que los campos de prueba y getElementById devolveria el real en la primera prueba
     *  - ocultar la gestion de la entidad (titulo, iconos y tabla de datos) y el formulario modal,
     *    para que solo se vea el resultado de los tests
     *  - colocar un boton para volver a la gestion de la entidad
     *  - cerrar el resultado de los tests cuando se elige una entidad del menu
     */
    data_test_class(){
        this.dom = new entity_dom_fields();
        this.formulario_previo = document.getElementById('contenedor_IU_form').innerHTML;
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
     * volver a ver la gestion de la entidad (titulo, iconos y tabla de datos).
     * Al volver se restaura el formulario que habia antes de los tests.
     * (la restauracion solo se hace aqui y no en cerrar_tests, porque cerrar_tests tambien se
     * ejecuta al cambiar de entidad y no hay que pisar el formulario de la nueva entidad)
     */
    colocar_boton_volver(){
        let boton = document.createElement('img');
        boton.id = 'boton_volver_test';
        boton.src = './iconos/BACK.png';
        boton.onclick = () => {
            this.cerrar_tests();
            document.getElementById('contenedor_IU_form').innerHTML = this.formulario_previo;
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

    /**
     * ALTERNATIVA (no se lanza sola): ejecuta las pruebas y muestra el resultado en una ventana nueva,
     * con un resumen de correctas/incorrectas/sin traduccion. Restaura el formulario al terminar.
     * @returns {boolean} false si el navegador bloquea la ventana
     */
    data_test_class_ventana(){

        this.dom = new entity_dom_fields();

        // guardar estado del formulario y vaciarlo
        var formulario_previo = document.getElementById('contenedor_IU_form').innerHTML;
        this.dom.vaciarDiv('contenedor_IU_form');

        var salidapruebas = this.data_test_data();

        // restaurar el formulario
        document.getElementById('contenedor_IU_form').innerHTML = formulario_previo;

        // pintar la tabla con el metodo de la arquitectura en un div auxiliar y copiarla a la ventana nueva
        let marcados = {
            pruebastatus: {value:'INCORRECTO', style:'background-color: red'},
            traduccionError : {value:'sintraduccion', style:'background-color: red'}
        };
        this.dom.showData('IU_Test_result_nofile', salidapruebas, marcados);
        var tabla = document.getElementById('IU_Test_result_nofile').innerHTML;
        this.dom.vaciarDiv('IU_Test_result_nofile');
        this.dom.hide_element('IU_Test_result_nofile');

        var total = salidapruebas.length;
        var correctas = salidapruebas.filter(p => p.pruebastatus == 'CORRECTO').length;
        var sintraduccion = salidapruebas.filter(p => p.traduccionError == 'sintraduccion').length;

        var ventana = window.open('', 'test_'+this.entidad.nombreentidad);
        if (ventana === null){
            alert('El navegador ha bloqueado la ventana de resultados. Permite ventanas emergentes para esta pagina.');
            return false;
        }
        ventana.document.open();
        ventana.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8">
            <title>Test `+this.entidad.nombreentidad+`</title>
            <style>
                body{font-family:Arial,sans-serif;font-size:13px;margin:16px;}
                table{border-collapse:collapse;width:100%;}
                th,td{border:1px solid black;padding:3px 6px;vertical-align:top;}
                th{background:#ddd;}
                .resumen{margin-bottom:12px;font-size:15px;}
            </style></head><body>
            <h2>Resultado pruebas entidad `+this.entidad.nombreentidad+`</h2>
            <div class="resumen">Total: `+total+` &nbsp; Correctas: `+correctas+` &nbsp; Incorrectas: `+(total-correctas)+` &nbsp; Sin traduccion: `+sintraduccion+`</div>
            `+tabla+`
            </body></html>`);
        ventana.document.close();

        return true;
    }

}
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
