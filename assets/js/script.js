var position = '#home';
var product = ["#ssgs8","#ip7","#ip6","#ipse","#hp9","#np1"];
var ssgs8mem = "";
var ssgs8pric = "";
var ssgs8color = "";
var ssgs8pic = "";
var ip7mem = "";
var ip7pric = "";
var ip7color = "";
var ip7pic = "";
var ip6mem = "";
var ip6pric = "";
var ip6color = "";
var ip6pic = "";
var ipsemem = "";
var ipsepric = "";
var ipsecolor = "";
var ipsepic = "";
var hp9mem = "";
var hp9pric = "";
var hp9color = "";
var hp9pic = "";
var np1mem = "";
var np1pric = "";
var np1color = "";
var np1pic = "";

$(document).ready(function(){
    //AJAX
    $.ajax({url: "assets/mobile_catalog.xml", success: function(result){
        var $result = $(result);
        $(".name:eq(0)").text(getName($result,0));
        $(".os:eq(0)").text("OS : " + getOs($result,0));
        $(".size:eq(0)").text("ขนาด :" + getSize($result,0));
        ssgs8mem = getMemory($result,0);
        ssgs8pric = getPrice($result,0);
        ssgs8color = getColor($result,0);
        $(".ship:eq(0)").text("Ship :" + getShip($result,0));
        $(".screen:eq(0)").text("หน้าจอ :" + getScreen($result,0));
        $(".frontcam:eq(0)").text("กล้องหน้า :" + getFrontcam($result,0));
        $(".backcam:eq(0)").text("กล้องหลัง :" + getBackcam($result,0));
        $(".battary:eq(0)").text("แบตเตอร์รี่ :" + getBattary($result,0));
        $(".other:eq(0)").text("อื่นๆ :" + getOther($result,0));
        ssgs8pic = getOther($result,0);
    }});

    //Main Function
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
            }, 100);
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
            }, 100);
        },2000);
        e.stopPropagation();
    });
    $('.bip6').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#ip6').addClass('front');
        $('#ip6').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#ip6';
            }, 100);
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
            }, 100);
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
            }, 100);
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
            }, 100);
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
            }, 100);
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
            }, 100);
        },2000);
        e.stopPropagation();
    });
});

// function for AJAX
function getName(xml,i) {
    return xml.find("NAME:eq(" + i + ")").text();
}
function getOs(xml,i) {
    return xml.find("OS:eq(" + i + ")").text();
}
function getSize(xml,i) {
    return xml.find("SIZE:eq(" + i + ")").text();
}
function getMemory(xml,i) {
    var memory = xml.find("MEMORY:eq(" + i + ")").text();
    return memory.split(",");
}
function getPrice(xml,i) {
    var price = xml.find("PRICE:eq(" + i + ")").text();
    return price.split(",");
}
function getColor(xml,i) {
    var color = xml.find("COLOR:eq(" + i + ")").text();
    return color.split(",");
}
function getShip(xml,i) {
    return xml.find("SHIP:eq(" + i + ")").text();
}
function getScreen(xml,i) {
    return xml.find("SCREEN:eq(" + i + ")").text();
}
function getFrontcam(xml,i) {
    return xml.find("FRONTCAM:eq(" + i + ")").text();
}
function getBackcam(xml,i) {
    return xml.find("BACKCAM:eq(" + i + ")").text();
}
function getBattary(xml,i) {
    return xml.find("BATTARY:eq(" + i + ")").text();
}
function getOther(xml,i) {
    return xml.find("OTHER:eq(" + i + ")").text();
}
function getImage(xml,i) {
    var image = xml.find("IMAGE:eq(" + i + ")").text();
    return image.split(",");
}
