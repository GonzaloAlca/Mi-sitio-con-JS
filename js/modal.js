$(document).ready(function(){

$('.imagen-proyecto').on('click', function(){
let rutaImagen = $(this).attr('src');
let modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa-solid fa-xmark"></i></div></div>'

$('#proyectos').after(modal);


$('#btnCerrar').on('click', function (){
$('#modal').remove();

})

})

$(document).on('keyup', function(e){
    if (e.which==27){
        $('#modal').remove();
    }
})


});