var PRODUCT_GAME_URL_PATH_PREFIX = "/web/rest/productGame/";
var PRODUCT_GAME_GET_BALANCE = "/balance";
var PRODUCT_GAME_TRANSFER = "/transfer";
var PRODUCT_GAME_WITHDRAWALL = "withdrawAll";
var PRODUCT_GAME_ALL_BALANCES = "allBalances";
var PRODUCT_GAME_LIST = "list";
var PRODUCT_GAME_URL = "/gameUrl";
$(function() {
    getJSONData(PRODUCT_GAME_URL_PATH_PREFIX + PRODUCT_GAME_LIST, null, productGameList)
});

function productGameLogin(b, a) {
    var d = $("#userType").val();
    var c = $("#userTesting").val();
    if (d == 0 || c == 1) {
        return
    } else {
        loadUserGameBalance(b, a)
    }
}

function openGame(a, b) {
    openWindowWithPost("/member/gamecard", {
        gameUrl: a,
        product: b
    })
}

function openWindowWithPost(a, b) {
    let form = document.createElement("form");
    form.target = "_blank";
    form.method = "POST";
    form.action = a;
    form.style.display = "none";
    for (let key in b) {
        let input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = b[key];
        form.appendChild(input)
    }
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form)
}

function productGameList(a) {
    maxTransferLimit = a.maxTransferLimit;
    productList.clear();
    a.productList.forEach(function(c, b) {
        productList.set(c.productChannel, c.productName)
    });
    if ($(".align-left").length > 0) {
        $(".align-left").text("单笔转账金额最低1元, 最高" + maxTransferLimit + "元")
    }
}

function loadUserGameBalance(c, b) {
    var a = PRODUCT_GAME_URL_PATH_PREFIX + c + PRODUCT_GAME_GET_BALANCE;
    getJSONData(a, c, getUserBalance, null, b)
}

function getUserBalance(a, e, b) {
    var d = a.balance;
    var c = 0;
    if (d) {
        c = parseInt(d)
    }
    showAccountMoneyTransfer(e, b, c)
}

function reloadUserGameBalance(b) {
    var a = PRODUCT_GAME_URL_PATH_PREFIX + b + PRODUCT_GAME_GET_BALANCE;
    getJSONData(a, b, getReloadUserBalance)
}

function getReloadUserBalance(a, d) {
    var c = a.balance;
    var b = 0;
    if (c) {
        b = parseInt(c)
    }
    $("#productBalance" + d).text(b);
    if ($("#productAmount")) {
        $("#productAmount").text(b)
    }
}

function getAllProductBalances() {
    var a = PRODUCT_GAME_URL_PATH_PREFIX + PRODUCT_GAME_ALL_BALANCES;
    getJSONData(a, null, populateBalances)
}

function populateBalances(b) {
    for (var a in b) {
        var c = b[a];
        if ($("#productBalance" + c.product).length > 0) {
            $("#productBalance" + c.product).text(parseInt(c.balance))
        }
    }
}

function showAccountMoneyTransfer(e, c, d) {
    getJSONData(PRODUCT_GAME_URL_PATH_PREFIX + PRODUCT_GAME_LIST, null, productGameList);
    var b = $("#accountBox");
    if (b.length == 0) {
        b = $('<div id="accountBox">').appendTo("body").dialog({
            autoOpen: false,
            resizable: false,
            modal: true,
            icon: true,
            minHeight: 0,
            width: 660,
            title: "额度转换"
        }).on("dialogclose", function(g) {
            var f = $(this).data("cb");
            if ($.isFunction(f)) {
                f($(this).data("ok"))
            }
        })
    }
    var a = getAccountMoneyTransferBody(e, c, d);
    b.html(a).dialog("open").data({
        ok: false
    });
    b.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").show();
    $("#transferAmount").on("keypress", function(g) {
        var f = g.charCode ? g.charCode : g.keyCode;
        if (f != 8) {
            if (f < 48 || f > 57) {
                return false
            }
        }
    })
}
var isCredit = true;
var isGameTransfer = false;
var clickedProduct = "";
var clickedModule = "";

