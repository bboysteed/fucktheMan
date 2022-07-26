var SP_NAMES;
var MULTIPLE;
var TEXT_PREFIX;
var TEXT_POSTFIX;
var lottery;
var bettingStatus;
var Results;
var ResultPanel;
var gameName;
var games;
var gamegg;
var PAGE;
var oldOdds = null;
var mpType = 0;
var mpFirst = [];
var combiCount = 0;
$(function() {
    if (template == "HK6") {
        $("#changlong").width("170px")
    }
    if (SP_NAMES) {
        $("#bet_panel th.tsname,.bet_content .tsname").each(function() {
            var v = $(this);
            var w = v.text();
            v.empty();
            v = $("<div>").appendTo(v);
            for (var u = 0, a = w.length; u < a; u++) {
                var x = w.charAt(u);
                v.append($("<span>").addClass("b" + x).text(x))
            }
        })
    }
    if (MULTIPLE) {
        $("#header .control").hide();
        $("#btnReset").attr("disabled", true).addClass("button_disabled");
        $("#btnBet").attr("disabled", true).addClass("button_disabled");
        var b;
        var c;
        var n = MULTIPLE[0];
        if (n == 0) {
            $("input[name=game]").click(function() {
                b = $(this).val().split(",");
                resetBets()
            }).attr("checked", false)
        } else {
            if (n == 1) {
                b = MULTIPLE[3];
                c = function(t, a) {
                    $(".bet_panel .odds:visible").hide();
                    if (t >= b[0] && t <= b[1]) {
                        var u = "#o_" + MULTIPLE[1] + "_" + t;
                        if ($(u).length > 0) {
                            $(u).show()
                        } else {
                            $("#o_" + t + MULTIPLE[1] + "_0").show()
                        }
                    } else {
                        $("#empOdds").show()
                    }
                }
            } else {
                if (n == 2) {
                    b = MULTIPLE[3]
                } else {
                    if (n == 3) {
                        c = function(v, u, t) {
                            var a = true;
                            $(".status_panel table").each(function() {
                                if ($(this).find("input:checked").length == 0) {
                                    a = false
                                }
                            });
                            $(".split_panel table").each(function() {
                                if ($(this).find("input:checked").length != 0) {
                                    a = true
                                }
                            });
                            $(".bcontrol input:text").prop("readonly", !a);
                            if (MULTIPLE[3]) {
                                $(".status_panel input[value=" + t.val() + "]").not(t).prop("readonly", u)
                            }
                        }
                    }
                }
            }
        }
        $("#bet_panel").on("click", ".status_panel .check, .split_panel .check, .split_panel_dp .check", function(v) {
            var z = $(this).find("input");
            displayGameMessage(z, b);
            if (!bettingStatus) {
                return false
            }
            if (z.prop("readonly")) {
                return false
            }
            var w = z.prop("checked");
            var x = $(".status_panel input:checked").not('input[name="gameswitch"]').length + $(".split_panel_dp input:checked").length;
            var y = 0,
                B = 0;
            if (mpType == 6) {
                y = $(".first input:checked").length;
                B = $(".second input:checked").length;
                x = Math.min(y, B);
                if (x == 1 && combiCount > 1) {
                    x = combiCount
                }
            }
            if (v.target == this) {
                w = !w;
                if (w) {
                    x += 1
                } else {
                    x -= 1
                }
            }
            if (mpType == 2 && mpFirst.length < b[0]) {
                var u = $(this);
                if (!$(this).is(":checkbox")) {
                    u = $(this).find("input[type='checkbox']")
                }
                if (u.length > 0) {
                    if (w && mpFirst.length < b[0] - 1) {
                        mpFirst.push(u.val());
                        u.prop("disabled", true);
                        u.addClass("mpFirst")
                    } else {
                        if (!w && mpFirst.length > 0) {
                            var A = mpFirst.indexOf(u.val());
                            if (A != "-1") {
                                mpFirst.splice(A)
                            }
                            u.prop("disabled", false);
                            u.removeClass("mpFirst")
                        }
                    }
                }
            }
            z.prop("checked", w);
            if (c) {
                c(x, w, z)
            }
            $(this).toggleClass("selected", w);
            if (b) {
                if (mpType == 6) {
                    var t = (y + B) / 2;
                    $(".bcontrol input:text").prop("readonly", (t < 1.5 || t > b[1]))
                } else {
                    $(".bcontrol input:text").prop("readonly", (x < b[0] || x > b[1]))
                }
                if ($(".split_panel_dp").length > 0) {
                    var a = $(this).closest("table");
                    if (mpType == 5) {
                        if (a.find("input:checked").length >= 1) {
                            a.find("input:not(:checked)").prop("readonly", true)
                        } else {
                            a.find("input[readonly]").prop("readonly", false)
                        }
                    } else {
                        if (a.find("input:checked").length >= b[1]) {
                            a.find("input:not(:checked)").prop("readonly", true)
                        } else {
                            a.find("input[readonly]").prop("readonly", false)
                        }
                    }
                } else {
                    if (x >= b[1]) {
                        $(".status_panel input:not(:checked)").not('input[name="gameswitch"]').prop("readonly", true)
                    } else {
                        $(".status_panel input[readonly]").not(".mpFirst").prop("readonly", false)
                    }
                }
            }
        })
    } else {
        function h(u) {
            var t = PeriodPanel.period;
            if (!t || t.status != 1) {
                return
            }
            var a = getBet(u);
            if (a) {
                parent.showBets({
                    lottery: lottery,
                    drawNumber: t.drawNumber,
                    bets: [a]
                })
            }
        }
        $("#bet_panel tr:not(.head)").each(function() {
            var a = $(this);
            a.find("input.ba").each(function() {
                var u = $(this).attr("name");
                var t = $("#bet_panel .G" + u);
                t.hover(function() {
                    t.addClass("hover")
                }, function() {
                    t.removeClass("hover")
                });
                if (!$(this).hasClass("empty")) {
                    t.click(function(z) {
                        if (!bettingStatus) {
                            return
                        }
                        var y = $(z.target);
                        if (y.filter("input").length) {
                            y.val($("label.quickAmount input").val())
                        } else {
                            t.toggleClass("selected");
                            var x = $("#bet_panel th.selected").length;
                            var w = $("#betcount").text(x);
                            if (x == 0) {
                                w.parent().hide()
                            } else {
                                w.parent().show()
                            }
                            var v = t.find("input");
                            if ($(this).hasClass("selected")) {
                                v.val($("label.quickAmount input").val());
                                v.focus()
                            } else {
                                v.val("")
                            }
                        }
                    })
                }
            })
        });
        $("#bet_panel .panel_yxx a").click(function() {
            var a = $(this).attr("id").substr(2);
            h(a)
        });
        var r = $("label.quickAmount input");
        r.keyup(function() {
            r.not(this).val($(this).val());
            if (parent) {
                parent.QuickAmount = $(this).val()
            }
            $("#bet_panel tr:not(.head)").each(function() {
                var a = $(this);
                a.find("input.ba").each(function() {
                    var u = $(this).attr("name");
                    var t = $("#bet_panel .G" + u);
                    if (t.length && t.hasClass("selected")) {
                        $(this).val(r.val())
                    }
                })
            });
            $("#bet_panel .bet-item").each(function() {
                var a = $(this);
                if (a.hasClass("selected")) {
                    a.children("div").find("input").val(r.val())
                }
            });
            $("#bet_panel .inner-bet-item").each(function() {
                var t = $(this).data("target");
                var a = $(".inner-bet-wrapper").find("." + t);
                if (a.attr("class").indexOf("selected") !== -1) {
                    $(this).find("input").val(r.val())
                }
            });
            sessionStorage.setItem("QuickAmount", r.val())
        });
        var e = $("label.checkdefault input");
        e.click(function() {
            var a = $(this).prop("checked");
            e.not(this).prop("checked", a);
            if (parent) {
                parent.QuickAmountEnalbed = a;
                parent.QuickAmount = r.val();
                sessionStorage.setItem("QuickAmountCheck", a);
                sessionStorage.setItem("QuickAmount", r.val())
            }
        });
        if (parent && parent.QuickAmountEnalbed) {
            e.prop("checked", true);
            r.val(parent.QuickAmount)
        }
    }
    var d = true;
    var s = {
        titleConverter: function(a) {
            if (a.indexOf("冠亚") == 0 && a.indexOf("-") == -1) {
                a = a.replace("冠亚", "冠亚 - ")
            } else {
                a = a.replace("-", " - ")
            }
            return a
        },
        interval: 10,
        changlong: $("#changlong tbody"),
        onChangLongClick: function(t) {
            var u = PeriodPanel.period;
            if (u != null && u.status == 1) {
                var a = $(".G" + t).addClass("selected").find("input");
                a.focus();
                if (parent && parent.QuickAmountEnalbed) {
                    a.val(parent.QuickAmount)
                }
            }
        },
        onPeriodChange: function(u, a) {
            var t = u != null && u.status == 1;
            toggleBet(t);
            if (t && !a && location.hash && typeof window.IS_MOBILE == "undefined") {
                $(".G" + location.hash.substr(1)).addClass("selected").find("input").focus()
            }
        },
        onResultChange: function() {
            if (Results) {
                Results.load()
            }
            if (ResultPanel) {
                ResultPanel.load()
            }
        },
        onAccountUpdated: function(a) {
            if (parent && parent.showAccount) {
                parent.showAccount(a)
            }
        },
        loadOptions: {
            url: "odds",
            data: {
                lottery: lottery,
                games: games
            },
            success: function(a) {
                showOdds(a)
            }
        }
    };
    $.each(["cdOpen", "cdClose", "cdDraw"], function(t, a) {
        s[a] = $("#" + a)
    });
    PeriodPanel.init(s, gameName);
    if (window.parent && window.parent != window) {
        var g = PAGE || LIBS.getUrlParam("page");
        var q = LIBS.getUrlParam("index");
        var o = window.parent.$(".sub div:visible a").removeClass("selected").each(function() {
            var v = $(this);
            var a = v.attr("href");
            var w = LIBS.getUrlParam("page", a);
            var u = LIBS.getUrlParam("index", a);
            if (w == g && (!q || !u || u == q)) {
                if (!gameName) {
                    $("#gameName").text(v.text())
                }
                v.addClass("selected");
                return false
            }
        })
    }
    $("#quickControl").click(function() {
        $("#quickPanel").toggle($(this).prop("checked"))
    });
    $("input:text").keypress(function(a) {
        if (a.keyCode == 13) {
            bet();
            return false
        }
    }).onlyNumber();
    $("input:checkbox").keypress(function(a) {
        if (a.keyCode == 13 && $("#bet_panel td.selected").length > 0) {
            bet();
            return false
        }
    });
    toggleBet(false);
    var f = sessionStorage.getItem("QuickAmountCheck");
    var m = sessionStorage.getItem("QuickAmount");
    if (f && m) {
        $("label.quickAmount input").val(m);
        $("label.checkdefault input").prop("checked", f);
        if (parent) {
            parent.QuickAmountEnalbed = true;
            parent.QuickAmount = m
        }
    }
});

