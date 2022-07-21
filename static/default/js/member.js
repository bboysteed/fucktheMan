var MAX_DIVIDEND;
var SOUND_URL;
var _LS;
var _LIC = 8;
var _lastResult;
var sideUserTitle;
var resetTimer;
var currentLottery;
var accountTimer;
var userparams;
var betting = false;
var _lastBetsTimer;
var _resultTimer;
var currentResult;
var mpFirst = [];
$.ajaxSetup({
    cache: false
});
$(function() {
    if ($(".with-new-card-game").length > 0) {
        _LIC = 7
    }
    if (/MSIE (6|7)/.test(navigator.userAgent)) {
        var a = function() {
            var e = $("#footer").position().top - $("#main").position().top;
            $("#main").height(e);
            $("#frame").height($("#main").height());
            $("#main .frame").width($("#main").width() - 232)
        };
        a();
        $(window).resize(a)
    }
    $("#header .menu2 a").click(function() {
        $("#header .menu2 a.selected,#header .sub a.selected").removeClass("selected");
        $(this).addClass("selected");
        var e = $(this).attr("href");
        if (e != null && e.indexOf("{lottery}") != -1) {
            e = e.replace("{lottery}", currentLottery.id);
            $("#" + $(this).attr("target")).attr("src", e);
            return false
        }
    });
    var b = $("#lotterys a").click(function() {
        changePage($(this))
    }).eq(0);
    var d = LIBS.cookie("defaultLT");
    if (d) {
        var c = $("#l_" + d);
        if (c.length > 0) {
            b = c
        }
    }
    initMenu();
    $(".header .sub a").click(function() {
        var f = $(this);
        $("#header .menu2 a.selected,#header .sub a.selected").removeClass("selected");
        var e = f.attr("href");
        $("#frame").attr("src", e).data("a", f);
        return false
    });
    $("#frame").on("load", function() {});
    sideUserTitle = $("#side .user_info .title");
    sideUserTitle.data("text", sideUserTitle.text());
    LIBS.get("params", function(f) {
        if (!f) {
            return
        }
        var h = {};
        for (var e = 0; e < f.length; e++) {
            var g = f[e];
            h[g.l + "-" + g.g] = g
        }
        userparams = h
    });
    $("#betAmount").keypress(function(f) {
        if (f.keyCode == 13) {
            $("#btnBet").click()
        }
    });
    b.click()
});

function initMenu() {
    var a = $(".header .lotterys .show");
    var c = $("<div>").addClass("popPanel").appendTo("body");
    var f = $(".header .lotterys .more_game");
    var e = [];
    var b = $("#lotterys");
    b.find("a").each(function() {
        var g = $(this);
        var h = {
            id: g.attr("id").substr(2),
            info: g.attr("lang").split("_", 2),
            name: g.text()
        };
        g.data("info", h);
        e.push(h)
    }).click(function() {
        c.hide()
    });
    $(".popPanel,.lotterys .more_game").hover(function() {
        clearTimeout(c.show().data("timer"))
    }, function() {
        c.data("timer", setTimeout(function() {
            c.hide()
        }, 150))
    });
    $(".lotterys .new-card-games, .new-card-games-container").hover(function() {
        clearTimeout($(".new-card-games-container").show().data("timer"));
        $(".new-card-games-container").show().data("timer");
        $(".lotterys .new-card-games").addClass("selected")
    }, function() {
        $(".new-card-games-container").hide().data("timer");
        $(".lotterys .new-card-games").removeClass("selected")
    });

    function d(m) {
        var o = [];
        a.children().appendTo(b);
        c.children().appendTo(b);
        if (m) {
            m = m.split(",");
            for (var n = 0; n < m.length; n++) {
                for (var k = 0; k < e.length; k++) {
                    if (e[k].id == m[n]) {
                        o.push(e[k]);
                        break
                    }
                }
            }
        } else {
            for (var n = 0; n < e.length; n++) {
                o.push(e[n])
            }
        }
        var g = Math.min(_LIC, o.length);
        for (var n = 0; n < g; n++) {
            $("#l_" + o[n].id).appendTo(a)
        }
        f.hide();
        if (o.length == _LIC + 1) {
            $("#l_" + o[o.length - 1].id).appendTo(a)
        } else {
            if (g < o.length) {
                for (var n = g; n < o.length; n++) {
                    var h = o[n];
                    if (currentLottery && h.id == currentLottery.id) {
                        f.addClass("selected").find("span").text(h.name)
                    }
                    $("#l_" + h.id).appendTo(c)
                }
                f.show()
            }
        }
    }
    _LS = LIBS.cookie("_LS");
    d(_LS);
    $(".lotterys .setting").click(function() {
        chooseLotterys(e, _LS, function(g) {
            _LS = g;
            LIBS.cookie("_LS", _LS, {
                expires: 365
            });
            d(_LS)
        })
    })
}

