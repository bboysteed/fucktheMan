var lottery;
var ResultPanel;
if (!ResultPanel) {
    ResultPanel = (function() {
        function b(c) {
            var e = 0;
            for (var d = 0; d < c.length; d++) {
                e += Number(c[d])
            }
            return e
        }
        var a = {
            period: function(d, e, f) {
                if (!f) {
                    f = "{0}期"
                }
                var c = d.drawNumber;
                if (e) {
                    c = c.substr(e)
                }
                return $("<td>").addClass("period").text(f.format(c))
            },
            ball: function(e, d) {
                var c = e.result.split(",")[d];
                return $("<td>").addClass("name").append($("<span>").addClass("b" + c).text(c))
            },
            total: function(c) {
                return $("<td>").addClass("other").text(b(c.result.split(",")))
            },
            zdx: function(c, k, f, l) {
                var h = c.result.split(",");
                if (l) {
                    var d = h[0];
                    for (var g = 1; g < h.length; g++) {
                        if (h[g] != d) {
                            l = false;
                            break
                        }
                    }
                }
                var m;
                var j;
                if (l) {
                    m = "通吃";
                    j = "tie"
                } else {
                    var o = b(h);
                    if (o == f) {
                        m = "和";
                        j = "tie"
                    } else {
                        if (o < k) {
                            m = "小"
                        } else {
                            m = "大";
                            j = "D"
                        }
                    }
                }
                var e = $("<td>").addClass("other").text(m);
                if (j) {
                    e.addClass(j)
                }
                return e
            }
        };
        return {
            inited: false,
            init: function(e, d) {
                this.panel = e;
                var h = [];
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    if (!g || !$.isArray(g) || g.length == 0) {
                        continue
                    }
                    var c = g[0];
                    if (!$.isFunction(c)) {
                        c = a[c];
                        if (!c) {
                            continue
                        }
                    }
                    g[0] = null;
                    h.push({
                        f: c,
                        a: g
                    })
                }
                this.parsers = h;
                this.inited = this
            },
            showResults: function(g) {
                this.panel.empty();
                for (var d = 0; d < g.length; d++) {
                    var e = g[d];
                    var f = $("<tr>").appendTo(this.panel);
                    for (var c = 0; c < this.parsers.length; c++) {
                        var h = this.parsers[c];
                        h.a[0] = e;
                        f.append(h.f.apply(this, h.a))
                    }
                }
            },
            load: function() {
                if (!this.inited) {
                    return
                }
                var c = this;
                LIBS.get("lastResults", {
                    lottery: lottery
                }, function(d) {
                    if (d && $.isArray(d)) {
                        c.showResults(d)
                    }
                })
            }
        }
    })()
};