function showOdds(a) {
    var e = PeriodPanel.period;
    if (!a || e == null || e.status != 1) {
        oldOdds = null;
        toggleBet(false)
    } else {
        toggleBet(true);
        for (var b in a) {
            var d = a[b];
            if (lottery == "PK10JSCNN") {
                if (d) {
                    var c = $("#o_" + b).val(d)
                } else {
                    $("#o_" + b).val("--")
                }
            } else {
                if (d) {
                    var c = $("#o_" + b).text(d);
                    if (oldOdds && d != oldOdds[b]) {
                        if ($("input[name='game']").length > 0) {
                            $("input[name='game']:checked").click()
                        }
                        c.delayClass("uptodate", 3000)
                    }
                } else {
                    $("#o_" + b).text("--")
                }
            }
        }
        if (oldOdds == null) {
            if ($("#bet_panel td.selected").length > 0 && parent & parent.QuickAmountEnalbed) {
                $("#bet_panel td.selected").find("input").val(parent.QuickAmount)
            }
            if ($("input[name='game']").length > 0) {
                if ($("input[name='game']:checked").length == 0) {
                    $("input[name='game']:first").click()
                } else {
                    $("input[name='game']:checked").click()
                }
            }
        }
        oldOdds = a
    }
}

function showBetting(a) {
    if (a) {
        $("#bettingStatus").show();
        $("#betControl").hide()
    } else {
        $("#bettingStatus").hide();
        $("#betControl").show()
    }
}