function chooseLotterys(g, c, k) {
    var a = $("#lotteryChoose");
    if (a.length == 0) {
        a = $('<div id="lotteryChoose"></div>').appendTo("body");
        a.append("<ul>").append("<p>注：可拖动彩种位置来改变彩种排序。</p>");
        a.dialog({
            modal: true,
            title: "选择显示彩种",
            autoOpen: false,
            buttons: {
                "确定": function() {
                    var l = $(this);
                    var j = [];
                    l.find("ul input:checked").each(function() {
                        j.push($(this).val())
                    });
                    l.dialog("close");
                    var i = l.data("callback");
                    if ($.isFunction(i)) {
                        i(j.join(","))
                    }
                },
                "取消": function() {
                    $(this).dialog("close")
                }
            }
        })
    }
    a.data("callback", k);
    var h = a.find("ul").empty();
    var f = [];
    if (c) {
        g = g.slice(0);
        c = c.split(",");
        for (var e = 0; e < c.length; e++) {
            for (var d = 0; d < g.length; d++) {
                var b = g[d];
                if (b != null && b.id == c[e]) {
                    f.push(b);
                    g[d] = null;
                    break
                }
            }
        }
    } else {
        for (var e = 0; e < g.length; e++) {
            f.push(g[e])
        }
        g = []
    }
    for (var e = 0; e < f.length; e++) {
        var b = f[e];
        $('<li><input type="checkbox" checked="checked" value="' + b.id + '">' + b.name + "</li>").appendTo(h)
    }
    for (var e = 0; e < g.length; e++) {
        var b = g[e];
        if (b != null) {
            $('<li><input type="checkbox" value="' + b.id + '">' + b.name + "</li>").appendTo(h)
        }
    }
    h.sortable().disableSelection();
    a.dialog("open")
}

function changePage(d, c) {
    if (d.attr("target")) {
        return
    }
    var f = d.data("info");
    LIBS.cookie("defaultLT", f.id);
    if (!currentLottery || f.id != currentLottery.id) {
        currentLottery = f;
        $(".user_info .accounts:visible").hide();
        $("#account" + f.info[1]).show();
        refreshBets()
    }
    $(".header .lotterys a.selected").removeClass("selected");
    if (d.parent().hasClass("show")) {
        $(".more_game span").text("更多游戏  ▼");
        d.addClass("selected")
    } else {
        $(".more_game span").text(d.text());
        $(".more_game").addClass("selected")
    }
    var e = $("#sub_" + f.id);
    $(".header .sub div:visible").hide();
    e.show();
    var b;
    if (c !== undefined) {
        b = e.find("a:eq(" + c + ")")
    } else {
        b = e.find("a.default");
        if (b.length == 0) {
            b = e.find("a:eq(0)")
        }
    }
    b.click()
}

function refreshBets() {
    clearTimeout(_lastBetsTimer);
    if (!currentLottery) {
        return
    }
    LIBS.get("lasts?lottery=" + currentLottery.id, function(f) {
        if (f) {
            var e = $("#lastBets ul").empty();
            for (var d = 0; d < f.length; d++) {
                var c = f[d];
                var a = $("<li>").appendTo(e);
                a.append($("<p>").html('注单号：<span class="bid">' + c.id + "#</span>"));
                a.append($("<p>").addClass("contents").html('<span class="text">' + c.t + '</span>@<span class="odds">' + c.o + "</span>"));
                a.append($("<p>").text("下注额：￥" + c.a))
            }
        }
    });
    _lastBetsTimer = setTimeout(refreshBets, 60000)
}

function playSound() {
    if (!SOUND_URL) {
        return
    }
    var a = $("#SOUND");
    if (a.length == 0) {
        a = $('<audio id="SOUND"><source src="' + SOUND_URL + '" type="audio/mpeg"/></audio>').appendTo($("body"))[0];
        if (a.load) {
            a.load()
        }
    } else {
        a = a[0]
    }
    if (a.play) {
        a.play()
    }
}

function bet(b, d, a, c) {
    postBet({
        lottery: b,
        drawNumber: d,
        bets: a
    }, c)
}