function getAccountMoneyTransferBody(l, c, e) {
    isCredit = true;
    clickedProduct = l;
    clickedModule = c;
    var m = parseInt($("#infoMainBalance").text());
    var a = $("<div>").addClass("credit-exchange");
    $("<h3>").addClass("credit-details-title").text("余额查询").appendTo(a);
    var j = $("<div>").addClass("credit-details").appendTo(a);
    var i = $("<div>").addClass("credit-item").appendTo(j);
    $("<label>").addClass("credit-details-label").text("第三方额度").appendTo(i);
    var d = $("<div>").addClass("credit-details-amount").appendTo(i);
    $("<span>").addClass("credit-details-icon yen").appendTo(d);
    $('<span id="mainBalance">').text(m).appendTo(d);
    $('<button onClick="loadMainBalance()">').addClass("refresh").appendTo(d);
    var k = $("<div>").addClass("button-group").appendTo(i);
    if (!c) {
        var g = $('<button onClick="transferAllToMainAccount()">').addClass("btn").appendTo(k);
        $("<span>").text("一键收回").appendTo(g);
        $("<span>").addClass("btn-icon").text("i").appendTo(g);
        $("<div>").addClass("btn-tips").text("一键收回所有其余账户余额转入第三方额度").appendTo(g)
    }
    if (c) {
        isGameTransfer = true;
        var h = $("<div>").addClass("credit-item").appendTo(j);
        $("<label>").addClass("credit-details-label").text(productList.get(l)).appendTo(h);
        var b = $("<div>").addClass("credit-details-amount").appendTo(h);
        $("<span>").addClass("credit-details-icon gold").appendTo(b);
        var f = "productBalance" + l;
        $("<span id='" + f + "'>").addClass("product-balance").text(parseInt(e)).appendTo(b);
        $("<button onClick=\"reloadUserGameBalance('" + l + "')\">").addClass("refresh").appendTo(b);
        if ($("#needSetProductTransferPassword").val() == "false" && $("#setProductTransferPassword").length) {
            $.ajax({
                url: "/web/rest/member/checkProductTransferPassword",
                dataType: "json",
                async: false,
                success: function(n) {
                    if (n.message === "false") {
                        $("#needSetProductTransferPassword").val("true")
                    }
                }
            })
        }
        if ($("#needSetProductTransferPassword").val() == "true") {
            getTransferPasswordBody(j)
        } else {
            getGameTransferBody(j)
        }
    } else {
        isGameTransfer = false;
        var h = $("<div>").addClass("credit-item-wrapper").appendTo(j);
        productList.forEach(function(s, o) {
            var r = $("<div>").addClass("credit-item small").appendTo(h);
            $("<label>").addClass("credit-details-label").text(s).appendTo(r);
            var p = $("<div>").addClass("credit-details-amount").appendTo(r);
            $("<span>").addClass("credit-details-icon gold").appendTo(p);
            var q = "productBalance" + o;
            $("<span id='" + q + "'>").addClass("product-balance").text(0).appendTo(p);
            $("<button onClick=\"reloadUserGameBalance('" + o + "')\">").addClass("refresh").appendTo(p)
        });
        if ($("#needSetProductTransferPassword").val() == "false" && $("#setProductTransferPassword").length) {
            $.ajax({
                url: "/web/rest/member/checkProductTransferPassword",
                dataType: "json",
                async: false,
                success: function(n) {
                    if (n.message === "false") {
                        $("#needSetProductTransferPassword").val("true")
                    }
                }
            })
        }
        if ($("#needSetProductTransferPassword").val() == "true") {
            getTransferPasswordBody(j)
        } else {
            getAccountTransferBody(j)
        }
        getAllProductBalances()
    }
    return a
}