function sortBets(a) {
    a.sort(function(f, d) {
        if (f.title != d.title) {
            return 0
        }
        var e = (Number(f.contents) == f.contents);
        var c = (Number(d.contents) == d.contents);
        if (e && !c) {
            return -1
        }
        if (c && !e) {
            return 1
        }
        if (e && c) {
            return f.contents - d.contents
        }
        return 0
    });
    return a
}

function toggleBet(a) {
    if (bettingStatus != null && bettingStatus === a) {
        return
    }
    bettingStatus = a;
    if (!a) {
        if (typeof window.IS_MOBILE !== "undefined") {}
        $("#bet_panel").addClass("bet_closed");
        $("#bet_panel .odds:not(.empty)").text("--");
        if (MULTIPLE) {
            $(".status_panel input, .split_panel input,.check_panel input").prop("disabled", true)
        } else {
            $("#bet_panel .amount input").prop("disabled", true)
        }
        resetBets()
    } else {
        $("#bet_panel").removeClass("bet_closed");
        if (MULTIPLE) {
            $(".status_panel input, .split_panel input,.check_panel input").prop("disabled", false)
        } else {
            $("#bet_panel .amount input").prop("disabled", false)
        }
    }
}

function resetBets() {
    if (typeof window.IS_MOBILE !== "undefined") {
        resetMobileAll()
    }
    if (MULTIPLE) {
        $(".status_panel input:disabled").prop("disabled", false);
        $(".status_panel .check").removeClass("disabled");
        $(".status_panel .check, .split_panel .check, .split_panel_dp .check").removeClass("selected");
        $(".bet_table").html("");
        $(".status_panel input:checked, .split_panel input:checked, .split_panel_dp input:checked, .check_panel input:checked").not('input[name="gameswitch"]').prop("checked", false);
        $(".bcontrol input:text").prop("readonly", true);
        $(".check_panel input:text").val("");
        mpFirst = [];
        $(".mpFirst").prop("disabled", false);
        $(".mpFirst").removeClass("mpFirst");
        if (bettingStatus) {
            $(".status_panel input[readonly], .split_panel input[readonly], .split_panel_dp input[readonly]").prop("readonly", false)
        }
        if (MULTIPLE[0] == 1) {
            $(".bet_panel .odds:visible").hide();
            $("#empOdds").show()
        } else {
            if (MULTIPLE[0] == 3) {
                $("#fs_odds").text("--")
            }
        }
    } else {
        $("#betcount").parent().hide();
        $("#bet_panel .selected").removeClass("selected");
        $("#bet_panel input.ba").val("");
        $("#bet_panel .inner-bet-item").each(function() {
            var b = $(this).data("target");
            var a = $(".inner-bet-wrapper").find("." + b);
            if (a.attr("class").indexOf("selected") !== -1) {
                a.attr("class", b)
            }
        })
    }
    if (!$("label.checkdefault input").is(":checked")) {
        $("label.quickAmount input").val("")
    }
    if ($("#bet_panel textarea.qb").length > 0) {
        $("#bet_panel textarea.qb").val("")
    }
    if (gamegg) {
        updateGgOdds(9)
    }
    if ($(".quick_sec_table td").length > 0) {
        $(".quick_sec_table td.on").removeClass("on")
    }
}

function resetBetsAndZuhe() {
    resetBets();
    resetZuheChuang()
}

function getBet(g, m) {
    if (!m) {
        m = $("#t_" + g)
    }
    var c = $("#o_" + g);
    var q;
    if (lottery == "PK10JSCNN") {
        q = Number(c.val())
    } else {
        q = Number(c.text())
    }
    if (isNaN(q) || q <= 0) {
        return
    }
    var f = m.attr("title");
    f = f.split(" ", 2);
    var h = f[1];
    f = (f.length > 1) ? f[0] : "";
    var d = g.split("_");
    var b = {
        title: f,
        text: h,
        game: d[0],
        contents: d[1],
        odds: q
    };
    var a = Number(c.attr("lang"));
    if (a > 0) {
        var n = [];
        for (var e = 1; e < a; e++) {
            n[e - 1] = $("#o_" + g + "_" + e).text()
        }
        b.oddsDetail = n
    }
    return b
}