function postBet(a, b) {
    a.bets.toJSON = function() {
        var c = [];
        for (var d = 0; d < this.length; d++) {
            c[d] = LIBS.clone({}, this[d], ["game", "contents", "amount", "odds", "multiple", "mcount", "state", "title"])
        }
        return c
    };
    return $.ajax({
        url: "bet",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(a),
        success: function(c) {
            try {
                if ($.isFunction(b)) {
                    if (b(c) === false) {
                        return
                    }
                }
            } catch (d) {}
            showBetResult(a, c)
        },
        error: function(c) {
            alert("投注失败：" + c.code + ",请检查下注状况後重试。")
        },
        complate: function() {
            toggleBetButton(true)
        }
    })
}

function showAccount(a) {
    clearTimeout(accountTimer);
    accountTimer = setTimeout(function() {
        LIBS.get("accounts", function(e) {
            if ($.isArray(e) && e.length > 0) {
                var d = $("#frame")[0].contentWindow.PeriodPanel;
                if (d) {
                    d.showAccount(e)
                } else {
                    showAccount(e)
                }
            }
        })
    }, 45000);
    if (!currentLottery || !a) {
        return
    }

    function b(e) {
        var d = $("#account" + e.type);
        $(".balance", d).text(LIBS.round(e.balance, 1));
        $(".betting", d).text(e.betting || 0);
        if (e.type === 3 && $("#mainBalance").length > 0) {
            $("#mainBalance").text(LIBS.round(e.balance, 1))
        }
    }
    if ($.isArray(a)) {
        for (var c = 0; c < a.length; c++) {
            b(a[c])
        }
    } else {
        b(a)
    }
}

function showResult(a) {
    var g = currentLottery;
    var t = g.info[0];
    clearTimeout(_resultTimer);
    _resultTimer = setTimeout(function() {
        LIBS.get("lastResult?lottery=" + g.id, showResult)
    }, 30000);
    if (!a || a.lottery != g.id) {
        return
    }
    if (_lastResult && _lastResult.lottery == a.lottery && (_lastResult.result != a.result || _lastResult.drawNumber != a.drawNumber)) {
        playSound()
    }
    _lastResult = a;
    var q = _DRAW_URLS[g.id];
    if (window.IS_MOBILE !== undefined) {
        $("#result_balls").attr("href", q);
        $("#result_info").html(("<strong>" + a.drawNumber + "</strong>期"))
    } else {
        $("#result_balls").attr("href", q);
        $("#result_info").html(("<div>" + g.name + "</div><div>" + a.drawNumber + "期开奖</div>"))
    }
    if (!q) {
        $("#result_balls").removeAttr("href")
    }
    var b = $("#result_balls").attr("class", "T_" + t + " L_" + g.id);
    b.empty();
    var h = a.result.split(",");
    if (t == "FT") {
        h = (a.rsource + "," + a.result).split(",")
    }
    var f;
    if (t == "HK6") {
        f = function(i) {
            return get_animal_by_ball_time(i, new Date(_lastResult.drawTime))
        }
    } else {
        if (t == "3D") {
            f = function(p, r) {
                return ["佰", "拾", "个"][r]
            }
        } else {
            if (t == "PCEGG") {}
        }
    }
    for (var j = 0; j < h.length; j++) {
        var e = h[j];
        var m = a.detail;
        var c = $("<span>").appendTo(b);
        c.append($("<b>").addClass("b" + e).text(e));
        if (f) {
            c.append($("<i>").text(f(e, j)))
        }
        if (t == "PCEGG") {
            if (j < h.length - 1) {
                c.append($('<i style="margin:-25px 0px 0px 40px">').text("+"))
            } else {
                c.append($('<i style="margin:-25px 0px 0px 40px">').text("="));
                var l = Number(h[0]) + Number(h[1]) + Number(h[2]);
                var u = $("<span>").appendTo(b);
                u.append($("<b>").addClass("bg b_" + l).text(l))
            }
        }
        if (t == "HK6") {
            if (j == 5) {
                $("<span>").addClass("plus").text("+").appendTo(b)
            }
        }
        if (t == "FT") {
            if (j == 7) {
                c.append($('<i style="margin:-25px 0px 0px 32px">').text("结果："))
            } else {
                if (j == 8 && m) {
                    var k = m.split(";");
                    var d = "";
                    for (var n = 0; n < k.length; n++) {
                        if (k[n].startsWith("DS")) {
                            var o = k[n].split(",");
                            if (o.length == 3) {
                                d = o[2]
                            }
                            break
                        }
                    }
                    if (d.length > 0) {
                        c.append($('<i style="margin:-25px 0px 0px 32px">').text(d))
                    }
                }
            }
        }
    }
    if (g.id == "PK10JSCNN") {
        generateNNResult(a)
    }
}