function getGameTransferBody(n) {
    var o = parseInt($("#infoMainBalance").text());
    var c = n.find(".product-balance").text();
    var l = clickedProduct;
    var a = clickedModule;
    $("<h3>").addClass("credit-transfer-title").text("额度转换").appendTo(n);
    var d = $("<div>").addClass("credit-transfer card-game").appendTo(n);
    var e = $("<div>").addClass("credit-transfer-content").appendTo(d);
    var b = $("<div>").addClass("input-group-wrapper").appendTo(e);
    var k = $("<div>").addClass("input-group balance left").appendTo(b);
    $("<label>").text("第三方额度").appendTo(k);
    $('<span id="mainAmount">').addClass("balance-amount").text(o).appendTo(k);
    var p = $("<div>").addClass("icon-with-dots").appendTo(b);
    var i = $("<div>").addClass("dots").appendTo(p);
    $("<div>").addClass("dot").appendTo(i);
    $("<div>").addClass("dot").appendTo(i);
    $("<div>").addClass("dot").appendTo(i);
    $("<div>").addClass("dot").appendTo(i);
    $('<img src="/default/images/cardGame/convert-icon2.png">').appendTo(p);
    var h = $("<div>").addClass("dots").appendTo(p);
    $("<div>").addClass("dot").appendTo(h);
    $("<div>").addClass("dot").appendTo(h);
    $("<div>").addClass("dot").appendTo(h);
    $("<div>").addClass("dot").appendTo(h);
    var m = $("<div>").addClass("input-group balance right").appendTo(b);
    $("<label>").text(productList.get(l)).appendTo(m);
    $('<span id="productAmount">').addClass("balance-amount").text(c).appendTo(m);
    var j = $("<div>").addClass("credit-transfer-footer").appendTo(d);
    var g = $("<div>").addClass("field-amount").appendTo(j);
    $('<input id="transferAmount" type="number" class="btn" placeholder="输入转账金额" />').appendTo(g);
    $("<button onClick=\"checkTransferPasswordAndRedirect('" + l + "', '" + a + "')\">").addClass("btn btn-green").text("转入并进入游戏").appendTo(g);
    var f = $("<div>").addClass("field-amount").appendTo(j);
    $("<button onClick=\"gotoGamePage('" + l + "', '" + a + "')\">").addClass("btn btn-outline").text("直接进入游戏").appendTo(f);
    $('<button onClick="allAmountInput()">').addClass("btn btn-blue").text("全部转入").appendTo(f);
    $("<span>").addClass("align-left").text("单笔转账金额最低1元, 最高" + maxTransferLimit + "元").appendTo(f)
}

function getAccountTransferBody(h) {
    $("<h3>").addClass("credit-transfer-title").text("额度转换").appendTo(h);
    var c = $("<div>").addClass("credit-transfer").appendTo(h);
    var d = $("<div>").addClass("credit-transfer-content").appendTo(c);
    var b = $("<div>").addClass("input-group-wrapper").appendTo(d);
    var a = $("#userStatus").val();
    var e = $("<div>").addClass("input-group balance left").appendTo(b);
    $("<label>").text("转出账户").appendTo(e);
    var k = $('<div id="mainAccount">').addClass("field-input").text("第三方额度");
    var l = $('<div id="exgAccount">').addClass("icon icon-button").appendTo(b);
    if (a === "1") {
        $('<img src="/default/images/cardGame/convert-icon3.png">').appendTo(l)
    } else {
        $('<img onClick="changeTransferAccount()" src="/default/images/cardGame/convert-icon3.png">').appendTo(l)
    }
    var g = $("<div>").addClass("input-group balance right").appendTo(b);
    $("<label>").text("转入账户").appendTo(g);
    var f = $('<div class="field-input has-select">');
    var j = $('<select id="productSelection" name dir="rtl">').appendTo(f);
    productList.forEach(function(o, m) {
        $("<option>").text(o).attr("value", m).appendTo(j)
    });
    k.appendTo(a === "1" ? g : e);
    f.appendTo(a === "1" ? e : g);
    var i = $("<div>").addClass("field-amount").appendTo(d);
    $('<input id="transferAmount" type="number" min="1" class="btn" placeholder="输入转账金额" />').appendTo(i);
    $("<button onClick=allAmountInput()>").addClass("btn btn-blue").text("全部转入").appendTo(i);
    $("<button onClick=checkTransferPassword()>").addClass("btn btn-green").text("确认转换").appendTo(i);
    $("<p>").addClass("align-left").text("单笔转账金额最低1元, 最高" + maxTransferLimit + "元").appendTo(i)
}

