var position = '#home';
var product = ["#ssgs8","#ip7","#ipse","#hp9","#np1"];

$(document).ready(function(){
    $('.bssgs8').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#ssgs8').addClass('front');
        $('#ssgs8').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#ssgs8';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bip7').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#ip7').addClass('front');
        $('#ip7').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#ip7';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bipse').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#ipse').addClass('front');
        $('#ipse').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#ipse';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bhp9').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#hp9').addClass('front');
        $('#hp9').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#hp9';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bnp1').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#np1').addClass('front');
        $('#np1').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#np1';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bhome').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#home').addClass('front');
        $('#home').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#home';
            }, 10);
        },2000);
        e.stopPropagation();
    });

    $('.bcart').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#cart').addClass('front');
        $('#cart').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#cart';
            }, 10);
        },2000);
        e.stopPropagation();
    });
});
