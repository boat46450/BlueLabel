var position = '#home';
var product = ["#ssgs8","#ip7","#ipse","#hp9","#np1"];

$(document).ready(function(){
  $('.bssgs8').click(function (e) {
    $(position).css({top: '-100%'});
    $('#ssgs8').css({top: '0'});
    $('#ssgs8').addClass('front');
    $('#ssgs8').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#ssgs8';
    },2000);
    e.stopPropagation();
  });

  $('.bip7').click(function (e) {
    $(position).css({top: '-100%'});
    $('#ip7').css({top: '0'});
    $('#ip7').addClass('front');
    $('#ip7').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#ip7';
    },2000);
    e.stopPropagation();
  });

  $('.bipse').click(function (e) {
    $(position).css({top: '-100%'});
    $('#ipse').css({top: '0'});
    $('#ipse').addClass('front');
    $('#ipse').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#ipse';
    },2000);
    e.stopPropagation();
  });

  $('.bhp9').click(function (e) {
    $(position).css({top: '-100%'});
    $('#hp9').css({top: '0'});
    $('#hp9').addClass('front');
    $('#hp9').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#hp9';
    },2000);
    e.stopPropagation();
  });

  $('.bnp1').click(function (e) {
    $(position).css({top: '-100%'});
    $('#np1').css({top: '0'});
    $('#np1').addClass('front');
    $('#np1').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#np1';
    },2000);
    e.stopPropagation();
  });

  $('.bhome').click(function (e) {
    $(position).css({top: '-100%'});
    $('#home').css({top: '0'});
    $('#home').addClass('front');
    $('#home').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#home';
    },2000);
    e.stopPropagation();
  });

  $('.bcart').click(function (e) {
    $(position).css({top: '-100%'});
    $('#cart').css({top: '0'});
    $('#cart').addClass('front');
    $('#cart').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#cart';
    },2000);
    e.stopPropagation();
  });
});