function getMultipleBets() {
    var n = Math.floor(Number($(".bcontrol .quickAmount input").val()));
    if (n <= 0 || isNaN(n)) {
        return false
    }
    var f = MULTIPLE[0];
    var G = MULTIPLE[1];
    var H = MULTIPLE[2];
    var a = MULTIPLE[3];
    var c;
    if (f == 0) {
        var F = $("input[name=game]:checked");
        if (F.length == 0) {
            return false
        }
        H = F.attr("title");
        var E = $(".tab_title02 .on");
        if (E.length > 0) {
            H = E.text() + ":" + H
        }
        G = F.attr("id").substr(2);
        a = F.val().split(",")
    } else {
        if (f == 1) {
            c = $(".status_panel input:checked");
            G += "_" + c.length;
            if ($("#o_" + G).length == 0) {
                G = c.length + MULTIPLE[1] + "_0"
            }
        }
    }
    var s = Number($("#o_" + G).text());
    var t = [];
    var B = G.split("_");

    function b(N, L, J, I, M, K) {
        t.push({
            multiple: J,
            title: H,
            text: N,
            game: B[0],
            contents: L,
            odds: M || s,
            state: B[1] || 0,
            mcount: I,
            amount: n,
            separate: K
        })
    }
    if (f == 3) {
        var x = [];
        if ($(".status_panel table input:checked").length > 0) {
            $(".status_panel table").each(function() {
                var I = [];
                $(this).find("input:checked").each(function() {
                    I.push($(this).val())
                });
                I.sort();
                x.push(I)
            });
            x = LIBS.comboList(x)
        } else {
            $(".split_panel table input:checked").each(function() {
                var I = [];
                var J = $(this).val();
                for (k = 0; k < J.length; k++) {
                    I.push(J[k])
                }
                x.push(I)
            })
        }
        for (var y = 0; y < x.length; y++) {
            var r = x[y];
            b(r, r.join(","), 1)
        }
    } else {
        if (f == 2) {
            var c = $(".status_panel input:checked").not('input[name="gameswitch"]');
            var x = [];
            var d = {};
            var q = {};
            c.each(function() {
                var I = $(this).val();
                x.push(I);
                d[I] = $(this).attr("title");
                q[I] = Number($("#o_" + G + "_" + I).text())
            });
            x = x.sort();
            x = LIBS.comboArray(x, a[0]);
            for (var y = 0; y < x.length; y++) {
                var r = x[y];
                b(LIBS.replaceArray(r, d), r.join(","), 1, a[0], LIBS.replaceArray(r, q).sort(function(J, I) {
                    return MULTIPLE[4] ? J - I : I - J
                }).shift())
            }
        } else {
            var g = mpFirst && mpFirst.length > 0;
            var m = false;
            if (!c) {
                c = $(".status_panel input:checked, .split_panel_dp input:checked")
            }
            var x = [];
            var d = {};
            if (mpType == 6) {
                m = true;
                for (var y = 0; y < 2; y++) {
                    var w = getGroupSelection(y);
                    if (w.length > 0) {
                        x.push(w.split(","))
                    }
                }
            } else {
                c.each(function() {
                    var I = $(this).val();
                    if (I.indexOf(",") > -1) {
                        m = true;
                        x.push(I.split(","))
                    } else {
                        x.push(I)
                    }
                    d[I] = $(this).attr("title")
                })
            }
            x = x.sort();
            if (g) {
                x = x.filter(function(I) {
                    return mpFirst.indexOf(I) < 0
                })
            }
            var z = a[0];
            if (f == 1) {
                z = c.length
            }
            var o = B[0];
            if (g) {
                if (typeof hk6SpecialLm !== "undefined" && hk6SpecialLm) {
                    var e = {};
                    var v = x.concat(mpFirst);
                    populateOddsMap(e, v, "o_", o);
                    for (var y in x) {
                        var D = [x[y]];
                        var C = getMinOdds(e, D.concat(mpFirst));
                        b(mpFirst.join(".") + "-" + LIBS.replaceArray(D, d), mpFirst.join(".") + "-" + D, 1, z, C)
                    }
                } else {
                    b(mpFirst.join(".") + "-" + LIBS.replaceArray(x, d), mpFirst.join(".") + "-" + x.join(","), LIBS.combination(c.length - mpFirst.length, z - mpFirst.length), z)
                }
            } else {
                if (m) {
                    if (typeof hk6SpecialLm !== "undefined" && hk6SpecialLm) {
                        var e = {};
                        var v = [];
                        for (numIdx1 in x) {
                            var h = x[numIdx1];
                            if (Array.isArray(h)) {
                                for (numIdx2 in h) {
                                    var r = h[numIdx2];
                                    if (!isNaN(r)) {
                                        v.push(r)
                                    }
                                }
                            }
                        }
                        populateOddsMap(e, v, "o_", o);
                        var A = LIBS.comboOfTwoGroups(x);
                        for (var y in A) {
                            var D = A[y];
                            var C = getMinOdds(e, D);
                            b(LIBS.replaceArray(x, d), D.join(","), 1, z, C, true)
                        }
                    } else {
                        b(LIBS.replaceArray(x, d), x[0].join(",") + "-" + x[1].join(","), LIBS.combination(x), z)
                    }
                } else {
                    if (typeof hk6SpecialLm !== "undefined" && hk6SpecialLm) {
                        var e = {};
                        populateOddsMap(e, x, "o_", o);
                        var A = LIBS.comboArray(x, zuheNumberInRow, null, mpFirst);
                        for (var y = 0; y < A.length; y++) {
                            var D = A[y];
                            var C = getMinOdds(e, D);
                            b(LIBS.replaceArray(D, d), D.join(","), 1, z, C)
                        }
                    } else {
                        b(LIBS.replaceArray(x, d), x.join(","), LIBS.combination(c.length, z), z)
                    }
                }
            }
        }
    }
    var u = [];
    for (var y = 0; y < t.length; y++) {
        if (t[y].odds !== Infinity && !Number.isNaN(t[y].odds) && t[y].odds !== 0) {
            u.push(t[y])
        }
    }
    return u
}

