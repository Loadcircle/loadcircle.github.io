(function(){

    let btn_menu = document.getElementById('btn_menu');
    let menu_reporte = document.getElementById('menu_reporte');
    let radios = document.querySelectorAll('.value > input[type=radio]');
    let checkboxs = document.querySelectorAll('.check_table > input[type=checkbox]:not(.not_calc)');
    let trigger_price = document.getElementById('trigger_price');
    let price_options  = document.querySelector('.price_options');
    let price_option = document.querySelectorAll('.price_option');



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

})();