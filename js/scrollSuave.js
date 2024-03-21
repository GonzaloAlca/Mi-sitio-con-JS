$(document).ready(function () {

    //mostrar y ocultar boton volver arriba//

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {

        var proyectosOffsetTop = $('#proyectos').offset().top;
        let position = $(window).scrollTop();

        if (position >= 0 && position <= 200) {
            btnVolverArriba.css('margin-right', '-60px');

        } else  {
            btnVolverArriba.css('margin-right', '60px');
        }

    })
    //Movimiento suave del scroll de inicio y volver arriba

    $('a.volver-arriba').on('click', function(e){
        e.preventDefault();

        if($(window).scrollTop() != 0){
            $('html, body').stop().animate({scrollTop: 0}, 1000);
        }


    })

    //Movimiento suave de scroll para los demas items del menu principal

    $('a.scroll-suave').on('click', function(e){
        e.preventDefault();
        let seccionOffsetTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);

    }); 
    $('a.scroll-acercaDe').on('click', function(e){
        e.preventDefault();
        let seccionOffsetTop = $($(this).attr('href')).offset().top -122
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);

    }); 
    $('a.scroll-equipo').on('click', function(e){
        e.preventDefault();
        let seccionOffsetTop = $($(this).attr('href')).offset().top -68
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);

    }); 

});