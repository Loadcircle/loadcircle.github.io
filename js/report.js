(function(){

    let btn_menu = document.getElementById('btn_menu');
    let menu_reporte = document.getElementById('menu_reporte');
    let radios = document.querySelectorAll('.value > input[type=radio]');
    let checkboxs = document.querySelectorAll('.check_table > input[type=checkbox]:not(.not_calc)');
    let trigger_price = document.getElementById('trigger_price');
    let price_options  = document.querySelector('.price_options');
    let price_option = document.querySelectorAll('.price_option');
    let toggle_modal = document.querySelectorAll('.toggle_modal');
    let modal_box_container = document.querySelectorAll('.modal_box_container');
    let recoment_value = document.querySelectorAll('input[name="valuation"]');
    let rcmd_q_box = document.getElementById('rcmd_q_box');

    recoment_value.forEach(function(e){
        e.addEventListener('click', function(){
            rcmd_q_box.classList.add('active');
        })
    });

    btn_menu.addEventListener('click', function(){

        if(menu_reporte.classList.contains('active')){
            menu_reporte.classList.remove('active');
        }else{
            menu_reporte.classList.add('active');
        }

    });

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

    checkboxs.forEach(function(e, k){

        if(k == 0){
            e.addEventListener('click', function(){
                if(this.checked){
                    checkboxs.forEach(function(l){
                        l.checked = true;
                        l.parentNode.classList.add('active');
                    });
                }else{
                    checkboxs.forEach(function(l){
                        l.checked = false;
                        l.parentNode.classList.remove('active');
                    });
                };
            });
        }else{
            e.addEventListener('change', function(){
                if(this.checked){
                    this.parentNode.classList.add('active');
                }else{
                    this.parentNode.classList.remove('active');
                };
                val_all_check();
            });
        }

    });

    function val_all_check(){
        var i = 0;
        checkboxs.forEach(function(e,k){
            if(k > 0){
                if(e.checked == false){
                    i++;
                };
            }
        });
        if(i>0){
            checkboxs[0].parentNode.classList.remove('active');
            checkboxs[0].checked = false;
        }else{
            checkboxs[0].parentNode.classList.add('active');
            checkboxs[0].checked = true;
        }
    };

    trigger_price.addEventListener('click', function(){
        if(price_options.classList.contains('active')){
            close_active_price();
        }else{
            price_options.classList.add('active');
            setTimeout(function(){
                price_options.classList.add('visible');
            }, 50);
        }
    });

    price_option.forEach(function(e){
        e.addEventListener('click', function(){
            price_option.forEach(function(k){ k.classList.remove('active') });
            e.classList.add('active');
        });
    });

    function close_active_price(){
        price_options.classList.remove('visible');
        setTimeout(function(){
            price_options.classList.remove('active');
        }, 850);
        
    };

    toggle_modal.forEach(function(e){
        e.addEventListener('click', function(){
            document.getElementById(e.dataset.target).classList.add('active');
            setTimeout(function(){                
                document.getElementById(e.dataset.target).classList.add('visible_modal');
            },50);
        });
    });
    
    //Cerrar todos los modales
    modal_box_container.forEach(function(e){
        e.addEventListener('click', function(l){            
            if(!l.target.matches('.modal_white_box')
            && !l.target.matches(".modal_white_box *:not(.close_item_modal)")){
                e.classList.remove('visible_modal');
                setTimeout(function(){                
                    e.classList.remove('active');
                },450);
            };
        });
    });






    if(window.innerWidth < 768){
        let deploy_mob_box = document.querySelectorAll('.deploy_mob_box');
        let btn_tpm  = document.querySelectorAll('.btn_tpm ');
        let price_mob_content = document.querySelectorAll('.price_mob_content > div');
        let items_table_box = document.querySelector('.mob_table>div');
        let arrow_float_scroll = document.getElementById('arrow_float_scroll');
        let put_new_value = document.getElementById('put_new_value');
        let valuation_range = document.getElementById('valuation_range');

        
        valuation_range.oninput = function() {
            recoment_value.forEach(function(e){
                e.parentElement.classList.remove('active');
            });
            recoment_value[this.value].parentNode.classList.add('active');
            recoment_value[this.value].checked = true;
            rcmd_q_box.classList.add('active');
        }

        put_new_value.addEventListener('click', function(){
            
            modal_box_container.forEach(function(e){
                e.classList.remove('visible_modal');
                setTimeout(function(){                
                    e.classList.remove('active');
                },450);
            });

        });

        items_table_box.addEventListener('scroll', function(){
            arrow_float_scroll.classList.add('inactive');
        });

        btn_tpm.forEach(function(e){
            e.addEventListener('click', function(){
                btn_tpm.forEach(function(k){
                    k.classList.remove('active');
                });
                price_mob_content.forEach(function(l){
                    l.classList.remove('active');
                });
                this.classList.add('active');
                if(this.classList.contains('estad')){
                    document.querySelector('.estadistica_box').classList.add('active')
                }else if(this.classList.contains('compa')){
                    document.querySelector('.comparable_box').classList.add('active')    
                }else if(this.classList.contains('expe')){
                    document.querySelector('.experta_box').classList.add('active')                    
                }
            });




        });

        deploy_mob_box.forEach(function(e){
            e.addEventListener('click', function(){
                if(this.parentNode.parentNode.classList.contains('active')){
                    this.parentNode.parentNode.classList.remove('active');
                }else{
                    this.parentNode.parentNode.classList.add('active');
                };                
            });
        });
    };






})();