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
    console.log("START");
    //AJAX
    $.ajax({
        type: "POST",
        url: "assets/mobile_catalog.xml",
        contentType: "text/xml",
        dataType: "text",
        success: function(result) {
            console.log("success");
            var $result = $(result);
            for(var i = 0; i < 2; i++){
                $(".name:eq(" + i + ")").text(getName($result,i));
                $(".os:eq(" + i + ")").text("OS : " + getOs($result,i));
                $(".size:eq(" + i + ")").text("ขนาด : " + getSize($result,i));
                $(".ship:eq(" + i + ")").text("Ship : " + getShip($result,i));
                $(".screen:eq(" + i + ")").text("หน้าจอ : " + getScreen($result,i));
                $(".frontcam:eq(" + i + ")").text("กล้องหน้า : " + getFrontcam($result,i));
                $(".backcam:eq(" + i + ")").text("กล้องหลัง : " + getBackcam($result,i));
                $(".battary:eq(" + i + ")").text("แบตเตอร์รี่ : " + getBattary($result,i));
                $(".other:eq(" + i + ")").text("อื่นๆ : " + getOther($result,i));
                
                var optionMem = "";

                switch(i)   {
                    case 0:
                        ssgs8mem = getMemory($result,i);
                        for (var j = 0; j < ssgs8mem.length; j++) {
                            optionMem += "<option value=" + ssgs8mem[j] + ">" + ssgs8mem[j] + "GB</option>";
                        }
                        $("#ssgs8mem").append(optionMem);
                        ssgs8pric = getPrice($result,i);
                        
                        ssgs8color = getColor($result,i);
                        ssgs8pic = getOther($result,i);
                        break;
                    case 1:
                        ip7mem = getMemory($result,i);
                        ip7pric = getPrice($result,i);
                        ip7color = getColor($result,i);
                        ip7pic = getOther($result,i);
                        break;
                    case 2:
                        ip6mem = getMemory($result,i);
                        ip6pric = getPrice($result,i);
                        ip6color = getColor($result,i);
                        ip6pic = getOther($result,i);
                        break;
                    case 3:
                        ipsemem = getMemory($result,i);
                        ipsepric = getPrice($result,i);
                        ipsecolor = getColor($result,i);
                        ipsepic = getOther($result,i);
                        break;
                    case 4:
                        hp9mem = getMemory($result,i);
                        hp9pric = getPrice($result,i);
                        hp9color = getColor($result,i);
                        hp9pic = getOther($result,i);
                        break;
                    case 4:
                        np1mem = getMemory($result,i);
                        np1pric = getPrice($result,i);
                        np1color = getColor($result,i);
                        np1pic = getOther($result,i);
                        break;
                }
                
            }
        },
        error: function(result){
            console.log("error");
            console.log(result);
            var $result = $(result);
            for(var i = 0; i < product.length; i++){
                $(".name:eq(" + i + ")").text(getName($result,i));
                $(".os:eq(" + i + ")").text("OS : " + getOs($result,i));
                $(".size:eq(" + i + ")").text("ขนาด :" + getSize($result,i));
                $(".ship:eq(" + i + ")").text("Ship :" + getShip($result,i));
                $(".screen:eq(" + i + ")").text("หน้าจอ :" + getScreen($result,i));
                $(".frontcam:eq(" + i + ")").text("กล้องหน้า :" + getFrontcam($result,i));
                $(".backcam:eq(" + i + ")").text("กล้องหลัง :" + getBackcam($result,i));
                $(".battary:eq(" + i + ")").text("แบตเตอร์รี่ :" + getBattary($result,i));
                $(".other:eq(" + i + ")").text("อื่นๆ :" + getOther($result,i));
            }
        }
    });

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
