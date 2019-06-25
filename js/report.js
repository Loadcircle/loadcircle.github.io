(function(){

    let btn_menu = document.getElementById('btn_menu');
    let menu_reporte = document.getElementById('menu_reporte');
    let radios = document.querySelectorAll('.value > input[type=radio]');

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



})()