function getBets() {
    var a = [];
    $("#bet_panel input.ba").each(function() {
        var r = Number($(this).val());
        if (r <= 0 || isNaN(r)) {
            return
        }
        var q = $(this).attr("name");
        var o = getBet(q);
        if (o) {
            o.amount = r;
            a.push(o)
        }
    });
    if ($("#bet_panel textarea.qb").length > 0) {
        var n = [];
        var g = $("#bet_panel textarea.qb").val();
        g = g.replace(/\uff0c/g, ",");
        g = g.replace(/#/g, ",");
        g = g.replace(/\uff1b/g, ",");
        g = g.replace(/;/g, ",");
        g = g.replace(/ /g, ",");
        g = g.replace(/\u002e/g, ",");
        g = g.replace(/\u0023/g, ",");
        n = g.split(",");
        var h = $("#bet_panel textarea.qb").attr("name");
        var f = $("#quickAmount input").val();
        if (f <= 0 || isNaN(f)) {
            return a
        }
        for (var e = 0; e < n.length; e++) {
            var d = n[e];
            if (d == "") {
                continue
            }
            if (h.indexOf("2ZTS") > -1) {
                if (2 != d.length) {
                    continue
                }
                var m = h + "_" + sortBetContent(d, 2)
            }
            if (h.indexOf("3ZTS") > -1) {
                if (3 != d.length) {
                    continue
                }
                var m = h + "_" + sortBetContent(d, 3)
            }
            var b = getBet(m);
            if (b) {
                if (!findBet(b, a)) {
                    b.amount = f;
                    a.push(b)
                }
            }
        }
    }
    if (gamegg && $("#" + gamegg).length > 0) {
        var c = getGgBet();
        if (c) {
            a.push(c)
        }
    }
    return a
}

function sortBetContent(b, c) {
    var a = Number(b[0]);
    var f = Number(b[1]);
    if (c == 3) {
        var d = sortBetContent(a + "" + f, 2);
        var e = Number(b[2]);
        if (d[0] >= e) {
            return e + "" + d[0] + "" + d[1]
        }
        if (d[1] >= e) {
            return d[0] + "" + e + "" + d[1]
        } else {
            return b
        }
    } else {
        if (a > f) {
            return f + "" + a + ""
        }
        if (f >= a) {
            return b
        }
    }
}

function findBet(b, a) {
    for (var c = 0; c < a.length; c++) {
        if (b.contents == a[c].contents) {
            return true
        }
    }
    return false
}

function bet() {
    var h = PeriodPanel.period;
    if (!h || h.status != 1) {
        parent.showMsg("后台未开盘，请等待开盘再试。");
        return
    }
    var a;
    if (MULTIPLE) {
        a = getMultipleBets()
    } else {
        a = getBets()
    }
    if (a === false) {
        return
    }
    if (a.length == 0) {
        if (gamegg) {
            parent.showMsg("至少选两组以上。")
        } else {
            parent.showMsg("您选择的项目已封盘或输入的金额不正确，请重新选择。")
        }
        return
    }
    resetBets();
    for (var f = 0; f < a.length; f++) {
        var n = a[f];
        var c = n.contents;
        var m = c.indexOf("@");
        if (m != -1) {
            c = c.substring(0, m)
        }
        var e = parent.getUserParam(lottery, $("#k_" + n.game + "_" + c).val());
        if (e) {
            var d = false;
            var g = n.amount;
            if (g < e.minAmount) {
                d = "你输入的金额低于单注最低(" + e.minAmount + ")的限制！"
            } else {
                if (g > e.maxAmount) {
                    d = "你输入的金额超出单注最高(" + e.maxAmount + ")的限制！"
                }
            }
            if (d) {
                parent.showMsg(d);
                return
            }
        }
    }
    parent.showBets({
        lottery: lottery,
        drawNumber: h.drawNumber,
        bets: a
    })
}
$(document).ready(function() {
    $("#fastChoose1").on("click", function() {
        $(".status_panel").show();
        $("#exprType, #instantCheck").hide();
        $(this).parent().find("a").toggleClass("on", false);
        $(this).toggleClass("on", true)
    });
    $("#fastChoose2").on("click", function() {
        $(".status_panel").hide();
        $("#exprType, #instantCheck").show();
        $("#bet_panel .check input").prop("checked", false);
        $("#bet_panel .check").toggleClass("selected", false);
        $(this).parent().find("a").toggleClass("on", false);
        $(this).toggleClass("on", true)
    });
    $('#instantCheck input[type="checkbox"]').on("change", function() {
        if ($(this).is(":checked")) {
            if ($(this).parent().parent().is("td")) {
                $(this).parent().parent().find("input").prop("checked", false);
                $(this).prop("checked", true)
            }
        }
    });
    $("#instantCheck span").on("click", function() {
        if (!bettingStatus) {
            return false
        }
        if (!$(this).parent().find("input").is(":checked")) {
            if ($(this).parent().parent().is("td")) {
                $(this).parent().parent().find("input").prop("checked", false);
                $(this).parent().find("input").prop("checked", true)
            } else {
                if ($(this).parent().parent().parent().is("td")) {
                    $(this).parent().find("input").prop("checked", true)
                }
            }
        } else {
            if ($(this).parent().parent().is("td")) {
                $(this).parent().find("input").prop("checked", false)
            } else {
                if ($(this).parent().parent().parent().is("td")) {
                    $(this).parent().find("input").prop("checked", false)
                }
            }
        }
    })
});

function gen2zdwList() {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if ($("#fsOddNum").is(":checked")) {
                if (!isOdd(i)) {
                    continue
                }
            } else {
                if ($("#fsEvenNum").is(":checked")) {
                    if (isOdd(i)) {
                        continue
                    }
                }
            }
            if ($("#secOddNum").is(":checked")) {
                if (!isOdd(j)) {
                    continue
                }
            } else {
                if ($("#secEvenNum").is(":checked")) {
                    if (isOdd(j)) {
                        continue
                    }
                }
            }
            if ($("#doubleNum").is(":checked")) {
                if (i != j) {
                    continue
                }
            } else {
                if ($("#doubleNumX").is(":checked")) {
                    if (i == j) {
                        continue
                    }
                }
            }
            if ($("#brotherNum").is(":checked")) {
                if (!((j == i + 1) || (j == i - 1) || (j == 0 && i == 9) || (i == 0 && j == 9))) {
                    continue
                }
            } else {
                if ($("#brotherNumX").is(":checked")) {
                    if ((j == i + 1) || (j == i - 1) || (j == 0 && i == 9) || (i == 0 && j == 9)) {
                        continue
                    }
                }
            }
            if ($("#contain").val().length > 0) {
                var b = false;
                var a = $("#contain").val();
                for (k = 0; k < a.length; k++) {
                    if (a[k] == i || a[k] == j) {
                        b = true;
                        break
                    }
                }
                if (!b) {
                    continue
                }
            }
            if ($("#exclude").val().length > 0) {
                var b = false;
                var a = $("#exclude").val();
                for (k = 0; k < a.length; k++) {
                    if (a[k] == i || a[k] == j) {
                        b = true;
                        break
                    }
                }
                if (b) {
                    continue
                }
            }
            if ($("#fsInclude").val().length > 0) {
                var b = false;
                var a = $("#fsInclude").val();
                for (k = 0; k < a.length; k++) {
                    if (a[k] == i) {
                        b = true;
                        break
                    }
                }
                if (!b) {
                    continue
                }
            }
            if ($("#secInclude").val().length > 0) {
                var b = false;
                var a = $("#secInclude").val();
                for (k = 0; k < a.length; k++) {
                    if (a[k] == j) {
                        b = true;
                        break
                    }
                }
                if (!b) {
                    continue
                }
            }
            if ($("#instantCheck input:checked").length > 0 || $("#instantCheck input:text").filter(function() {
                    return $(this).val() != ""
                }).length > 0) {
                $("input[name=chk" + i + j + "]").prop("checked", true);
                $("input[name=chk" + i + j + "]").parent().toggleClass("selected");
                $(".bcontrol input:text").prop("readonly", false)
            }
        }
    }
}

