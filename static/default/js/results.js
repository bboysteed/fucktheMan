var lottery;
var Results = (function() {
    var a = {
        dx: {
            D: "大",
            X: "小",
            T: "和",
            N: "通吃",
            LOSE: "输"
        },
        xwdx: {
            D: "大",
            X: "小",
            T: "和",
            N: "通吃"
        },
        ds: {
            D: "单",
            S: "双",
            T: "和",
            LOSE: "输"
        },
        hds: {
            D: "单",
            S: "双",
            T: "和"
        },
        lh: {
            L: "龙",
            H: "虎",
            T: "和"
        },
        sb: {
            R: "红",
            G: "绿",
            B: "蓝"
        },
        fw: {
            "0": "东",
            "1": "南",
            "2": "西",
            "3": "北"
        },
        zfb: {
            "0": "中",
            "1": "发",
            "2": "白"
        },
        wx: {
            "0": "金",
            "1": "木",
            "2": "水",
            "3": "火",
            "4": "土"
        },
        flsx: {
            F: "福",
            L: "禄",
            S: "寿",
            X: "喜",
            T: "和"
        },
        qh: {
            Q: "前",
            H: "後",
            T: "和"
        },
        dndx: {
            D: "大",
            X: "小",
            LOSE: "无"
        },
        dnds: {
            D: "单",
            S: "双",
            LOSE: "无"
        }
    };
    return {
        inited: false,
        tabKeys: null,
        maxCols: 25,
        index: null,
        init: function(f, e, b, h, d, g) {
            var c = $("#resultPanel");
            if (!c.length) {
                c = $('<div id="resultPanel">').appendTo($("#main"))
            }
            if (e != null && b != null) {
                this.minBall = e;
                this.maxBall = b;
                this.index = d || 1;
                this.ballTotal = !!g;
                this.initBallPanel(c, h)
            }
            this.tabs = f;
            this.initTabs(c);
            this.inited = true
        },
        initBallPanel: function(g, b) {
            var x = $("<tr>").appendTo($("<table>").addClass("tabTitle").appendTo(g));
            var l = this;
            for (var n = 0; n < b.length; n++) {
                var j = b[n];
                var w = $("<a>").data("idx", n + 1).text(j).attr("href", "javascript:void(0)");
                w.appendTo($("<th>").appendTo(x));
                w.click(function() {
                    var i = $(this);
                    i.parent().parent().find("th.selected").removeClass("selected");
                    i.parent().addClass("selected");
                    l.changeBall(i.text(), i.data("idx"))
                })
            }
            x.find("a").eq(this.index - 1).click();
            var s = $("<table>").addClass("ballTable").appendTo(g);
            if (lottery == "XYNC") {
                var f = $("<tr>").addClass("head").appendTo(s);
                f.append($("<th>").text("类型").addClass("title"));
                var d = new Array("西瓜", "椰子", "榴莲", "柚子", "菠萝", "葡萄", "荔枝", "樱桃", "草莓", "番茄", "梨子", "苹果", "桃子", "柑橘", "冬瓜", "萝卜", "南瓜", "茄子", "家犬", "奶牛");
                for (var n = 0; n < d.length; n++) {
                    f.append($("<th>").text(d[n]))
                }
            } else {
                if (lottery == "PK10JSCNN") {
                    var f = $("<tr>").addClass("head").appendTo(s);
                    var d = new Array("无牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛");
                    for (var n = 0; n < d.length; n++) {
                        f.append($("<th>").text(d[n]))
                    }
                }
            }
            var e = $("<tr>").addClass("head").appendTo(s);
            if (template == "SSC" && (games.includes("DN") || games.includes("DNSH"))) {
                var m = $("<tr>").addClass("head").appendTo(s);
                var q = $("<tr>").appendTo(s);
                var o = [{
                    key: "DN_0",
                    value: "无牛"
                }, {
                    key: "DN_1",
                    value: "牛一"
                }, {
                    key: "DN_2",
                    value: "牛二"
                }, {
                    key: "DN_3",
                    value: "牛三"
                }, {
                    key: "DN_4",
                    value: "牛四"
                }, {
                    key: "DN_5",
                    value: "牛五"
                }, {
                    key: "DN_6",
                    value: "牛六"
                }, {
                    key: "DN_7",
                    value: "牛七"
                }, {
                    key: "DN_8",
                    value: "牛八"
                }, {
                    key: "DN_9",
                    value: "牛九"
                }, {
                    key: "DN_10",
                    value: "牛牛"
                }];
                var u = $("<tr>").addClass("head").appendTo(s);
                var r = $("<tr>").appendTo(s);
                var k = [{
                    key: "DNGP",
                    value: "高牌"
                }, {
                    key: "DNYD",
                    value: "一对"
                }, {
                    key: "DNLD",
                    value: "两对"
                }, {
                    key: "DNSANT",
                    value: "三条"
                }, {
                    key: "DNSHUNZ",
                    value: "顺子"
                }, {
                    key: "DNHL",
                    value: "葫芦"
                }, {
                    key: "DNSIT",
                    value: "四条"
                }, {
                    key: "DNWT",
                    value: "五条"
                }];
                for (var n = 0; n < o.length; n++) {
                    m.append($("<th>").text(o[n].value))
                }
                for (var n = 0; n < o.length; n++) {
                    q.append($("<td>").addClass(o[n].key).text("0"))
                }
                for (var n = 0; n < k.length; n++) {
                    u.append($("<th>").text(k[n].value))
                }
                for (var n = 0; n < k.length; n++) {
                    r.append($("<td>").addClass(k[n].key).text("0"))
                }
                this.sscResultDn = q;
                this.sscResultDnsh = r
            }
            var c = $("<tr>").appendTo(s);
            var v = false;
            if (this.ballTotal) {
                v = $("<tr>").appendTo(s);
                e.append($("<th>").text("号码").addClass("title"));
                c.append($("<th>").text("出 球 率"));
                v.append($("<th>").text("无出期数"))
            }
            if (!games.includes("DN")) {
                for (var n = this.minBall; n <= this.maxBall; n++) {
                    if (lottery == "FTJSC") {
                        e.append($("<th>").addClass("b" + n).text(n + " 番"))
                    } else {
                        if (lottery != "PK10JSCNN") {
                            var h = n;
                            if (this.maxBall > 10 && n < 10) {
                                h = "0" + n
                            }
                            e.append($("<th>").addClass("b" + n).text(h))
                        }
                    }
                    c.append($("<td>").addClass("b" + n).text("0"));
                    if (v) {
                        v.append($("<td>").addClass("b" + n).text("0"))
                    }
                }
            }
            this.ballTable = s;
            this.ballLine = c;
            this.ballTotalLine = v
        },
        initTabs: function(b) {
            var i = this;
            var f = this.tabs;
            var e = $("<tr>").appendTo($("<table>").addClass("tabTitle").appendTo(b));
            this.tabTitles = e;
            var h = [];
            var l = {};
            for (var d in f) {
                var c = $("<th>").appendTo(e);
                var j = f[d];
                var g = $("<a>").data("option", j).text(d).attr("href", "javascript:void(0)");
                if (j.length > 2) {
                    l[j[0] + "_" + j[2][0]] = $("<span>").appendTo(c);
                    g.appendTo(c);
                    l[j[0] + "_" + j[2][1]] = $("<span>").appendTo(c);
                    h.push(j[0])
                } else {
                    g.appendTo(c)
                }
                if (d == "") {
                    g.addClass("ball");
                    if (this.ballText) {
                        g.text(this.ballText)
                    }
                }
                g.click(function() {
                    var k = $(this);
                    k.parent().parent().find("th.selected").removeClass("selected");
                    k.parent().addClass("selected");
                    i.changeTab(k.data("option"))
                })
            }
            this.totalKeys = h;
            this.totalItems = l;
            this.tabPanel = $("<tr>").appendTo($("<table>").addClass("tabContents").appendTo(b));
            this.changeIndex(0)
        },
        changeBall: function(c, b) {
            this.ballText = c;
            if (this.inited) {
                this.tabTitles.find("a.ball").text(c);
                this.index = b;
                this.showResults()
            }
        },
        changeIndex: function(b) {
            this.tabTitles.find("a:eq(" + b + ")").click()
        },
        changeTab: function(b) {
            this.tabKeys = b;
            this.showResults()
        },
        getKey: function(b) {
            if (this.index != null) {
                return b.format(this.index)
            }
            return b
        },
        showBalls: function(m) {
            if (!this.ballLine) {
                return
            }
            var p = this.getKey("B{0}");
            if (lottery == "FTJSC") {
                p = this.getKey("FTF")
            }
            var b = {};
            for (var g = 0; g < m.length; g++) {
                var k = Number(m[g].detail[p]);
                var l = b[k];
                if (!l) {
                    l = 0
                }
                l += 1;
                b[k] = l
            }
            $(".ballTable tr:not(.thead) td").text("0");
            for (var k in b) {
                this.ballLine.children(".b" + k).text(b[k])
            }
            if (this.ballTotal) {
                var o = {};
                var l = this.maxBall - this.minBall + 1;
                var d;
                for (var g = 0; g < m.length; g++) {
                    var h = m[g].result.split(",");
                    for (var f = 0; f < h.length; f++) {
                        var k = Number(h[f]);
                        if (o[k] !== undefined) {
                            continue
                        }
                        o[k] = g;
                        l -= 1;
                        if (l <= 0) {
                            d = g;
                            break
                        }
                    }
                }
                if (l > 0) {
                    d = m.length
                }
                this.ballTotalLine.children(".max").removeClass("max");
                for (var g = this.minBall; g <= this.maxBall; g++) {
                    var n = o[g];
                    if (n === undefined) {
                        n = d
                    }
                    var e = this.ballTotalLine.children(".b" + g).text(n);
                    if (n == d) {
                        e.addClass("max")
                    }
                }
            }
        },
        showDnSSC: function(k) {
            var b = {};
            var l = {};
            for (var h = 0; h < k.length; h++) {
                var d = "DN_" + k[h].detail.DN;
                var c = "DN" + k[h].detail.DNSH;
                var j = b[d];
                if (!j) {
                    j = 0
                }
                j += 1;
                b[d] = j;
                var f = l[c];
                if (!f) {
                    f = 0
                }
                f += 1;
                l[c] = f
            }
            for (var g in b) {
                this.sscResultDn.children("." + g).text(b[g])
            }
            for (var e in l) {
                this.sscResultDnsh.children("." + e).text(l[e])
            }
        },
        showBallsJSNN: function(d) {
            if (!this.ballLine) {
                return
            }
            var b = d[this.index - 1];
            for (var c = 0; c < b.length; c++) {
                this.ballLine.children(".b" + (c + 1)).text(b[c])
            }
        },
        showTotal: function(f) {
            var n = this.totalKeys;
            var g = this.totalItems;
            if (n.length == 0) {
                return
            }
            var h = {};
            for (var e = 0; e < f.length; e++) {
                var b = f[e];
                for (var d = 0; d < n.length; d++) {
                    var m = n[d];
                    var l = b.detail[this.getKey(m)];
                    if (l[0] == "*") {
                        continue
                    }
                    m = m + "_" + l;
                    h[m] = (h[m] || 0) + 1
                }
            }
            for (var c in g) {
                g[c].text(h[c] || 0)
            }
        },
        showTabs: function(n) {
            var c = this.tabPanel;
            c.empty();
            var k = [];
            var o = null;
            var m = 0;
            var p = this.getKey(this.tabKeys[0]);
            for (var g = 0; g < n.length; g++) {
                var b = n[g];
                var s = b.detail[p];
                if (!s) {
                    return
                }
                if (s[0] == "*") {
                    s = "T"
                }
                if (s == o) {
                    m++;
                    continue
                } else {
                    if (o && m) {
                        k.push([o, m]);
                        if (k.length >= this.maxCols) {
                            o = null;
                            break
                        }
                    }
                }
                o = s;
                m = 1
            }
            if (o) {
                k.push([o, m])
            }
            k.reverse();
            var d = this.maxCols - k.length;
            for (var g = 0; g < d; g++) {
                c.append($("<td>").html("&nbsp;"))
            }
            var e = a[this.tabKeys[1]];
            for (var g = 0; g < k.length; g++) {
                var s = k[g];
                var q = e ? e[s[0]] : s[0];
                var h = q;
                for (var f = 0, l = s[1] - 1; f < l; f++) {
                    h += "<br/>" + q
                }
                c.append($("<td>").html(h))
            }
            c.children(":even").addClass("even")
        },
        load: function() {
            if (!this.inited) {
                return
            }
            var b = this;
            LIBS.ajax({
                url: "dayResult",
                data: {
                    lottery: lottery
                },
                cache: false,
                success: function(c) {
                    b.showResults(c)
                }
            })
        },
        showResults: function(g) {
            if (!this.inited) {
                return
            }
            if (!g) {
                g = this.results
            } else {
                if (lottery != "PK10JSCNN") {
                    for (var c = 0; c < g.length; c++) {
                        var e = g[c];
                        var d = e.detail;
                        if (d && !$.isPlainObject(d)) {
                            var f = d.split(";");
                            d = {};
                            for (var b = 0; b < f.length; b++) {
                                var k = f[b];
                                if (!k) {
                                    continue
                                }
                                var h = k.split("=");
                                d[h[0]] = h[1].split(",")[0]
                            }
                            e.detail = d
                        }
                    }
                }
            }
            if (!g) {
                return
            }
            if (lottery == "PK10JSCNN") {
                this.showBallsJSNN(g)
            } else {
                if (template == "SSC" && (games.includes("DN") || games.includes("DNSH"))) {
                    this.showDnSSC(g);
                    this.showTabs(g)
                } else {
                    this.showBalls(g);
                    this.showTotal(g);
                    if (typeof window.IS_MOBILE == "undefined") {
                        this.showTabs(g)
                    }
                }
            }
            this.results = g
        }
    }
})();