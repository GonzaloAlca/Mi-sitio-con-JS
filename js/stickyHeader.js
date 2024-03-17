$(document).ready(function(){

let fixedHeader = $('#fixedHeader');

$(window).on('scroll', function () {

    let proyectosOffsetTop = $('#proyectos').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop){

        fixedHeader.css('margin-top', 0);


    } else if ($(window).scrollTop() < proyectosOffsetTop/2){
        fixedHeader.css('margin-top', '-68px');
    }


})



});