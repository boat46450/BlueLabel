var position = '#home';
var product = ["#ssgs8","#ip7","#ipse","#hp9","#np1"];
var ssgs8path = "";
var ip7path = "";
var ipsepath = "";
var hp9path = "";
var np1path = "";

$(document).ready(function(){
    //AJAX
    $.ajax({url: "assets/mobile_catalog.xml", success: function(result){
        var $result = $(result);
        $(".name").append(getName($result,0));
        $(".os").append("OS : " + getOs($result,0));
        $(".size").append("ขนาด :" + getSize($result,0));
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
