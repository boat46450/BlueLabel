var position = '#home';

$(document).ready(function(){
  $('.bp1').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p1').css({top: '0'});
    $('#p1').addClass('front');
    $('#p1').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p1';
    },2000);
    e.stopPropagation();
  });

  $('.bp2').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p2').css({top: '0'});
    $('#p2').addClass('front');
    $('#p2').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p2';
    },2000);
    e.stopPropagation();
  });

  $('.bp3').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p3').css({top: '0'});
    $('#p3').addClass('front');
    $('#p3').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p3';
    },2000);
    e.stopPropagation();
  });

  $('.bp4').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p4').css({top: '0'});
    $('#p4').addClass('front');
    $('#p4').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p4';
    },2000);
    e.stopPropagation();
  });

  $('.bp5').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p5').css({top: '0'});
    $('#p5').addClass('front');
    $('#p5').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p5';
    },2000);
    e.stopPropagation();
  });

  $('.bp6').click(function (e) {
    $(position).css({top: '-100%'});
    $('#p6').css({top: '0'});
    $('#p6').addClass('front');
    $('#p6').removeClass('back');
    setTimeout(function(){
        $(position).removeClass('transition');
        $(position).addClass('back');
        $(position).removeClass('front');
        $(position).css({top: '100%'});
        $(position).addClass('transition');
        position = '#p6';
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
