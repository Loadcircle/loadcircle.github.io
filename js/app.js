(function(){

    let buscador_form = document.getElementById('buscador_form');
    let input_ubicacion = document.getElementById('input_ubicacion');
    let label_ubicacion = document.querySelector('.label_ubicacion');

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

    buscador_form.addEventListener('submit', function(e){

        label_ubicacion.classList.remove('error');
        if(input_ubicacion.value.length < 5){
            e.preventDefault();
            label_ubicacion.classList.add('error');
        }
    })
    



})();