function transferAndGotoGamePage(g, f, c) {
    if (c != "") {
        $("div.sweet-alert.show-input.showSweetAlert fieldset").find(".invalid-feedback").hide()
    }
    if ($("#transferAmount").val() == "") {
        hideHints();
        swal("请输入转账金额");
        return
    }
    var e = parseInt($("#transferAmount").val());
    var a = parseInt($("#mainBalance").text());
    var h = parseInt($("#transferAmountMax").val());
    if (e < 1) {
        hideHints();
        swal("单笔转账金额最低1元");
        return
    } else {
        if (e > h) {
            hideHints();
            swal("单笔转账金额最高" + h + "元");
            return
        } else {
            if (e > a) {
                hideHints();
                swal("余额不足");
                return
            }
        }
    }
    if (c != "") {
        swal.close()
    }
    var d = {};
    d.amount = e;
    d.credit = 1;
    d.password = c;
    var b = PRODUCT_GAME_URL_PATH_PREFIX + g + PRODUCT_GAME_TRANSFER;
    setTimeout(function() {
        postJSON(b, g, transferAndGoToGamePageCallBack, JSON.stringify(d), f)
    }, 400)
}

function transferAndGoToGamePageCallBack(a, c, b) {
    gotoGamePage(c, b)
}

function gotoGamePage(c, b) {
    const a = PRODUCT_GAME_URL_PATH_PREFIX + c + PRODUCT_GAME_URL;
    let param;
    if (b !== undefined) {
        param = "moduleId=" + b
    }
    getJSONData(a, c, gotoGamePageResponse, param)
}

function gotoGamePageResponse(a, b) {
    if (a.gameUrl) {
        openGame(a.gameUrl, b)
    }
    $(".ui-dialog-content").dialog("close")
}

function allAmountInput() {
    var a;
    if (isCredit) {
        a = $("#mainBalance").text();
        a = Math.min(parseInt(a), maxTransferLimit).toString()
    } else {
        var b = $("#productSelection").val();
        a = $("#productBalance" + b).text()
    }
    $("#transferAmount").val(a)
}

function transferAmount(c) {
    if ($("#transferAmount").val() == "") {
        hideHints();
        swal("请输入转账金额");
        return
    }
    var f = $("#productSelection").val();
    var e = parseInt($("#transferAmount").val());
    var a = parseInt(isCredit ? $("#mainBalance").text() : $("#productBalance" + f).text());
    var g = parseInt($("#transferAmountMax").val());
    if (e < 1) {
        hideHints();
        swal("单笔转账金额最低1元");
        return
    } else {
        if (e > a) {
            hideHints();
            swal("余额不足");
            return
        } else {
            if (isCredit && e > g) {
                hideHints();
                swal("单笔转账金额最高" + g + "元");
                return
            }
        }
    }
    var d = {};
    d.amount = e;
    d.credit = $("#userStatus").val() === "1" ? 0 : isCredit;
    d.password = c;
    var b = PRODUCT_GAME_URL_PATH_PREFIX + f + PRODUCT_GAME_TRANSFER;
    setTimeout(function() {
        postJSON(b, f, amountTransfer, JSON.stringify(d))
    }, 400)
}

function amountTransfer(b, c) {
    var a = b.mainBalance;
    var d = b.productBalance;
    a = parseInt(a);
    $("#mainBalance").text(a);
    $("#infoMainBalance").text(a);
    d = parseInt(d);
    $("#productBalance" + c).text(d);
    $("#infoBalance" + c).text(d);
    hideHints();
    swal("转帐成功!")
}