function generateNNResult(a) {
    var h = a.detail;
    var m = a.result;
    if (!h || h.length != 6) {
        return
    }
    var e = $("#frame").contents();
    var l = e.find("#gameName");
    if (l.length == 1) {
        var k = e.find(".poker-wrapper.show");
        if (m != currentResult || k.length == 0) {
            e.find(".poker").removeAttr("class");
            e.find(".game-info").removeAttr("class");
            e.find(".poker-wrapper").removeClass("win").removeClass("show");
            for (var g = 0; g < h.length; g++) {
                var c = h[g];
                var b = c.cards;
                for (var f = 0; f < b.length; f++) {
                    var d = b[f];
                    e.find("#card_" + g + "_" + (f + 1)).addClass("poker type-" + d.cardType + " card-" + d.cardNum)
                }
                e.find("#g_" + g).addClass("game-info niu-" + c.resultNum);
                if (c.betResult == "1") {
                    e.find("#p_" + g).addClass("win")
                }
            }
            if (k.length == 0) {
                e.find(".poker-wrapper").addClass("show")
            } else {
                setTimeout(function() {
                    e.find(".poker-wrapper").addClass("show")
                }, 700)
            }
            currentResult = m
        }
    }
}

function getUserParam(b, a) {
    if (!userparams) {
        return
    }
    return userparams[b + "-" + a]
}

function toggleBetButton(a) {
    if (a) {
        $(".control input").hide();
        $(".control span").show()
    } else {
        $(".control span").hide();
        $(".control input").show()
    }
}

function getBetTextHtml(b) {
    function c(h, g) {
        return '<span class="text">' + h + '</span>@<span class="odds">' + g + "</span>"
    }
    if (b.multiple) {
        return c(b.title, b.odds)
    }
    var f = b.text;
    var a = f.split("@");
    if (b.title) {
        f = b.title + " " + a[0]
    }
    var e = c(f, b.odds);
    if (a.length > 1) {
        for (var d = 1; d < a.length; d++) {
            e += "<br />" + c(a[d], b.oddsDetail[d - 1])
        }
    }
    return e
}

function showBetResult(c, p) {
    if (p.status == 3) {
        alert(p.message);
        return
    }
    showAccount(p.account);
    $("#betResultDrawNumber").text(c.drawNumber + "期");
    var n = $("#betReulstList");
    n.empty();
    var l = c.bets;
    var x = 0;
    var e = 0;
    var d = p.message;
    if (p.status == 1) {
        showBets(c, p.odds);
        return
    } else {
        if (p.status == 2) {
            d = "后台未开盘，请等待开盘再试。"
        }
    }
    if (d) {
        showMsg(d);
        return
    }
    for (var t = 0; t < l.length; t++) {
        var b = l[t];
        var h = p.odds[t].split(",");
        var q = h.shift();
        b.odds = q;
        b.oddsDetail = h;
        var m = $("<li>").appendTo(n);
        if (p.status == 0) {
            m.append($("<p>").html('注单号：<span class="bid">' + p.ids[t] + "</span>"))
        }
        m.append($("<p>").addClass("contents").html(getBetTextHtml(b)));
        var f = b.text;
        if (f instanceof Array) {
            f = f.join("、")
        }
        if (b.multiple > 1) {
            e += b.multiple;
            x += b.amount * b.multiple;
            m.append($("<p>").addClass("contents").text("复式『 " + b.multiple + " 组 』"));
            m.append($("<p>").addClass("contents text").text(f));
            var w = b.amount;
            m.append($("<p>").text("分　组：" + w + " × " + b.multiple + "组"));
            m.append($("<p>").text("合计额：" + (b.amount * b.multiple)));
            m.append($("<p>").text("可赢额：" + LIBS.round(w * b.odds - w, 1)));
            var v = $("<table>").appendTo(m);
            var a = $("<tr>").addClass("head").appendTo(v);
            a.append($("<th>").text("ID").addClass("id"));
            a.append($("<th>").text("号码组合").addClass("nums"));
            a.append($("<th>").text("下注额"));
            var g = getMpSplit(b);
            var u = [];
            if (g.length == 2 && g[0] && g[1]) {
                u = LIBS.comboOfTwoGroups(g)
            } else {
                u = LIBS.comboArray(g, b.mcount, null, mpFirst)
            }
            for (var s = 0; s < u.length; s++) {
                $("<tr>").appendTo(v).append($("<td>").text(s + 1)).append($("<td>").text(u[s].join(","))).append($("<td>").text("￥ " + w).addClass("amount"))
            }
        } else {
            e += 1;
            x += b.amount;
            if (b.separate) {
                m.append($("<p>").addClass("contents text").text(f));
                m.append($("<p>").addClass("contents").text(b.contents))
            } else {
                if (b.multiple) {
                    m.append($("<p>").addClass("contents").text(f))
                }
            }
            m.append($("<p>").text("下注金额： " + b.amount));
            m.append($("<p>").text("可赢金额： " + LIBS.round(b.amount * b.odds - b.amount, 1, true)))
        }
        if (p.status > 1 || (p.status == 1 && q != b.odds)) {
            m.append($("<span>").addClass("errmsg").text(d))
        }
    }
    var k = $("#betResultPanel");
    if (p.status == 0) {
        $("#betResultCount").text(e + "笔");
        $("#betResultTotal").text(x);
        k.children(".s1").hide();
        k.children(".s0").show()
    } else {
        k.children(".s0").hide();
        k.children(".s1").show()
    }
    showPanel(k, "下注结果反馈")
}

