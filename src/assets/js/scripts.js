
$(document).ready(function() {

alert("lalalal");
        var nav = $('.imagem_menu');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            $('.navigation').addClass('fixed');
        } else {
            $('.navigation').removeClass('fixed');
        }
    });

    $(".kz_esquerda").on({
        "mouseover": function () {
            $(this).toggleClass("kz_in");
            $(".kz_direita").toggleClass("kz_out");
            $(this).find(".kz_setaleft").toggleClass("kz_setaleftin");
            $(this).find(".kz_setaright").toggleClass("kz_setarightin");
        },
        "mouseout": function () {
            $(this).toggleClass("kz_in");
            $(".kz_direita").toggleClass("kz_out");
            $(this).find(".kz_setaleft").toggleClass("kz_setaleftin");
            $(this).find(".kz_setaright").toggleClass("kz_setarightin");
        }
    });

    $(".kz_direita").on({
        "mouseover": function () {
            $(this).toggleClass("kz_in");
            $(".kz_esquerda").toggleClass("kz_out");
            $(this).find(".kz_setaleft").toggleClass("kz_setaleftin");
            $(this).find(".kz_setaright").toggleClass("kz_setarightin");
        },
        "mouseout": function () {
            $(this).toggleClass("kz_in");
            $(".kz_esquerda").toggleClass("kz_out");
            $(this).find(".kz_setaleft").toggleClass("kz_setaleftin");
            $(this).find(".kz_setaright").toggleClass("kz_setarightin");
        }
    });
});
