function getSkinColor() {
    skinColor = LIBS.cookie("_skin_")
}
$(function() {
    var g = [
        ["red", "红色", "#dc2f39"],
        ["blue", "蓝色", "#5382bc"],
        ["orange", "橙色", "#d45000"],
        ["green", "绿色", "#61a000"]
    ];
    var a = $("#skinPanel");
    var b;
    if (a.length) {
        var f = $("<ul>").appendTo(a);
        var j = a.find("span");

        function c() {
            clearTimeout(b);
            b = setTimeout(function() {
                a.removeClass("skinHover");
                f.hide();
                j.text("▼")
            }, 100)
        }

        function d() {
            clearTimeout(b);
            a.addClass("skinHover");
            f.show();
            j.text("▲")
        }
        for (var e = 0; e < g.length; e++) {
            var l = g[e];
            var k = $('<li class="' + l[0] + '">').appendTo(f);
            var h = $("<i>").attr("style", "background:" + l[2]);
            h.appendTo(k);
            $("<a>").attr("href", "javascript:changeSkin('" + l[0] + "')").appendTo(h)
        }
    }
    var l = LIBS.cookie("_skin_");
    if (!l) {
        l = getDefaultSkin();
        if (!l) {
            l = g[1][0]
        }
    }
    setSkin(l, $("body"))
});

function getDefaultSkin() {
    var b = _getClass();
    if (b) {
        for (var a = 0; a < b.length; a++) {
            if (b[a]) {
                if (b[a].indexOf("skin_") === 0) {
                    return b[a].substring(5)
                }
            }
        }
    }
}

function _getClass(b) {
    if (!b) {
        b = $("body")
    }
    var a = b.attr("class");
    if (a) {
        return a.split(" ")
    }
}

function setSkin(d, f) {
    var e = f.attr("class");
    var b = "";
    if (e) {
        e = e.split(" ");
        for (var c = 0; c < e.length; c++) {
            if (e[c]) {
                if (e[c].indexOf("skin_") === 0) {
                    continue
                }
                b += e[c] + " "
            }
        }
    }
    f.attr("class", b + "skin_" + d);
    var a = $("#skinPanel");
    a.find("li." + d).addClass("active");
    a.find("li:not(." + d + ")").removeClass("active")
}

function changeSkin(b) {
    setSkin(b, $("body"));
    if (LIBS.cookie("_skin_") != b) {
        LIBS.cookie("_skin_", b)
    }
    $("iframe").each(function() {
        setSkin(b, this.contentWindow.$("body"))
    });
    var a = $("#skinPanel");
    a.find("li." + b).addClass("active");
    a.find("li:not(." + b + ")").removeClass("active")
};