function gen3zdwList(g, b, h) {
    var d = 0;
    var f = 0;
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            for (k = 0; k < 10; k++) {
                if ($("#fsOddNum").is(":checked")) {
                    if (!isOdd(i)) {
                        continue
                    }
                } else {
                    if ($("#fsEvenNum").is(":checked")) {
                        if (isOdd(i)) {
                            continue
                        }
                    }
                }
                if ($("#secOddNum").is(":checked")) {
                    if (!isOdd(j)) {
                        continue
                    }
                } else {
                    if ($("#secEvenNum").is(":checked")) {
                        if (isOdd(j)) {
                            continue
                        }
                    }
                }
                if ($("#trdOddNum").is(":checked")) {
                    if (!isOdd(k)) {
                        continue
                    }
                } else {
                    if ($("#trdEvenNum").is(":checked")) {
                        if (isOdd(k)) {
                            continue
                        }
                    }
                }
                if ($("#doubleNum").is(":checked")) {
                    if (!(i == j || i == k || j == k)) {
                        continue
                    }
                } else {
                    if ($("#doubleNumX").is(":checked")) {
                        if ((i == j || i == k || j == k)) {
                            continue
                        }
                    }
                }
                if ($("#tripleNum").is(":checked")) {
                    if (i != j || i != k || j != k) {
                        continue
                    }
                } else {
                    if ($("#tripleNumX").is(":checked")) {
                        if (!(i != j || i != k || j != k)) {
                            continue
                        }
                    }
                }
                if ($("#twoBroNum").is(":checked")) {
                    if (!((j == i + 1) || (j == i - 1) || (j == 0 && i == 9) || (i == 0 && j == 9) || (j == k + 1) || (j == k - 1) || (j == 0 && k == 9) || (k == 0 && j == 9) || (i == k + 1) || (i == k - 1) || (i == 0 && k == 9) || (k == 0 && i == 9))) {
                        continue
                    }
                } else {
                    if ($("#twoBroNumX").is(":checked")) {
                        if (((j == i + 1) || (j == i - 1) || (j == 0 && i == 9) || (i == 0 && j == 9) || (j == k + 1) || (j == k - 1) || (j == 0 && k == 9) || (k == 0 && j == 9) || (i == k + 1) || (i == k - 1) || (i == 0 && k == 9) || (k == 0 && i == 9))) {
                            continue
                        }
                    }
                }
                if ($("#threeBroNum").is(":checked")) {
                    if (!(isBrother([i, j, k]))) {
                        continue
                    }
                } else {
                    if ($("#threeBroNumX").is(":checked")) {
                        if ((isBrother([i, j, k]))) {
                            continue
                        }
                    }
                }
                if ($("#contain").val().length > 0) {
                    var m = false;
                    var q = $("#contain").val();
                    for (p = 0; p < q.length; p++) {
                        if (q[p] == i || q[p] == j || q[p] == k) {
                            m = true;
                            break
                        }
                    }
                    if (!m) {
                        continue
                    }
                }
                if ($("#exclude").val().length > 0) {
                    var m = false;
                    var q = $("#exclude").val();
                    for (p = 0; p < q.length; p++) {
                        if (q[p] == i || q[p] == j || q[p] == k) {
                            m = true;
                            break
                        }
                    }
                    if (m) {
                        continue
                    }
                }
                if ($("#fsInclude").val().length > 0) {
                    var m = false;
                    var q = $("#fsInclude").val();
                    for (p = 0; p < q.length; p++) {
                        if (q[p] == i) {
                            m = true;
                            break
                        }
                    }
                    if (!m) {
                        continue
                    }
                }
                if ($("#secInclude").val().length > 0) {
                    var m = false;
                    var q = $("#secInclude").val();
                    for (p = 0; p < q.length; p++) {
                        if (q[p] == j) {
                            m = true;
                            break
                        }
                    }
                    if (!m) {
                        continue
                    }
                }
                if ($("#trdInclude").val().length > 0) {
                    var m = false;
                    var q = $("#trdInclude").val();
                    for (p = 0; p < q.length; p++) {
                        if (q[p] == k) {
                            m = true;
                            break
                        }
                    }
                    if (!m) {
                        continue
                    }
                }
                if ($("#instantCheck input:checked").length > 0 || $("#instantCheck input:text").filter(function() {
                        return $(this).val() != ""
                    }).length > 0) {
                    if (d == 0) {
                        var o = $("<table>").addClass("table_ball table" + f).appendTo($(".bet_table"));
                        var n = $("<tr>").addClass("head").appendTo(o);
                        n.append("<th>" + g + "位</th>");
                        n.append("<th>" + b + "位</th>");
                        n.append("<th>" + h + (h.length < 2 ? "位" : "") + "</th>");
                        n.append("<th>选择</th>")
                    }
                    d++;
                    var c = "" + i + j + k;
                    var n = $("<tr>").appendTo($(".table" + f));
                    n.append('<th class="name" title="' + i + '"><span class="b' + i + '">' + i + "</span></th>");
                    n.append('<th class="name" title="' + j + '"><span class="b' + j + '">' + j + "</span></th>");
                    n.append('<th class="name" title="' + k + '"><span class="b' + k + '">' + k + "</span></th>");
                    var e = $("<td>").addClass("check").appendTo(n);
                    var a = $('<input type="checkbox" name="chk' + c + '" value="' + c + '" />').appendTo(e);
                    a.prop("checked", true);
                    a.parent().toggleClass("selected");
                    $(".bcontrol input:text").prop("readonly", false);
                    if (d == 10) {
                        d = 0;
                        f++
                    }
                }
            }
        }
    }
}

