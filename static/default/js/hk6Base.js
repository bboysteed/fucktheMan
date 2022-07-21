var SERVERDATE;
var DATEMODEL;
var zuheSelection;
var zuheNumberInRow;
var zuheOdds;
var gamegg;
var hk6SpecialLm;
var arrayNo = new Array("01,13,25,37,49", "02,14,26,38", "03,15,27,39", "04,16,28,40", "05,17,29,41", "06,18,30,42", "07,19,31,43", "08,20,32,44", "09,21,33,45", "10,22,34,46", "11,23,35,47", "12,24,36,48");
var arrNo = [{
    begindate: "2014-01-30",
    enddate: "2015-02-18",
    an: "马,蛇,龙,兔,虎,牛,鼠,猪,狗,鸡,猴,羊"
}, {
    begindate: "2015-02-19",
    enddate: "2016-02-07",
    an: "羊,马,蛇,龙,兔,虎,牛,鼠,猪,狗,鸡,猴"
}, {
    begindate: "2016-02-08",
    enddate: "2017-01-27",
    an: "猴,羊,马,蛇,龙,兔,虎,牛,鼠,猪,狗,鸡"
}, {
    begindate: "2017-01-28",
    enddate: "2018-02-15",
    an: "鸡,猴,羊,马,蛇,龙,兔,虎,牛,鼠,猪,狗"
}, {
    begindate: "2018-02-16",
    enddate: "2019-02-04",
    an: "狗,鸡,猴,羊,马,蛇,龙,兔,虎,牛,鼠,猪"
}, {
    begindate: "2019-02-05",
    enddate: "2020-01-24",
    an: "猪,狗,鸡,猴,羊,马,蛇,龙,兔,虎,牛,鼠"
}, {
    begindate: "2020-01-25",
    enddate: "2021-02-11",
    an: "鼠,猪,狗,鸡,猴,羊,马,蛇,龙,兔,虎,牛"
}, {
    begindate: "2021-02-12",
    enddate: "2022-01-31",
    an: "牛,鼠,猪,狗,鸡,猴,羊,马,蛇,龙,兔,虎"
}, {
    begindate: "2022-02-01",
    enddate: "2023-01-21",
    an: "虎,牛,鼠,猪,狗,鸡,猴,羊,马,蛇,龙,兔"
}, {
    begindate: "2023-01-22",
    enddate: "2024-02-09",
    an: "兔,虎,牛,鼠,猪,狗,鸡,猴,羊,马,蛇,龙"
}];
var arrWxNo = [{
    begindate: "2015-02-19",
    enddate: "2016-02-07",
    j: "01,02,15,16,23,24,31,32,45,46",
    m: "05,06,13,14,27,28,35,36,43,44",
    s: "03,04,11,12,19,20,33,34,41,42,49",
    h: "07,08,21,22,29,30,37,38",
    t: "09,10,17,18,25,26,39,40,47,48"
}, {
    begindate: "2016-02-08",
    enddate: "2017-01-27",
    j: "02,03,16,17,24,25,32,33,46,47",
    m: "06,07,14,15,28,29,36,37,44,45",
    s: "04,05,12,13,20,21,34,35,42,43",
    h: "01,08,09,22,23,30,31,38,39",
    t: "10,11,18,19,26,27,40,41,48,49"
}, {
    begindate: "2017-01-28",
    enddate: "2018-02-15",
    j: "03,04,17,18,25,26,33,34,47,48",
    m: "07,08,15,16,29,30,37,38,45,46",
    s: "05,06,13,14,21,22,35,36,43,44",
    h: "01,02,09,10,23,24,31,32,39,40",
    t: "11,12,19,20,27,28,41,42,49"
}, {
    begindate: "2018-02-16",
    enddate: "2019-02-04",
    j: "04,05,18,19,26,27,34,35,48,49",
    m: "01,08,09,16,17,30,31,38,39,46,47",
    s: "06,07,14,15,22,23,36,37,44,45",
    h: "02,03,10,11,24,25,32,33,40,41",
    t: "12,13,20,21,28,29,42,43"
}, {
    begindate: "2019-02-05",
    enddate: "2020-01-24",
    j: "05,06,19,20,27,28,35,36,49",
    m: "01,02,09,10,17,18,31,32,39,40,47,48",
    s: "07,08,15,16,23,24,37,38,45,46",
    h: "03,04,11,12,25,26,33,34,41,42",
    t: "13,14,21,22,29,30,43,44"
}, {
    begindate: "2020-01-25",
    enddate: "2021-02-11",
    j: "06,07,20,21,28,29,36,37",
    m: "02,03,10,11,18,19,32,33,40,41,48,49",
    s: "08,09,16,17,24,25,38,39,46,47",
    h: "04,05,12,13,26,27,34,35,42,43",
    t: "01,14,15,22,23,30,31,44,45"
}, {
    begindate: "2021-02-12",
    enddate: "2022-01-31",
    j: "07,08,21,22,29,30,37,38",
    m: "03,04,11,12,19,20,33,34,41,42,49",
    s: "09,10,17,18,25,26,39,40,47,48",
    h: "05,06,13,14,27,28,35,36,43,44",
    t: "01,02,15,16,23,24,31,32,45,46"
}, {
    begindate: "2022-02-01",
    enddate: "2023-01-21",
    j: "01,08,09,22,23,30,31,38,39",
    m: "04,05,12,13,20,21,34,35,42,43",
    s: "10,11,18,19,26,27,40,41,48,49",
    h: "06,07,14,15,28,29,36,37,44,45",
    t: "02,03,16,17,24,25,32,33,46,47"
}, {
    begindate: "2023-01-22",
    enddate: "2024-02-09",
    j: "01,02,09,10,23,24,31,32,39,40",
    m: "05,06,13,14,21,22,35,36,43,44",
    s: "11,12,19,20,27,28,41,42,49",
    h: "07,08,15,16,29,30,37,38,45,46",
    t: "03,04,17,18,25,26,33,34,47,48"
}];
var arrRGB = {
    r: "01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46",
    g: "05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49",
    b: "03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48"
};
var arrTail = new Array("10,20,30,40", "01,11,21,31,41", "02,12,22,32,42", "03,13,23,33,43", "04,14,24,34,44", "05,15,25,35,45", "06,16,26,36,46", "07,17,27,37,47", "08,18,28,38,48", "09,19,29,39,49");