function reBet(a) {
    var b = $(a).data("last");
    if (b == null) {
        return
    }
    b.ignore = true;
    postBet(b)
}

function showPanel(a, b) {
    resetPanel();
    sideUserTitle.text(b);
    $(".betdone").hide();
    a.show()
}

function resetPanel(a) {
    clearTimeout(resetTimer);
    resetTimer = null;
    sideUserTitle.text(sideUserTitle.data("text"));
    $(".betdone").show();
    $("#betResultPanel").hide();
    if (!a) {
        refreshBets()
    }
}

function showMsg(b, c) {
    var a = $("#messageBox");
    if (a.length == 0) {
        a = $('<div id="messageBox">').appendTo("body").dialog({
            autoOpen: false,
            resizable: false,
            modal: true,
            icon: true,
            minHeight: 0,
            width: 400,
            title: "用户提示",
            buttons: {
                "确定": function() {
                    $(this).data("ok", true).dialog("close")
                },
                "取消": function() {
                    $(this).dialog("close")
                }
            }
        }).on("dialogclose", function(f) {
            var d = $(this).data("cb");
            if ($.isFunction(d)) {
                d($(this).data("ok"))
            }
        })
    }
    a.text(b).dialog("open").data({
        ok: false,
        cb: c
    });
    if (c) {
        a.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").show()
    } else {
        a.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").hide()
    }
}

function getBetText(a) {
    var c = "";
    if (a.title) {
        c += a.title + " "
    }
    c += a.text;
    if (a.multiple && a.multiple > 1) {
        c += '<div class="multiple">复式『 <span>' + a.multiple + ' 组</span> 』&nbsp;<a>查看明细</a><ol style="display:none">';
        var e = getMpSplit(a);
        var d = [];
        if (e.length == 2 && e[0] && e[1]) {
            d = LIBS.comboOfTwoGroups(e)
        } else {
            d = LIBS.comboArray(e, a.mcount, null, mpFirst)
        }
        for (var b = 0; b < d.length; b++) {
            c += "<li><span>" + d[b].join("、") + "<span></li>"
        }
        c += "</ol>"
    } else {
        if (a.separate) {
            c += '<div class="multiple">复式&nbsp;' + a.contents + "</div>"
        }
    }
    return c
}

function getMpSplit(c) {
    var d = c.text;
    if (typeof d == "object" && isNaN(d[0])) {
        d = c.contents
    }
    mpFirst = [];
    if (d.indexOf("-") >= 0) {
        var b = d.split("-");
        var a = b[0];
        if (a.indexOf(",") > -1) {
            d = [];
            d.push(a.split(","));
            d.push(b[1].split(","))
        } else {
            mpFirst = a.split(".");
            d = (mpFirst.join(",") + "," + b[1]).split(",")
        }
    }
    return d
}

