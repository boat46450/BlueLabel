var position = '#home';
var product = ["#ssgs8","#ip7","#ip6","#ipse","#hp9","#nl1520"];
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
var nl1520mem = "";
var nl1520pric = "";
var nl1520color = "";
var nl1520pic = "";

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
            for(var i = 0; i < product.length; i++){
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
                var optionCol = "";

                switch(i)   {
                    case 0:
                        ssgs8mem = getMemory($result,i);
                        for (var j = 0; j < ssgs8mem.length; j++) {
                            optionMem += "<option value=" + ssgs8mem[j] + ">" + ssgs8mem[j] + "GB</option>";
                        }
                        $("#ssgs8mem").append(optionMem);
                        ssgs8pric = getPrice($result,i);
                        $("#ssgs8price").append("ราคา <span id='ssgs8pr'>" + ssgs8pric[0] + "</span> บาท");
                        ssgs8color = getColor($result,i);
                        for (var j = 0; j < ssgs8color.length; j++) {
                            optionCol += "<option value=" + ssgs8color[j] + ">" + ssgs8color[j] + "</option>";
                        }
                        $("#ssgs8color").append(optionCol);
                        ssgs8pic = getImage($result,i);
                        $("#ssgs8p").attr("src", ssgs8pic[0]);
                        break;
                    case 1:
                        ip7mem = getMemory($result,i);
                        for (var j = 0; j < ip7mem.length; j++) {
                            optionMem += "<option value=" + ip7mem[j] + ">" + ip7mem[j] + "GB</option>";
                        }
                        $("#ip7mem").append(optionMem);
                        ip7pric = getPrice($result,i);
                        $("#ip7price").append("ราคา <span id='ip7pr'>" + ip7pric[0] + "</span> บาท");
                        ip7color = getColor($result,i);
                        for (var j = 0; j < ip7color.length; j++) {
                            optionCol += "<option value=" + ip7color[j] + ">" + ip7color[j] + "</option>";
                        }
                        $("#ip7color").append(optionCol);
                        ip7pic = getImage($result,i);
                        $("#ip7p").attr("src", ip7pic[0]);
                        break;
                    case 2:
                        ip6mem = getMemory($result,i);
                        for (var j = 0; j < ip6mem.length; j++) {
                            optionMem += "<option value=" + ip6mem[j] + ">" + ip6mem[j] + "GB</option>";
                        }
                        $("#ip6mem").append(optionMem);
                        ip6pric = getPrice($result,i);
                        $("#ip6price").append("ราคา <span id='ip6pr'>" + ip6pric[0] + "</span> บาท");
                        ip6color = getColor($result,i);
                        for (var j = 0; j < ip6color.length; j++) {
                            optionCol += "<option value=" + ip6color[j] + ">" + ip6color[j] + "</option>";
                        }
                        $("#ip6color").append(optionCol);
                        ip6pic = getImage($result,i);
                        $("#ip6p").attr("src", ip6pic[0]);
                        break;
                    case 3:
                        ipsemem = getMemory($result,i);
                        for (var j = 0; j < ipsemem.length; j++) {
                            optionMem += "<option value=" + ipsemem[j] + ">" + ipsemem[j] + "GB</option>";
                        }
                        $("#ipsemem").append(optionMem);
                        ipsepric = getPrice($result,i);
                        $("#ipseprice").append("ราคา <span id='ipsepr'>" + ipsepric[0] + "</span> บาท");
                        ipsecolor = getColor($result,i);
                        for (var j = 0; j < ipsecolor.length; j++) {
                            optionCol += "<option value=" + ipsecolor[j] + ">" + ipsecolor[j] + "</option>";
                        }
                        $("#ipsecolor").append(optionCol);
                        ipsepic = getImage($result,i);
                        $("#ipsep").attr("src", ipsepic[0]);
                        break;
                    case 4:
                        hp9mem = getMemory($result,i);
                        for (var j = 0; j < hp9mem.length; j++) {
                            optionMem += "<option value=" + hp9mem[j] + ">" + hp9mem[j] + "GB</option>";
                        }
                        $("#hp9mem").append(optionMem);
                        hp9pric = getPrice($result,i);
                        $("#hp9price").append("ราคา <span id='hp9pr'>" + hp9pric[0] + "</span> บาท");
                        hp9color = getColor($result,i);
                        for (var j = 0; j < hp9color.length; j++) {
                            optionCol += "<option value=" + hp9color[j] + ">" + hp9color[j] + "</option>";
                        }
                        $("#hp9color").append(optionCol);
                        hp9pic = getImage($result,i);
                        $("#hp9p").attr("src", hp9pic[0]);
                        break;
                    case 5:
                        nl1520mem = getMemory($result,i);
                        for (var j = 0; j < nl1520mem.length; j++) {
                            optionMem += "<option value=" + nl1520mem[j] + ">" + nl1520mem[j] + "GB</option>";
                        }
                        $("#nl1520mem").append(optionMem);
                        nl1520pric = getPrice($result,i);
                        $("#nl1520price").append("ราคา <span id='nl1520pr'>" + nl1520pric[0] + "</span> บาท");
                        nl1520color = getColor($result,i);
                        for (var j = 0; j < nl1520color.length; j++) {
                            optionCol += "<option value=" + nl1520color[j] + ">" + nl1520color[j] + "</option>";
                        }
                        $("#nl1520color").append(optionCol);
                        nl1520pic = getImage($result,i);
                        $("#nl1520p").attr("src", nl1520pic[0]);
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
    $('.bnl1520').click(function (e) {
        $(position).addClass('flow');
        $(position).removeClass('front');
        $('#nl1520').addClass('front');
        $('#nl1520').removeClass('back');
        setTimeout(function(){
            $(position).removeClass('transition');
            $(position).addClass('back');
            $(position).removeClass('flow');
            setTimeout(function(){
                $(position).addClass('transition');
                position = '#nl1520';
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

    // onchange color
    $("#ssgs8color").change(function(){
        var temp = $("#ssgs8color option:selected").index();
        $("#ssgs8p").attr("src", ssgs8pic[temp]);
    });
    $("#ip7color").change(function(){
        var temp = $("#ip7color option:selected").index();
        $("#ip7p").attr("src", ip7pic[temp]);
    });
    $("#ip6color").change(function(){
        var temp = $("#ip6color option:selected").index();
        $("#ip6p").attr("src", ip6pic[temp]);
    });
    $("#ipsecolor").change(function(){
        var temp = $("#ipsecolor option:selected").index();
        $("#ipsep").attr("src", ipsepic[temp]);
    });
    $("#hp9color").change(function(){
        var temp = $("#hp9color option:selected").index();
        $("#hp9p").attr("src", hp9pic[temp]);
    });
    $("#nl1520color").change(function(){
        var temp = $("#nl1520color option:selected").index();
        $("#nl1520p").attr("src", nl1520pic[temp]);
    });

    //onchange price
    $("#ssgs8mem").change(function(){
        var temp = $("#ssgs8mem option:selected").index();
        $("#ssgs8price").html("ราคา <span id='ssgs8pr'>" + ssgs8pric[temp] + "</span> บาท");
    });
    $("#ip7mem").change(function(){
        var temp = $("#ip7mem option:selected").index();
        $("#ip7price").html("ราคา <span id='ip7pr'>" + ip7pric[temp] + "</span> บาท");
    });
    $("#ip6mem").change(function(){
        var temp = $("#ip6mem option:selected").index();
        $("#ip6price").html("ราคา <span id='ip6pr'>" + ip6pric[temp] + "</span> บาท");
    });
    $("#ipsemem").change(function(){
        var temp = $("#ipsemem option:selected").index();
        $("#ipseprice").html("ราคา <span id='ipsepr'>" + ipsepric[temp] + "</span> บาท");
    });
    $("#hp9mem").change(function(){
        var temp = $("#hp9mem option:selected").index();
        $("#hp9price").html("ราคา <span id='hp9pr'>" + hp9pric[temp] + "</span> บาท");
    });
    $("#nl1520mem").change(function(){
        var temp = $("#nl1520mem option:selected").index();
        $("#nl1520price").html("ราคา <span id='nl1520pr'>" + nl1520pric[temp] + "</span> บาท");
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
    var image = xml.find("PIC:eq(" + i + ")").text();
    return image.split(",");
}