function isOdd(a) {
    return a % 2
}

function getGgBet() {
    var f = $("#" + gamegg);
    var h = f.attr("title");
    var a = $("#o_" + gamegg).text();
    var d = $("#quickAmount input").val();
    if (isNaN(d) || isNaN(a) || d <= 0 || a <= 0) {
        return null
    }
    var g = $("#d_" + gamegg).text();
    g = g.substring(g.indexOf("(") + 1, g.indexOf(")"));
    var e = "";
    oddsDetail = "";
    var c = $("#" + gamegg).find(".selected");
    c.each(function() {
        var n = $(this);
        var m = n.attr("title").split(",");
        if (e.length > 0) {
            e += ",";
            oddsDetail += "x"
        }
        e += m[0];
        oddsDetail += n.text()
    });
    e += "@" + oddsDetail;
    var b = {
        title: h,
        text: g,
        game: gamegg,
        contents: e,
        odds: a,
        amount: d
    };
    return b
}

function chkOpen() {
    var a = PeriodPanel.period;
    if (!a || a.status != 1) {
        parent.showMsg("后台未开盘");
        return false
    } else {
        return true
    }
}

function updateGgOdds(b) {
    var c = $("#" + gamegg).find(".selected");
    var e = "已选号码数";
    var a = "--";
    if (c.length >= b) {
        var d;
        a = 1;
        e += "(";
        c.each(function() {
            var f = $(this);
            a *= f.html();
            d = f.attr("title").split(",");
            if (e.length > 6) {
                e += " x "
            }
            e += d[1]
        });
        a = a.toFixed(2);
        e += ")"
    }
    e += "：@ ";
    $("#d_" + gamegg).text(e);
    $("#o_" + gamegg).text(a);
    $("#quickAmount").focus()
}

function resetZuheChuang() {
    combiCount = 0;
    var c = $("#zuhechuang tbody");
    if (c.length > 0 && MULTIPLE) {
        if (!zuheSelection && MULTIPLE.length > 2) {
            var a = MULTIPLE[3];
            zuheSelection = a[0];
            zuheNumberInRow = zuheSelection
        }
        c.empty();
        var b = $("<tr>").append($("<th>").append("尚未选满" + zuheSelection + "个球"));
        var d = $("<div>").addClass("scrollit").append($("<table>").append(b));
        $("<tr>").appendTo(c).append($("<td>").append(d))
    }
}

function getGroupSelection(a) {
    var c = "";
    var b = '.first input[type="checkbox"]:checked';
    if (a > 0) {
        b = '.second input[type="checkbox"]:checked'
    }
    $(b).each(function() {
        if (c.length > 0) {
            c += ","
        }
        c += $(this).val()
    });
    return c
}

function displayGameMessage(a, c) {
    if (c && a.prop("readonly") && $("#bet_panel input[type='checkbox']:checked").length > 0 && $("#bet_panel input[type='checkbox'][readonly]").length > 0) {
        var b = "";
        switch (mpType) {
            case 2:
                b = "只能拖10组球号！";
                break;
            case 5:
                if (a.closest("table").hasClass("first")) {
                    b = "只能勾选1组生肖！"
                } else {
                    b = "只能勾选1组尾数！"
                }
                break;
            default:
                b = "只能勾选" + c[1] + "组球号！"
        }
        parent.showMsg(b)
    }
}
$(document).keypress(function(a) {
    if (a.which == 13) {
        bet()
    }
});

function getPreviousFocus() {
    if ($("#bet_panel td.selected").length > 0) {
        input = $("#bet_panel td.selected").find("input");
        if (input) {
            input.focus()
        }
    }
}