function showBets(e, n) {
    var h = $("#betsBox");
    if (h.length == 0) {
        h = $('<div id="betsBox"></div>').appendTo("body").dialog({
            closeButton: false,
            autoOpen: false,
            resizable: false,
            icon: true,
            modal: true,
            minHeight: 0,
            width: 400,
            buttons: {
                "确定": function() {
                    var b = [];
                    $("#betList tr").each(function() {
                        var q = $(this);
                        if (q.find("input:checked").length != 0) {
                            var p = Number(q.find(".amount input").val());
                            if (p <= 0 || isNaN(p)) {
                                return
                            }
                            var o = q.data("b");
                            o.amount = p;
                            b.push(o)
                        }
                    });
                    if (b.length > 0) {
                        var i = $(this).data("req");
                        i.bets = b;
                        i.ignore = $("#ignoreOdds").prop("checked");
                        postBet(i)
                    }
                    $(this).data("sc", true).dialog("close")
                },
                "取消": function() {
                    $(this).dialog("close")
                }
            }
        }).on("dialogclose", function() {
            betting = false;
            emptyZuheChuang()
        }).on("dialogbeforeclose", function() {
            if (!$(this).data("sc")) {
                var b = $(this);
                showMsg("你确定取消下注吗？", function(i) {
                    if (i) {
                        b.data("sc", true).dialog("close")
                    }
                });
                return false
            }
        });
        var j = '<div class="betList"><table class="table"><thead><th>号码</th><th>赔率</th><th>金额</th><th>确认</th></thead><tbody id="betList"></tbody></table></div><div class="bottom"><span id="bcount"></span><span id="btotal"></span></div><div><label><input type="checkbox" id="ignoreOdds" />如赔率变化，按最新赔率投注，不提示赔率变化</label></div>';
        h.html(j);
        h.keypress(function(b) {
            if (b.keyCode == 13) {
                $(this).parent().find(".ui-dialog-buttonset button:eq(0)").click()
            }
        })
    }
    betting = true;
    if (n) {
        h.dialog("option", "title", "赔率变化，请重新确认投注赔率")
    } else {
        h.dialog("option", "title", "下注明细（请确认注单）")
    }
    var g = $("#betList");
    g.empty();
    var a = e.bets;
    for (var f = 0, c = a.length; f < c; f++) {
        var m = a[f];
        var k = $("<tr>").appendTo(g).data("b", m).append($("<td>").addClass("contents").html(getBetText(m)));
        var d = m.odds;
        if (n) {
            m.odds = n[f];
            d += " -> " + m.odds
        }
        k.append($("<td>").addClass("odds").text(d));
        k.append($("<td>").addClass("amount").append($("<input>").val(m.amount))).append($("<td>").addClass("check").append($('<input type="checkbox">').prop("checked", true)))
    }

    function l() {
        var i = 0;
        var b = 0;
        g.find("tr").each(function() {
            var q = $(this);
            if (q.find("input:checked").length != 0) {
                var p = Number(q.find(".amount input").val());
                if (p <= 0 || isNaN(p)) {
                    return
                }
                var o = q.data("b");
                var r = o.multiple ? o.multiple : 1;
                i += p * r;
                b += r
            }
        });
        $("#bcount").text("组数：" + b);
        $("#btotal").text("总金额：" + i)
    }
    g.find("input").change(l);
    g.find(".multiple a").hover(function() {
        $(this).parent().find("ol").show()
    }, function() {
        $(this).parent().find("ol").hide()
    });
    l();
    h.dialog("open").data({
        req: e,
        sc: false
    });
    h.find(".betList").on("scroll", function(b) {
        h.parent().find(".ui-dialog-buttonset button:eq(0)").focus()
    })
}

function emptyZuheChuang() {
    var b = $("#frame").contents().find("#zuhechuang tbody");
    if (b.length > 0) {
        b.empty()
    }
    var a = $("<tr>").append($("<th>"));
    var c = $("<div>").addClass("scrollit").append($("<table>").append(a));
    $("<tr>").appendTo(b).append($("<td>").append(c))
}

function showOddsDetail(b, d) {
    var c = $("#oddsBox");
    if (c.length == 0) {
        c = $('<div id="oddsBox">').appendTo("body").dialog({
            autoOpen: false,
            resizable: false,
            modal: true,
            icon: true,
            minHeight: 0,
            width: 600,
            title: "牌型翻倍赔率介绍",
            buttons: {
                "确定": function() {
                    $(this).data("ok", true).dialog("close")
                },
                "取消": function() {
                    $(this).dialog("close")
                }
            }
        }).on("dialogclose", function(g) {
            var f = $(this).data("cb");
            if ($.isFunction(f)) {
                f($(this).data("ok"))
            }
        })
    }
    var a = getOddsDetailBody(b);
    c.html(a).dialog("open").data({
        ok: false,
        cb: d
    });
    if (d) {
        c.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").show()
    } else {
        c.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").hide()
    }
}

