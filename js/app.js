(function(){

    let buscador_form = document.getElementById('buscador_form');
    let input_ubicacion = document.getElementById('input_ubicacion');
    let label_ubicacion = document.querySelector('.label_ubicacion');

    if(input_ubicacion){
        input_ubicacion.addEventListener('keyup', function(){
            if(this.value.length > 0){
                label_ubicacion.classList.add('active');
            }else{
                label_ubicacion.classList.remove('active');
            }
            if(this.value.length > 5){
                label_ubicacion.classList.remove('error');
            }
        });
    }

    if(buscador_form){
        buscador_form.addEventListener('submit', function(e){

            label_ubicacion.classList.remove('error');
            if(input_ubicacion.value.length < 5){
                e.preventDefault();
                label_ubicacion.classList.add('error');
            }
        });
    }
    

    let selects = document.querySelectorAll('.form_filtros_box select');
    let inputs = document.querySelectorAll('.form_filtros_box input[type="number"], .form_filtros_box input[type="text"]');
    let filtros_submit = document.querySelector('.form_filtros_box .btn_start');
    const tipo_operacion_select = document.getElementById('tipo_operacion');
    const tipo_propiedad_select = document.getElementById('tipo_propiedad');
    const area_input = document.getElementById('area');
    const age_input = document.getElementById('year');
    const area_terreno = document.getElementById('area_terreno');
    const area_construida = document.getElementById('area_construida');
    let radios = document.querySelectorAll('.label_hab > input[type=radio]');
    const filtros_view_form = document.querySelector('#filtros_view form');
    const amoblado_container = document.getElementById('amoblado_container');
    const habitaciones_container = document.getElementById('habitaciones_container');
    const label_construida = document.getElementById('label_construida');
    const label_terreno = document.getElementById('label_terreno');
    const label_antiguedad = document.getElementById('label_antiguedad');
    const label_area_total = document.getElementById('label_area_total');

    if(tipo_operacion_select){
        tipo_operacion_select.addEventListener('change', function(){
            if(this.value == 'Venta'){
                amoblado_container.classList.add('inactive')
            }
            if(this.value == 'Alquilar'){
                amoblado_container.classList.remove('inactive');
            }
        });
        tipo_propiedad_select.addEventListener('change', function(){

            if(this.value == 'Departamentos'){
                habitaciones_container.classList.remove('inactive');
                label_area_total.classList.remove('inactive');
                label_antiguedad.classList.remove('inactive');
                label_construida.classList.add('inactive');
                label_terreno.classList.add('inactive');
                // select_change_propiedad(departamento_options);
            }
            if(this.value == 'Casas'){
                label_area_total.classList.remove('inactive');
                label_antiguedad.classList.remove('inactive');
                label_construida.classList.remove('inactive');
                label_terreno.classList.add('inactive');
                habitaciones_container.classList.add('inactive');
                // select_change_propiedad(casa_options);
            }
            if(this.value == 'Oficinas'){
                label_area_total.classList.remove('inactive');
                label_antiguedad.classList.remove('inactive');
                label_construida.classList.add('inactive');
                label_terreno.classList.add('inactive');
                habitaciones_container.classList.add('inactive');
                // select_change_propiedad(oficinas_options);
            }
            if(this.value == 'Locales Comerciales'){
                label_area_total.classList.remove('inactive');
                label_antiguedad.classList.remove('inactive');
                label_construida.classList.add('inactive');
                label_terreno.classList.add('inactive');
                habitaciones_container.classList.add('inactive');
                // select_change_propiedad(locales_comerciales_options);
            }
            if(this.value == 'Locales Industriales'){
                label_area_total.classList.remove('inactive');
                label_construida.classList.remove('inactive');
                label_antiguedad.classList.add('inactive');
                label_terreno.classList.add('inactive');
                habitaciones_container.classList.add('inactive');
                // select_change_propiedad(locales_industriales_options);
            }
            if(this.value == 'Terrenos'){
                label_terreno.classList.remove('inactive');
                label_area_total.classList.add('inactive');
                label_construida.classList.add('inactive');
                label_antiguedad.classList.add('inactive');
                habitaciones_container.classList.add('inactive');
                // select_change_propiedad(terrenos_options);
            }

        });
    }

    if(filtros_view_form){
        
        area_input.addEventListener('focus', remove_value);
        area_input.addEventListener('focusout', add_value);
        area_input.addEventListener('keyup', put_span_value);
        area_input.addEventListener('change', put_span_value);
        age_input.addEventListener('focus', remove_value);
        age_input.addEventListener('focusout', add_value);
        age_input.addEventListener('keyup', put_span_value);
        age_input.addEventListener('change', put_span_value);
        area_terreno.addEventListener('focus', remove_value);
        area_terreno.addEventListener('focusout', add_value);
        area_terreno.addEventListener('keyup', put_span_value);
        area_terreno.addEventListener('change', put_span_value);
        area_construida.addEventListener('focus', remove_value);
        area_construida.addEventListener('focusout', add_value);
        area_construida.addEventListener('keyup', put_span_value);
        area_construida.addEventListener('change', put_span_value);

    }


    function put_span_value(){
        document.getElementById('area_value_span').innerHTML = area_input.value;
        document.getElementById('age_value_span').innerHTML = age_input.value;
        document.getElementById('area_construida_value_span').innerHTML = area_construida.value;
        document.getElementById('area_terreno_value_span').innerHTML = area_terreno.value;
    }
    function remove_value(){
        this.parentNode.classList.remove('value');
    }
    function add_value(){
        if(this.value.length > 0){
            this.parentNode.classList.add('value');
        }
    }
    function val_max_number(){
        if(this.getAttribute('maxlength') !== null && this.getAttribute('maxlength') !== ''){
            if(this.value.length > this.getAttribute('maxlength')){
                this.value = this.value.substr(0, this.value.length -1);
                put_span_value
            }
        }
    }
    
    radios.forEach(function(e){
        e.addEventListener('click', function(){
            if(this.checked){
                attr_name = this.getAttribute('name');
                document.querySelectorAll('input[name="'+attr_name+'"]').forEach(function(k){
                    k.parentNode.classList.remove('active');                    
                });
                this.parentNode.classList.add('active');
            };
        });
    });

    selects.forEach(function(e){
        e.addEventListener('change', function(){
            e.parentNode.classList.add('active');
            if(tipo_operacion_select.value != '' && tipo_propiedad_select.value != ''){
                filtros_submit.disabled = false;
                filtros_submit.classList.add('active');
            }
        });
    });

    inputs.forEach(function(e){
        e.addEventListener('keyup', function(){
            if(this.value.length > 1){
                this.parentNode.classList.add('active');
            }else{
                this.parentNode.classList.remove('active');
            }
        });
    });
    inputs.forEach(function(e){
        e.addEventListener('keyup', val_max_number);
        e.addEventListener('change', val_max_number);
    });

    if(window.innerWidth < 768){
        let btn_menu_standar = document.getElementById('btn_menu_standar');
        let menu_id_mob = document.getElementById('menu_id_mob');

        if(btn_menu_standar){
            btn_menu_standar.addEventListener('click', function(){
                if(menu_id_mob.classList.contains('active')){
                    menu_id_mob.classList.remove('active')
                }else{
                    menu_id_mob.classList.add('active')
                }
            });
        };
    };

})();