function getYearAnimal(e) {
    var d = "";
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(e)) {
        e = new Date(e);
        e.setHours(0, 0, 0, 0)
    }
    for (var b = 0; b < arrNo.length; b++) {
        var c = arrNo[b];
        var a = new Date(c.begindate);
        var f = new Date(c.enddate);
        a.setHours(0, 0, 0, 0);
        f.setHours(23, 59, 59, 99);
        if (e >= a && e <= f) {
            d = c.an;
            break
        }
    }
    return d
}

function getZodiacToNo(f, e) {
    var c = "";
    var a = getYearAnimal(e);
    var d = a.split(",");
    for (var b = 0; b < d.length; b++) {
        if (d[b] == f) {
            c = arrayNo[b];
            break
        }
    }
    return c
}
var hk6_an_num = {
    1: "鼠",
    2: "牛",
    3: "虎",
    4: "兔",
    5: "龙",
    6: "蛇",
    7: "马",
    8: "羊",
    9: "猴",
    10: "鸡",
    11: "狗",
    12: "猪"
};
var hk6_color = {
    red: [1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46],
    blue: [3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48],
    green: [5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49]
};
var hk6_lmx = {
    jq: [1, 6, 7, 9, 10, 11],
    ys: [0, 3, 2, 4, 5, 8],
    tx: [3, 4, 1, 11, 8, 6],
    dx: [0, 2, 5, 7, 10, 9],
    qx: [0, 1, 2, 3, 4, 5],
    hx: [6, 7, 8, 9, 10, 11],
    odd: [1, 3, 5, 7, 9, 11],
    even: [0, 2, 4, 6, 8, 10]
};
var hk6_special_lm = ["LM4QZ", "LM3QZ", "LM3Z2", "LM2QZ", "LM2ZT", "LMTC"];
$(function() {
    $("#quick_sec_table td").each(function() {
        var a = $(this);
        a.hover(function() {
            a.addClass("hover")
        }, function() {
            a.removeClass("hover")
        })
    });
    $("#bntquick").click(function() {
        if ($(this).val() == "快捷投注") {
            $("#changlong").hide();
            $("#quick_sec_table").show();
            $(this).val("两面长龙")
        } else {
            $("#changlong").show();
            $("#quick_sec_table").hide();
            $(this).val("快捷投注")
        }
    });
    SERVERDATE = (new Date()).format("yyyy-MM-dd");
    $(".quick_sec_table tr td").click(function() {
        var g = PeriodPanel.period;
        if (!g || g.status != 1) {
            parent.showMsg("后台未开盘");
            return
        }
        var f = $(this).attr("data");
        var e = f.split("-");
        if (e[0] == "sple") {
            _REMOVE = $(this).hasClass("on");
            sec_simple(e[1]);
            if (e[1] == "clear") {
                $(".quick_sec_table td").removeClass("on")
            } else {
                if (e[1] == "all") {
                    $(".quick_sec_table").find("[data*='tm']").addClass("on")
                } else {
                    if (e[1] == "fx") {
                        $(".quick_sec_table").find("[data*='tm']").toggleClass("on")
                    } else {
                        $(this).toggleClass("on")
                    }
                }
            }
        } else {
            $(this).toggleClass("on");
            if (e[0] == "lm") {
                var a = $(this).hasClass("on");
                $(".quick_sec_table td").not(this).removeClass("on");
                resetBets();
                if (a) {
                    $(this).toggleClass("on")
                }
            }
            if ($(this).hasClass("on")) {
                oper_sel(e)
            } else {
                _REMOVE = true;
                oper_sel(e);
                _REMOVE = false;
                $(".quick_sec_table td.on").each(function() {
                    oper_sel($(this).attr("data").split("-"))
                })
            }
        }
        var c = $("#bet_panel th.selected").length;
        var b = $("#betcount").text(c);
        if (c == 0) {
            b.parent().hide()
        } else {
            b.parent().show()
        }
    });
    $("input[name=game]").click(function() {
        zuheSelection = $(this).val().split(",")[0];
        zuheNumberInRow = zuheSelection;
        hk6SpecialLm = false;
        var c = $(this).attr("id").replace("g", "o");
        for (var e in hk6_special_lm) {
            var d = hk6_special_lm[e];
            if (c.indexOf(d) >= 0) {
                hk6SpecialLm = true;
                break
            }
        }
        if (hk6SpecialLm) {
            var a = $("span[name='mpOdds']");
            if (a.length) {
                var b;
                if (typeof hk6GameType == "undefined") {
                    if (typeof HK6type == "undefined") {
                        b = null
                    } else {
                        b = HK6type
                    }
                } else {
                    b = hk6GameType
                }
                c = c.replace("_0", "");
                a.html(function() {
                    var h = $(this).data("item");
                    var k = c + "_" + h;
                    var i = $("#" + k).text();
                    var j = $("#" + k + "_1");
                    if (j.length) {
                        switch (b) {
                            case "0":
                            case "4":
                            case "5":
                                i += "/<br>" + j.text();
                                break;
                            default:
                                i += "/" + j.text()
                        }
                    }
                    return i
                })
            }
        } else {
            zuheOdds = $("#" + c).text();
            var g = $("#" + c + "_1");
            var f = "";
            if (g.length > 0) {
                f = g.text()
            }
            if ($("span[name='mpOdds']").length > 0) {
                var c = zuheOdds;
                if (f.length > 0) {
                    c += "/" + f
                }
                $("span[name='mpOdds']").text(c)
            }
        }
        resetZuheChuang()
    }).attr("checked", false);
    $("#bet_panel").on("click", 'td, input[type="checkbox"]', function() {
        var a = $(this);
        if (!a.is(":input")) {
            a = a.find("input")
        }
        if (a.prop("readonly")) {
            return
        }
        if (a.attr("name") == "zodiacswitch") {
            if (a.attr("type") != "checkbox") {
                a = a.find("input[type='checkbox']")
            }
            var b = a.val();
            if (b && b.length < 5) {
                a.val(getZodiacToNo(a.attr("title"), SERVERDATE))
            }
        } else {
            if (a.attr("name") == "tailswitch") {
                if (a.attr("type") != "checkbox") {
                    a = a.find("input[type='checkbox']")
                }
                var b = a.val();
                if (b && b.length < 5) {
                    a.val(getRGBorTailToNo(a.attr("title"), hk6GameType))
                }
            }
        }
        populateZuheChuang()
    });
    if (gamegg) {
        $("#" + gamegg + " td").click(function() {
            var a = $(this);
            if (chkOpen()) {
                if (a.attr("class").indexOf("selected") < 0) {
                    var b = a.parent().children().index(a) + 1;
                    $("#" + gamegg + " tr td:nth-child(" + b + ")").removeClass("selected")
                }
                a.toggleClass("selected");
                updateGgOdds(2)
            }
        })
    }
    $("input[name='gameswitch']").click(function() {
        var a = $(this);
        window.location.href = a.val()
    })
});
var oper_sel = function(a) {
    if (a[0] == "col") {
        sec_col(a[1], a[2])
    } else {
        if (a[0] == "sple") {
            sec_simple(a[1])
        } else {
            if (a[0] == "an") {
                sec_animal(a[1])
            } else {
                if (a[0] == "tm") {
                    oper_class(a[1])
                } else {
                    if (a[0] == "lm") {
                        checkLmx(a)
                    } else {
                        if (a[0] == "lmds") {
                            setLmds(a)
                        } else {
                            if (a[0] == "lmqs") {
                                checkLmqs(a[1])
                            }
                        }
                    }
                }
            }
        }
    }
};
var _REMOVE = false;
var oper_class = function(a) {
    var b = $("." + HK6type + "_" + (a >= 10 ? a : "0" + a));
    if (_REMOVE) {
        b.removeClass("selected")
    } else {
        b.addClass("selected")
    }
    setDefaultBet(b)
};
var oper_class_lmx = function(a) {
    var b = $("." + HK6type + "_" + a);
    if (_REMOVE) {
        b.removeClass("selected")
    } else {
        b.addClass("selected")
    }
    setDefaultBet(b)
};
var oper_class_lmqs = function(a) {
    var b = "BZ_";
    if (_REMOVE) {
        if ($("." + HK6type + "_" + a + " input:checkbox").prop("checked")) {
            $("." + HK6type + "_" + a + " input:checkbox").click()
        }
        if ($("." + HK6type + b + a + " input:checkbox").prop("checked")) {
            $("." + HK6type + b + a + " input:checkbox").click()
        }
    } else {
        if (!$("." + HK6type + "_" + a + " input:checkbox").prop("checked")) {
            $("." + HK6type + "_" + a + " input:checkbox").click()
        }
        if (!$("." + HK6type + b + a + " input:checkbox").prop("checked")) {
            $("." + HK6type + b + a + " input:checkbox").click()
        }
    }
};
var oper_class_clear = function(a) {
    var b = $("." + HK6type + "_" + (a >= 10 ? a : "0" + a));
    b.removeClass("selected");
    b.find("input").val("")
};
var sec_col = function(a, b) {
    var c = function(f) {
        for (var e = 0; e < f.length; e++) {
            var d = f[e];
            if (b == "") {
                oper_class(d)
            } else {
                if (b == "dan" && d % 2 == 1) {
                    oper_class(d)
                } else {
                    if (b == "shuang" && d % 2 == 0) {
                        oper_class(d)
                    } else {
                        if (b == "da" && d > 24 && d < 49) {
                            oper_class(d)
                        } else {
                            if (b == "xiao" && d <= 24) {
                                oper_class(d)
                            }
                        }
                    }
                }
            }
        }
    };
    if (a == "red") {
        c(hk6_color.red)
    } else {
        if (a == "blue") {
            c(hk6_color.blue)
        } else {
            if (a == "green") {
                c(hk6_color.green)
            }
        }
    }
};
var sec_simple = function(b) {
    var a = function() {
        for (var d = 1; d <= 49; d++) {
            var c = ((d >= 10) ? ((d - (d % 10)) / 10 + (d % 10)) : d);
            if (b == "all") {
                oper_class(d)
            } else {
                if (b == "clear") {
                    oper_class_clear(d)
                } else {
                    if (b == "fx") {
                        if ($("." + HK6type + "_" + (d >= 10 ? d : "0" + d)).hasClass("selected")) {
                            oper_class_clear(d)
                        } else {
                            oper_class(d)
                        }
                    } else {
                        if (b == "danM" && d % 2 == 1) {
                            oper_class(d)
                        } else {
                            if (b == "shuangM" && d % 2 == 0) {
                                oper_class(d)
                            } else {
                                if (b == "daM" && d > 24 && d < 49) {
                                    oper_class(d)
                                } else {
                                    if (b == "xiaoM" && d <= 24) {
                                        oper_class(d)
                                    } else {
                                        if (b == "xdan" && d % 2 == 1 && d <= 24) {
                                            oper_class(d)
                                        } else {
                                            if (b == "xshuang" && d % 2 == 0 && d <= 24) {
                                                oper_class(d)
                                            } else {
                                                if (b == "ddan" && d % 2 == 1 && d > 24) {
                                                    oper_class(d)
                                                } else {
                                                    if (b == "dshuang" && d % 2 == 0 && d > 24) {
                                                        oper_class(d)
                                                    } else {
                                                        if (b == "hdan" && c % 2 == 1) {
                                                            oper_class(d)
                                                        } else {
                                                            if (b == "hshuang" && c % 2 == 0) {
                                                                oper_class(d)
                                                            } else {
                                                                if (b == "hda" && c > 6) {
                                                                    oper_class(d)
                                                                } else {
                                                                    if (b == "hxiao" && c <= 6) {
                                                                        oper_class(d)
                                                                    } else {
                                                                        if (b == "tou0" && d < 10) {
                                                                            oper_class(d)
                                                                        } else {
                                                                            if (b == "tou1" && d < 20 && d >= 10) {
                                                                                oper_class(d)
                                                                            } else {
                                                                                if (b == "tou2" && d < 30 && d >= 20) {
                                                                                    oper_class(d)
                                                                                } else {
                                                                                    if (b == "tou3" && d < 40 && d >= 30) {
                                                                                        oper_class(d)
                                                                                    } else {
                                                                                        if (b == "tou4" && d < 50 && d >= 40) {
                                                                                            oper_class(d)
                                                                                        } else {
                                                                                            if (b == "wei0" && d % 10 == 0) {
                                                                                                oper_class(d)
                                                                                            } else {
                                                                                                if (b == "wei1" && d % 10 == 1) {
                                                                                                    oper_class(d)
                                                                                                } else {
                                                                                                    if (b == "wei2" && d % 10 == 2) {
                                                                                                        oper_class(d)
                                                                                                    } else {
                                                                                                        if (b == "wei3" && d % 10 == 3) {
                                                                                                            oper_class(d)
                                                                                                        } else {
                                                                                                            if (b == "wei4" && d % 10 == 4) {
                                                                                                                oper_class(d)
                                                                                                            } else {
                                                                                                                if (b == "wei5" && d % 10 == 5) {
                                                                                                                    oper_class(d)
                                                                                                                } else {
                                                                                                                    if (b == "wei6" && d % 10 == 6) {
                                                                                                                        oper_class(d)
                                                                                                                    } else {
                                                                                                                        if (b == "wei7" && d % 10 == 7) {
                                                                                                                            oper_class(d)
                                                                                                                        } else {
                                                                                                                            if (b == "wei8" && d % 10 == 8) {
                                                                                                                                oper_class(d)
                                                                                                                            } else {
                                                                                                                                if (b == "wei9" && d % 10 == 9) {
                                                                                                                                    oper_class(d)
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    a()
};
var sec_animal = function(a) {
    var e = hk6_an_num[a];
    var c = getZodiacToNo(e, SERVERDATE);
    var d = c.split(",");
    for (var b = 0; b < d.length; b++) {
        var a = Number(d[b]);
        oper_class(a)
    }
};

function get_animal_by_ball(d) {
    var a = Number(d) % 12 - 1;
    if (a == -1) {
        a = 11
    }
    var c = getYearAnimal(SERVERDATE);
    var b = c.split(",");
    return b[a]
}
var get_animal_by_ball_time = function(e, b) {
    var a = Number(e) % 12 - 1;
    if (a == -1) {
        a = 11
    }
    var d = getYearAnimal(b);
    var c = d.split(",");
    return c[a]
};

function analyzeBall(a, f) {
    var h = PAGE == "mp";
    var e = "";
    var g = a.split(",");
    var j = 0;

    function b(i) {
        var k = '<span class="b' + i + '">' + i + "</span>";
        if (h) {
            var l = '<span name="mpOdds" data-item="' + i + '" class="ball_odds odds"></span>';
            k = '<div class="zodiac_panel">' + k + "<br>" + l + "</div>"
        }
        return k
    }
    for (var c = 0; c < g.length; c++) {
        var d = g[c];
        if (f == 1) {
            if (d != 49) {
                e += b(d)
            }
        } else {
            e += b(d)
        }
    }
    return e
}

function getServerDate(a) {
    var b = new Date(a);
    try {
        return {
            Y: (b.getYear() + 1900),
            M: ((b.getMonth() + 1) < 10 ? ("0" + (b.getMonth() + 1)) : (b.getMonth() + 1)),
            d: b.getDate(),
            H: b.getHours(),
            m: b.getMinutes(),
            s: b.getSeconds()
        }
    } catch (c) {}
    return null
}

function setZodiacBalls() {
    $("#bet_panel tr:not(.head)").each(function() {
        var a = $(this);
        a.children("td").each(function() {
            if ($(this).hasClass("balls")) {
                var c = new Date();
                var g = $(this).attr("id").substr(2);
                if (hk6GameType == "1") {
                    var f = $(".wxball_" + g);
                    var d = f.attr("data");
                    var e = getYearToWxNo(d, c.format("yyyy-MM-dd"));
                    var b = analyzeBall(e, 0);
                    f.html(b)
                } else {
                    if (hk6GameType == "0") {
                        drawZodiacBalls(g, c)
                    } else {
                        if (hk6GameType == "2") {
                            var f = $(".hxball_" + g);
                            var d = f.attr("data");
                            var e = getZodiacToNo(d, c);
                            var b = analyzeBall(e, 1);
                            f.html(b)
                        } else {
                            if (hk6GameType == "3" || hk6GameType == "4") {
                                drawRgbOrTailBalls(g)
                            } else {
                                if (hk6GameType == "5") {
                                    drawZodiacBalls(g, c);
                                    drawRgbOrTailBalls(g)
                                }
                            }
                        }
                    }
                }
            }
        })
    })
}

function drawZodiacBalls(f, e) {
    var d = $(".sxball_" + f);
    if (d.length > 0) {
        var b = d.attr("data");
        var c = getZodiacToNo(b, e);
        var a = analyzeBall(c, 0);
        d.html(a)
    }
}

function drawRgbOrTailBalls(e) {
    var d = "";
    if (hk6GameType == "3") {
        d = $(".sbball_" + e)
    } else {
        d = $(".wsball_" + e)
    }
    if (d.length > 0) {
        var b = d.attr("data");
        var c = getRGBorTailToNo(b, hk6GameType);
        var a = analyzeBall(c, 0);
        d.html(a)
    }
}

function getYearToWxNo(d, e) {
    var c = "";
    for (var a = 0; a < arrWxNo.length; a++) {
        var b = arrWxNo[a];
        if (e >= b.begindate && e <= b.enddate) {
            switch (d) {
                case "金":
                    c = b.j;
                    break;
                case "木":
                    c = b.m;
                    break;
                case "水":
                    c = b.s;
                    break;
                case "火":
                    c = b.h;
                    break;
                case "土":
                    c = b.t;
                    break
            }
            break
        }
    }
    return c
}

function getRGBorTailToNo(b, a) {
    var c = "";
    if (a == "3") {
        switch (b) {
            case "红波":
                c = arrRGB.r;
                break;
            case "蓝波":
                c = arrRGB.b;
                break;
            case "绿波":
                c = arrRGB.g;
                break
        }
    } else {
        if (a == "4" || a == "5") {
            b = b.replace("尾", "");
            c = arrTail[b]
        }
    }
    return c
}

function checkLmx(d) {
    var c = d[1];
    HK6type = d[2];
    var a = d[3];
    switch (c) {
        case "jq":
            setlmx(hk6_lmx.jq, a);
            break;
        case "ys":
            setlmx(hk6_lmx.ys, a);
            break;
        case "tx":
            setlmx(hk6_lmx.tx, a);
            break;
        case "dx":
            setlmx(hk6_lmx.dx, a);
            break;
        case "qx":
            setlmx(hk6_lmx.qx, a);
            break;
        case "hx":
            setlmx(hk6_lmx.hx, a);
            break;
        case "dan":
        case "shuang":
            var b = SERVERDATE.substring(0, 4);
            if ((b % 2 == 1 && c == "dan") || (b % 2 == 0 && c == "shuang")) {
                setlmx(hk6_lmx.odd, a)
            } else {
                setlmx(hk6_lmx.even, a)
            }
            break
    }
}

function setlmx(b, a) {
    for (var d = 0; d < b.length; d++) {
        var c = b[d];
        if (a == "1") {
            oper_class_lmqs(c)
        } else {
            oper_class_lmx(c)
        }
    }
}

function setLmds(d) {
    var c = d[1];
    var e = new Array(d[2], d[3]);
    for (var a = 0; a < e.length; a++) {
        HK6type = e[a];
        for (var b = 0; b < 10; b++) {
            if (c == "dan" && b % 2 != 0) {
                oper_class_lmx(b)
            } else {
                if (c == "shuang" && b % 2 == 0) {
                    oper_class_lmx(b)
                }
            }
        }
    }
}

function checkLmqs(a) {
    switch (a) {
        case "jq":
            setlmqs(hk6_lmx.jq);
            break;
        case "ys":
            setlmqs(hk6_lmx.ys);
            break
    }
}

function setlmqs(b) {
    for (var d = 0; d < b.length; d++) {
        var f = hk6_an_num[b[d] + 1];
        var e = getZodiacToNo(f, SERVERDATE);
        var g = e;
        for (var c = 0; c < g.length; c++) {
            var a = g.split(",");
            oper_class_lmx(a[c])
        }
    }
}

function populateZuheChuang() {
    var e = $("#zuhechuang tbody");
    if (e.length > 0 && zuheSelection) {
        var o = [];
        var m = [];
        var b = [];
        if (mpType == 6) {
            for (var s = 0; s < 2; s++) {
                var q = getGroupSelection(s);
                if (q.length > 0) {
                    o.push(q.split(","))
                }
            }
        } else {
            if (PAGE == "dpelx" || PAGE == "dplw") {
                $('#bet_panel input[type="checkbox"]:checked').each(function() {
                    var j = $(this).attr("title");
                    var i = $(this).attr("value");
                    var y = $("#o_" + games + "_" + i).text();
                    b.push(j);
                    m.push(y);
                    o.push(j)
                })
            } else {
                $('#bet_panel input[type="checkbox"]:checked').each(function() {
                    var i = $(this).val();
                    if (i.indexOf(",") > -1) {
                        i = i.split(",")
                    }
                    o.push(i)
                })
            }
        }
        var n = o.length;
        var w = zuheOdds;
        if (!w) {
            w = $("#o_" + games + "_" + n).text();
            zuheOdds = w
        }
        if (n >= zuheSelection) {
            e.empty();
            var k = zuheNumberInRow;
            if (zuheNumberInRow > n) {
                k = n
            }
            var d = $("<table>").css("table-layout", "fixed");
            var t = [];
            if (o[0] instanceof Array) {
                t = LIBS.comboOfTwoGroups(o)
            } else {
                t = LIBS.comboArray(o, k, null, mpFirst)
            }
            if (t) {
                var c = {};
                var g;
                if (hk6SpecialLm) {
                    g = $(":radio[name=game]:checked").attr("id").substr(2).split("_")[0];
                    var x = [];
                    for (numIdx1 in t) {
                        var a = t[numIdx1];
                        if (Array.isArray(a)) {
                            for (numIdx2 in a) {
                                var h = a[numIdx2];
                                if (!isNaN(h)) {
                                    x.push(h)
                                }
                            }
                        }
                    }
                    hk6SpecialLm && populateOddsMap(c, x, "o_", g)
                }
                combiCount = t.length;
                var f = $("<th>").append("组合共 ").append($("<span>").text(combiCount)).append(" 组");
                $("<tr>").appendTo(d).append(f);
                for (var s = 0; s < t.length; s++) {
                    if (hk6SpecialLm) {
                        var u = t[s];
                        w = getMinOdds(c, u)
                    } else {
                        if (b.length > 0 && m.length > 0) {
                            var v = t[s];
                            for (var r = 0; r < v.length; r++) {
                                var p = b.indexOf(v[r]);
                                if (r == 0 || m[p] < w) {
                                    w = m[p]
                                }
                            }
                        }
                    }
                    f = $("<th>").append($("<span>").text("组合" + (s + 1)).css("font-weight", "700")).append(" @ ").append($("<span>").text(w));
                    $("<tr>").appendTo(d).append(f);
                    $("<tr>").appendTo(d).append($("<td>").text(t[s]).css("word-wrap", "break-word"))
                }
            }
            var l = $("<div>").addClass("scrollit").append(d);
            $("<tr>").appendTo(e).append($("<td>").append(l))
        } else {
            if (e.find("tr").length == 0) {
                resetZuheChuang()
            }
        }
    }
}

function setDefaultBet(c) {
    var b = c.find("input");
    if (b) {
        if (c.hasClass("selected")) {
            var a = $("label.quickAmount input").val();
            b.val(a);
            b.focus()
        } else {
            b.val("");
            getPreviousFocus()
        }
    }
}

function populateOddsMap(b, g, f, h) {
    f = f || "";
    for (var d in g) {
        var e = g[d];
        var a = $("#" + f + h + "_" + e);
        var c = Number(a.text());
        b[e] = c
    }
}

function getMinOdds(b, f) {
    var d = Infinity;
    for (var c in f) {
        var e = f[c];
        var a = b[e];
        if (a < d) {
            d = a
        }
    }
    return d
};