function getOddsDetailBody(n) {
    var a = $("<div>").addClass("nn-wrapper");
    var m = $("<table>").addClass("nn-table").appendTo(a);
    var k = $("<thead>").addClass("no-bg").appendTo(m);
    k.append($("<th>").text("牌型").css("width", "30%"));
    k.append($("<th>").text("赔率").css("width", "20%").css("text-align", "center"));
    k.append($("<th>").text("牌型介绍"));
    var j = $("<tbody>").appendTo(m);
    var g = "";
    var f = "";
    var c = "";
    var l = "";
    if (n != null) {
        g = n.FB_1_1;
        f = n.FB_1_2;
        c = n.FB_1_3;
        l = n.FB_1_4
    }
    var i = $("<tr>").appendTo(j);
    i.append($("<td>").text("无牛"));
    i.append($("<td>").css("text-align", "center").text("1:" + g));
    i.append($("<td>").text("五个球中的任意3个球不能成为10的倍数"));
    var h = $("<tr>").appendTo(j);
    var d = $("<td>").appendTo(h);
    d.append($("<div>").text("牛一至牛六"));
    d.append($("<div>").text("牛七至牛八"));
    d.append($("<div>").text("牛九"));
    var b = $("<td>").css("text-align", "center").appendTo(h);
    b.append($("<div>").text("1:" + g));
    b.append($("<div>").text("1:" + f));
    b.append($("<div>").text("1:" + c));
    h.append($("<td>").text("五个球中的任意3个球相加能成10的倍数，另外两张相加的点数为牛几"));
    var e = $("<tr>").appendTo(j);
    e.append($("<td>").text("牛牛"));
    e.append($("<td>").css("text-align", "center").text("1:" + l));
    e.append($("<td>").text("五个球中的任意3个球相加能成10的倍数，另外两张相加的点数也是10点"));
    a.append($("<p>").addClass("nn-paragraph").text("下注金额会暂时冻结下注金额的4倍加本金，开奖后连本带利一并返还。"));
    a.append($("<p>").addClass("nn-paragraph").text("例如玩家下注1元，冻结4元，下注总金额为5元。如果庄家（牛六及以下）赢，返还4元，庄家（牛七、牛八）赢，返还3元；庄家（牛九）赢，返还2元；庄家（牛牛）赢，不返还。"));
    a.append($("<p>").addClass("nn-paragraph red").text("注：当庄家与闲家点数相等时，牛六以下（含牛六）庄家赢，牛六以上的点数第一张牌比大小（例如：庄家：15462牛八，闲家：46297牛八，4比1大，闲家赢）。且庄家通吃闲家无牛。"));
    return a
}

function showOddsDetailPB(b, d) {
    var c = $("#oddsBoxPB");
    if (c.length == 0) {
        c = $('<div id="oddsBoxPB">').appendTo("body").dialog({
            autoOpen: false,
            resizable: false,
            modal: true,
            icon: true,
            minHeight: 0,
            width: 600,
            title: "牌型平倍赔率介绍",
            buttons: {
                "确定": function() {
                    $(this).data("ok", true).dialog("close")
                },
                "取消": function() {
                    $(this).dialog("close")
                }
            }
        }).on("dialogclose", function(g) {
            var f = $(this).data("cb");
            if ($.isFunction(f)) {
                f($(this).data("ok"))
            }
        })
    }
    var a = getOddsDetailBodyPB(b);
    c.html(a).dialog("open").data({
        ok: false,
        cb: d
    });
    if (d) {
        c.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").show()
    } else {
        c.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").hide()
    }
}

function getOddsDetailBodyPB(k) {
    var a = $("<div>").addClass("nn-wrapper");
    var j = $("<table>").addClass("nn-table").appendTo(a);
    var i = $("<thead>").addClass("no-bg").appendTo(j);
    i.append($("<th>").text("牌型").css("width", "30%"));
    i.append($("<th>").text("赔率").css("width", "20%").css("text-align", "center"));
    i.append($("<th>").text("牌型介绍"));
    var g = $("<tbody>").appendTo(j);
    var b = "";
    if (k != null) {
        b = k.PB_1_1
    }
    var h = $("<tr>").appendTo(g);
    h.append($("<td>").text("无牛"));
    h.append($("<td>").css("text-align", "center").text("1:" + b));
    h.append($("<td>").text("五个球中的任意3个球不能成为10的倍数"));
    var f = $("<tr>").appendTo(g);
    var d = $("<td>").appendTo(f);
    d.append($("<div>").text("牛一至牛六"));
    d.append($("<div>").text("牛七至牛八"));
    d.append($("<div>").text("牛九"));
    var c = $("<td>").css("text-align", "center").appendTo(f);
    c.append($("<div>").text(""));
    c.append($("<div>").text("1:" + b));
    c.append($("<div>").text(""));
    f.append($("<td>").text("五个球中的任意3个球相加能成10的倍数，另外两张相加的点数为牛几"));
    var e = $("<tr>").appendTo(g);
    e.append($("<td>").text("牛牛"));
    e.append($("<td>").css("text-align", "center").text("1:" + b));
    e.append($("<td>").text("五个球中的任意3个球相加能成10的倍数，另外两张相加的点数也是10点"));
    a.append($("<p>").text("平倍玩法赔率相同且无需冻结资金"));
    a.append($("<p>").addClass("nn-paragraph red").text("注：当庄家与闲家点数相等时，牛六以下（含牛六）庄家赢，牛六以上的点数第一张牌比大小（例如：庄家：15462牛八，闲家：46297牛八，4比1大，闲家赢）。且庄家通吃闲家无牛。"));
    return a
}