function changeTransferAccount() {
    var e;
    if (isCredit === true) {
        var d = $("#productSelection").val();
        e = $("#productBalance" + d).text()
    } else {
        e = $("#mainBalance").text()
    }
    if (e < 1) {
        hideHints();
        swal("余额不足，不能转换");
        return
    }
    var g = $("#exgAccount").parents(".input-group-wrapper");
    var f = g.find(".left .field-input");
    var c = g.find(".right .field-input");
    var b = f.html().toString();
    var a = c.html().toString();
    g.removeClass("flip-animate");
    setTimeout(function() {
        g.addClass("flip-animate");
        f.html(a).toggleClass("has-select");
        c.html(b).toggleClass("has-select")
    }, 10);
    isCredit = !isCredit
}

function transferAllToMainAccount() {
    let product = $("#productSelection").val();
    let amount = $("#productBalance" + product).text();
    if (amount == 0) {
        swal("无可收回余额", "", "error");
        return
    }
    postJSON(PRODUCT_GAME_URL_PATH_PREFIX + PRODUCT_GAME_WITHDRAWALL, null, amountTransferAllToMain)
}

function amountTransferAllToMain(b) {
    var a = parseInt(b.mainBalance);
    $("#mainBalance").text(a);
    $("#infoMainBalance").text(a);
    if ($("#mainAmount").length > 0) {
        $("#mainAmount").text(a)
    }
    b.productList.forEach(function(f, c) {
        var d = f.product;
        var e = parseInt(f.balance);
        $("#productBalance" + d).text(e)
    });
    swal("余额已全部收回", "", "success")
}

function loadMainBalance() {
    getJSONData("/web/rest/member/accountbalance", null, accountBalance)
}

function accountBalance(b) {
    var a = parseInt(b.balance);
    $("#mainBalance").text(a);
    $("#infoMainBalance").text(a);
    if ($("#mainAmount")) {
        $("#mainAmount").text(a)
    }
}

function displayProductBalance(b) {
    var a = PRODUCT_GAME_URL_PATH_PREFIX + b + PRODUCT_GAME_GET_BALANCE;
    $("#infoButton" + b).hide();
    $("#infoBalance" + b).show();
    getJSONData(a, b, getUserBalanceHome)
}

function getUserBalanceHome(a, d) {
    var c = a.balance;
    var b = 0;
    if (c) {
        b = parseInt(c)
    }
    $("#infoBalance" + d).text(b)
}

function postJSON(c, d, e, a, b) {
    loadingStart();
    $.ajax({
        url: c,
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        dataType: "json",
        data: a,
        loading: true
    }).done(function(f) {
        if (f.status == "success") {
            if (e) {
                e(f.result, d, b)
            }
        } else {
            hideHints();
            swal(f.message, "", "error")
        }
    }).fail(function(g, h, f) {
        if (g.responseJSON !== undefined && g.responseJSON.message !== undefined) {
            hideHints();
            swal(g.responseJSON.message, "", "error")
        } else {
            hideHints();
            if (f == "Forbidden") {
                swal("游戏已关闭", "", "error")
            } else {
                swal("游戏维护中", "", "error")
            }
        }
    }).always(function() {
        loadingEnd()
    })
}

function getJSONData(b, c, e, d, a) {
    loadingStart();
    if (d) {
        b += "?" + d
    }
    $.getJSON("https://3752906148-ls.k2kqv858qm.com/"+b).done(function(f) {
        if (f.status == "success") {
            if (e) {
                e(f.result, c, a)
            }
        } else {
            hideHints();
            swal(f.message, "", "error")
        }
    }).fail(function(g, h, f) {
        if (g.responseJSON !== undefined && g.responseJSON.message !== undefined) {
            hideHints();
            swal(g.responseJSON.message, "", "error")
        } else {
            hideHints();
            if (f == "Forbidden") {
                swal("游戏已关闭", "", "error")
            } else {
                swal("游戏维护中", "", "error")
            }
        }
    }).always(function() {
        loadingEnd()
    })
}

function loadingStart() {
    var c = $(".loading-wrapper");
    c.html("");
    var b = $('<div class="loading"><div>');
    for (var a = 0; a < 12; a++) {
        b.append('<div class="bar"><div class="dot"></div></div>')
    }
    c.append(b);
    c.addClass("active")
}

