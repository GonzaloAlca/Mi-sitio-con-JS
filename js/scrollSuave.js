$(document).ready(function () {

    //mostrar y ocultar boton volver arriba//

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {

        var proyectosOffsetTop = $('#proyectos').offset().top;
        let position = $(window).scrollTop();

        if (position >= 0 && position <= 200) {
            btnVolverArriba.css('margin-right', '-60px');

        } else {
            btnVolverArriba.css('margin-right', '60px');
        }

    })

});