function showDomains() {
    populateDomain();
    $("#domainDetail").show();
    var a = $("#domainModal");
    box = $('<div id="domain-dialog">').appendTo("body").dialog({
        autoOpen: false,
        resizable: false,
        modal: true,
        icon: true,
        height: 400,
        width: 300,
        title: "换线路"
    }).on("dialogclose", function(c) {
        var b = $(this).data("cb");
        if ($.isFunction(b)) {
            b($(this).data("ok"))
        }
    });
    box.html(a).dialog("open").data({
        ok: false
    });
    box.dialog("widget").find(".ui-dialog-buttonset button:eq(1)").show()
}

function populateDomain() {
    var a = "/web/rest/member/getLines";
    $.getJSON(a).done(function(e) {
        let tbody = $("#domainList tbody");
        tbody.empty();
        $("#currentIp").text(e.result.ip);
        $("#serverTime").text(e.result.serverTime);
        var f = $("<tr>").appendTo(tbody);
        $("<td>").addClass("table-header").text("线路").appendTo(f);
        $("<td>").addClass("table-header").text("延迟(毫秒)").appendTo(f);
        $.each(e.result.lines, function(g, i) {
            var h = $("<tr>").appendTo(tbody);
            var j = $("<td>").addClass("font-center").appendTo(h);
            $("<a>").text("线路" + (g + 1)).attr("href", "javascript:void(0);").click(function() {
                generateTemptoken(i)
            }).attr("title", i).appendTo(j);
            $('<td id="' + g + '">').addClass("font-center").appendTo(h)
        });
        var d = 9999;
        var c = 0;
        SpeedTest(e.result.lines, function(g) {
            $.each(g, function(i, j) {
                $("#" + i).text(j.ping ? j.ping : "超时");
                if (j.ping < d) {
                    d = j.ping;
                    c = i
                }
            });
            var h = $("#" + c);
            $("<span>").addClass("red-font best-label").text("最佳").appendTo(h)
        });
        const b = ["https://www.hinet.net", "https://www.baidu.com"];
        let sampletbody = $("#sampleList tbody");
        sampletbody.empty();
        var f = $("<tr>").appendTo(sampletbody);
        $('<td colspan="2">').addClass("font-center").text("参考站点测试").appendTo(f);
        var f = $("<tr>").appendTo(sampletbody);
        $("<td>").addClass("font-center").text("线路").appendTo(f);
        $("<td>").addClass("font-center").text("时间").appendTo(f);
        SpeedTest(b, function(g) {
            $.each(g, function(h, j) {
                var i = $("<tr>").appendTo(sampletbody);
                $("<td>").addClass("font-center").text(j.url).appendTo(i);
                $("<td>").addClass("font-center").text(j.ping).appendTo(i)
            })
        })
    }).fail(function(c, d, b) {
        if (c.responseJSON !== undefined && c.responseJSON.message !== undefined) {
            swal(c.responseJSON.message, "", "error")
        } else {
            swal(d + ", " + b, "", "error")
        }
    })
}

function generateTemptoken(c) {
    var b = $("#currentLoginUser").val();
    var a = "https://" + c + "/member/index";
    if (!b || b === "") {
        location.href = a
    } else {
        $.getJSON("/web/rest/member/generateTokenId?link=" + c).done(function(d) {
            if (d.result && d.result !== "") {
                location.href = a + "?tokenId=" + d.result
            } else {
                location.href = a
            }
        }).fail(function(e, f, d) {
            if (e.responseJSON !== undefined && e.responseJSON.message !== undefined) {
                swal(e.responseJSON.message, "", "error")
            } else {
                swal(f + ", " + d, "", "error")
            }
        })
    }
};