function loadingEnd() {
    var a = $(".loading-wrapper");
    a.removeClass("active");
    a.html("")
}

function getTransferPasswordBody(b) {
    $("<h3>").addClass("credit-transfer-title").text("设置转入密码").appendTo(b);
    $("#enterGame").remove();
    if (isGameTransfer) {
        $('<button id="enterGame" onClick="gotoGamePage(\'' + clickedProduct + "', '" + clickedModule + "')\">").addClass("btn btn-outline").text("直接进入游戏").appendTo($("#btnTransferPassword"))
    }
    $(".credit-transfer").show();
    $(".credit-transfer-title").show();
    var a = $("#setProductTransferPassword").html();
    $(a).appendTo(b)
}

function setProductTransferPassword() {
    var c = $("#accountBox #transferPassword").val();
    var a = $("#accountBox #transferPassword2").val();
    if (c == "") {
        hideHints();
        swal("转入密码不能为空");
        return
    }
    if (a == "") {
        hideHints();
        swal("重复密码不能为空");
        return
    }
    if (c != a) {
        hideHints();
        swal("转入密码不一致");
        return
    }
    var b = "password=" + c;
    getJSONData("/web/rest/member/updateProductTransferPassword", null, afterProductTransferPassword, b)
}

function afterProductTransferPassword(a) {
    var b = $(".credit-details");
    if (a == "success") {
        $("#needSetProductTransferPassword").val("false");
        $(".credit-transfer").hide();
        $(".credit-transfer-title").hide();
        if (isGameTransfer) {
            getGameTransferBody(b)
        } else {
            getAccountTransferBody(b)
        }
    }
}

function checkTransferPassword() {
    var a = "";
    if (($("#userStatus").val() !== "1" && isCredit) && $("#setProductTransferPassword").length > 0) {
        $("#accountBox").dialog("close");
        $("#accountBox").dialog("option", "modal", false);
        $("#accountBox").dialog("open");
        hideHints();
        swal({
            title: "提交转入密码",
            text: "请输入转入密码:",
            type: "input",
            inputType: "password",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }, function(b) {
            if (b === false) {
                return
            }
            if (b === "") {
                $("#passwordWrongHint1").remove();
                $('div.sweet-alert.show-input.showSweetAlert.visible fieldset input[type="password"]').after('<div class="invalid-feedback" id="passwordWrongHint1">转入密码有误</div>');
                $('div.sweet-alert.show-input.showSweetAlert.visible fieldset input[type="password"]').attr("display", "block");
                return
            }
            a = b;
            $("#accountBox").dialog("close");
            $("#accountBox").dialog("option", "modal", true);
            $("#accountBox").dialog("open");
            transferAmount(a)
        })
    } else {
        transferAmount()
    }
}

function checkTransferPasswordAndRedirect(c, b) {
    var a = "";
    if (isCredit && $("#setProductTransferPassword").length > 0) {
        $("#accountBox").dialog("close");
        $("#accountBox").dialog("option", "modal", false);
        $("#accountBox").dialog("open");
        hideHints();
        swal({
            title: "提交转入密码",
            text: "请输入转入密码:",
            type: "input",
            inputType: "password",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }, function(d) {
            if (d === false) {
                return
            }
            if (d === "") {
                $("#passwordWrongHint2").remove();
                $('div.sweet-alert.show-input.showSweetAlert.visible fieldset input[type="password"]').after('<div class="invalid-feedback" id="passwordWrongHint2">转入密码有误</div>');
                $('div.sweet-alert.show-input.showSweetAlert.visible fieldset input[type="password"]').attr("display", "block");
                return
            }
            a = d;
            $("#accountBox").dialog("close");
            $("#accountBox").dialog("option", "modal", true);
            $("#accountBox").dialog("open");
            transferAndGotoGamePage(c, b, a)
        })
    } else {
        transferAndGotoGamePage(c, b, "")
    }
}

function hideHints() {
    $("#passwordWrongHint1").hide();
    $("#passwordWrongHint2").hide()
};