function gen4zdwList(h, y, w, c) {
    var r = 0;
    var s = 0;
    var f;
    var v = $("#instantCheck input:checked").length;
    var K = $("#instantCheck input:text").filter(function() {
        return $(this).val() != ""
    }).length;
    var G = "";
    var o = $("#fsOddNum").is(":checked");
    var B = $("#fsEvenNum").is(":checked");
    var m = $("#secOddNum").is(":checked");
    var I = $("#secEvenNum").is(":checked");
    var C = $("#trdOddNum").is(":checked");
    var E = $("#trdEvenNum").is(":checked");
    var F = $("#fourthOddNum").is(":checked");
    var H = $("#fourthEvenNum").is(":checked");
    var D = $("#doubleNum").is(":checked");
    var x = $("#doubleNumX").is(":checked");
    var M = $("#tripleNum").is(":checked");
    var e = $("#tripleNumX").is(":checked");
    var n = $("#quadrupleNum").is(":checked");
    var u = $("#quadrupleNumX").is(":checked");
    var O = $("#fourBroNum").is(":checked");
    var N = $("#fourBroNumX").is(":checked");
    var P = $("#contain").val().length;
    var J = $("#exclude").val().length;
    var b = $("#fsInclude").val().length;
    var q = $("#secInclude").val().length;
    var a = $("#trdInclude").val().length;
    var L = $("#fourthInclude").val().length;
    var g = 0;
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            for (k = 0; k < 10; k++) {
                for (l = 0; l < 10; l++) {
                    if (o) {
                        if (!isOdd(i)) {
                            continue
                        }
                    } else {
                        if (B) {
                            if (isOdd(i)) {
                                continue
                            }
                        }
                    }
                    if (m) {
                        if (!isOdd(j)) {
                            continue
                        }
                    } else {
                        if (I) {
                            if (isOdd(j)) {
                                continue
                            }
                        }
                    }
                    if (C) {
                        if (!isOdd(k)) {
                            continue
                        }
                    } else {
                        if (E) {
                            if (isOdd(k)) {
                                continue
                            }
                        }
                    }
                    if (F) {
                        if (!isOdd(l)) {
                            continue
                        }
                    } else {
                        if (H) {
                            if (isOdd(l)) {
                                continue
                            }
                        }
                    }
                    if (D) {
                        if (!(isDuplicateBalls([i, j, k, l], 2))) {
                            continue
                        }
                    } else {
                        if (x) {
                            if (isDuplicateBalls([i, j, k, l], 2)) {
                                continue
                            }
                        }
                    }
                    if (M) {
                        if (!(isDuplicateBalls([i, j, k, l], 3))) {
                            continue
                        }
                    } else {
                        if (e) {
                            if ((isDuplicateBalls([i, j, k, l], 3))) {
                                continue
                            }
                        }
                    }
                    if (n) {
                        if (!(isDuplicateBalls([i, j, k, l], 4))) {
                            continue
                        }
                    } else {
                        if (u) {
                            if ((isDuplicateBalls([i, j, k, l], 4))) {
                                continue
                            }
                        }
                    }
                    if (O) {
                        if (!(isBrother([i, j, k, l]))) {
                            continue
                        }
                    } else {
                        if (N) {
                            if ((isBrother([i, j, k, l]))) {
                                continue
                            }
                        }
                    }
                    if (P > 0) {
                        var z = false;
                        var A = $("#contain").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == i || A[p] == j || A[p] == k || A[p] == l) {
                                z = true;
                                break
                            }
                        }
                        if (!z) {
                            continue
                        }
                    }
                    if (J > 0) {
                        var z = false;
                        var A = $("#exclude").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == i || A[p] == j || A[p] == k || A[p] == l) {
                                z = true;
                                break
                            }
                        }
                        if (z) {
                            continue
                        }
                    }
                    if (fsInclude > 0) {
                        var z = false;
                        var A = $("#fsInclude").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == i) {
                                z = true;
                                break
                            }
                        }
                        if (!z) {
                            continue
                        }
                    }
                    if (q > 0) {
                        var z = false;
                        var A = $("#secInclude").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == j) {
                                z = true;
                                break
                            }
                        }
                        if (!z) {
                            continue
                        }
                    }
                    if (a > 0) {
                        var z = false;
                        var A = $("#trdInclude").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == k) {
                                z = true;
                                break
                            }
                        }
                        if (!z) {
                            continue
                        }
                    }
                    if (L > 0) {
                        var z = false;
                        var A = $("#fourthInclude").val();
                        for (p = 0; p < A.length; p++) {
                            if (A[p] == l) {
                                z = true;
                                break
                            }
                        }
                        if (!z) {
                            continue
                        }
                    }
                    if (v > 0 || K > 0) {
                        g++;
                        if (r == 0) {
                            G += "<table class='table_ball table" + s + "'>";
                            G += "<tr class='head'>";
                            G += "<th>" + h + "位</th>";
                            G += "<th>" + y + "位</th>";
                            G += "<th>" + w + "位</th>";
                            G += "<th>" + c + "位</th>";
                            G += "<th>选择</th>";
                            G += "</tr>"
                        }
                        r++;
                        var d = "" + i + j + k + l;
                        G += "<tr>";
                        G += '<th class="name" title=' + i + '><span class="b' + i + '">' + i + "</span></th>";
                        G += '<th class="name" title=' + j + '><span class="b' + j + '">' + j + "</span></th>";
                        G += '<th class="name" title=' + k + '><span class="b' + k + '">' + k + "</span></th>";
                        G += '<th class="name" title=' + l + '><span class="b' + l + '">' + l + "</span></th>";
                        G += '<td class="check selected">';
                        G += '<input type="checkbox" name="chk' + d + '" checked value="' + d + '" />';
                        G += "</tr>";
                        if (r == 10) {
                            G += "</table>";
                            r = 0;
                            s++
                        }
                    }
                }
            }
        }
    }
    if (g > 0) {
        $(".bcontrol input:text").prop("readonly", false)
    }
    $(".bet_table").html(G)
}

function isDuplicateBalls(h, g) {
    var f = new Array(10);
    var b = h.length;
    for (var e = 0; e < h.length; e++) {
        var d = h[e];
        if (d <= f.length - 1) {
            if (f[d] == undefined) {
                f[d] = 1
            } else {
                f[d] = f[d] + 1
            }
        }
    }
    var a = 0;
    for (var c = 0; c < f.length; c++) {
        if (f[c] != undefined && f[c] > a) {
            a = f[c]
        }
    }
    if (a >= g) {
        return true
    }
    return false
}

function isBrother(a) {
    var f = new Array(10);
    var m = a.length;
    for (var e = 0; e < a.length; e++) {
        var g = a[e];
        if (g <= f.length - 1) {
            f[g] = 1
        }
    }
    var n;
    var b = 0;
    for (var d = 0; d < f.length; d++) {
        if (b == m) {
            break
        } else {
            if (f[d] == 1) {
                if (n == undefined) {
                    n = d
                }
                b++
            } else {
                if (n != undefined) {
                    if (n == 0) {
                        for (var c = 1, h = m - b; c <= h; c++) {
                            if (f[f.length - c] != 1) {
                                return false
                            }
                            b++;
                            if (b == m) {
                                return true
                            }
                        }
                    }
                    return false
                }
            }
        }
    }
    return b == m ? true : false
}

function oddsDetail() {
    var a = [];
    $.getJSON("odds/load?lottery=" + lottery, function(b) {
        if (b) {
            a = b
        }
        parent.showOddsDetail(a)
    });
    return
}

function oddsDetailPB() {
    var a = [];
    $.getJSON("odds/load?lottery=" + lottery, function(b) {
        if (b) {
            a = b
        }
        parent.showOddsDetailPB(a)
    });
    return
};