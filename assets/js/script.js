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
var cart = [];

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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
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
                showIcon();
            }, 100);
        },700);
        e.stopPropagation();
    });
    $('.bcart').click(function (e) {
        $('tbody').html(writeCart());
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
                showIcon();
            }, 100);
        },700);
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

    // add cart button
    $('#ssgs8cart').click(function (e) {
        if ($("#ssgs8count").val() != 0) {
            var name = "Samsung Galaxy S8";
            var color = ssgs8color[$("#ssgs8color option:selected").index()];
            var mem = $("#ssgs8mem").val();
            var count = $("#ssgs8count").val();
            var price = parseInt(count)*parseInt(ssgs8pric[$("#ssgs8mem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
    $('#ip7cart').click(function (e) {
        if ($("#ip7count").val() != 0) {
            var name = "iPhone7";
            var color = ip7color[$("#ip7color option:selected").index()];
            var mem = $("#ip7mem").val();
            var count = $("#ip7count").val();
            var price = parseInt(count)*parseInt(ip7pric[$("#ip7mem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
    $('#ip6cart').click(function (e) {
        if ($("#ip6count").val() != 0) {
            var name = "iPhone6";
            var color = ip6color[$("#ip6color option:selected").index()];
            var mem = $("#ip6mem").val();
            var count = $("#ip6count").val();
            var price = parseInt(count)*parseInt(ip6pric[$("#ip6mem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
    $('#ipsecart').click(function (e) {
        if ($("#ipsecount").val() != 0) {
            var name = "iPhoneSE";
            var color = ipsecolor[$("#ipsecolor option:selected").index()];
            var mem = $("#ipsemem").val();
            var count = $("#ipsecount").val();
            var price = parseInt(count)*parseInt(ipsepric[$("#ipsemem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
    $('#hp9cart').click(function (e) {
        if ($("#hp9count").val() != 0) {
            var name = "Huawei P9";
            var color = hp9color[$("#hp9color option:selected").index()];
            var mem = $("#hp9mem").val();
            var count = $("#hp9count").val();
            var price = parseInt(count)*parseInt(hp9pric[$("#hp9mem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
    $('#nl1520cart').click(function (e) {
        if ($("#nl1520count").val() != 0) {
            var name = "Nokia Lumia 1520";
            var color = nl1520color[$("#nl1520color option:selected").index()];
            var mem = $("#nl1520mem").val();
            var count = $("#nl1520count").val();
            var price = parseInt(count)*parseInt(nl1520pric[$("#nl1520mem option:selected").index()]);
            var mobile = {
                name: name,
                color: color,
                mem: mem,
                count: count,
                price: price 
            };
            arraySame = indexOfObjInArray(cart, {name: name, color: color, mem: mem});
            if (arraySame != -1) {
                cart[arraySame].count = parseInt(cart[arraySame].count) + parseInt(count);
                cart[arraySame].price = parseInt(cart[arraySame].price) + price; 
            }
            else {
                cart.push(mobile);
            }
        }
        e.stopPropagation();
    });
});

function indexOfObjInArray(myArray, object, isStartFromLast, startFrom) {
    console.log(!startFrom);
    console.log(!isStartFromLast);
    startFrom = (!startFrom ? 0 : startFrom);

    if (startFrom < myArray.length) {
        for (var i = startFrom; (isStartFromLast ? i > -1 : i < myArray.length); (isStartFromLast ? i-- : i++)) {
            var isSame = (object.name == myArray[i].name)
                && (object.color == myArray[i].color)
                && (object.mem == myArray[i].mem);
            if (isSame) {
                return i;
            }
        }
    }
    return -1;
}

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

// cart
function writeCart(){
    var write = "";
    for(var i = 0; i < cart.length; i++){
        write += "<tr>";
        write += "<td class='text-center'>" + (i+1) + "</td>";
        write += "<td>" + cart[i].name + "</td>";
        write += "<td class='text-center'>" + cart[i].color + "</td>";
        write += "<td class='text-center'>" + cart[i].mem + " GB</td>";
        write += "<td class='text-center'>" + cart[i].count + "</td>";
        write += "<td class='text-center'>" + cart[i].price + " บาท</td>";
        write += "<td class='text-center'><buton type='button' class='btn btn-danger' onclick=removeCart(" + i + ")>remove</td>";
        write += "</tr>";
    }
    write += "<tr>";
    write += "<td colspan='7' class='text-right'><h2>รวม " + totalCart() + " บาท</h2></td>";
    write += "</tr>";
    return write;
}
// total price
function totalCart(){
    var total = 0;
    for(var i = 0; i < cart.length; i++){
        total += parseInt(cart[i].price);
    }
    return total;
}
// remove from cart
function removeCart(i){
    cart.splice(i, 1);
    $('tbody').html(writeCart());
}

// icon
function showIcon(){
    if(position === "#home") {
        $("#h").addClass("yes");
        $("#o").addClass("no");
        $("#c").addClass("no");
        $("#h").removeClass("no");
        $("#o").removeClass("yes");
        $("#c").removeClass("yes");
    }
    else if(position === "#cart"){
        $("#c").addClass("yes");
        $("#h").addClass("no");
        $("#o").addClass("no");
        $("#c").removeClass("no");
        $("#h").removeClass("yes");
        $("#o").removeClass("yes");
    }
    else {
        $("#o").addClass("yes");
        $("#h").addClass("no");
        $("#c").addClass("no");
        $("#o").removeClass("no");
        $("#h").removeClass("yes");
        $("#c").removeClass("yes");
    }
}
