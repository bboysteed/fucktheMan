(function(b, a) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = a() : typeof define === "function" && define.amd ? define(a) : b.moment = a()
}(this, (function() {
    var da;

    function gX() {
        return da.apply(null, arguments)
    }

    function br(hH) {
        da = hH
    }

    function ah(hH) {
        return hH instanceof Array || Object.prototype.toString.call(hH) === "[object Array]"
    }

    function F(hH) {
        return hH != null && Object.prototype.toString.call(hH) === "[object Object]"
    }

    function dn(hI) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(hI).length === 0)
        } else {
            var hH;
            for (hH in hI) {
                if (hI.hasOwnProperty(hH)) {
                    return false
                }
            }
            return true
        }
    }

    function Q(hH) {
        return hH === void 0
    }

    function A(hH) {
        return typeof hH === "number" || Object.prototype.toString.call(hH) === "[object Number]"
    }

    function gM(hH) {
        return hH instanceof Date || Object.prototype.toString.call(hH) === "[object Date]"
    }

    function b4(hH, hK) {
        var hJ = [],
            hI;
        for (hI = 0; hI < hH.length; ++hI) {
            hJ.push(hK(hH[hI], hI))
        }
        return hJ
    }

    function e6(hI, hH) {
        return Object.prototype.hasOwnProperty.call(hI, hH)
    }

    function ho(hI, hH) {
        for (var hJ in hH) {
            if (e6(hH, hJ)) {
                hI[hJ] = hH[hJ]
            }
        }
        if (e6(hH, "toString")) {
            hI.toString = hH.toString
        }
        if (e6(hH, "valueOf")) {
            hI.valueOf = hH.valueOf
        }
        return hI
    }

    function dO(hJ, hK, hH, hI) {
        return aw(hJ, hK, hH, hI, true).utc()
    }

    function dI() {
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        }
    }

    function bO(hH) {
        if (hH._pf == null) {
            hH._pf = dI()
        }
        return hH._pf
    }
    var fa;
    if (Array.prototype.some) {
        fa = Array.prototype.some
    } else {
        fa = function(hI) {
            var hK = Object(this);
            var hH = hK.length >>> 0;
            for (var hJ = 0; hJ < hH; hJ++) {
                if (hJ in hK && hI.call(this, hK[hJ], hJ, hK)) {
                    return true
                }
            }
            return false
        }
    }

    function aT(hI) {
        if (hI._isValid == null) {
            var hJ = bO(hI);
            var hK = fa.call(hJ.parsedDateParts, function(hL) {
                return hL != null
            });
            var hH = !isNaN(hI._d.getTime()) && hJ.overflow < 0 && !hJ.empty && !hJ.invalidMonth && !hJ.invalidWeekday && !hJ.weekdayMismatch && !hJ.nullInput && !hJ.invalidFormat && !hJ.userInvalidated && (!hJ.meridiem || (hJ.meridiem && hK));
            if (hI._strict) {
                hH = hH && hJ.charsLeftOver === 0 && hJ.unusedTokens.length === 0 && hJ.bigHour === undefined
            }
            if (Object.isFrozen == null || !Object.isFrozen(hI)) {
                hI._isValid = hH
            } else {
                return hH
            }
        }
        return hI._isValid
    }

    function Y(hI) {
        var hH = dO(NaN);
        if (hI != null) {
            ho(bO(hH), hI)
        } else {
            bO(hH).userInvalidated = true
        }
        return hH
    }
    var em = gX.momentProperties = [];

    function z(hL, hK) {
        var hH, hJ, hI;
        if (!Q(hK._isAMomentObject)) {
            hL._isAMomentObject = hK._isAMomentObject
        }
        if (!Q(hK._i)) {
            hL._i = hK._i
        }
        if (!Q(hK._f)) {
            hL._f = hK._f
        }
        if (!Q(hK._l)) {
            hL._l = hK._l
        }
        if (!Q(hK._strict)) {
            hL._strict = hK._strict
        }
        if (!Q(hK._tzm)) {
            hL._tzm = hK._tzm
        }
        if (!Q(hK._isUTC)) {
            hL._isUTC = hK._isUTC
        }
        if (!Q(hK._offset)) {
            hL._offset = hK._offset
        }
        if (!Q(hK._pf)) {
            hL._pf = bO(hK)
        }
        if (!Q(hK._locale)) {
            hL._locale = hK._locale
        }
        if (em.length > 0) {
            for (hH = 0; hH < em.length; hH++) {
                hJ = em[hH];
                hI = hK[hJ];
                if (!Q(hI)) {
                    hL[hJ] = hI
                }
            }
        }
        return hL
    }
    var eX = false;

    function gG(hH) {
        z(this, hH);
        this._d = new Date(hH._d != null ? hH._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN)
        }
        if (eX === false) {
            eX = true;
            gX.updateOffset(this);
            eX = false
        }
    }

    function db(hH) {
        return hH instanceof gG || (hH != null && hH._isAMomentObject != null)
    }

    function e3(hH) {
        if (hH < 0) {
            return Math.ceil(hH) || 0
        } else {
            return Math.floor(hH)
        }
    }

    function ej(hH) {
        var hJ = +hH,
            hI = 0;
        if (hJ !== 0 && isFinite(hJ)) {
            hI = e3(hJ)
        }
        return hI
    }

    function cO(hM, hL, hI) {
        var hH = Math.min(hM.length, hL.length),
            hJ = Math.abs(hM.length - hL.length),
            hN = 0,
            hK;
        for (hK = 0; hK < hH; hK++) {
            if ((hI && hM[hK] !== hL[hK]) || (!hI && ej(hM[hK]) !== ej(hL[hK]))) {
                hN++
            }
        }
        return hN + hJ
    }

    function eO(hH) {
        if (gX.suppressDeprecationWarnings === false && (typeof console !== "undefined") && console.warn) {
            console.warn("Deprecation warning: " + hH)
        }
    }

    function gh(hI, hH) {
        var hJ = true;
        return ho(function() {
            if (gX.deprecationHandler != null) {
                gX.deprecationHandler(null, hI)
            }
            if (hJ) {
                var hL = [];
                var hK;
                for (var hN = 0; hN < arguments.length; hN++) {
                    hK = "";
                    if (typeof arguments[hN] === "object") {
                        hK += "\n[" + hN + "] ";
                        for (var hM in arguments[0]) {
                            hK += hM + ": " + arguments[0][hM] + ", "
                        }
                        hK = hK.slice(0, -2)
                    } else {
                        hK = arguments[hN]
                    }
                    hL.push(hK)
                }
                eO(hI + "\nArguments: " + Array.prototype.slice.call(hL).join("") + "\n" + (new Error()).stack);
                hJ = false
            }
            return hH.apply(this, arguments)
        }, hH)
    }
    var ap = {};

    function hf(hH, hI) {
        if (gX.deprecationHandler != null) {
            gX.deprecationHandler(hH, hI)
        }
        if (!ap[hH]) {
            eO(hI);
            ap[hH] = true
        }
    }
    gX.suppressDeprecationWarnings = false;
    gX.deprecationHandler = null;

    function bJ(hH) {
        return hH instanceof Function || Object.prototype.toString.call(hH) === "[object Function]"
    }

    function e8(hH) {
        var hJ, hI;
        for (hI in hH) {
            hJ = hH[hI];
            if (bJ(hJ)) {
                this[hI] = hJ
            } else {
                this["_" + hI] = hJ
            }
        }
        this._config = hH;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + (/\d{1,2}/).source)
    }

    function f4(hJ, hH) {
        var hI = ho({}, hJ),
            hK;
        for (hK in hH) {
            if (e6(hH, hK)) {
                if (F(hJ[hK]) && F(hH[hK])) {
                    hI[hK] = {};
                    ho(hI[hK], hJ[hK]);
                    ho(hI[hK], hH[hK])
                } else {
                    if (hH[hK] != null) {
                        hI[hK] = hH[hK]
                    } else {
                        delete hI[hK]
                    }
                }
            }
        }
        for (hK in hJ) {
            if (e6(hJ, hK) && !e6(hH, hK) && F(hJ[hK])) {
                hI[hK] = ho({}, hI[hK])
            }
        }
        return hI
    }

    function dY(hH) {
        if (hH != null) {
            this.set(hH)
        }
    }
    var cH;
    if (Object.keys) {
        cH = Object.keys
    } else {
        cH = function(hJ) {
            var hI, hH = [];
            for (hI in hJ) {
                if (e6(hJ, hI)) {
                    hH.push(hI)
                }
            }
            return hH
        }
    }
    var dy = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };

    function e(hJ, hK, hI) {
        var hH = this._calendar[hJ] || this._calendar.sameElse;
        return bJ(hH) ? hH.call(hK, hI) : hH
    }
    var fL = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };

    function ea(hH) {
        var hI = this._longDateFormat[hH],
            hJ = this._longDateFormat[hH.toUpperCase()];
        if (hI || !hJ) {
            return hI
        }
        this._longDateFormat[hH] = hJ.replace(/MMMM|MM|DD|dddd/g, function(hK) {
            return hK.slice(1)
        });
        return this._longDateFormat[hH]
    }
    var aR = "Invalid date";

    function gE() {
        return this._invalidDate
    }
    var c4 = "%d";
    var hB = /\d{1,2}/;

    function gU(hH) {
        return this._ordinal.replace("%d", hH)
    }
    var gT = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };

    function af(hK, hJ, hI, hL) {
        var hH = this._relativeTime[hI];
        return (bJ(hH)) ? hH(hK, hJ, hI, hL) : hH.replace(/%d/i, hK)
    }

    function fN(hJ, hH) {
        var hI = this._relativeTime[hJ > 0 ? "future" : "past"];
        return bJ(hI) ? hI(hH) : hI.replace(/%s/i, hH)
    }
    var ec = {};

    function dh(hJ, hH) {
        var hI = hJ.toLowerCase();
        ec[hI] = ec[hI + "s"] = ec[hH] = hJ
    }

    function ei(hH) {
        return typeof hH === "string" ? ec[hH] || ec[hH.toLowerCase()] : undefined
    }

    function fy(hJ) {
        var hI = {},
            hH, hK;
        for (hK in hJ) {
            if (e6(hJ, hK)) {
                hH = ei(hK);
                if (hH) {
                    hI[hH] = hJ[hK]
                }
            }
        }
        return hI
    }
    var b9 = {};

    function fK(hI, hH) {
        b9[hI] = hH
    }

    function b7(hH) {
        var hI = [];
        for (var hJ in hH) {
            hI.push({
                unit: hJ,
                priority: b9[hJ]
            })
        }
        hI.sort(function(hL, hK) {
            return hL.priority - hK.priority
        });
        return hI
    }

    function dF(hM, hL, hI) {
        var hK = "" + Math.abs(hM),
            hJ = hL - hK.length,
            hH = hM >= 0;
        return (hH ? (hI ? "+" : "") : "-") + Math.pow(10, Math.max(0, hJ)).toString().substr(1) + hK
    }
    var cx = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var cw = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var cv = {};
    var bM = {};

    function dS(hI, hJ, hH, hL) {
        var hK = hL;
        if (typeof hL === "string") {
            hK = function() {
                return this[hL]()
            }
        }
        if (hI) {
            bM[hI] = hK
        }
        if (hJ) {
            bM[hJ[0]] = function() {
                return dF(hK.apply(this, arguments), hJ[1], hJ[2])
            }
        }
        if (hH) {
            bM[hH] = function() {
                return this.localeData().ordinal(hK.apply(this, arguments), hI)
            }
        }
    }

    function a1(hH) {
        if (hH.match(/\[[\s\S]/)) {
            return hH.replace(/^\[|\]$/g, "")
        }
        return hH.replace(/\\/g, "")
    }

    function ce(hJ) {
        var hK = hJ.match(cx),
            hH, hI;
        for (hH = 0, hI = hK.length; hH < hI; hH++) {
            if (bM[hK[hH]]) {
                hK[hH] = bM[hK[hH]]
            } else {
                hK[hH] = a1(hK[hH])
            }
        }
        return function(hN) {
            var hL = "",
                hM;
            for (hM = 0; hM < hI; hM++) {
                hL += bJ(hK[hM]) ? hK[hM].call(hN, hJ) : hK[hM]
            }
            return hL
        }
    }

    function aF(hH, hI) {
        if (!hH.isValid()) {
            return hH.localeData().invalidDate()
        }
        hI = cm(hI, hH.localeData());
        cv[hI] = cv[hI] || ce(hI);
        return cv[hI](hH)
    }

    function cm(hK, hH) {
        var hI = 5;

        function hJ(hL) {
            return hH.longDateFormat(hL) || hL
        }
        cw.lastIndex = 0;
        while (hI >= 0 && cw.test(hK)) {
            hK = hK.replace(cw, hJ);
            cw.lastIndex = 0;
            hI -= 1
        }
        return hK
    }
    var bj = /\d/;
    var bi = /\d\d/;
    var bh = /\d{3}/;
    var bg = /\d{4}/;
    var bf = /[+-]?\d{6}/;
    var aW = /\d\d?/;
    var dB = /\d\d\d\d?/;
    var gg = /\d\d\d\d\d\d?/;
    var aV = /\d{1,3}/;
    var aU = /\d{1,4}/;
    var aS = /[+-]?\d{1,6}/;
    var B = /\d+/;
    var M = /[+-]?\d+/;
    var co = /Z|[+-]\d\d:?\d\d/gi;
    var d4 = /Z|[+-]\d\d(?::?\d\d)?/gi;
    var hg = /[+-]?\d+(\.\d{1,3})?/;
    var bL = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var bE = {};

    function bQ(hH, hI, hJ) {
        bE[hH] = bJ(hI) ? hI : function(hL, hK) {
            return (hL && hJ) ? hJ : hI
        }
    }

    function cl(hI, hH) {
        if (!e6(bE, hI)) {
            return new RegExp(e4(hI))
        }
        return bE[hI](hH._strict, hH._locale)
    }

    function e4(hH) {
        return dk(hH.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(hI, hM, hL, hK, hJ) {
            return hM || hL || hK || hJ
        }))
    }

    function dk(hH) {
        return hH.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var k = {};

    function cC(hI, hK) {
        var hH, hJ = hK;
        if (typeof hI === "string") {
            hI = [hI]
        }
        if (A(hK)) {
            hJ = function(hL, hM) {
                hM[hK] = ej(hL)
            }
        }
        for (hH = 0; hH < hI.length; hH++) {
            k[hI[hH]] = hJ
        }
    }

    function ak(hH, hI) {
        cC(hH, function(hJ, hM, hK, hL) {
            hK._w = hK._w || {};
            hI(hJ, hK._w, hK, hL)
        })
    }

    function E(hJ, hH, hI) {
        if (hH != null && e6(k, hJ)) {
            k[hJ](hH, hI._a, hI, hJ)
        }
    }
    var hh = 0;
    var p = 1;
    var gK = 2;
    var g2 = 3;
    var ft = 4;
    var aO = 5;
    var cq = 6;
    var dt = 7;
    var m = 8;
    dS("Y", 0, 0, function() {
        var hH = this.year();
        return hH <= 9999 ? "" + hH : "+" + hH
    });
    dS(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    dS(0, ["YYYY", 4], 0, "year");
    dS(0, ["YYYYY", 5], 0, "year");
    dS(0, ["YYYYYY", 6, true], 0, "year");
    dh("year", "y");
    fK("year", 1);
    bQ("Y", M);
    bQ("YY", aW, bi);
    bQ("YYYY", aU, bg);
    bQ("YYYYY", aS, bf);
    bQ("YYYYYY", aS, bf);
    cC(["YYYYY", "YYYYYY"], hh);
    cC("YYYY", function(hH, hI) {
        hI[hh] = hH.length === 2 ? gX.parseTwoDigitYear(hH) : ej(hH)
    });
    cC("YY", function(hH, hI) {
        hI[hh] = gX.parseTwoDigitYear(hH)
    });
    cC("Y", function(hH, hI) {
        hI[hh] = parseInt(hH, 10)
    });

    function fq(hH) {
        return fO(hH) ? 366 : 365
    }

    function fO(hH) {
        return (hH % 4 === 0 && hH % 100 !== 0) || hH % 400 === 0
    }
    gX.parseTwoDigitYear = function(hH) {
        return ej(hH) + (ej(hH) > 68 ? 1900 : 2000)
    };
    var d6 = ge("FullYear", true);

    function eq() {
        return fO(this.year())
    }

    function ge(hH, hI) {
        return function(hJ) {
            if (hJ != null) {
                bl(this, hH, hJ);
                gX.updateOffset(this, hI);
                return this
            } else {
                return fl(this, hH)
            }
        }
    }

    function fl(hI, hH) {
        return hI.isValid() ? hI._d["get" + (hI._isUTC ? "UTC" : "") + hH]() : NaN
    }

    function bl(hI, hH, hJ) {
        if (hI.isValid() && !isNaN(hJ)) {
            if (hH === "FullYear" && fO(hI.year()) && hI.month() === 1 && hI.date() === 29) {
                hI._d["set" + (hI._isUTC ? "UTC" : "") + hH](hJ, hI.month(), cn(hJ, hI.month()))
            } else {
                hI._d["set" + (hI._isUTC ? "UTC" : "") + hH](hJ)
            }
        }
    }

    function a8(hH) {
        hH = ei(hH);
        if (bJ(this[hH])) {
            return this[hH]()
        }
        return this
    }

    function aY(hH, hK) {
        if (typeof hH === "object") {
            hH = fy(hH);
            var hJ = b7(hH);
            for (var hI = 0; hI < hJ.length; hI++) {
                this[hJ[hI].unit](hH[hJ[hI].unit])
            }
        } else {
            hH = ei(hH);
            if (bJ(this[hH])) {
                return this[hH](hK)
            }
        }
        return this
    }

    function gd(hI, hH) {
        return ((hI % hH) + hH) % hH
    }
    var ek;
    if (Array.prototype.indexOf) {
        ek = Array.prototype.indexOf
    } else {
        ek = function(hI) {
            var hH;
            for (hH = 0; hH < this.length; ++hH) {
                if (this[hH] === hI) {
                    return hH
                }
            }
            return -1
        }
    }

    function cn(hI, hJ) {
        if (isNaN(hI) || isNaN(hJ)) {
            return NaN
        }
        var hH = gd(hJ, 12);
        hI += (hJ - hH) / 12;
        return hH === 1 ? (fO(hI) ? 29 : 28) : (31 - hH % 7 % 2)
    }
    dS("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    dS("MMM", 0, 0, function(hH) {
        return this.localeData().monthsShort(this, hH)
    });
    dS("MMMM", 0, 0, function(hH) {
        return this.localeData().months(this, hH)
    });
    dh("month", "M");
    fK("month", 8);
    bQ("M", aW);
    bQ("MM", aW, bi);
    bQ("MMM", function(hI, hH) {
        return hH.monthsShortRegex(hI)
    });
    bQ("MMMM", function(hI, hH) {
        return hH.monthsRegex(hI)
    });
    cC(["M", "MM"], function(hH, hI) {
        hI[p] = ej(hH) - 1
    });
    cC(["MMM", "MMMM"], function(hH, hL, hI, hJ) {
        var hK = hI._locale.monthsParse(hH, hJ, hI._strict);
        if (hK != null) {
            hL[p] = hK
        } else {
            bO(hI).invalidMonth = hH
        }
    });
    var c1 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var aa = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");

    function bC(hH, hI) {
        if (!hH) {
            return ah(this._months) ? this._months : this._months.standalone
        }
        return ah(this._months) ? this._months[hH.month()] : this._months[(this._months.isFormat || c1).test(hI) ? "format" : "standalone"][hH.month()]
    }
    var fP = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function bN(hH, hI) {
        if (!hH) {
            return ah(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }
        return ah(this._monthsShort) ? this._monthsShort[hH.month()] : this._monthsShort[c1.test(hI) ? "format" : "standalone"][hH.month()]
    }

    function cj(hI, hN, hH) {
        var hK, hL, hM, hJ = hI.toLocaleLowerCase();
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (hK = 0; hK < 12; ++hK) {
                hM = dO([2000, hK]);
                this._shortMonthsParse[hK] = this.monthsShort(hM, "").toLocaleLowerCase();
                this._longMonthsParse[hK] = this.months(hM, "").toLocaleLowerCase()
            }
        }
        if (hH) {
            if (hN === "MMM") {
                hL = ek.call(this._shortMonthsParse, hJ);
                return hL !== -1 ? hL : null
            } else {
                hL = ek.call(this._longMonthsParse, hJ);
                return hL !== -1 ? hL : null
            }
        } else {
            if (hN === "MMM") {
                hL = ek.call(this._shortMonthsParse, hJ);
                if (hL !== -1) {
                    return hL
                }
                hL = ek.call(this._longMonthsParse, hJ);
                return hL !== -1 ? hL : null
            } else {
                hL = ek.call(this._longMonthsParse, hJ);
                if (hL !== -1) {
                    return hL
                }
                hL = ek.call(this._shortMonthsParse, hJ);
                return hL !== -1 ? hL : null
            }
        }
    }

    function eJ(hI, hM, hH) {
        var hJ, hL, hK;
        if (this._monthsParseExact) {
            return cj.call(this, hI, hM, hH)
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = []
        }
        for (hJ = 0; hJ < 12; hJ++) {
            hL = dO([2000, hJ]);
            if (hH && !this._longMonthsParse[hJ]) {
                this._longMonthsParse[hJ] = new RegExp("^" + this.months(hL, "").replace(".", "") + "$", "i");
                this._shortMonthsParse[hJ] = new RegExp("^" + this.monthsShort(hL, "").replace(".", "") + "$", "i")
            }
            if (!hH && !this._monthsParse[hJ]) {
                hK = "^" + this.months(hL, "") + "|^" + this.monthsShort(hL, "");
                this._monthsParse[hJ] = new RegExp(hK.replace(".", ""), "i")
            }
            if (hH && hM === "MMMM" && this._longMonthsParse[hJ].test(hI)) {
                return hJ
            } else {
                if (hH && hM === "MMM" && this._shortMonthsParse[hJ].test(hI)) {
                    return hJ
                } else {
                    if (!hH && this._monthsParse[hJ].test(hI)) {
                        return hJ
                    }
                }
            }
        }
    }

    function bw(hH, hI) {
        var hJ;
        if (!hH.isValid()) {
            return hH
        }
        if (typeof hI === "string") {
            if (/^\d+$/.test(hI)) {
                hI = ej(hI)
            } else {
                hI = hH.localeData().monthsParse(hI);
                if (!A(hI)) {
                    return hH
                }
            }
        }
        hJ = Math.min(hH.date(), cn(hH.year(), hI));
        hH._d["set" + (hH._isUTC ? "UTC" : "") + "Month"](hI, hJ);
        return hH
    }

    function g1(hH) {
        if (hH != null) {
            bw(this, hH);
            gX.updateOffset(this, true);
            return this
        } else {
            return fl(this, "Month")
        }
    }

    function ct() {
        return cn(this.year(), this.month())
    }
    var e1 = bL;

    function e5(hH) {
        if (this._monthsParseExact) {
            if (!e6(this, "_monthsRegex")) {
                e7.call(this)
            }
            if (hH) {
                return this._monthsShortStrictRegex
            } else {
                return this._monthsShortRegex
            }
        } else {
            if (!e6(this, "_monthsShortRegex")) {
                this._monthsShortRegex = e1
            }
            return this._monthsShortStrictRegex && hH ? this._monthsShortStrictRegex : this._monthsShortRegex
        }
    }
    var gQ = bL;

    function et(hH) {
        if (this._monthsParseExact) {
            if (!e6(this, "_monthsRegex")) {
                e7.call(this)
            }
            if (hH) {
                return this._monthsStrictRegex
            } else {
                return this._monthsRegex
            }
        } else {
            if (!e6(this, "_monthsRegex")) {
                this._monthsRegex = gQ
            }
            return this._monthsStrictRegex && hH ? this._monthsStrictRegex : this._monthsRegex
        }
    }

    function e7() {
        function hM(hO, hN) {
            return hN.length - hO.length
        }
        var hL = [],
            hH = [],
            hK = [],
            hI, hJ;
        for (hI = 0; hI < 12; hI++) {
            hJ = dO([2000, hI]);
            hL.push(this.monthsShort(hJ, ""));
            hH.push(this.months(hJ, ""));
            hK.push(this.months(hJ, ""));
            hK.push(this.monthsShort(hJ, ""))
        }
        hL.sort(hM);
        hH.sort(hM);
        hK.sort(hM);
        for (hI = 0; hI < 12; hI++) {
            hL[hI] = dk(hL[hI]);
            hH[hI] = dk(hH[hI])
        }
        for (hI = 0; hI < 24; hI++) {
            hK[hI] = dk(hK[hI])
        }
        this._monthsRegex = new RegExp("^(" + hK.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + hH.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + hL.join("|") + ")", "i")
    }

    function f5(hO, hH, hM, hL, hN, hK, hJ) {
        var hI;
        if (hO < 100 && hO >= 0) {
            hI = new Date(hO + 400, hH, hM, hL, hN, hK, hJ);
            if (isFinite(hI.getFullYear())) {
                hI.setFullYear(hO)
            }
        } else {
            hI = new Date(hO, hH, hM, hL, hN, hK, hJ)
        }
        return hI
    }

    function ff(hJ) {
        var hI;
        if (hJ < 100 && hJ >= 0) {
            var hH = Array.prototype.slice.call(arguments);
            hH[0] = hJ + 400;
            hI = new Date(Date.UTC.apply(null, hH));
            if (isFinite(hI.getUTCFullYear())) {
                hI.setUTCFullYear(hJ)
            }
        } else {
            hI = new Date(Date.UTC.apply(null, arguments))
        }
        return hI
    }

    function bW(hI, hL, hK) {
        var hH = 7 + hL - hK,
            hJ = (7 + ff(hI, 0, hH).getUTCDay() - hL) % 7;
        return -hJ + hH - 1
    }

    function ch(hK, hI, hJ, hQ, hO) {
        var hP = (7 + hJ - hQ) % 7,
            hH = bW(hK, hQ, hO),
            hM = 1 + 7 * (hI - 1) + hP + hH,
            hN, hL;
        if (hM <= 0) {
            hN = hK - 1;
            hL = fq(hN) + hM
        } else {
            if (hM > fq(hK)) {
                hN = hK + 1;
                hL = hM - fq(hK)
            } else {
                hN = hK;
                hL = hM
            }
        }
        return {
            year: hN,
            dayOfYear: hL
        }
    }

    function gH(hL, hN, hM) {
        var hJ = bW(hL.year(), hN, hM),
            hK = Math.floor((hL.dayOfYear() - hJ - 1) / 7) + 1,
            hH, hI;
        if (hK < 1) {
            hI = hL.year() - 1;
            hH = hK + P(hI, hN, hM)
        } else {
            if (hK > P(hL.year(), hN, hM)) {
                hH = hK - P(hL.year(), hN, hM);
                hI = hL.year() + 1
            } else {
                hI = hL.year();
                hH = hK
            }
        }
        return {
            week: hH,
            year: hI
        }
    }

    function P(hI, hL, hJ) {
        var hH = bW(hI, hL, hJ),
            hK = bW(hI + 1, hL, hJ);
        return (fq(hI) - hH + hK) / 7
    }
    dS("w", ["ww", 2], "wo", "week");
    dS("W", ["WW", 2], "Wo", "isoWeek");
    dh("week", "w");
    dh("isoWeek", "W");
    fK("week", 5);
    fK("isoWeek", 5);
    bQ("w", aW);
    bQ("ww", aW, bi);
    bQ("W", aW);
    bQ("WW", aW, bi);
    ak(["w", "ww", "W", "WW"], function(hH, hK, hI, hJ) {
        hK[hJ.substr(0, 1)] = ej(hH)
    });

    function b5(hH) {
        return gH(hH, this._week.dow, this._week.doy).week
    }
    var c0 = {
        dow: 0,
        doy: 6
    };

    function aL() {
        return this._week.dow
    }

    function eG() {
        return this._week.doy
    }

    function U(hH) {
        var hI = this.localeData().week(this);
        return hH == null ? hI : this.add((hH - hI) * 7, "d")
    }

    function I(hH) {
        var hI = gH(this, 1, 4).week;
        return hH == null ? hI : this.add((hH - hI) * 7, "d")
    }
    dS("d", 0, "do", "day");
    dS("dd", 0, 0, function(hH) {
        return this.localeData().weekdaysMin(this, hH)
    });
    dS("ddd", 0, 0, function(hH) {
        return this.localeData().weekdaysShort(this, hH)
    });
    dS("dddd", 0, 0, function(hH) {
        return this.localeData().weekdays(this, hH)
    });
    dS("e", 0, 0, "weekday");
    dS("E", 0, 0, "isoWeekday");
    dh("day", "d");
    dh("weekday", "e");
    dh("isoWeekday", "E");
    fK("day", 11);
    fK("weekday", 11);
    fK("isoWeekday", 11);
    bQ("d", aW);
    bQ("e", aW);
    bQ("E", aW);
    bQ("dd", function(hI, hH) {
        return hH.weekdaysMinRegex(hI)
    });
    bQ("ddd", function(hI, hH) {
        return hH.weekdaysShortRegex(hI)
    });
    bQ("dddd", function(hI, hH) {
        return hH.weekdaysRegex(hI)
    });
    ak(["dd", "ddd", "dddd"], function(hH, hK, hI, hJ) {
        var hL = hI._locale.weekdaysParse(hH, hJ, hI._strict);
        if (hL != null) {
            hK.d = hL
        } else {
            bO(hI).invalidWeekday = hH
        }
    });
    ak(["d", "e", "E"], function(hH, hK, hI, hJ) {
        hK[hJ] = ej(hH)
    });

    function bV(hI, hH) {
        if (typeof hI !== "string") {
            return hI
        }
        if (!isNaN(hI)) {
            return parseInt(hI, 10)
        }
        hI = hH.weekdaysParse(hI);
        if (typeof hI === "number") {
            return hI
        }
        return null
    }

    function ck(hI, hH) {
        if (typeof hI === "string") {
            return hH.weekdaysParse(hI) % 7 || 7
        }
        return isNaN(hI) ? null : hI
    }

    function c8(hH, hI) {
        return hH.slice(hI, 7).concat(hH.slice(0, hI))
    }
    var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");

    function a2(hH, hJ) {
        var hI = ah(this._weekdays) ? this._weekdays : this._weekdays[(hH && hH !== true && this._weekdays.isFormat.test(hJ)) ? "format" : "standalone"];
        return (hH === true) ? c8(hI, this._week.dow) : (hH) ? hI[hH.day()] : hI
    }
    var t = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

    function X(hH) {
        return (hH === true) ? c8(this._weekdaysShort, this._week.dow) : (hH) ? this._weekdaysShort[hH.day()] : this._weekdaysShort
    }
    var ca = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

    function gY(hH) {
        return (hH === true) ? c8(this._weekdaysMin, this._week.dow) : (hH) ? this._weekdaysMin[hH.day()] : this._weekdaysMin
    }

    function fB(hM, hN, hH) {
        var hJ, hK, hL, hI = hM.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (hJ = 0; hJ < 7; ++hJ) {
                hL = dO([2000, 1]).day(hJ);
                this._minWeekdaysParse[hJ] = this.weekdaysMin(hL, "").toLocaleLowerCase();
                this._shortWeekdaysParse[hJ] = this.weekdaysShort(hL, "").toLocaleLowerCase();
                this._weekdaysParse[hJ] = this.weekdays(hL, "").toLocaleLowerCase()
            }
        }
        if (hH) {
            if (hN === "dddd") {
                hK = ek.call(this._weekdaysParse, hI);
                return hK !== -1 ? hK : null
            } else {
                if (hN === "ddd") {
                    hK = ek.call(this._shortWeekdaysParse, hI);
                    return hK !== -1 ? hK : null
                } else {
                    hK = ek.call(this._minWeekdaysParse, hI);
                    return hK !== -1 ? hK : null
                }
            }
        } else {
            if (hN === "dddd") {
                hK = ek.call(this._weekdaysParse, hI);
                if (hK !== -1) {
                    return hK
                }
                hK = ek.call(this._shortWeekdaysParse, hI);
                if (hK !== -1) {
                    return hK
                }
                hK = ek.call(this._minWeekdaysParse, hI);
                return hK !== -1 ? hK : null
            } else {
                if (hN === "ddd") {
                    hK = ek.call(this._shortWeekdaysParse, hI);
                    if (hK !== -1) {
                        return hK
                    }
                    hK = ek.call(this._weekdaysParse, hI);
                    if (hK !== -1) {
                        return hK
                    }
                    hK = ek.call(this._minWeekdaysParse, hI);
                    return hK !== -1 ? hK : null
                } else {
                    hK = ek.call(this._minWeekdaysParse, hI);
                    if (hK !== -1) {
                        return hK
                    }
                    hK = ek.call(this._weekdaysParse, hI);
                    if (hK !== -1) {
                        return hK
                    }
                    hK = ek.call(this._shortWeekdaysParse, hI);
                    return hK !== -1 ? hK : null
                }
            }
        }
    }

    function cs(hL, hM, hH) {
        var hI, hK, hJ;
        if (this._weekdaysParseExact) {
            return fB.call(this, hL, hM, hH)
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = []
        }
        for (hI = 0; hI < 7; hI++) {
            hK = dO([2000, 1]).day(hI);
            if (hH && !this._fullWeekdaysParse[hI]) {
                this._fullWeekdaysParse[hI] = new RegExp("^" + this.weekdays(hK, "").replace(".", "\\.?") + "$", "i");
                this._shortWeekdaysParse[hI] = new RegExp("^" + this.weekdaysShort(hK, "").replace(".", "\\.?") + "$", "i");
                this._minWeekdaysParse[hI] = new RegExp("^" + this.weekdaysMin(hK, "").replace(".", "\\.?") + "$", "i")
            }
            if (!this._weekdaysParse[hI]) {
                hJ = "^" + this.weekdays(hK, "") + "|^" + this.weekdaysShort(hK, "") + "|^" + this.weekdaysMin(hK, "");
                this._weekdaysParse[hI] = new RegExp(hJ.replace(".", ""), "i")
            }
            if (hH && hM === "dddd" && this._fullWeekdaysParse[hI].test(hL)) {
                return hI
            } else {
                if (hH && hM === "ddd" && this._shortWeekdaysParse[hI].test(hL)) {
                    return hI
                } else {
                    if (hH && hM === "dd" && this._minWeekdaysParse[hI].test(hL)) {
                        return hI
                    } else {
                        if (!hH && this._weekdaysParse[hI].test(hL)) {
                            return hI
                        }
                    }
                }
            }
        }
    }

    function gy(hI) {
        if (!this.isValid()) {
            return hI != null ? this : NaN
        }
        var hH = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (hI != null) {
            hI = bV(hI, this.localeData());
            return this.add(hI - hH, "d")
        } else {
            return hH
        }
    }

    function ax(hH) {
        if (!this.isValid()) {
            return hH != null ? this : NaN
        }
        var hI = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return hH == null ? hI : this.add(hH - hI, "d")
    }

    function dM(hH) {
        if (!this.isValid()) {
            return hH != null ? this : NaN
        }
        if (hH != null) {
            var hI = ck(hH, this.localeData());
            return this.day(this.day() % 7 ? hI : hI - 7)
        } else {
            return this.day() || 7
        }
    }
    var at = bL;

    function hj(hH) {
        if (this._weekdaysParseExact) {
            if (!e6(this, "_weekdaysRegex")) {
                K.call(this)
            }
            if (hH) {
                return this._weekdaysStrictRegex
            } else {
                return this._weekdaysRegex
            }
        } else {
            if (!e6(this, "_weekdaysRegex")) {
                this._weekdaysRegex = at
            }
            return this._weekdaysStrictRegex && hH ? this._weekdaysStrictRegex : this._weekdaysRegex
        }
    }
    var G = bL;

    function be(hH) {
        if (this._weekdaysParseExact) {
            if (!e6(this, "_weekdaysRegex")) {
                K.call(this)
            }
            if (hH) {
                return this._weekdaysShortStrictRegex
            } else {
                return this._weekdaysShortRegex
            }
        } else {
            if (!e6(this, "_weekdaysShortRegex")) {
                this._weekdaysShortRegex = G
            }
            return this._weekdaysShortStrictRegex && hH ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        }
    }
    var fI = bL;

    function O(hH) {
        if (this._weekdaysParseExact) {
            if (!e6(this, "_weekdaysRegex")) {
                K.call(this)
            }
            if (hH) {
                return this._weekdaysMinStrictRegex
            } else {
                return this._weekdaysMinRegex
            }
        } else {
            if (!e6(this, "_weekdaysMinRegex")) {
                this._weekdaysMinRegex = fI
            }
            return this._weekdaysMinStrictRegex && hH ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        }
    }

    function K() {
        function hK(hS, hR) {
            return hR.length - hS.length
        }
        var hM = [],
            hN = [],
            hQ = [],
            hH = [],
            hL, hJ, hI, hO, hP;
        for (hL = 0; hL < 7; hL++) {
            hJ = dO([2000, 1]).day(hL);
            hI = this.weekdaysMin(hJ, "");
            hO = this.weekdaysShort(hJ, "");
            hP = this.weekdays(hJ, "");
            hM.push(hI);
            hN.push(hO);
            hQ.push(hP);
            hH.push(hI);
            hH.push(hO);
            hH.push(hP)
        }
        hM.sort(hK);
        hN.sort(hK);
        hQ.sort(hK);
        hH.sort(hK);
        for (hL = 0; hL < 7; hL++) {
            hN[hL] = dk(hN[hL]);
            hQ[hL] = dk(hQ[hL]);
            hH[hL] = dk(hH[hL])
        }
        this._weekdaysRegex = new RegExp("^(" + hH.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + hQ.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + hN.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + hM.join("|") + ")", "i")
    }

    function fj() {
        return this.hours() % 12 || 12
    }

    function Z() {
        return this.hours() || 24
    }
    dS("H", ["HH", 2], 0, "hour");
    dS("h", ["hh", 2], 0, fj);
    dS("k", ["kk", 2], 0, Z);
    dS("hmm", 0, 0, function() {
        return "" + fj.apply(this) + dF(this.minutes(), 2)
    });
    dS("hmmss", 0, 0, function() {
        return "" + fj.apply(this) + dF(this.minutes(), 2) + dF(this.seconds(), 2)
    });
    dS("Hmm", 0, 0, function() {
        return "" + this.hours() + dF(this.minutes(), 2)
    });
    dS("Hmmss", 0, 0, function() {
        return "" + this.hours() + dF(this.minutes(), 2) + dF(this.seconds(), 2)
    });

    function gC(hH, hI) {
        dS(hH, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), hI)
        })
    }
    gC("a", true);
    gC("A", false);
    dh("hour", "h");
    fK("hour", 13);

    function ad(hI, hH) {
        return hH._meridiemParse
    }
    bQ("a", ad);
    bQ("A", ad);
    bQ("H", aW);
    bQ("h", aW);
    bQ("k", aW);
    bQ("HH", aW, bi);
    bQ("hh", aW, bi);
    bQ("kk", aW, bi);
    bQ("hmm", dB);
    bQ("hmmss", gg);
    bQ("Hmm", dB);
    bQ("Hmmss", gg);
    cC(["H", "HH"], g2);
    cC(["k", "kk"], function(hI, hK, hJ) {
        var hH = ej(hI);
        hK[g2] = hH === 24 ? 0 : hH
    });
    cC(["a", "A"], function(hH, hJ, hI) {
        hI._isPm = hI._locale.isPM(hH);
        hI._meridiem = hH
    });
    cC(["h", "hh"], function(hH, hJ, hI) {
        hJ[g2] = ej(hH);
        bO(hI).bigHour = true
    });
    cC("hmm", function(hH, hK, hI) {
        var hJ = hH.length - 2;
        hK[g2] = ej(hH.substr(0, hJ));
        hK[ft] = ej(hH.substr(hJ));
        bO(hI).bigHour = true
    });
    cC("hmmss", function(hH, hL, hI) {
        var hK = hH.length - 4;
        var hJ = hH.length - 2;
        hL[g2] = ej(hH.substr(0, hK));
        hL[ft] = ej(hH.substr(hK, 2));
        hL[aO] = ej(hH.substr(hJ));
        bO(hI).bigHour = true
    });
    cC("Hmm", function(hH, hK, hI) {
        var hJ = hH.length - 2;
        hK[g2] = ej(hH.substr(0, hJ));
        hK[ft] = ej(hH.substr(hJ))
    });
    cC("Hmmss", function(hH, hL, hI) {
        var hK = hH.length - 4;
        var hJ = hH.length - 2;
        hL[g2] = ej(hH.substr(0, hK));
        hL[ft] = ej(hH.substr(hK, 2));
        hL[aO] = ej(hH.substr(hJ))
    });

    function dd(hH) {
        return ((hH + "").toLowerCase().charAt(0) === "p")
    }
    var c3 = /[ap]\.?m?\.?/i;

    function bt(hH, hI, hJ) {
        if (hH > 11) {
            return hJ ? "pm" : "PM"
        } else {
            return hJ ? "am" : "AM"
        }
    }
    var dG = ge("Hours", true);
    var cX = {
        calendar: dy,
        longDateFormat: fL,
        invalidDate: aR,
        ordinal: c4,
        dayOfMonthOrdinalParse: hB,
        relativeTime: gT,
        months: aa,
        monthsShort: fP,
        week: c0,
        weekdays: ae,
        weekdaysMin: ca,
        weekdaysShort: t,
        meridiemParse: c3
    };
    var cf = {};
    var u = {};
    var es;

    function e9(hH) {
        return hH ? hH.toLowerCase().replace("_", "-") : hH
    }

    function er(hM) {
        var hK = 0,
            hI, hL, hH, hJ;
        while (hK < hM.length) {
            hJ = e9(hM[hK]).split("-");
            hI = hJ.length;
            hL = e9(hM[hK + 1]);
            hL = hL ? hL.split("-") : null;
            while (hI > 0) {
                hH = ba(hJ.slice(0, hI).join("-"));
                if (hH) {
                    return hH
                }
                if (hL && hL.length >= hI && cO(hJ, hL, true) >= hI - 1) {
                    break
                }
                hI--
            }
            hK++
        }
        return es
    }

    function ba(hH) {
        var hK = null;
        if (!cf[hH] && (typeof module !== "undefined") && module && module.exports) {
            try {
                hK = es._abbr;
                var hI = require;
                hI("./locale/" + hH);
                L(hK)
            } catch (hJ) {}
        }
        return cf[hH]
    }

    function L(hI, hH) {
        var hJ;
        if (hI) {
            if (Q(hH)) {
                hJ = ab(hI)
            } else {
                hJ = dW(hI, hH)
            }
            if (hJ) {
                es = hJ
            } else {
                if ((typeof console !== "undefined") && console.warn) {
                    console.warn("Locale " + hI + " not found. Did you forget to load it?")
                }
            }
        }
        return es._abbr
    }

    function dW(hJ, hI) {
        if (hI !== null) {
            var hH, hK = cX;
            hI.abbr = hJ;
            if (cf[hJ] != null) {
                hf("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                hK = cf[hJ]._config
            } else {
                if (hI.parentLocale != null) {
                    if (cf[hI.parentLocale] != null) {
                        hK = cf[hI.parentLocale]._config
                    } else {
                        hH = ba(hI.parentLocale);
                        if (hH != null) {
                            hK = hH._config
                        } else {
                            if (!u[hI.parentLocale]) {
                                u[hI.parentLocale] = []
                            }
                            u[hI.parentLocale].push({
                                name: hJ,
                                config: hI
                            });
                            return null
                        }
                    }
                }
            }
            cf[hJ] = new dY(f4(hK, hI));
            if (u[hJ]) {
                u[hJ].forEach(function(hL) {
                    dW(hL.name, hL.config)
                })
            }
            L(hJ);
            return cf[hJ]
        } else {
            delete cf[hJ];
            return null
        }
    }

    function gz(hJ, hI) {
        if (hI != null) {
            var hH, hL, hK = cX;
            hL = ba(hJ);
            if (hL != null) {
                hK = hL._config
            }
            hI = f4(hK, hI);
            hH = new dY(hI);
            hH.parentLocale = cf[hJ];
            cf[hJ] = hH;
            L(hJ)
        } else {
            if (cf[hJ] != null) {
                if (cf[hJ].parentLocale != null) {
                    cf[hJ] = cf[hJ].parentLocale
                } else {
                    if (cf[hJ] != null) {
                        delete cf[hJ]
                    }
                }
            }
        }
        return cf[hJ]
    }

    function ab(hI) {
        var hH;
        if (hI && hI._locale && hI._locale._abbr) {
            hI = hI._locale._abbr
        }
        if (!hI) {
            return es
        }
        if (!ah(hI)) {
            hH = ba(hI);
            if (hH) {
                return hH
            }
            hI = [hI]
        }
        return er(hI)
    }

    function c2() {
        return cH(cf)
    }

    function eg(hH) {
        var hJ;
        var hI = hH._a;
        if (hI && bO(hH).overflow === -2) {
            hJ = hI[p] < 0 || hI[p] > 11 ? p : hI[gK] < 1 || hI[gK] > cn(hI[hh], hI[p]) ? gK : hI[g2] < 0 || hI[g2] > 24 || (hI[g2] === 24 && (hI[ft] !== 0 || hI[aO] !== 0 || hI[cq] !== 0)) ? g2 : hI[ft] < 0 || hI[ft] > 59 ? ft : hI[aO] < 0 || hI[aO] > 59 ? aO : hI[cq] < 0 || hI[cq] > 999 ? cq : -1;
            if (bO(hH)._overflowDayOfYear && (hJ < hh || hJ > gK)) {
                hJ = gK
            }
            if (bO(hH)._overflowWeeks && hJ === -1) {
                hJ = dt
            }
            if (bO(hH)._overflowWeekday && hJ === -1) {
                hJ = m
            }
            bO(hH).overflow = hJ
        }
        return hH
    }

    function f8(hI, hH, hJ) {
        if (hI != null) {
            return hI
        }
        if (hH != null) {
            return hH
        }
        return hJ
    }

    function bD(hI) {
        var hH = new Date(gX.now());
        if (hI._useUTC) {
            return [hH.getUTCFullYear(), hH.getUTCMonth(), hH.getUTCDate()]
        }
        return [hH.getFullYear(), hH.getMonth(), hH.getDate()]
    }

    function h(hL) {
        var hM, hK, hJ = [],
            hI, hN, hH;
        if (hL._d) {
            return
        }
        hI = bD(hL);
        if (hL._w && hL._a[gK] == null && hL._a[p] == null) {
            ew(hL)
        }
        if (hL._dayOfYear != null) {
            hH = f8(hL._a[hh], hI[hh]);
            if (hL._dayOfYear > fq(hH) || hL._dayOfYear === 0) {
                bO(hL)._overflowDayOfYear = true
            }
            hK = ff(hH, 0, hL._dayOfYear);
            hL._a[p] = hK.getUTCMonth();
            hL._a[gK] = hK.getUTCDate()
        }
        for (hM = 0; hM < 3 && hL._a[hM] == null; ++hM) {
            hL._a[hM] = hJ[hM] = hI[hM]
        }
        for (; hM < 7; hM++) {
            hL._a[hM] = hJ[hM] = (hL._a[hM] == null) ? (hM === 2 ? 1 : 0) : hL._a[hM]
        }
        if (hL._a[g2] === 24 && hL._a[ft] === 0 && hL._a[aO] === 0 && hL._a[cq] === 0) {
            hL._nextDay = true;
            hL._a[g2] = 0
        }
        hL._d = (hL._useUTC ? ff : f5).apply(null, hJ);
        hN = hL._useUTC ? hL._d.getUTCDay() : hL._d.getDay();
        if (hL._tzm != null) {
            hL._d.setUTCMinutes(hL._d.getUTCMinutes() - hL._tzm)
        }
        if (hL._nextDay) {
            hL._a[g2] = 24
        }
        if (hL._w && typeof hL._w.d !== "undefined" && hL._w.d !== hN) {
            bO(hL).weekdayMismatch = true
        }
    }

    function ew(hK) {
        var hN, hH, hI, hL, hQ, hO, hP, hM;
        hN = hK._w;
        if (hN.GG != null || hN.W != null || hN.E != null) {
            hQ = 1;
            hO = 4;
            hH = f8(hN.GG, hK._a[hh], gH(fm(), 1, 4).year);
            hI = f8(hN.W, 1);
            hL = f8(hN.E, 1);
            if (hL < 1 || hL > 7) {
                hM = true
            }
        } else {
            hQ = hK._locale._week.dow;
            hO = hK._locale._week.doy;
            var hJ = gH(fm(), hQ, hO);
            hH = f8(hN.gg, hK._a[hh], hJ.year);
            hI = f8(hN.w, hJ.week);
            if (hN.d != null) {
                hL = hN.d;
                if (hL < 0 || hL > 6) {
                    hM = true
                }
            } else {
                if (hN.e != null) {
                    hL = hN.e + hQ;
                    if (hN.e < 0 || hN.e > 6) {
                        hM = true
                    }
                } else {
                    hL = hQ
                }
            }
        }
        if (hI < 1 || hI > P(hH, hQ, hO)) {
            bO(hK)._overflowWeeks = true
        } else {
            if (hM != null) {
                bO(hK)._overflowWeekday = true
            } else {
                hP = ch(hH, hI, hL, hQ, hO);
                hK._a[hh] = hP.year;
                hK._dayOfYear = hP.dayOfYear
            }
        }
    }
    var q = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var bs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var d5 = /Z|[+-]\d\d(?::?\d\d)?/;
    var el = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/]
    ];
    var dH = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ];
    var cF = /^\/?Date\((\-?\d+)/i;

    function N(hI) {
        var hM, hK, hO = hI._i,
            hN = q.exec(hO) || bs.exec(hO),
            hP, hH, hL, hJ;
        if (hN) {
            bO(hI).iso = true;
            for (hM = 0, hK = el.length; hM < hK; hM++) {
                if (el[hM][1].exec(hN[1])) {
                    hH = el[hM][0];
                    hP = el[hM][2] !== false;
                    break
                }
            }
            if (hH == null) {
                hI._isValid = false;
                return
            }
            if (hN[3]) {
                for (hM = 0, hK = dH.length; hM < hK; hM++) {
                    if (dH[hM][1].exec(hN[3])) {
                        hL = (hN[2] || " ") + dH[hM][0];
                        break
                    }
                }
                if (hL == null) {
                    hI._isValid = false;
                    return
                }
            }
            if (!hP && hL != null) {
                hI._isValid = false;
                return
            }
            if (hN[4]) {
                if (d5.exec(hN[4])) {
                    hJ = "Z"
                } else {
                    hI._isValid = false;
                    return
                }
            }
            hI._f = hH + (hL || "") + (hJ || "");
            cJ(hI)
        } else {
            hI._isValid = false
        }
    }
    var e2 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function gI(hL, hK, hM, hI, hN, hJ) {
        var hH = [dE(hL), fP.indexOf(hK), parseInt(hM, 10), parseInt(hI, 10), parseInt(hN, 10)];
        if (hJ) {
            hH.push(parseInt(hJ, 10))
        }
        return hH
    }

    function dE(hH) {
        var hI = parseInt(hH, 10);
        if (hI <= 49) {
            return 2000 + hI
        } else {
            if (hI <= 999) {
                return 1900 + hI
            }
        }
        return hI
    }

    function bk(hH) {
        return hH.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function a0(hH, hL, hJ) {
        if (hH) {
            var hK = t.indexOf(hH),
                hI = new Date(hL[0], hL[1], hL[2]).getDay();
            if (hK !== hI) {
                bO(hJ).weekdayMismatch = true;
                hJ._isValid = false;
                return false
            }
        }
        return true
    }
    var cb = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function hu(hM, hI, hK) {
        if (hM) {
            return cb[hM]
        } else {
            if (hI) {
                return 0
            } else {
                var hL = parseInt(hK, 10);
                var hH = hL % 100,
                    hJ = (hL - hH) / 100;
                return hJ * 60 + hH
            }
        }
    }

    function cA(hI) {
        var hH = e2.exec(bk(hI._i));
        if (hH) {
            var hJ = gI(hH[4], hH[3], hH[2], hH[5], hH[6], hH[7]);
            if (!a0(hH[1], hJ, hI)) {
                return
            }
            hI._a = hJ;
            hI._tzm = hu(hH[8], hH[9], hH[10]);
            hI._d = ff.apply(null, hI._a);
            hI._d.setUTCMinutes(hI._d.getUTCMinutes() - hI._tzm);
            bO(hI).rfc2822 = true
        } else {
            hI._isValid = false
        }
    }

    function bP(hI) {
        var hH = cF.exec(hI._i);
        if (hH !== null) {
            hI._d = new Date(+hH[1]);
            return
        }
        N(hI);
        if (hI._isValid === false) {
            delete hI._isValid
        } else {
            return
        }
        cA(hI);
        if (hI._isValid === false) {
            delete hI._isValid
        } else {
            return
        }
        gX.createFromInputFallback(hI)
    }
    gX.createFromInputFallback = gh("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(hH) {
        hH._d = new Date(hH._i + (hH._useUTC ? " UTC" : ""))
    });
    gX.ISO_8601 = function() {};
    gX.RFC_2822 = function() {};

    function cJ(hJ) {
        if (hJ._f === gX.ISO_8601) {
            N(hJ);
            return
        }
        if (hJ._f === gX.RFC_2822) {
            cA(hJ);
            return
        }
        hJ._a = [];
        bO(hJ).empty = true;
        var hM = "" + hJ._i,
            hL, hI, hP, hK, hO, hH = hM.length,
            hN = 0;
        hP = cm(hJ._f, hJ._locale).match(cx) || [];
        for (hL = 0; hL < hP.length; hL++) {
            hK = hP[hL];
            hI = (hM.match(cl(hK, hJ)) || [])[0];
            if (hI) {
                hO = hM.substr(0, hM.indexOf(hI));
                if (hO.length > 0) {
                    bO(hJ).unusedInput.push(hO)
                }
                hM = hM.slice(hM.indexOf(hI) + hI.length);
                hN += hI.length
            }
            if (bM[hK]) {
                if (hI) {
                    bO(hJ).empty = false
                } else {
                    bO(hJ).unusedTokens.push(hK)
                }
                E(hK, hI, hJ)
            } else {
                if (hJ._strict && !hI) {
                    bO(hJ).unusedTokens.push(hK)
                }
            }
        }
        bO(hJ).charsLeftOver = hH - hN;
        if (hM.length > 0) {
            bO(hJ).unusedInput.push(hM)
        }
        if (hJ._a[g2] <= 12 && bO(hJ).bigHour === true && hJ._a[g2] > 0) {
            bO(hJ).bigHour = undefined
        }
        bO(hJ).parsedDateParts = hJ._a.slice(0);
        bO(hJ).meridiem = hJ._meridiem;
        hJ._a[g2] = gi(hJ._locale, hJ._a[g2], hJ._meridiem);
        h(hJ);
        eg(hJ)
    }

    function gi(hH, hJ, hK) {
        var hI;
        if (hK == null) {
            return hJ
        }
        if (hH.meridiemHour != null) {
            return hH.meridiemHour(hJ, hK)
        } else {
            if (hH.isPM != null) {
                hI = hH.isPM(hK);
                if (hI && hJ < 12) {
                    hJ += 12
                }
                if (!hI && hJ === 12) {
                    hJ = 0
                }
                return hJ
            } else {
                return hJ
            }
        }
    }

    function fo(hH) {
        var hL, hJ, hK, hI, hM;
        if (hH._f.length === 0) {
            bO(hH).invalidFormat = true;
            hH._d = new Date(NaN);
            return
        }
        for (hI = 0; hI < hH._f.length; hI++) {
            hM = 0;
            hL = z({}, hH);
            if (hH._useUTC != null) {
                hL._useUTC = hH._useUTC
            }
            hL._f = hH._f[hI];
            cJ(hL);
            if (!aT(hL)) {
                continue
            }
            hM += bO(hL).charsLeftOver;
            hM += bO(hL).unusedTokens.length * 10;
            bO(hL).score = hM;
            if (hK == null || hM < hK) {
                hK = hM;
                hJ = hL
            }
        }
        ho(hH, hJ || hL)
    }

    function bF(hH) {
        if (hH._d) {
            return
        }
        var hI = fy(hH._i);
        hH._a = b4([hI.year, hI.month, hI.day || hI.date, hI.hour, hI.minute, hI.second, hI.millisecond], function(hJ) {
            return hJ && parseInt(hJ, 10)
        });
        h(hH)
    }

    function aQ(hH) {
        var hI = new gG(eg(b8(hH)));
        if (hI._nextDay) {
            hI.add(1, "d");
            hI._nextDay = undefined
        }
        return hI
    }

    function b8(hI) {
        var hH = hI._i,
            hJ = hI._f;
        hI._locale = hI._locale || ab(hI._l);
        if (hH === null || (hJ === undefined && hH === "")) {
            return Y({
                nullInput: true
            })
        }
        if (typeof hH === "string") {
            hI._i = hH = hI._locale.preparse(hH)
        }
        if (db(hH)) {
            return new gG(eg(hH))
        } else {
            if (gM(hH)) {
                hI._d = hH
            } else {
                if (ah(hJ)) {
                    fo(hI)
                } else {
                    if (hJ) {
                        cJ(hI)
                    } else {
                        dN(hI)
                    }
                }
            }
        }
        if (!aT(hI)) {
            hI._d = null
        }
        return hI
    }

    function dN(hI) {
        var hH = hI._i;
        if (Q(hH)) {
            hI._d = new Date(gX.now())
        } else {
            if (gM(hH)) {
                hI._d = new Date(hH.valueOf())
            } else {
                if (typeof hH === "string") {
                    bP(hI)
                } else {
                    if (ah(hH)) {
                        hI._a = b4(hH.slice(0), function(hJ) {
                            return parseInt(hJ, 10)
                        });
                        h(hI)
                    } else {
                        if (F(hH)) {
                            bF(hI)
                        } else {
                            if (A(hH)) {
                                hI._d = new Date(hH)
                            } else {
                                gX.createFromInputFallback(hI)
                            }
                        }
                    }
                }
            }
        }
    }

    function aw(hK, hL, hH, hJ, hI) {
        var hM = {};
        if (hH === true || hH === false) {
            hJ = hH;
            hH = undefined
        }
        if ((F(hK) && dn(hK)) || (ah(hK) && hK.length === 0)) {
            hK = undefined
        }
        hM._isAMomentObject = true;
        hM._useUTC = hM._isUTC = hI;
        hM._l = hH;
        hM._i = hK;
        hM._f = hL;
        hM._strict = hJ;
        return aQ(hM)
    }

    function fm(hJ, hK, hH, hI) {
        return aw(hJ, hK, hH, hI, false)
    }
    var d9 = gh("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var hH = fm.apply(null, arguments);
        if (this.isValid() && hH.isValid()) {
            return hH < this ? this : hH
        } else {
            return Y()
        }
    });
    var gD = gh("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var hH = fm.apply(null, arguments);
        if (this.isValid() && hH.isValid()) {
            return hH > this ? this : hH
        } else {
            return Y()
        }
    });

    function hr(hJ, hK) {
        var hI, hH;
        if (hK.length === 1 && ah(hK[0])) {
            hK = hK[0]
        }
        if (!hK.length) {
            return fm()
        }
        hI = hK[0];
        for (hH = 1; hH < hK.length; ++hH) {
            if (!hK[hH].isValid() || hK[hH][hJ](hI)) {
                hI = hK[hH]
            }
        }
        return hI
    }

    function x() {
        var hH = [].slice.call(arguments, 0);
        return hr("isBefore", hH)
    }

    function b1() {
        var hH = [].slice.call(arguments, 0);
        return hr("isAfter", hH)
    }
    var dU = function() {
        return Date.now ? Date.now() : +(new Date())
    };
    var hm = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function aX(hI) {
        for (var hK in hI) {
            if (!(ek.call(hm, hK) !== -1 && (hI[hK] == null || !isNaN(hI[hK])))) {
                return false
            }
        }
        var hH = false;
        for (var hJ = 0; hJ < hm.length; ++hJ) {
            if (hI[hm[hJ]]) {
                if (hH) {
                    return false
                }
                if (parseFloat(hI[hm[hJ]]) !== ej(hI[hm[hJ]])) {
                    hH = true
                }
            }
        }
        return true
    }

    function C() {
        return this._isValid
    }

    function bx() {
        return eY(NaN)
    }

    function fC(hM) {
        var hO = fy(hM),
            hN = hO.year || 0,
            hI = hO.quarter || 0,
            hJ = hO.month || 0,
            hH = hO.week || hO.isoWeek || 0,
            hR = hO.day || 0,
            hP = hO.hour || 0,
            hL = hO.minute || 0,
            hQ = hO.second || 0,
            hK = hO.millisecond || 0;
        this._isValid = aX(hO);
        this._milliseconds = +hK + hQ * 1000 + hL * 60000 + hP * 1000 * 60 * 60;
        this._days = +hR + hH * 7;
        this._months = +hJ + hI * 3 + hN * 12;
        this._data = {};
        this._locale = ab();
        this._bubble()
    }

    function aE(hH) {
        return hH instanceof fC
    }

    function gw(hH) {
        if (hH < 0) {
            return Math.round(-1 * hH) * -1
        } else {
            return Math.round(hH)
        }
    }

    function cd(hH, hI) {
        dS(hH, 0, 0, function() {
            var hK = this.utcOffset();
            var hJ = "+";
            if (hK < 0) {
                hK = -hK;
                hJ = "-"
            }
            return hJ + dF(~~(hK / 60), 2) + hI + dF(~~(hK) % 60, 2)
        })
    }
    cd("Z", ":");
    cd("ZZ", "");
    bQ("Z", d4);
    bQ("ZZ", d4);
    cC(["Z", "ZZ"], function(hH, hJ, hI) {
        hI._useUTC = true;
        hI._tzm = w(d4, hH)
    });
    var gW = /([\+\-]|\d\d)/gi;

    function w(hM, hI) {
        var hK = (hI || "").match(hM);
        if (hK === null) {
            return null
        }
        var hH = hK[hK.length - 1] || [];
        var hL = (hH + "").match(gW) || ["-", 0, 0];
        var hJ = +(hL[1] * 60) + ej(hL[2]);
        return hJ === 0 ? 0 : hL[0] === "+" ? hJ : -hJ
    }

    function bb(hH, hI) {
        var hJ, hK;
        if (hI._isUTC) {
            hJ = hI.clone();
            hK = (db(hH) || gM(hH) ? hH.valueOf() : fm(hH).valueOf()) - hJ.valueOf();
            hJ._d.setTime(hJ._d.valueOf() + hK);
            gX.updateOffset(hJ, false);
            return hJ
        } else {
            return fm(hH).local()
        }
    }

    function bn(hH) {
        return -Math.round(hH._d.getTimezoneOffset() / 15) * 15
    }
    gX.updateOffset = function() {};

    function fg(hH, hK, hL) {
        var hJ = this._offset || 0,
            hI;
        if (!this.isValid()) {
            return hH != null ? this : NaN
        }
        if (hH != null) {
            if (typeof hH === "string") {
                hH = w(d4, hH);
                if (hH === null) {
                    return this
                }
            } else {
                if (Math.abs(hH) < 16 && !hL) {
                    hH = hH * 60
                }
            }
            if (!this._isUTC && hK) {
                hI = bn(this)
            }
            this._offset = hH;
            this._isUTC = true;
            if (hI != null) {
                this.add(hI, "m")
            }
            if (hJ !== hH) {
                if (!hK || this._changeInProgress) {
                    bA(this, eY(hH - hJ, "m"), 1, false)
                } else {
                    if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        gX.updateOffset(this, true);
                        this._changeInProgress = null
                    }
                }
            }
            return this
        } else {
            return this._isUTC ? hJ : bn(this)
        }
    }

    function fb(hH, hI) {
        if (hH != null) {
            if (typeof hH !== "string") {
                hH = -hH
            }
            this.utcOffset(hH, hI);
            return this
        } else {
            return -this.utcOffset()
        }
    }

    function bB(hH) {
        return this.utcOffset(0, hH)
    }

    function fd(hH) {
        if (this._isUTC) {
            this.utcOffset(0, hH);
            this._isUTC = false;
            if (hH) {
                this.subtract(bn(this), "m")
            }
        }
        return this
    }

    function c7() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true)
        } else {
            if (typeof this._i === "string") {
                var hH = w(co, this._i);
                if (hH != null) {
                    this.utcOffset(hH)
                } else {
                    this.utcOffset(0, true)
                }
            }
        }
        return this
    }

    function a9(hH) {
        if (!this.isValid()) {
            return false
        }
        hH = hH ? fm(hH).utcOffset() : 0;
        return (this.utcOffset() - hH) % 60 === 0
    }

    function bm() {
        return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset())
    }

    function c() {
        if (!Q(this._isDSTShifted)) {
            return this._isDSTShifted
        }
        var hI = {};
        z(hI, this);
        hI = b8(hI);
        if (hI._a) {
            var hH = hI._isUTC ? dO(hI._a) : fm(hI._a);
            this._isDSTShifted = this.isValid() && cO(hI._a, hH.toArray()) > 0
        } else {
            this._isDSTShifted = false
        }
        return this._isDSTShifted
    }

    function fh() {
        return this.isValid() ? !this._isUTC : false
    }

    function cy() {
        return this.isValid() ? this._isUTC : false
    }

    function fn() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false
    }
    var am = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    var dR = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function eY(hJ, hM) {
        var hN = hJ,
            hL = null,
            hI, hK, hH;
        if (aE(hJ)) {
            hN = {
                ms: hJ._milliseconds,
                d: hJ._days,
                M: hJ._months
            }
        } else {
            if (A(hJ)) {
                hN = {};
                if (hM) {
                    hN[hM] = hJ
                } else {
                    hN.milliseconds = hJ
                }
            } else {
                if (!!(hL = am.exec(hJ))) {
                    hI = (hL[1] === "-") ? -1 : 1;
                    hN = {
                        y: 0,
                        d: ej(hL[gK]) * hI,
                        h: ej(hL[g2]) * hI,
                        m: ej(hL[ft]) * hI,
                        s: ej(hL[aO]) * hI,
                        ms: ej(gw(hL[cq] * 1000)) * hI
                    }
                } else {
                    if (!!(hL = dR.exec(hJ))) {
                        hI = (hL[1] === "-") ? -1 : 1;
                        hN = {
                            y: hi(hL[2], hI),
                            M: hi(hL[3], hI),
                            w: hi(hL[4], hI),
                            d: hi(hL[5], hI),
                            h: hi(hL[6], hI),
                            m: hi(hL[7], hI),
                            s: hi(hL[8], hI)
                        }
                    } else {
                        if (hN == null) {
                            hN = {}
                        } else {
                            if (typeof hN === "object" && ("from" in hN || "to" in hN)) {
                                hH = cu(fm(hN.from), fm(hN.to));
                                hN = {};
                                hN.ms = hH.milliseconds;
                                hN.M = hH.months
                            }
                        }
                    }
                }
            }
        }
        hK = new fC(hN);
        if (aE(hJ) && e6(hJ, "_locale")) {
            hK._locale = hJ._locale
        }
        return hK
    }
    eY.fn = fC.prototype;
    eY.invalid = bx;

    function hi(hJ, hH) {
        var hI = hJ && parseFloat(hJ.replace(",", "."));
        return (isNaN(hI) ? 0 : hI) * hH
    }

    function fk(hJ, hH) {
        var hI = {};
        hI.months = hH.month() - hJ.month() + (hH.year() - hJ.year()) * 12;
        if (hJ.clone().add(hI.months, "M").isAfter(hH)) {
            --hI.months
        }
        hI.milliseconds = +hH - +(hJ.clone().add(hI.months, "M"));
        return hI
    }

    function cu(hJ, hH) {
        var hI;
        if (!(hJ.isValid() && hH.isValid())) {
            return {
                milliseconds: 0,
                months: 0
            }
        }
        hH = bb(hH, hJ);
        if (hJ.isBefore(hH)) {
            hI = fk(hJ, hH)
        } else {
            hI = fk(hH, hJ);
            hI.milliseconds = -hI.milliseconds;
            hI.months = -hI.months
        }
        return hI
    }

    function bG(hI, hH) {
        return function(hM, hL) {
            var hK, hJ;
            if (hL !== null && !isNaN(+hL)) {
                hf(hH, "moment()." + hH + "(period, number) is deprecated. Please use moment()." + hH + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                hJ = hM;
                hM = hL;
                hL = hJ
            }
            hM = typeof hM === "string" ? +hM : hM;
            hK = eY(hM, hL);
            bA(this, hK, hI);
            return this
        }
    }

    function bA(hJ, hM, hL, hK) {
        var hI = hM._milliseconds,
            hN = gw(hM._days),
            hH = gw(hM._months);
        if (!hJ.isValid()) {
            return
        }
        hK = hK == null ? true : hK;
        if (hH) {
            bw(hJ, fl(hJ, "Month") + hH * hL)
        }
        if (hN) {
            bl(hJ, "Date", fl(hJ, "Date") + hN * hL)
        }
        if (hI) {
            hJ._d.setTime(hJ._d.valueOf() + hI * hL)
        }
        if (hK) {
            gX.updateOffset(hJ, hN || hH)
        }
    }
    var bz = bG(1, "add");
    var a3 = bG(-1, "subtract");

    function aZ(hJ, hH) {
        var hI = hJ.diff(hH, "days", true);
        return hI < -6 ? "sameElse" : hI < -1 ? "lastWeek" : hI < 0 ? "lastDay" : hI < 1 ? "sameDay" : hI < 2 ? "nextDay" : hI < 7 ? "nextWeek" : "sameElse"
    }

    function dj(hM, hH) {
        var hK = hM || fm(),
            hJ = bb(hK, this).startOf("day"),
            hL = gX.calendarFormat(this, hJ) || "sameElse";
        var hI = hH && (bJ(hH[hL]) ? hH[hL].call(this, hK) : hH[hL]);
        return this.format(hI || this.localeData().calendar(hL, this, fm(hK)))
    }

    function fc() {
        return new gG(this)
    }

    function d1(hI, hH) {
        var hJ = db(hI) ? hI : fm(hI);
        if (!(this.isValid() && hJ.isValid())) {
            return false
        }
        hH = ei(hH) || "millisecond";
        if (hH === "millisecond") {
            return this.valueOf() > hJ.valueOf()
        } else {
            return hJ.valueOf() < this.clone().startOf(hH).valueOf()
        }
    }

    function hc(hI, hH) {
        var hJ = db(hI) ? hI : fm(hI);
        if (!(this.isValid() && hJ.isValid())) {
            return false
        }
        hH = ei(hH) || "millisecond";
        if (hH === "millisecond") {
            return this.valueOf() < hJ.valueOf()
        } else {
            return this.clone().endOf(hH).valueOf() < hJ.valueOf()
        }
    }

    function gF(hM, hL, hH, hK) {
        var hJ = db(hM) ? hM : fm(hM),
            hI = db(hL) ? hL : fm(hL);
        if (!(this.isValid() && hJ.isValid() && hI.isValid())) {
            return false
        }
        hK = hK || "()";
        return (hK[0] === "(" ? this.isAfter(hJ, hH) : !this.isBefore(hJ, hH)) && (hK[1] === ")" ? this.isBefore(hI, hH) : !this.isAfter(hI, hH))
    }

    function d7(hI, hH) {
        var hK = db(hI) ? hI : fm(hI),
            hJ;
        if (!(this.isValid() && hK.isValid())) {
            return false
        }
        hH = ei(hH) || "millisecond";
        if (hH === "millisecond") {
            return this.valueOf() === hK.valueOf()
        } else {
            hJ = hK.valueOf();
            return this.clone().startOf(hH).valueOf() <= hJ && hJ <= this.clone().endOf(hH).valueOf()
        }
    }

    function g4(hI, hH) {
        return this.isSame(hI, hH) || this.isAfter(hI, hH)
    }

    function g9(hI, hH) {
        return this.isSame(hI, hH) || this.isBefore(hI, hH)
    }

    function V(hK, hJ, hH) {
        var hM, hL, hI;
        if (!this.isValid()) {
            return NaN
        }
        hM = bb(hK, this);
        if (!hM.isValid()) {
            return NaN
        }
        hL = (hM.utcOffset() - this.utcOffset()) * 60000;
        hJ = ei(hJ);
        switch (hJ) {
            case "year":
                hI = gA(this, hM) / 12;
                break;
            case "month":
                hI = gA(this, hM);
                break;
            case "quarter":
                hI = gA(this, hM) / 3;
                break;
            case "second":
                hI = (this - hM) / 1000;
                break;
            case "minute":
                hI = (this - hM) / 60000;
                break;
            case "hour":
                hI = (this - hM) / 3600000;
                break;
            case "day":
                hI = (this - hM - hL) / 86400000;
                break;
            case "week":
                hI = (this - hM - hL) / 604800000;
                break;
            default:
                hI = this - hM
        }
        return hH ? hI : e3(hI)
    }

    function gA(hI, hH) {
        var hM = ((hH.year() - hI.year()) * 12) + (hH.month() - hI.month()),
            hJ = hI.clone().add(hM, "months"),
            hK, hL;
        if (hH - hJ < 0) {
            hK = hI.clone().add(hM - 1, "months");
            hL = (hH - hJ) / (hJ - hK)
        } else {
            hK = hI.clone().add(hM + 1, "months");
            hL = (hH - hJ) / (hK - hJ)
        }
        return -(hM + hL) || 0
    }
    gX.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    gX.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function fQ() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ez(hJ) {
        if (!this.isValid()) {
            return null
        }
        var hI = hJ !== true;
        var hH = hI ? this.clone().utc() : this;
        if (hH.year() < 0 || hH.year() > 9999) {
            return aF(hH, hI ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }
        if (bJ(Date.prototype.toISOString)) {
            if (hI) {
                return this.toDate().toISOString()
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace("Z", aF(hH, "Z"))
            }
        }
        return aF(hH, hI ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }

    function bq() {
        if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)"
        }
        var hJ = "moment";
        var hH = "";
        if (!this.isLocal()) {
            hJ = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            hH = "Z"
        }
        var hK = "[" + hJ + '("]';
        var hI = (0 <= this.year() && this.year() <= 9999) ? "YYYY" : "YYYYYY";
        var hM = "-MM-DD[T]HH:mm:ss.SSS";
        var hL = hH + '[")]';
        return this.format(hK + hI + hM + hL)
    }

    function eD(hI) {
        if (!hI) {
            hI = this.isUtc() ? gX.defaultFormatUtc : gX.defaultFormat
        }
        var hH = aF(this, hI);
        return this.localeData().postformat(hH)
    }

    function fF(hI, hH) {
        if (this.isValid() && ((db(hI) && hI.isValid()) || fm(hI).isValid())) {
            return eY({
                to: this,
                from: hI
            }).locale(this.locale()).humanize(!hH)
        } else {
            return this.localeData().invalidDate()
        }
    }

    function fz(hH) {
        return this.from(fm(), hH)
    }

    function aM(hI, hH) {
        if (this.isValid() && ((db(hI) && hI.isValid()) || fm(hI).isValid())) {
            return eY({
                from: this,
                to: hI
            }).locale(this.locale()).humanize(!hH)
        } else {
            return this.localeData().invalidDate()
        }
    }

    function bp(hH) {
        return this.to(fm(), hH)
    }

    function hG(hI) {
        var hH;
        if (hI === undefined) {
            return this._locale._abbr
        } else {
            hH = ab(hI);
            if (hH != null) {
                this._locale = hH
            }
            return this
        }
    }
    var J = gh("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(hH) {
        if (hH === undefined) {
            return this.localeData()
        } else {
            return this.locale(hH)
        }
    });

    function fG() {
        return this._locale
    }
    var eh = 1000;
    var ao = 60 * eh;
    var hC = 60 * ao;
    var aK = (365 * 400 + 97) * 24 * hC;

    function bI(hH, hI) {
        return (hH % hI + hI) % hI
    }

    function a(hJ, hH, hI) {
        if (hJ < 100 && hJ >= 0) {
            return new Date(hJ + 400, hH, hI) - aK
        } else {
            return new Date(hJ, hH, hI).valueOf()
        }
    }

    function f3(hJ, hH, hI) {
        if (hJ < 100 && hJ >= 0) {
            return Date.UTC(hJ + 400, hH, hI) - aK
        } else {
            return Date.UTC(hJ, hH, hI)
        }
    }

    function c6(hH) {
        var hI;
        hH = ei(hH);
        if (hH === undefined || hH === "millisecond" || !this.isValid()) {
            return this
        }
        var hJ = this._isUTC ? f3 : a;
        switch (hH) {
            case "year":
                hI = hJ(this.year(), 0, 1);
                break;
            case "quarter":
                hI = hJ(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                hI = hJ(this.year(), this.month(), 1);
                break;
            case "week":
                hI = hJ(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                hI = hJ(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                hI = hJ(this.year(), this.month(), this.date());
                break;
            case "hour":
                hI = this._d.valueOf();
                hI -= bI(hI + (this._isUTC ? 0 : this.utcOffset() * ao), hC);
                break;
            case "minute":
                hI = this._d.valueOf();
                hI -= bI(hI, ao);
                break;
            case "second":
                hI = this._d.valueOf();
                hI -= bI(hI, eh);
                break
        }
        this._d.setTime(hI);
        gX.updateOffset(this, true);
        return this
    }

    function gO(hH) {
        var hI;
        hH = ei(hH);
        if (hH === undefined || hH === "millisecond" || !this.isValid()) {
            return this
        }
        var hJ = this._isUTC ? f3 : a;
        switch (hH) {
            case "year":
                hI = hJ(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                hI = hJ(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                hI = hJ(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                hI = hJ(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                hI = hJ(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                hI = hJ(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                hI = this._d.valueOf();
                hI += hC - bI(hI + (this._isUTC ? 0 : this.utcOffset() * ao), hC) - 1;
                break;
            case "minute":
                hI = this._d.valueOf();
                hI += ao - bI(hI, ao) - 1;
                break;
            case "second":
                hI = this._d.valueOf();
                hI += eh - bI(hI, eh) - 1;
                break
        }
        this._d.setTime(hI);
        gX.updateOffset(this, true);
        return this
    }

    function fJ() {
        return this._d.valueOf() - ((this._offset || 0) * 60000)
    }

    function cg() {
        return Math.floor(this.valueOf() / 1000)
    }

    function ev() {
        return new Date(this.valueOf())
    }

    function fw() {
        var hH = this;
        return [hH.year(), hH.month(), hH.date(), hH.hour(), hH.minute(), hH.second(), hH.millisecond()]
    }

    function fH() {
        var hH = this;
        return {
            years: hH.year(),
            months: hH.month(),
            date: hH.date(),
            hours: hH.hours(),
            minutes: hH.minutes(),
            seconds: hH.seconds(),
            milliseconds: hH.milliseconds()
        }
    }

    function eE() {
        return this.isValid() ? this.toISOString() : null
    }

    function y() {
        return aT(this)
    }

    function fp() {
        return ho({}, bO(this))
    }

    function dV() {
        return bO(this).overflow
    }

    function he() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    dS(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    });
    dS(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });

    function aj(hI, hH) {
        dS(0, [hI, hI.length], 0, hH)
    }
    aj("gggg", "weekYear");
    aj("ggggg", "weekYear");
    aj("GGGG", "isoWeekYear");
    aj("GGGGG", "isoWeekYear");
    dh("weekYear", "gg");
    dh("isoWeekYear", "GG");
    fK("weekYear", 1);
    fK("isoWeekYear", 1);
    bQ("G", M);
    bQ("g", M);
    bQ("GG", aW, bi);
    bQ("gg", aW, bi);
    bQ("GGGG", aU, bg);
    bQ("gggg", aU, bg);
    bQ("GGGGG", aS, bf);
    bQ("ggggg", aS, bf);
    ak(["gggg", "ggggg", "GGGG", "GGGGG"], function(hH, hK, hI, hJ) {
        hK[hJ.substr(0, 2)] = ej(hH)
    });
    ak(["gg", "GG"], function(hH, hK, hI, hJ) {
        hK[hJ] = gX.parseTwoDigitYear(hH)
    });

    function b6(hH) {
        return dJ.call(this, hH, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function fM(hH) {
        return dJ.call(this, hH, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function eI() {
        return P(this.year(), 1, 4)
    }

    function T() {
        var hH = this.localeData()._week;
        return P(this.year(), hH.dow, hH.doy)
    }

    function dJ(hH, hI, hK, hM, hL) {
        var hJ;
        if (hH == null) {
            return gH(this, hM, hL).year
        } else {
            hJ = P(hH, hM, hL);
            if (hI > hJ) {
                hI = hJ
            }
            return bK.call(this, hH, hI, hK, hM, hL)
        }
    }

    function bK(hJ, hI, hL, hN, hM) {
        var hK = ch(hJ, hI, hL, hN, hM),
            hH = ff(hK.year, 0, hK.dayOfYear);
        this.year(hH.getUTCFullYear());
        this.month(hH.getUTCMonth());
        this.date(hH.getUTCDate());
        return this
    }
    dS("Q", 0, "Qo", "quarter");
    dh("quarter", "Q");
    fK("quarter", 7);
    bQ("Q", bj);
    cC("Q", function(hH, hI) {
        hI[p] = (ej(hH) - 1) * 3
    });

    function cP(hH) {
        return hH == null ? Math.ceil((this.month() + 1) / 3) : this.month((hH - 1) * 3 + this.month() % 3)
    }
    dS("D", ["DD", 2], "Do", "date");
    dh("date", "D");
    fK("date", 9);
    bQ("D", aW);
    bQ("DD", aW, bi);
    bQ("Do", function(hI, hH) {
        return hI ? (hH._dayOfMonthOrdinalParse || hH._ordinalParse) : hH._dayOfMonthOrdinalParseLenient
    });
    cC(["D", "DD"], gK);
    cC("Do", function(hH, hI) {
        hI[gK] = ej(hH.match(aW)[0])
    });
    var dD = ge("Date", true);
    dS("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    dh("dayOfYear", "DDD");
    fK("dayOfYear", 4);
    bQ("DDD", aV);
    bQ("DDDD", bh);
    cC(["DDD", "DDDD"], function(hH, hJ, hI) {
        hI._dayOfYear = ej(hH)
    });

    function bS(hH) {
        var hI = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
        return hH == null ? hI : this.add((hH - hI), "d")
    }
    dS("m", ["mm", 2], 0, "minute");
    dh("minute", "m");
    fK("minute", 14);
    bQ("m", aW);
    bQ("mm", aW, bi);
    cC(["m", "mm"], ft);
    var hb = ge("Minutes", false);
    dS("s", ["ss", 2], 0, "second");
    dh("second", "s");
    fK("second", 15);
    bQ("s", aW);
    bQ("ss", aW, bi);
    cC(["s", "ss"], aO);
    var cc = ge("Seconds", false);
    dS("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    });
    dS(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    });
    dS(0, ["SSS", 3], 0, "millisecond");
    dS(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10
    });
    dS(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100
    });
    dS(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1000
    });
    dS(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 10000
    });
    dS(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 100000
    });
    dS(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1000000
    });
    dh("millisecond", "ms");
    fK("millisecond", 16);
    bQ("S", aV, bj);
    bQ("SS", aV, bi);
    bQ("SSS", aV, bh);
    var b0;
    for (b0 = "SSSS"; b0.length <= 9; b0 += "S") {
        bQ(b0, B)
    }

    function eB(hH, hI) {
        hI[cq] = ej(("0." + hH) * 1000)
    }
    for (b0 = "S"; b0.length <= 9; b0 += "S") {
        cC(b0, eB)
    }
    var cN = ge("Milliseconds", false);
    dS("z", 0, 0, "zoneAbbr");
    dS("zz", 0, 0, "zoneName");

    function g6() {
        return this._isUTC ? "UTC" : ""
    }

    function gj() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    var dc = gG.prototype;
    dc.add = bz;
    dc.calendar = dj;
    dc.clone = fc;
    dc.diff = V;
    dc.endOf = gO;
    dc.format = eD;
    dc.from = fF;
    dc.fromNow = fz;
    dc.to = aM;
    dc.toNow = bp;
    dc.get = a8;
    dc.invalidAt = dV;
    dc.isAfter = d1;
    dc.isBefore = hc;
    dc.isBetween = gF;
    dc.isSame = d7;
    dc.isSameOrAfter = g4;
    dc.isSameOrBefore = g9;
    dc.isValid = y;
    dc.lang = J;
    dc.locale = hG;
    dc.localeData = fG;
    dc.max = gD;
    dc.min = d9;
    dc.parsingFlags = fp;
    dc.set = aY;
    dc.startOf = c6;
    dc.subtract = a3;
    dc.toArray = fw;
    dc.toObject = fH;
    dc.toDate = ev;
    dc.toISOString = ez;
    dc.inspect = bq;
    dc.toJSON = eE;
    dc.toString = fQ;
    dc.unix = cg;
    dc.valueOf = fJ;
    dc.creationData = he;
    dc.year = d6;
    dc.isLeapYear = eq;
    dc.weekYear = b6;
    dc.isoWeekYear = fM;
    dc.quarter = dc.quarters = cP;
    dc.month = g1;
    dc.daysInMonth = ct;
    dc.week = dc.weeks = U;
    dc.isoWeek = dc.isoWeeks = I;
    dc.weeksInYear = T;
    dc.isoWeeksInYear = eI;
    dc.date = dD;
    dc.day = dc.days = gy;
    dc.weekday = ax;
    dc.isoWeekday = dM;
    dc.dayOfYear = bS;
    dc.hour = dc.hours = dG;
    dc.minute = dc.minutes = hb;
    dc.second = dc.seconds = cc;
    dc.millisecond = dc.milliseconds = cN;
    dc.utcOffset = fg;
    dc.utc = bB;
    dc.local = fd;
    dc.parseZone = c7;
    dc.hasAlignedHourOffset = a9;
    dc.isDST = bm;
    dc.isLocal = fh;
    dc.isUtcOffset = cy;
    dc.isUtc = fn;
    dc.isUTC = fn;
    dc.zoneAbbr = g6;
    dc.zoneName = gj;
    dc.dates = gh("dates accessor is deprecated. Use date instead.", dD);
    dc.months = gh("months accessor is deprecated. Use month instead", g1);
    dc.years = gh("years accessor is deprecated. Use year instead", d6);
    dc.zone = gh("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", fb);
    dc.isDSTShifted = gh("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", c);

    function eM(hH) {
        return fm(hH * 1000)
    }

    function ef() {
        return fm.apply(null, arguments).parseZone()
    }

    function fi(hH) {
        return hH
    }
    var fX = dY.prototype;
    fX.calendar = e;
    fX.longDateFormat = ea;
    fX.invalidDate = gE;
    fX.ordinal = gU;
    fX.preparse = fi;
    fX.postformat = fi;
    fX.relativeTime = af;
    fX.pastFuture = fN;
    fX.set = e8;
    fX.months = bC;
    fX.monthsShort = bN;
    fX.monthsParse = eJ;
    fX.monthsRegex = et;
    fX.monthsShortRegex = e5;
    fX.week = b5;
    fX.firstDayOfYear = eG;
    fX.firstDayOfWeek = aL;
    fX.weekdays = a2;
    fX.weekdaysMin = gY;
    fX.weekdaysShort = X;
    fX.weekdaysParse = cs;
    fX.weekdaysRegex = hj;
    fX.weekdaysShortRegex = be;
    fX.weekdaysMinRegex = O;
    fX.isPM = dd;
    fX.meridiem = bt;

    function S(hL, hI, hK, hM) {
        var hH = ab();
        var hJ = dO().set(hM, hI);
        return hH[hK](hJ, hL)
    }

    function by(hL, hI, hK) {
        if (A(hL)) {
            hI = hL;
            hL = undefined
        }
        hL = hL || "";
        if (hI != null) {
            return S(hL, hI, hK, "month")
        }
        var hJ;
        var hH = [];
        for (hJ = 0; hJ < 12; hJ++) {
            hH[hJ] = S(hL, hJ, hK, "month")
        }
        return hH
    }

    function hl(hM, hO, hK, hN) {
        if (typeof hM === "boolean") {
            if (A(hO)) {
                hK = hO;
                hO = undefined
            }
            hO = hO || ""
        } else {
            hO = hM;
            hK = hO;
            hM = false;
            if (A(hO)) {
                hK = hO;
                hO = undefined
            }
            hO = hO || ""
        }
        var hH = ab(),
            hI = hM ? hH._week.dow : 0;
        if (hK != null) {
            return S(hO, (hK + hI) % 7, hN, "day")
        }
        var hL;
        var hJ = [];
        for (hL = 0; hL < 7; hL++) {
            hJ[hL] = S(hO, (hL + hI) % 7, hN, "day")
        }
        return hJ
    }

    function eo(hI, hH) {
        return by(hI, hH, "months")
    }

    function dX(hI, hH) {
        return by(hI, hH, "monthsShort")
    }

    function eC(hI, hJ, hH) {
        return hl(hI, hJ, hH, "weekdays")
    }

    function ee(hI, hJ, hH) {
        return hl(hI, hJ, hH, "weekdaysShort")
    }

    function al(hI, hJ, hH) {
        return hl(hI, hJ, hH, "weekdaysMin")
    }
    L("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (ej(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        }
    });
    gX.lang = gh("moment.lang is deprecated. Use moment.locale instead.", L);
    gX.langData = gh("moment.langData is deprecated. Use moment.localeData instead.", ab);
    var gR = Math.abs;

    function b2() {
        var hH = this._data;
        this._milliseconds = gR(this._milliseconds);
        this._days = gR(this._days);
        this._months = gR(this._months);
        hH.milliseconds = gR(hH.milliseconds);
        hH.seconds = gR(hH.seconds);
        hH.minutes = gR(hH.minutes);
        hH.hours = gR(hH.hours);
        hH.months = gR(hH.months);
        hH.years = gR(hH.years);
        return this
    }

    function bd(hL, hI, hJ, hK) {
        var hH = eY(hI, hJ);
        hL._milliseconds += hK * hH._milliseconds;
        hL._days += hK * hH._days;
        hL._months += hK * hH._months;
        return hL._bubble()
    }

    function ci(hH, hI) {
        return bd(this, hH, hI, 1)
    }

    function fD(hH, hI) {
        return bd(this, hH, hI, -1)
    }

    function gZ(hH) {
        if (hH < 0) {
            return Math.floor(hH)
        } else {
            return Math.ceil(hH)
        }
    }

    function ep() {
        var hJ = this._milliseconds;
        var hP = this._days;
        var hH = this._months;
        var hL = this._data;
        var hO, hK, hN, hM, hI;
        if (!((hJ >= 0 && hP >= 0 && hH >= 0) || (hJ <= 0 && hP <= 0 && hH <= 0))) {
            hJ += gZ(ht(hH) + hP) * 86400000;
            hP = 0;
            hH = 0
        }
        hL.milliseconds = hJ % 1000;
        hO = e3(hJ / 1000);
        hL.seconds = hO % 60;
        hK = e3(hO / 60);
        hL.minutes = hK % 60;
        hN = e3(hK / 60);
        hL.hours = hN % 24;
        hP += e3(hN / 24);
        hI = e3(i(hP));
        hH += hI;
        hP -= gZ(ht(hI));
        hM = e3(hH / 12);
        hH %= 12;
        hL.days = hP;
        hL.months = hH;
        hL.years = hM;
        return this
    }

    function i(hH) {
        return hH * 4800 / 146097
    }

    function ht(hH) {
        return hH * 146097 / 4800
    }

    function g3(hI) {
        if (!this.isValid()) {
            return NaN
        }
        var hK;
        var hH;
        var hJ = this._milliseconds;
        hI = ei(hI);
        if (hI === "month" || hI === "quarter" || hI === "year") {
            hK = this._days + hJ / 86400000;
            hH = this._months + i(hK);
            switch (hI) {
                case "month":
                    return hH;
                case "quarter":
                    return hH / 3;
                case "year":
                    return hH / 12
            }
        } else {
            hK = this._days + Math.round(ht(this._months));
            switch (hI) {
                case "week":
                    return hK / 7 + hJ / 604800000;
                case "day":
                    return hK + hJ / 86400000;
                case "hour":
                    return hK * 24 + hJ / 3600000;
                case "minute":
                    return hK * 1440 + hJ / 60000;
                case "second":
                    return hK * 86400 + hJ / 1000;
                case "millisecond":
                    return Math.floor(hK * 86400000) + hJ;
                default:
                    throw new Error("Unknown unit " + hI)
            }
        }
    }

    function ey() {
        if (!this.isValid()) {
            return NaN
        }
        return (this._milliseconds + this._days * 86400000 + (this._months % 12) * 2592000000 + ej(this._months / 12) * 31536000000)
    }

    function f2(hH) {
        return function() {
            return this.as(hH)
        }
    }
    var hw = f2("ms");
    var W = f2("s");
    var fe = f2("m");
    var D = f2("h");
    var gc = f2("d");
    var fE = f2("w");
    var fZ = f2("M");
    var gu = f2("Q");
    var bZ = f2("y");

    function hk() {
        return eY(this)
    }

    function R(hH) {
        hH = ei(hH);
        return this.isValid() ? this[hH + "s"]() : NaN
    }

    function c9(hH) {
        return function() {
            return this.isValid() ? this._data[hH] : NaN
        }
    }
    var d = c9("milliseconds");
    var bT = c9("seconds");
    var bc = c9("minutes");
    var ag = c9("hours");
    var bR = c9("days");
    var g8 = c9("months");
    var cr = c9("years");

    function gf() {
        return e3(this.days() / 7)
    }
    var eu = Math.round;
    var fs = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };

    function aP(hI, hK, hJ, hL, hH) {
        return hH.relativeTime(hK || 1, !!hJ, hI, hL)
    }

    function fv(hL, hI, hP) {
        var hJ = eY(hL).abs();
        var hQ = eu(hJ.as("s"));
        var hK = eu(hJ.as("m"));
        var hO = eu(hJ.as("h"));
        var hR = eu(hJ.as("d"));
        var hH = eu(hJ.as("M"));
        var hM = eu(hJ.as("y"));
        var hN = hQ <= fs.ss && ["s", hQ] || hQ < fs.s && ["ss", hQ] || hK <= 1 && ["m"] || hK < fs.m && ["mm", hK] || hO <= 1 && ["h"] || hO < fs.h && ["hh", hO] || hR <= 1 && ["d"] || hR < fs.d && ["dd", hR] || hH <= 1 && ["M"] || hH < fs.M && ["MM", hH] || hM <= 1 && ["y"] || ["yy", hM];
        hN[2] = hI;
        hN[3] = +hL > 0;
        hN[4] = hP;
        return aP.apply(null, hN)
    }

    function gL(hH) {
        if (hH === undefined) {
            return eu
        }
        if (typeof(hH) === "function") {
            eu = hH;
            return true
        }
        return false
    }

    function dC(hH, hI) {
        if (fs[hH] === undefined) {
            return false
        }
        if (hI === undefined) {
            return fs[hH]
        }
        fs[hH] = hI;
        if (hH === "s") {
            fs.ss = hI - 1
        }
        return true
    }

    function b(hJ) {
        if (!this.isValid()) {
            return this.localeData().invalidDate()
        }
        var hH = this.localeData();
        var hI = fv(this, !hJ, hH);
        if (hJ) {
            hI = hH.pastFuture(+this, hI)
        }
        return hH.postformat(hI)
    }
    var bu = Math.abs;

    function cB(hH) {
        return ((hH > 0) - (hH < 0)) || +hH
    }

    function cp() {
        if (!this.isValid()) {
            return this.localeData().invalidDate()
        }
        var hV = bu(this._milliseconds) / 1000;
        var hW = bu(this._days);
        var hK = bu(this._months);
        var hO, hU, hR;
        hO = e3(hV / 60);
        hU = e3(hO / 60);
        hV %= 60;
        hO %= 60;
        hR = e3(hK / 12);
        hK %= 12;
        var hJ = hR;
        var hS = hK;
        var hI = hW;
        var hQ = hU;
        var hN = hO;
        var hX = hV ? hV.toFixed(3).replace(/\.?0+$/, "") : "";
        var hT = this.asSeconds();
        if (!hT) {
            return "P0D"
        }
        var hH = hT < 0 ? "-" : "";
        var hL = cB(this._months) !== cB(hT) ? "-" : "";
        var hM = cB(this._days) !== cB(hT) ? "-" : "";
        var hP = cB(this._milliseconds) !== cB(hT) ? "-" : "";
        return hH + "P" + (hJ ? hL + hJ + "Y" : "") + (hS ? hL + hS + "M" : "") + (hI ? hM + hI + "D" : "") + ((hQ || hN || hX) ? "T" : "") + (hQ ? hP + hQ + "H" : "") + (hN ? hP + hN + "M" : "") + (hX ? hP + hX + "S" : "")
    }
    var fV = fC.prototype;
    fV.isValid = C;
    fV.abs = b2;
    fV.add = ci;
    fV.subtract = fD;
    fV.as = g3;
    fV.asMilliseconds = hw;
    fV.asSeconds = W;
    fV.asMinutes = fe;
    fV.asHours = D;
    fV.asDays = gc;
    fV.asWeeks = fE;
    fV.asMonths = fZ;
    fV.asQuarters = gu;
    fV.asYears = bZ;
    fV.valueOf = ey;
    fV._bubble = ep;
    fV.clone = hk;
    fV.get = R;
    fV.milliseconds = d;
    fV.seconds = bT;
    fV.minutes = bc;
    fV.hours = ag;
    fV.days = bR;
    fV.weeks = gf;
    fV.months = g8;
    fV.years = cr;
    fV.humanize = b;
    fV.toISOString = cp;
    fV.toString = cp;
    fV.toJSON = cp;
    fV.locale = hG;
    fV.localeData = fG;
    fV.toIsoString = gh("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", cp);
    fV.lang = J;
    dS("X", 0, 0, "unix");
    dS("x", 0, 0, "valueOf");
    bQ("x", M);
    bQ("X", hg);
    cC("X", function(hH, hJ, hI) {
        hI._d = new Date(parseFloat(hH, 10) * 1000)
    });
    cC("x", function(hH, hJ, hI) {
        hI._d = new Date(ej(hH))
    });
    gX.version = "2.24.0";
    br(fm);
    gX.fn = dc;
    gX.min = x;
    gX.max = b1;
    gX.now = dU;
    gX.utc = dO;
    gX.unix = eM;
    gX.months = eo;
    gX.isDate = gM;
    gX.locale = L;
    gX.invalid = Y;
    gX.duration = eY;
    gX.isMoment = db;
    gX.weekdays = eC;
    gX.parseZone = ef;
    gX.localeData = ab;
    gX.isDuration = aE;
    gX.monthsShort = dX;
    gX.weekdaysMin = al;
    gX.defineLocale = dW;
    gX.updateLocale = gz;
    gX.locales = c2;
    gX.weekdaysShort = ee;
    gX.normalizeUnits = ei;
    gX.relativeTimeRounding = gL;
    gX.relativeTimeThreshold = dC;
    gX.calendarFormat = aZ;
    gX.prototype = dc;
    gX.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    gX.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(hH) {
            return /^nm$/i.test(hH)
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 12) {
                return hJ ? "vm" : "VM"
            } else {
                return hJ ? "nm" : "NM"
            }
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(hH) {
            return hH + ((hH === 1 || hH === 8 || hH >= 20) ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 0,
            doy: 4
        }
    });
    gX.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 0,
            doy: 12
        }
    });
    var dK = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        },
        a7 = function(hH) {
            return hH === 0 ? 0 : hH === 1 ? 1 : hH === 2 ? 2 : hH % 100 >= 3 && hH % 100 <= 10 ? 3 : hH % 100 >= 11 ? 4 : 5
        },
        cZ = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        },
        fu = function(hH) {
            return function(hK, hJ, hI, hM) {
                var hL = a7(hK),
                    hN = cZ[hH][a7(hK)];
                if (hL === 2) {
                    hN = hN[hJ ? 0 : 1]
                }
                return hN.replace(/%d/i, hK)
            }
        },
        eW = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    gX.defineLocale("ar-ly", {
        months: eW,
        monthsShort: eW,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200FM/\u200FYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(hH) {
            return "م" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ص"
            } else {
                return "م"
            }
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: fu("s"),
            ss: fu("s"),
            m: fu("m"),
            mm: fu("m"),
            h: fu("h"),
            hh: fu("h"),
            d: fu("d"),
            dd: fu("d"),
            M: fu("M"),
            MM: fu("M"),
            y: fu("y"),
            yy: fu("y")
        },
        preparse: function(hH) {
            return hH.replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dK[hI]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    gX.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var ds = {
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
            "0": "٠"
        },
        eA = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
    gX.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(hH) {
            return "م" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ص"
            } else {
                return "م"
            }
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        preparse: function(hH) {
            return hH.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(hI) {
                return eA[hI]
            }).replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return ds[hI]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var dq = {
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
            "0": "٠"
        },
        gv = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        },
        dA = function(hH) {
            return hH === 0 ? 0 : hH === 1 ? 1 : hH === 2 ? 2 : hH % 100 >= 3 && hH % 100 <= 10 ? 3 : hH % 100 >= 11 ? 4 : 5
        },
        fA = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        },
        hd = function(hH) {
            return function(hK, hJ, hI, hM) {
                var hL = dA(hK),
                    hN = fA[hH][dA(hK)];
                if (hL === 2) {
                    hN = hN[hJ ? 0 : 1]
                }
                return hN.replace(/%d/i, hK)
            }
        },
        eV = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    gX.defineLocale("ar", {
        months: eV,
        monthsShort: eV,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200FM/\u200FYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(hH) {
            return "م" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ص"
            } else {
                return "م"
            }
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: hd("s"),
            ss: hd("s"),
            m: hd("m"),
            mm: hd("m"),
            h: hd("h"),
            hh: hd("h"),
            d: hd("d"),
            dd: hd("d"),
            M: hd("M"),
            MM: hd("M"),
            y: hd("y"),
            yy: hd("y")
        },
        preparse: function(hH) {
            return hH.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(hI) {
                return gv[hI]
            }).replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dq[hI]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var bv = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
    };
    gX.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyə",
            ss: "%d saniyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(hH) {
            return /^(gündüz|axşam)$/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "gecə"
            } else {
                if (hH < 12) {
                    return "səhər"
                } else {
                    if (hH < 17) {
                        return "gündüz"
                    } else {
                        return "axşam"
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(hJ) {
            if (hJ === 0) {
                return hJ + "-ıncı"
            }
            var hI = hJ % 10,
                hH = hJ % 100 - hI,
                hK = hJ >= 100 ? 100 : null;
            return hJ + (bv[hI] || bv[hH] || bv[hK])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

    function eH(hJ, hI) {
        var hH = hJ.split("_");
        return hI % 10 === 1 && hI % 100 !== 11 ? hH[0] : (hI % 10 >= 2 && hI % 10 <= 4 && (hI % 100 < 10 || hI % 100 >= 20) ? hH[1] : hH[2])
    }

    function eF(hJ, hI, hH) {
        var hK = {
            ss: hI ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: hI ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: hI ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        };
        if (hH === "m") {
            return hI ? "хвіліна" : "хвіліну"
        } else {
            if (hH === "h") {
                return hI ? "гадзіна" : "гадзіну"
            } else {
                return hJ + " " + eH(hK[hH], +hJ)
            }
        }
    }
    gX.defineLocale("be", {
        months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() {
                return "[У] dddd [ў] LT"
            },
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: eF,
            mm: eF,
            h: eF,
            hh: eF,
            d: "дзень",
            dd: eF,
            M: "месяц",
            MM: eF,
            y: "год",
            yy: eF
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(hH) {
            return /^(дня|вечара)$/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "ночы"
            } else {
                if (hH < 12) {
                    return "раніцы"
                } else {
                    if (hH < 17) {
                        return "дня"
                    } else {
                        return "вечара"
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return (hH % 10 === 2 || hH % 10 === 3) && (hH % 100 !== 12 && hH % 100 !== 13) ? hH + "-і" : hH + "-ы";
                case "D":
                    return hH + "-га";
                default:
                    return hH
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(hJ) {
            var hI = hJ % 10,
                hH = hJ % 100;
            if (hJ === 0) {
                return hJ + "-ев"
            } else {
                if (hH === 0) {
                    return hJ + "-ен"
                } else {
                    if (hH > 10 && hH < 20) {
                        return hJ + "-ти"
                    } else {
                        if (hI === 1) {
                            return hJ + "-ви"
                        } else {
                            if (hI === 2) {
                                return hJ + "-ри"
                            } else {
                                if (hI === 7 || hI === 8) {
                                    return hJ + "-ми"
                                } else {
                                    return hJ + "-ти"
                                }
                            }
                        }
                    }
                }
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
        },
        calendar: {
            sameDay: "[Bi lɛrɛ] LT",
            nextDay: "[Sini lɛrɛ] LT",
            nextWeek: "dddd [don lɛrɛ] LT",
            lastDay: "[Kunu lɛrɛ] LT",
            lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s kɔnɔ",
            past: "a bɛ %s bɔ",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "lɛrɛ kelen",
            hh: "lɛrɛ %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var dp = {
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "৪",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯",
            "0": "০"
        },
        gt = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
    gX.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
        },
        preparse: function(hH) {
            return hH.replace(/[১২৩৪৫৬৭৮৯০]/g, function(hI) {
                return gt[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dp[hI]
            })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if ((hI === "রাত" && hH >= 4) || (hI === "দুপুর" && hH < 5) || hI === "বিকাল") {
                return hH + 12
            } else {
                return hH
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "রাত"
            } else {
                if (hH < 10) {
                    return "সকাল"
                } else {
                    if (hH < 17) {
                        return "দুপুর"
                    } else {
                        if (hH < 20) {
                            return "বিকাল"
                        } else {
                            return "রাত"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var dm = {
            "1": "༡",
            "2": "༢",
            "3": "༣",
            "4": "༤",
            "5": "༥",
            "6": "༦",
            "7": "༧",
            "8": "༨",
            "9": "༩",
            "0": "༠"
        },
        gs = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        };
    gX.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            ss: "%d སྐར་ཆ།",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
        },
        preparse: function(hH) {
            return hH.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(hI) {
                return gs[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dm[hI]
            })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if ((hI === "མཚན་མོ" && hH >= 4) || (hI === "ཉིན་གུང" && hH < 5) || hI === "དགོང་དག") {
                return hH + 12
            } else {
                return hH
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "མཚན་མོ"
            } else {
                if (hH < 10) {
                    return "ཞོགས་ཀས"
                } else {
                    if (hH < 17) {
                        return "ཉིན་གུང"
                    } else {
                        if (hH < 20) {
                            return "དགོང་དག"
                        } else {
                            return "མཚན་མོ"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });

    function g(hJ, hI, hH) {
        var hK = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        };
        return hJ + " " + gS(hK[hH], hJ)
    }

    function aN(hH) {
        switch (eb(hH)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return hH + " bloaz";
            default:
                return hH + " vloaz"
        }
    }

    function eb(hH) {
        if (hH > 9) {
            return eb(hH % 10)
        }
        return hH
    }

    function gS(hI, hH) {
        if (hH === 2) {
            return gx(hI)
        }
        return hI
    }

    function gx(hI) {
        var hH = {
            m: "v",
            b: "v",
            d: "z"
        };
        if (hH[hI.charAt(0)] === undefined) {
            return hI
        }
        return hH[hI.charAt(0)] + hI.substring(1)
    }
    gX.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: g,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: g,
            M: "ur miz",
            MM: g,
            y: "ur bloaz",
            yy: aN
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(hI) {
            var hH = (hI === 1) ? "añ" : "vet";
            return hI + hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });

    function ed(hK, hJ, hI) {
        var hH = hK + " ";
        switch (hI) {
            case "ss":
                if (hK === 1) {
                    hH += "sekunda"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "sekunde"
                    } else {
                        hH += "sekundi"
                    }
                }
                return hH;
            case "m":
                return hJ ? "jedna minuta" : "jedne minute";
            case "mm":
                if (hK === 1) {
                    hH += "minuta"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "minute"
                    } else {
                        hH += "minuta"
                    }
                }
                return hH;
            case "h":
                return hJ ? "jedan sat" : "jednog sata";
            case "hh":
                if (hK === 1) {
                    hH += "sat"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "sata"
                    } else {
                        hH += "sati"
                    }
                }
                return hH;
            case "dd":
                if (hK === 1) {
                    hH += "dan"
                } else {
                    hH += "dana"
                }
                return hH;
            case "MM":
                if (hK === 1) {
                    hH += "mjesec"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "mjeseca"
                    } else {
                        hH += "mjeseci"
                    }
                }
                return hH;
            case "yy":
                if (hK === 1) {
                    hH += "godina"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "godine"
                    } else {
                        hH += "godina"
                    }
                }
                return hH
        }
    }
    gX.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: ed,
            m: ed,
            mm: ed,
            h: ed,
            hh: ed,
            d: "dan",
            dd: ed,
            M: "mjesec",
            MM: ed,
            y: "godinu",
            yy: ed
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("ca", {
        months: {
            standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
            },
            nextDay: function() {
                return "[demà a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
            },
            lastDay: function() {
                return "[ahir a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(hI, hJ) {
            var hH = (hI === 1) ? "r" : (hI === 2) ? "n" : (hI === 3) ? "r" : (hI === 4) ? "t" : "è";
            if (hJ === "w" || hJ === "W") {
                hH = "a"
            }
            return hI + hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var eU = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        c5 = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
    var fR = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
    var ga = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

    function cY(hH) {
        return (hH > 1) && (hH < 5) && (~~(hH / 10) !== 1)
    }

    function hE(hK, hJ, hI, hL) {
        var hH = hK + " ";
        switch (hI) {
            case "s":
                return (hJ || hL) ? "pár sekund" : "pár sekundami";
            case "ss":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "sekundy" : "sekund")
                } else {
                    return hH + "sekundami"
                }
                break;
            case "m":
                return hJ ? "minuta" : (hL ? "minutu" : "minutou");
            case "mm":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "minuty" : "minut")
                } else {
                    return hH + "minutami"
                }
                break;
            case "h":
                return hJ ? "hodina" : (hL ? "hodinu" : "hodinou");
            case "hh":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "hodiny" : "hodin")
                } else {
                    return hH + "hodinami"
                }
                break;
            case "d":
                return (hJ || hL) ? "den" : "dnem";
            case "dd":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "dny" : "dní")
                } else {
                    return hH + "dny"
                }
                break;
            case "M":
                return (hJ || hL) ? "měsíc" : "měsícem";
            case "MM":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "měsíce" : "měsíců")
                } else {
                    return hH + "měsíci"
                }
                break;
            case "y":
                return (hJ || hL) ? "rok" : "rokem";
            case "yy":
                if (hJ || hL) {
                    return hH + (cY(hK) ? "roky" : "let")
                } else {
                    return hH + "lety"
                }
                break
        }
    }
    gX.defineLocale("cs", {
        months: eU,
        monthsShort: c5,
        monthsRegex: ga,
        monthsShortRegex: ga,
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: fR,
        longMonthsParse: fR,
        shortMonthsParse: fR,
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "před %s",
            s: hE,
            ss: hE,
            m: hE,
            mm: hE,
            h: hE,
            hh: hE,
            d: hE,
            dd: hE,
            M: hE,
            MM: hE,
            y: hE,
            yy: hE
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(hI) {
                var hH = /сехет$/i.exec(hI) ? "рен" : /ҫул$/i.exec(hI) ? "тан" : "ран";
                return hI + hH
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            ss: "%d ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(hJ) {
            var hH = hJ,
                hI = "",
                hK = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            if (hH > 20) {
                if (hH === 40 || hH === 50 || hH === 60 || hH === 80 || hH === 100) {
                    hI = "fed"
                } else {
                    hI = "ain"
                }
            } else {
                if (hH > 0) {
                    hI = hK[hH]
                }
            }
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function ai(hJ, hI, hH, hL) {
        var hK = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [hJ + " Tage", hJ + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [hJ + " Monate", hJ + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [hJ + " Jahre", hJ + " Jahren"]
        };
        return hI ? hK[hH][0] : hK[hH][1]
    }
    gX.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: ai,
            mm: "%d Minuten",
            h: ai,
            hh: "%d Stunden",
            d: ai,
            dd: ai,
            M: ai,
            MM: ai,
            y: ai,
            yy: ai
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function az(hJ, hI, hH, hL) {
        var hK = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [hJ + " Tage", hJ + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [hJ + " Monate", hJ + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [hJ + " Jahre", hJ + " Jahren"]
        };
        return hI ? hK[hH][0] : hK[hH][1]
    }
    gX.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: az,
            mm: "%d Minuten",
            h: az,
            hh: "%d Stunden",
            d: az,
            dd: az,
            M: az,
            MM: az,
            y: az,
            yy: az
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function ay(hJ, hI, hH, hL) {
        var hK = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [hJ + " Tage", hJ + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [hJ + " Monate", hJ + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [hJ + " Jahre", hJ + " Jahren"]
        };
        return hI ? hK[hH][0] : hK[hH][1]
    }
    gX.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: ay,
            mm: "%d Minuten",
            h: ay,
            hh: "%d Stunden",
            d: ay,
            dd: ay,
            M: ay,
            MM: ay,
            y: ay,
            yy: ay
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var eS = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
        gb = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
    gX.defineLocale("dv", {
        months: eS,
        monthsShort: eS,
        weekdays: gb,
        weekdaysShort: gb,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(hH) {
            return "މފ" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "މކ"
            } else {
                return "މފ"
            }
        },
        calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            ss: "d% ސިކުންތު",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
        },
        preparse: function(hH) {
            return hH.replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/,/g, "،")
        },
        week: {
            dow: 7,
            doy: 12
        }
    });
    gX.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(hI, hH) {
            if (!hI) {
                return this._monthsNominativeEl
            } else {
                if (typeof hH === "string" && /D/.test(hH.substring(0, hH.indexOf("MMMM")))) {
                    return this._monthsGenitiveEl[hI.month()]
                } else {
                    return this._monthsNominativeEl[hI.month()]
                }
            }
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(hH, hI, hJ) {
            if (hH > 11) {
                return hJ ? "μμ" : "ΜΜ"
            } else {
                return hJ ? "πμ" : "ΠΜ"
            }
        },
        isPM: function(hH) {
            return ((hH + "").toLowerCase()[0] === "μ")
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 6:
                        return "[το προηγούμενο] dddd [{}] LT";
                    default:
                        return "[την προηγούμενη] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function(hJ, hK) {
            var hI = this._calendarEl[hJ],
                hH = hK && hK.hours();
            if (bJ(hI)) {
                hI = hI.apply(hK)
            }
            return hI.replace("{}", (hH % 12 === 1 ? "στη" : "στις"))
        },
        relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            ss: "%d δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("en-SG", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        }
    });
    gX.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("en-il", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        }
    });
    gX.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(hH) {
            return hH.charAt(0).toLowerCase() === "p"
        },
        meridiem: function(hH, hI, hJ) {
            if (hH > 11) {
                return hJ ? "p.t.m." : "P.T.M."
            } else {
                return hJ ? "a.t.m." : "A.T.M."
            }
        },
        calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "sekundoj",
            ss: "%d sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var hn = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        dz = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    var aJ = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var f9 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    gX.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return hn
            } else {
                if (/-MMM-/.test(hI)) {
                    return dz[hH.month()]
                } else {
                    return hn[hH.month()]
                }
            }
        },
        monthsRegex: f9,
        monthsShortRegex: f9,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: aJ,
        longMonthsParse: aJ,
        shortMonthsParse: aJ,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañana a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var e0 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        dx = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    var aH = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var f7 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    gX.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return e0
            } else {
                if (/-MMM-/.test(hI)) {
                    return dx[hH.month()]
                } else {
                    return e0[hH.month()]
                }
            }
        },
        monthsRegex: f7,
        monthsShortRegex: f7,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: aH,
        longMonthsParse: aH,
        shortMonthsParse: aH,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañana a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 0,
            doy: 6
        }
    });
    var eZ = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        dw = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    var aG = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var f6 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    gX.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return eZ
            } else {
                if (/-MMM-/.test(hI)) {
                    return dw[hH.month()]
                } else {
                    return eZ[hH.month()]
                }
            }
        },
        monthsRegex: f6,
        monthsShortRegex: f6,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: aG,
        longMonthsParse: aG,
        shortMonthsParse: aG,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañana a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function av(hJ, hI, hH, hL) {
        var hK = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            ss: [hJ + "sekundi", hJ + "sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [hJ + " minuti", hJ + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [hJ + " tunni", hJ + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [hJ + " kuu", hJ + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [hJ + " aasta", hJ + " aastat"]
        };
        if (hI) {
            return hK[hH][2] ? hK[hH][2] : hK[hH][1]
        }
        return hL ? hK[hH][0] : hK[hH][1]
    }
    gX.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: av,
            ss: av,
            m: av,
            mm: av,
            h: av,
            hh: av,
            d: av,
            dd: "%d päeva",
            M: av,
            MM: av,
            y: av,
            yy: av
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: true,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var dl = {
            "1": "۱",
            "2": "۲",
            "3": "۳",
            "4": "۴",
            "5": "۵",
            "6": "۶",
            "7": "۷",
            "8": "۸",
            "9": "۹",
            "0": "۰"
        },
        gr = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
    gX.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(hH) {
            return /بعد از ظهر/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "قبل از ظهر"
            } else {
                return "بعد از ظهر"
            }
        },
        calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چند ثانیه",
            ss: "ثانیه d%",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        preparse: function(hH) {
            return hH.replace(/[۰-۹]/g, function(hI) {
                return gr[hI]
            }).replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dl[hI]
            }).replace(/,/g, "،")
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
            dow: 6,
            doy: 12
        }
    });
    var v = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
        a6 = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", v[7], v[8], v[9]];

    function hD(hK, hJ, hI, hL) {
        var hH = "";
        switch (hI) {
            case "s":
                return hL ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return hL ? "sekunnin" : "sekuntia";
            case "m":
                return hL ? "minuutin" : "minuutti";
            case "mm":
                hH = hL ? "minuutin" : "minuuttia";
                break;
            case "h":
                return hL ? "tunnin" : "tunti";
            case "hh":
                hH = hL ? "tunnin" : "tuntia";
                break;
            case "d":
                return hL ? "päivän" : "päivä";
            case "dd":
                hH = hL ? "päivän" : "päivää";
                break;
            case "M":
                return hL ? "kuukauden" : "kuukausi";
            case "MM":
                hH = hL ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return hL ? "vuoden" : "vuosi";
            case "yy":
                hH = hL ? "vuoden" : "vuotta";
                break
        }
        hH = ex(hK, hL) + " " + hH;
        return hH
    }

    function ex(hH, hI) {
        return hH < 10 ? (hI ? a6[hH] : v[hH]) : hH
    }
    gX.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: hD,
            ss: hD,
            m: hD,
            mm: hD,
            h: hD,
            hh: hD,
            d: hD,
            dd: hD,
            M: hD,
            MM: hD,
            y: hD,
            yy: hD
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaður",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return hH + (hH === 1 ? "er" : "e");
                case "w":
                        case "W":
                        return hH + (hH === 1 ? "re" : "e")
            }
        }
    });
    gX.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return hH + (hH === 1 ? "er" : "e");
                case "w":
                        case "W":
                        return hH + (hH === 1 ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "D":
                    return hH + (hH === 1 ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return hH + (hH === 1 ? "er" : "e");
                case "w":
                case "W":
                    return hH + (hH === 1 ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var gB = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        g7 = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    gX.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return gB
            } else {
                if (/-MMM-/.test(hI)) {
                    return g7[hH.month()]
                } else {
                    return gB[hH.month()]
                }
            }
        },
        monthsParseExact: true,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(hH) {
            return hH + ((hH === 1 || hH === 8 || hH >= 20) ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var eR = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"];
    var dv = ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"];
    var bY = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"];
    var gl = ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"];
    var H = ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"];
    gX.defineLocale("ga", {
        months: eR,
        monthsShort: dv,
        monthsParseExact: true,
        weekdays: bY,
        weekdaysShort: gl,
        weekdaysMin: H,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Inniu ag] LT",
            nextDay: "[Amárach ag] LT",
            nextWeek: "dddd [ag] LT",
            lastDay: "[Inné aig] LT",
            lastWeek: "dddd [seo caite] [ag] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i %s",
            past: "%s ó shin",
            s: "cúpla soicind",
            ss: "%d soicind",
            m: "nóiméad",
            mm: "%d nóiméad",
            h: "uair an chloig",
            hh: "%d uair an chloig",
            d: "lá",
            dd: "%d lá",
            M: "mí",
            MM: "%d mí",
            y: "bliain",
            yy: "%d bliain"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(hI) {
            var hH = hI === 1 ? "d" : hI % 10 === 2 ? "na" : "mh";
            return hI + hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var eQ = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"];
    var du = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"];
    var bX = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"];
    var gk = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"];
    var gP = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
    gX.defineLocale("gd", {
        months: eQ,
        monthsShort: du,
        monthsParseExact: true,
        weekdays: bX,
        weekdaysShort: gk,
        weekdaysMin: gP,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(hI) {
            var hH = hI === 1 ? "d" : hI % 10 === 2 ? "na" : "mh";
            return hI + hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + ((this.hours() !== 1) ? "ás" : "á") + "] LT"
            },
            nextDay: function() {
                return "[mañá " + ((this.hours() !== 1) ? "ás" : "á") + "] LT"
            },
            nextWeek: function() {
                return "dddd [" + ((this.hours() !== 1) ? "ás" : "a") + "] LT"
            },
            lastDay: function() {
                return "[onte " + ((this.hours() !== 1) ? "á" : "a") + "] LT"
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + ((this.hours() !== 1) ? "ás" : "a") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(hH) {
                if (hH.indexOf("un") === 0) {
                    return "n" + hH
                }
                return "en " + hH
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function au(hJ, hI, hH, hL) {
        var hK = {
            s: ["thodde secondanim", "thodde second"],
            ss: [hJ + " secondanim", hJ + " second"],
            m: ["eka mintan", "ek minute"],
            mm: [hJ + " mintanim", hJ + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [hJ + " voranim", hJ + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [hJ + " disanim", hJ + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [hJ + " mhoineanim", hJ + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [hJ + " vorsanim", hJ + " vorsam"]
        };
        return hI ? hK[hH][0] : hK[hH][1]
    }
    gX.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Ieta to] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fatlo] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s",
            past: "%s adim",
            s: au,
            ss: au,
            m: au,
            mm: au,
            h: au,
            hh: au,
            d: au,
            dd: au,
            M: au,
            MM: au,
            y: au,
            yy: au
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "D":
                    return hH + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return hH
            }
        },
        week: {
            dow: 1,
            doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "rati") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "sokalli") {
                    return hH
                } else {
                    if (hI === "donparam") {
                        return hH > 12 ? hH : hH + 12
                    } else {
                        if (hI === "sanje") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "rati"
            } else {
                if (hH < 12) {
                    return "sokalli"
                } else {
                    if (hH < 16) {
                        return "donparam"
                    } else {
                        if (hH < 20) {
                            return "sanje"
                        } else {
                            return "rati"
                        }
                    }
                }
            }
        }
    });
    var di = {
            "1": "૧",
            "2": "૨",
            "3": "૩",
            "4": "૪",
            "5": "૫",
            "6": "૬",
            "7": "૭",
            "8": "૮",
            "9": "૯",
            "0": "૦"
        },
        gq = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
        };
    gX.defineLocale("gu", {
        months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
        monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
        monthsParseExact: true,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
            LT: "A h:mm વાગ્યે",
            LTS: "A h:mm:ss વાગ્યે",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm વાગ્યે",
            LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
        },
        calendar: {
            sameDay: "[આજ] LT",
            nextDay: "[કાલે] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ગઇકાલે] LT",
            lastWeek: "[પાછલા] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s મા",
            past: "%s પેહલા",
            s: "અમુક પળો",
            ss: "%d સેકંડ",
            m: "એક મિનિટ",
            mm: "%d મિનિટ",
            h: "એક કલાક",
            hh: "%d કલાક",
            d: "એક દિવસ",
            dd: "%d દિવસ",
            M: "એક મહિનો",
            MM: "%d મહિનો",
            y: "એક વર્ષ",
            yy: "%d વર્ષ"
        },
        preparse: function(hH) {
            return hH.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(hI) {
                return gq[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return di[hI]
            })
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "રાત") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "સવાર") {
                    return hH
                } else {
                    if (hI === "બપોર") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "સાંજ") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "રાત"
            } else {
                if (hH < 10) {
                    return "સવાર"
                } else {
                    if (hH < 17) {
                        return "બપોર"
                    } else {
                        if (hH < 20) {
                            return "સાંજ"
                        } else {
                            return "રાત"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(hH) {
                if (hH === 2) {
                    return "שעתיים"
                }
                return hH + " שעות"
            },
            d: "יום",
            dd: function(hH) {
                if (hH === 2) {
                    return "יומיים"
                }
                return hH + " ימים"
            },
            M: "חודש",
            MM: function(hH) {
                if (hH === 2) {
                    return "חודשיים"
                }
                return hH + " חודשים"
            },
            y: "שנה",
            yy: function(hH) {
                if (hH === 2) {
                    return "שנתיים"
                } else {
                    if (hH % 10 === 0 && hH !== 10) {
                        return hH + " שנה"
                    }
                }
                return hH + " שנים"
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(hH) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 5) {
                return "לפנות בוקר"
            } else {
                if (hH < 10) {
                    return "בבוקר"
                } else {
                    if (hH < 12) {
                        return hI ? 'לפנה"צ' : "לפני הצהריים"
                    } else {
                        if (hH < 18) {
                            return hI ? 'אחה"צ' : "אחרי הצהריים"
                        } else {
                            return "בערב"
                        }
                    }
                }
            }
        }
    });
    var dg = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        },
        gp = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
    gX.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: true,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            ss: "%d सेकंड",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function(hH) {
            return hH.replace(/[१२३४५६७८९०]/g, function(hI) {
                return gp[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return dg[hI]
            })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "रात") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "सुबह") {
                    return hH
                } else {
                    if (hI === "दोपहर") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "शाम") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "रात"
            } else {
                if (hH < 10) {
                    return "सुबह"
                } else {
                    if (hH < 17) {
                        return "दोपहर"
                    } else {
                        if (hH < 20) {
                            return "शाम"
                        } else {
                            return "रात"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });

    function hA(hK, hJ, hI) {
        var hH = hK + " ";
        switch (hI) {
            case "ss":
                if (hK === 1) {
                    hH += "sekunda"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "sekunde"
                    } else {
                        hH += "sekundi"
                    }
                }
                return hH;
            case "m":
                return hJ ? "jedna minuta" : "jedne minute";
            case "mm":
                if (hK === 1) {
                    hH += "minuta"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "minute"
                    } else {
                        hH += "minuta"
                    }
                }
                return hH;
            case "h":
                return hJ ? "jedan sat" : "jednog sata";
            case "hh":
                if (hK === 1) {
                    hH += "sat"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "sata"
                    } else {
                        hH += "sati"
                    }
                }
                return hH;
            case "dd":
                if (hK === 1) {
                    hH += "dan"
                } else {
                    hH += "dana"
                }
                return hH;
            case "MM":
                if (hK === 1) {
                    hH += "mjesec"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "mjeseca"
                    } else {
                        hH += "mjeseci"
                    }
                }
                return hH;
            case "yy":
                if (hK === 1) {
                    hH += "godina"
                } else {
                    if (hK === 2 || hK === 3 || hK === 4) {
                        hH += "godine"
                    } else {
                        hH += "godina"
                    }
                }
                return hH
        }
    }
    gX.defineLocale("hr", {
        months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: hA,
            m: hA,
            mm: hA,
            h: hA,
            hh: hA,
            d: "dan",
            dd: hA,
            M: "mjesec",
            MM: hA,
            y: "godinu",
            yy: hA
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var fx = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

    function hz(hK, hJ, hI, hL) {
        var hH = hK;
        switch (hI) {
            case "s":
                return (hL || hJ) ? "néhány másodperc" : "néhány másodperce";
            case "ss":
                return hH + (hL || hJ) ? " másodperc" : " másodperce";
            case "m":
                return "egy" + (hL || hJ ? " perc" : " perce");
            case "mm":
                return hH + (hL || hJ ? " perc" : " perce");
            case "h":
                return "egy" + (hL || hJ ? " óra" : " órája");
            case "hh":
                return hH + (hL || hJ ? " óra" : " órája");
            case "d":
                return "egy" + (hL || hJ ? " nap" : " napja");
            case "dd":
                return hH + (hL || hJ ? " nap" : " napja");
            case "M":
                return "egy" + (hL || hJ ? " hónap" : " hónapja");
            case "MM":
                return hH + (hL || hJ ? " hónap" : " hónapja");
            case "y":
                return "egy" + (hL || hJ ? " év" : " éve");
            case "yy":
                return hH + (hL || hJ ? " év" : " éve")
        }
        return ""
    }

    function aI(hH) {
        return (hH ? "" : "[múlt] ") + "[" + fx[this.day()] + "] LT[-kor]"
    }
    gX.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(hH) {
            return hH.charAt(1).toLowerCase() === "u"
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 12) {
                return hJ === true ? "de" : "DE"
            } else {
                return hJ === true ? "du" : "DU"
            }
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return aI.call(this, true)
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return aI.call(this, false)
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: hz,
            ss: hz,
            m: hz,
            mm: hz,
            h: hz,
            hh: hz,
            d: hz,
            dd: hz,
            M: hz,
            MM: hz,
            y: hz,
            yy: hz
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("hy-am", {
        months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function() {
                return "dddd [օրը ժամը] LT"
            },
            lastWeek: function() {
                return "[անցած] dddd [օրը ժամը] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            ss: "%d վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(hH) {
            return /^(ցերեկվա|երեկոյան)$/.test(hH)
        },
        meridiem: function(hH) {
            if (hH < 4) {
                return "գիշերվա"
            } else {
                if (hH < 12) {
                    return "առավոտվա"
                } else {
                    if (hH < 17) {
                        return "ցերեկվա"
                    } else {
                        return "երեկոյան"
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    if (hH === 1) {
                        return hH + "-ին"
                    }
                    return hH + "-րդ";
                default:
                    return hH
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "pagi") {
                return hH
            } else {
                if (hI === "siang") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "sore" || hI === "malam") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 11) {
                return "pagi"
            } else {
                if (hH < 15) {
                    return "siang"
                } else {
                    if (hH < 19) {
                        return "sore"
                    } else {
                        return "malam"
                    }
                }
            }
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

    function cW(hH) {
        if (hH % 100 === 11) {
            return true
        } else {
            if (hH % 10 === 1) {
                return false
            }
        }
        return true
    }

    function hy(hK, hJ, hI, hL) {
        var hH = hK + " ";
        switch (hI) {
            case "s":
                return hJ || hL ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
                if (cW(hK)) {
                    return hH + (hJ || hL ? "sekúndur" : "sekúndum")
                }
                return hH + "sekúnda";
            case "m":
                return hJ ? "mínúta" : "mínútu";
            case "mm":
                if (cW(hK)) {
                    return hH + (hJ || hL ? "mínútur" : "mínútum")
                } else {
                    if (hJ) {
                        return hH + "mínúta"
                    }
                }
                return hH + "mínútu";
            case "hh":
                if (cW(hK)) {
                    return hH + (hJ || hL ? "klukkustundir" : "klukkustundum")
                }
                return hH + "klukkustund";
            case "d":
                if (hJ) {
                    return "dagur"
                }
                return hL ? "dag" : "degi";
            case "dd":
                if (cW(hK)) {
                    if (hJ) {
                        return hH + "dagar"
                    }
                    return hH + (hL ? "daga" : "dögum")
                } else {
                    if (hJ) {
                        return hH + "dagur"
                    }
                }
                return hH + (hL ? "dag" : "degi");
            case "M":
                if (hJ) {
                    return "mánuður"
                }
                return hL ? "mánuð" : "mánuði";
            case "MM":
                if (cW(hK)) {
                    if (hJ) {
                        return hH + "mánuðir"
                    }
                    return hH + (hL ? "mánuði" : "mánuðum")
                } else {
                    if (hJ) {
                        return hH + "mánuður"
                    }
                }
                return hH + (hL ? "mánuð" : "mánuði");
            case "y":
                return hJ || hL ? "ár" : "ári";
            case "yy":
                if (cW(hK)) {
                    return hH + (hJ || hL ? "ár" : "árum")
                }
                return hH + (hJ || hL ? "ár" : "ári")
        }
    }
    gX.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: hy,
            ss: hy,
            m: hy,
            mm: hy,
            h: "klukkustund",
            hh: hy,
            d: hy,
            dd: hy,
            M: hy,
            MM: hy,
            y: hy,
            yy: hy
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("it-ch", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(hH) {
                return ((/^[0-9].+$/).test(hH) ? "tra" : "in") + " " + hH
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(hH) {
                return ((/^[0-9].+$/).test(hH) ? "tra" : "in") + " " + hH
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("ja", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日(ddd) HH:mm"
        },
        meridiemParse: /午前|午後/i,
        isPM: function(hH) {
            return hH === "午後"
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "午前"
            } else {
                return "午後"
            }
        },
        calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: function(hH) {
                if (hH.week() < this.week()) {
                    return "[来週]dddd LT"
                } else {
                    return "dddd LT"
                }
            },
            lastDay: "[昨日] LT",
            lastWeek: function(hH) {
                if (this.week() < hH.week()) {
                    return "[先週]dddd LT"
                } else {
                    return "dddd LT"
                }
            },
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "日";
                default:
                    return hH
            }
        },
        relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
        }
    });
    gX.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "enjing") {
                return hH
            } else {
                if (hI === "siyang") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "sonten" || hI === "ndalu") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 11) {
                return "enjing"
            } else {
                if (hH < 15) {
                    return "siyang"
                } else {
                    if (hH < 19) {
                        return "sonten"
                    } else {
                        return "ndalu"
                    }
                }
            }
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("ka", {
        months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
        },
        relativeTime: {
            future: function(hH) {
                return (/(წამი|წუთი|საათი|წელი)/).test(hH) ? hH.replace(/ი$/, "ში") : hH + "ში"
            },
            past: function(hH) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(hH)) {
                    return hH.replace(/(ი|ე)$/, "ის წინ")
                }
                if ((/წელი/).test(hH)) {
                    return hH.replace(/წელი$/, "წლის წინ")
                }
            },
            s: "რამდენიმე წამი",
            ss: "%d წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(hH) {
            if (hH === 0) {
                return hH
            }
            if (hH === 1) {
                return hH + "-ლი"
            }
            if ((hH < 20) || (hH <= 100 && (hH % 20 === 0)) || (hH % 100 === 0)) {
                return "მე-" + hH
            }
            return hH + "-ე"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var s = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
    };
    gX.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            ss: "%d секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(hJ) {
            var hI = hJ % 10,
                hH = hJ >= 100 ? 100 : null;
            return hJ + (s[hJ] || s[hI] || s[hH])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var df = {
            "1": "១",
            "2": "២",
            "3": "៣",
            "4": "៤",
            "5": "៥",
            "6": "៦",
            "7": "៧",
            "8": "៨",
            "9": "៩",
            "0": "០"
        },
        go = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0"
        };
    gX.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function(hH) {
            return hH === "ល្ងាច"
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ព្រឹក"
            } else {
                return "ល្ងាច"
            }
        },
        calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            ss: "%d វិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function(hH) {
            return hH.replace(/[១២៣៤៥៦៧៨៩០]/g, function(hI) {
                return go[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return df[hI]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var de = {
            "1": "೧",
            "2": "೨",
            "3": "೩",
            "4": "೪",
            "5": "೫",
            "6": "೬",
            "7": "೭",
            "8": "೮",
            "9": "೯",
            "0": "೦"
        },
        gn = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
        };
    gX.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
        monthsParseExact: true,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[ಇಂದು] LT",
            nextDay: "[ನಾಳೆ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ನಿನ್ನೆ] LT",
            lastWeek: "[ಕೊನೆಯ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ನಂತರ",
            past: "%s ಹಿಂದೆ",
            s: "ಕೆಲವು ಕ್ಷಣಗಳು",
            ss: "%d ಸೆಕೆಂಡುಗಳು",
            m: "ಒಂದು ನಿಮಿಷ",
            mm: "%d ನಿಮಿಷ",
            h: "ಒಂದು ಗಂಟೆ",
            hh: "%d ಗಂಟೆ",
            d: "ಒಂದು ದಿನ",
            dd: "%d ದಿನ",
            M: "ಒಂದು ತಿಂಗಳು",
            MM: "%d ತಿಂಗಳು",
            y: "ಒಂದು ವರ್ಷ",
            yy: "%d ವರ್ಷ"
        },
        preparse: function(hH) {
            return hH.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(hI) {
                return gn[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return de[hI]
            })
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "ರಾತ್ರಿ") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "ಬೆಳಿಗ್ಗೆ") {
                    return hH
                } else {
                    if (hI === "ಮಧ್ಯಾಹ್ನ") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "ಸಂಜೆ") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "ರಾತ್ರಿ"
            } else {
                if (hH < 10) {
                    return "ಬೆಳಿಗ್ಗೆ"
                } else {
                    if (hH < 17) {
                        return "ಮಧ್ಯಾಹ್ನ"
                    } else {
                        if (hH < 20) {
                            return "ಸಂಜೆ"
                        } else {
                            return "ರಾತ್ರಿ"
                        }
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function(hH) {
            return hH + "ನೇ"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "일";
                case "M":
                    return hH + "월";
                case "w":
                case "W":
                    return hH + "주";
                default:
                    return hH
            }
        },
        meridiemParse: /오전|오후/,
        isPM: function(hH) {
            return hH === "오후"
        },
        meridiem: function(hH, hJ, hI) {
            return hH < 12 ? "오전" : "오후"
        }
    });
    var cM = {
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
            "0": "٠"
        },
        gm = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        },
        eP = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
    gX.defineLocale("ku", {
        months: eP,
        monthsShort: eP,
        weekdays: "یهكشهممه_دووشهممه_سێشهممه_چوارشهممه_پێنجشهممه_ههینی_شهممه".split("_"),
        weekdaysShort: "یهكشهم_دووشهم_سێشهم_چوارشهم_پێنجشهم_ههینی_شهممه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ئێواره|بهیانی/,
        isPM: function(hH) {
            return /ئێواره/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "بهیانی"
            } else {
                return "ئێواره"
            }
        },
        calendar: {
            sameDay: "[ئهمرۆ كاتژمێر] LT",
            nextDay: "[بهیانی كاتژمێر] LT",
            nextWeek: "dddd [كاتژمێر] LT",
            lastDay: "[دوێنێ كاتژمێر] LT",
            lastWeek: "dddd [كاتژمێر] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "له %s",
            past: "%s",
            s: "چهند چركهیهك",
            ss: "چركه %d",
            m: "یهك خولهك",
            mm: "%d خولهك",
            h: "یهك كاتژمێر",
            hh: "%d كاتژمێر",
            d: "یهك ڕۆژ",
            dd: "%d ڕۆژ",
            M: "یهك مانگ",
            MM: "%d مانگ",
            y: "یهك ساڵ",
            yy: "%d ساڵ"
        },
        preparse: function(hH) {
            return hH.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(hI) {
                return gm[hI]
            }).replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cM[hI]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var o = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
    };
    gX.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кечээ саат] LT",
            lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            ss: "%d секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(hJ) {
            var hI = hJ % 10,
                hH = hJ >= 100 ? 100 : null;
            return hJ + (o[hJ] || o[hI] || o[hH])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

    function ar(hJ, hI, hH, hL) {
        var hK = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return hI ? hK[hH][0] : hK[hH][1]
    }

    function ha(hH) {
        var hI = hH.substr(0, hH.indexOf(" "));
        if (d8(hI)) {
            return "a " + hH
        }
        return "an " + hH
    }

    function g0(hH) {
        var hI = hH.substr(0, hH.indexOf(" "));
        if (d8(hI)) {
            return "viru " + hH
        }
        return "virun " + hH
    }

    function d8(hI) {
        hI = parseInt(hI, 10);
        if (isNaN(hI)) {
            return false
        }
        if (hI < 0) {
            return true
        } else {
            if (hI < 10) {
                if (4 <= hI && hI <= 7) {
                    return true
                }
                return false
            } else {
                if (hI < 100) {
                    var hH = hI % 10,
                        hJ = hI / 10;
                    if (hH === 0) {
                        return d8(hJ)
                    }
                    return d8(hH)
                } else {
                    if (hI < 10000) {
                        while (hI >= 10) {
                            hI = hI / 10
                        }
                        return d8(hI)
                    } else {
                        hI = hI / 1000;
                        return d8(hI)
                    }
                }
            }
        }
    }
    gX.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: {
            future: ha,
            past: g0,
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: ar,
            mm: "%d Minutten",
            h: ar,
            hh: "%d Stonnen",
            d: ar,
            dd: "%d Deeg",
            M: ar,
            MM: "%d Méint",
            y: ar,
            yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(hH) {
            return hH === "ຕອນແລງ"
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ຕອນເຊົ້າ"
            } else {
                return "ຕອນແລງ"
            }
        },
        calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            ss: "%d ວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(hH) {
            return "ທີ່" + hH
        }
    });
    var f = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
    };

    function fr(hJ, hI, hH, hK) {
        if (hI) {
            return "kelios sekundės"
        } else {
            return hK ? "kelių sekundžių" : "kelias sekundes"
        }
    }

    function gN(hJ, hI, hH, hK) {
        return hI ? a5(hH)[0] : (hK ? a5(hH)[1] : a5(hH)[2])
    }

    function cz(hH) {
        return hH % 10 === 0 || (hH > 10 && hH < 20)
    }

    function a5(hH) {
        return f[hH].split("_")
    }

    function hv(hK, hJ, hI, hL) {
        var hH = hK + " ";
        if (hK === 1) {
            return hH + gN(hK, hJ, hI[0], hL)
        } else {
            if (hJ) {
                return hH + (cz(hK) ? a5(hI)[1] : a5(hI)[0])
            } else {
                if (hL) {
                    return hH + a5(hI)[1]
                } else {
                    return hH + (cz(hK) ? a5(hI)[1] : a5(hI)[2])
                }
            }
        }
    }
    gX.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: fr,
            ss: hv,
            m: gN,
            mm: hv,
            h: gN,
            hh: hv,
            d: gN,
            dd: hv,
            M: gN,
            MM: hv,
            y: gN,
            yy: hv
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(hH) {
            return hH + "-oji"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var bU = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    };

    function bo(hH, hJ, hI) {
        if (hI) {
            return hJ % 10 === 1 && hJ % 100 !== 11 ? hH[2] : hH[3]
        } else {
            return hJ % 10 === 1 && hJ % 100 !== 11 ? hH[0] : hH[1]
        }
    }

    function d3(hJ, hI, hH) {
        return hJ + " " + bo(bU[hH], hJ, hI)
    }

    function eK(hJ, hI, hH) {
        return bo(bU[hH], hJ, hI)
    }

    function bH(hI, hH) {
        return hH ? "dažas sekundes" : "dažām sekundēm"
    }
    gX.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: bH,
            ss: d3,
            m: eK,
            mm: d3,
            h: eK,
            hh: d3,
            d: eK,
            dd: d3,
            M: eK,
            MM: d3,
            y: eK,
            yy: d3
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var gJ = {
        words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(hI, hH) {
            return hI === 1 ? hH[0] : (hI >= 2 && hI <= 4 ? hH[1] : hH[2])
        },
        translate: function(hK, hI, hH) {
            var hJ = gJ.words[hH];
            if (hH.length === 1) {
                return hI ? hJ[0] : hJ[1]
            } else {
                return hK + " " + gJ.correctGrammaticalCase(hK, hJ)
            }
        }
    };
    gX.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                var hH = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return hH[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: gJ.translate,
            m: gJ.translate,
            mm: gJ.translate,
            h: gJ.translate,
            hh: gJ.translate,
            d: "dan",
            dd: gJ.translate,
            M: "mjesec",
            MM: gJ.translate,
            y: "godinu",
            yy: gJ.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            ss: "%d hēkona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Изминатата] dddd [во] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Изминатиот] dddd [во] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(hJ) {
            var hI = hJ % 10,
                hH = hJ % 100;
            if (hJ === 0) {
                return hJ + "-ев"
            } else {
                if (hH === 0) {
                    return hJ + "-ен"
                } else {
                    if (hH > 10 && hH < 20) {
                        return hJ + "-ти"
                    } else {
                        if (hI === 1) {
                            return hJ + "-ви"
                        } else {
                            if (hI === 2) {
                                return hJ + "-ри"
                            } else {
                                if (hI === 7 || hI === 8) {
                                    return hJ + "-ми"
                                } else {
                                    return hJ + "-ти"
                                }
                            }
                        }
                    }
                }
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: true,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            ss: "%d സെക്കൻഡ്",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if ((hI === "രാത്രി" && hH >= 4) || hI === "ഉച്ച കഴിഞ്ഞ്" || hI === "വൈകുന്നേരം") {
                return hH + 12
            } else {
                return hH
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "രാത്രി"
            } else {
                if (hH < 12) {
                    return "രാവിലെ"
                } else {
                    if (hH < 17) {
                        return "ഉച്ച കഴിഞ്ഞ്"
                    } else {
                        if (hH < 20) {
                            return "വൈകുന്നേരം"
                        } else {
                            return "രാത്രി"
                        }
                    }
                }
            }
        }
    });

    function hs(hJ, hI, hH, hK) {
        switch (hH) {
            case "s":
                return hI ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
                return hJ + (hI ? " секунд" : " секундын");
            case "m":
            case "mm":
                return hJ + (hI ? " минут" : " минутын");
            case "h":
            case "hh":
                return hJ + (hI ? " цаг" : " цагийн");
            case "d":
            case "dd":
                return hJ + (hI ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
                return hJ + (hI ? " сар" : " сарын");
            case "y":
            case "yy":
                return hJ + (hI ? " жил" : " жилийн");
            default:
                return hJ
        }
    }
    gX.defineLocale("mn", {
        months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
        monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
        monthsParseExact: true,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY оны MMMMын D",
            LLL: "YYYY оны MMMMын D HH:mm",
            LLLL: "dddd, YYYY оны MMMMын D HH:mm"
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function(hH) {
            return hH === "ҮХ"
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ҮӨ"
            } else {
                return "ҮХ"
            }
        },
        calendar: {
            sameDay: "[Өнөөдөр] LT",
            nextDay: "[Маргааш] LT",
            nextWeek: "[Ирэх] dddd LT",
            lastDay: "[Өчигдөр] LT",
            lastWeek: "[Өнгөрсөн] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s дараа",
            past: "%s өмнө",
            s: hs,
            ss: hs,
            m: hs,
            mm: hs,
            h: hs,
            hh: hs,
            d: hs,
            dd: hs,
            M: hs,
            MM: hs,
            y: hs,
            yy: hs
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + " өдөр";
                default:
                    return hH
            }
        }
    });
    var cK = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        },
        fY = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };

    function hF(hK, hJ, hI, hL) {
        var hH = "";
        if (hJ) {
            switch (hI) {
                case "s":
                    hH = "काही सेकंद";
                    break;
                case "ss":
                    hH = "%d सेकंद";
                    break;
                case "m":
                    hH = "एक मिनिट";
                    break;
                case "mm":
                    hH = "%d मिनिटे";
                    break;
                case "h":
                    hH = "एक तास";
                    break;
                case "hh":
                    hH = "%d तास";
                    break;
                case "d":
                    hH = "एक दिवस";
                    break;
                case "dd":
                    hH = "%d दिवस";
                    break;
                case "M":
                    hH = "एक महिना";
                    break;
                case "MM":
                    hH = "%d महिने";
                    break;
                case "y":
                    hH = "एक वर्ष";
                    break;
                case "yy":
                    hH = "%d वर्षे";
                    break
            }
        } else {
            switch (hI) {
                case "s":
                    hH = "काही सेकंदां";
                    break;
                case "ss":
                    hH = "%d सेकंदां";
                    break;
                case "m":
                    hH = "एका मिनिटा";
                    break;
                case "mm":
                    hH = "%d मिनिटां";
                    break;
                case "h":
                    hH = "एका तासा";
                    break;
                case "hh":
                    hH = "%d तासां";
                    break;
                case "d":
                    hH = "एका दिवसा";
                    break;
                case "dd":
                    hH = "%d दिवसां";
                    break;
                case "M":
                    hH = "एका महिन्या";
                    break;
                case "MM":
                    hH = "%d महिन्यां";
                    break;
                case "y":
                    hH = "एका वर्षा";
                    break;
                case "yy":
                    hH = "%d वर्षां";
                    break
            }
        }
        return hH.replace(/%d/i, hK)
    }
    gX.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: true,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: hF,
            ss: hF,
            m: hF,
            mm: hF,
            h: hF,
            hh: hF,
            d: hF,
            dd: hF,
            M: hF,
            MM: hF,
            y: hF,
            yy: hF
        },
        preparse: function(hH) {
            return hH.replace(/[१२३४५६७८९०]/g, function(hI) {
                return fY[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cK[hI]
            })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "रात्री") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "सकाळी") {
                    return hH
                } else {
                    if (hI === "दुपारी") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "सायंकाळी") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "रात्री"
            } else {
                if (hH < 10) {
                    return "सकाळी"
                } else {
                    if (hH < 17) {
                        return "दुपारी"
                    } else {
                        if (hH < 20) {
                            return "सायंकाळी"
                        } else {
                            return "रात्री"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "pagi") {
                return hH
            } else {
                if (hI === "tengahari") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "petang" || hI === "malam") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 11) {
                return "pagi"
            } else {
                if (hH < 15) {
                    return "tengahari"
                } else {
                    if (hH < 19) {
                        return "petang"
                    } else {
                        return "malam"
                    }
                }
            }
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "pagi") {
                return hH
            } else {
                if (hI === "tengahari") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "petang" || hI === "malam") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 11) {
                return "pagi"
            } else {
                if (hH < 15) {
                    return "tengahari"
                } else {
                    if (hH < 19) {
                        return "petang"
                    } else {
                        return "malam"
                    }
                }
            }
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
        weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[Għada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-bieraħ fil-]LT",
            lastWeek: "dddd [li għadda] [fil-]LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "f’ %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "siegħa",
            hh: "%d siegħat",
            d: "ġurnata",
            dd: "%d ġranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cI = {
            "1": "၁",
            "2": "၂",
            "3": "၃",
            "4": "၄",
            "5": "၅",
            "6": "၆",
            "7": "၇",
            "8": "၈",
            "9": "၉",
            "0": "၀"
        },
        fW = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        };
    gX.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
        },
        relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            ss: "%d စက္ကန့်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
        },
        preparse: function(hH) {
            return hH.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(hI) {
                return fW[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cI[hI]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cG = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        },
        fU = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
    gX.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: true,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function(hH) {
            return hH.replace(/[१२३४५६७८९०]/g, function(hI) {
                return fU[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cG[hI]
            })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "राति") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "बिहान") {
                    return hH
                } else {
                    if (hI === "दिउँसो") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "साँझ") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 3) {
                return "राति"
            } else {
                if (hH < 12) {
                    return "बिहान"
                } else {
                    if (hH < 16) {
                        return "दिउँसो"
                    } else {
                        if (hH < 20) {
                            return "साँझ"
                        } else {
                            return "राति"
                        }
                    }
                }
            }
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            ss: "%d सेकेण्ड",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var dQ = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        dT = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
    var aD = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var f1 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    gX.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return dQ
            } else {
                if (/-MMM-/.test(hI)) {
                    return dT[hH.month()]
                } else {
                    return dQ[hH.month()]
                }
            }
        },
        monthsRegex: f1,
        monthsShortRegex: f1,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: aD,
        longMonthsParse: aD,
        shortMonthsParse: aD,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(hH) {
            return hH + ((hH === 1 || hH === 8 || hH >= 20) ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var dL = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        dP = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
    var aC = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var f0 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    gX.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(hH, hI) {
            if (!hH) {
                return dL
            } else {
                if (/-MMM-/.test(hI)) {
                    return dP[hH.month()]
                } else {
                    return dL[hH.month()]
                }
            }
        },
        monthsRegex: f0,
        monthsShortRegex: f0,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: aC,
        longMonthsParse: aC,
        shortMonthsParse: aC,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(hH) {
            return hH + ((hH === 1 || hH === 8 || hH >= 20) ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cE = {
            "1": "੧",
            "2": "੨",
            "3": "੩",
            "4": "੪",
            "5": "੫",
            "6": "੬",
            "7": "੭",
            "8": "੮",
            "9": "੯",
            "0": "੦"
        },
        fT = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        };
    gX.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "[ਅਗਲਾ] dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            ss: "%d ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ"
        },
        preparse: function(hH) {
            return hH.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(hI) {
                return fT[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cE[hI]
            })
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "ਰਾਤ") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "ਸਵੇਰ") {
                    return hH
                } else {
                    if (hI === "ਦੁਪਹਿਰ") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "ਸ਼ਾਮ") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "ਰਾਤ"
            } else {
                if (hH < 10) {
                    return "ਸਵੇਰ"
                } else {
                    if (hH < 17) {
                        return "ਦੁਪਹਿਰ"
                    } else {
                        if (hH < 20) {
                            return "ਸ਼ਾਮ"
                        } else {
                            return "ਰਾਤ"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var cL = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        aA = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

    function cU(hH) {
        return (hH % 10 < 5) && (hH % 10 > 1) && ((~~(hH / 10) % 10) !== 1)
    }

    function hq(hK, hJ, hI) {
        var hH = hK + " ";
        switch (hI) {
            case "ss":
                return hH + (cU(hK) ? "sekundy" : "sekund");
            case "m":
                return hJ ? "minuta" : "minutę";
            case "mm":
                return hH + (cU(hK) ? "minuty" : "minut");
            case "h":
                return hJ ? "godzina" : "godzinę";
            case "hh":
                return hH + (cU(hK) ? "godziny" : "godzin");
            case "MM":
                return hH + (cU(hK) ? "miesiące" : "miesięcy");
            case "yy":
                return hH + (cU(hK) ? "lata" : "lat")
        }
    }
    gX.defineLocale("pl", {
        months: function(hI, hH) {
            if (!hI) {
                return cL
            } else {
                if (hH === "") {
                    return "(" + aA[hI.month()] + "|" + cL[hI.month()] + ")"
                } else {
                    if (/D MMMM/.test(hH)) {
                        return aA[hI.month()]
                    } else {
                        return cL[hI.month()]
                    }
                }
            }
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W niedzielę o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W środę o] LT";
                    case 6:
                        return "[W sobotę o] LT";
                    default:
                        return "[W] dddd [o] LT"
                }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: hq,
            m: hq,
            mm: hq,
            h: hq,
            hh: hq,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: hq,
            y: "rok",
            yy: hq
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return (this.day() === 0 || this.day() === 6) ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº"
    });
    gX.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return (this.day() === 0 || this.day() === 6) ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function d2(hJ, hI, hH) {
        var hL = {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            },
            hK = " ";
        if (hJ % 100 >= 20 || (hJ >= 100 && hJ % 100 === 0)) {
            hK = " de "
        }
        return hJ + hK + hL[hH]
    }
    gX.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: d2,
            m: "un minut",
            mm: d2,
            h: "o oră",
            hh: d2,
            d: "o zi",
            dd: d2,
            M: "o lună",
            MM: d2,
            y: "un an",
            yy: d2
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

    function cS(hJ, hI) {
        var hH = hJ.split("_");
        return hI % 10 === 1 && hI % 100 !== 11 ? hH[0] : (hI % 10 >= 2 && hI % 10 <= 4 && (hI % 100 < 10 || hI % 100 >= 20) ? hH[1] : hH[2])
    }

    function d0(hJ, hI, hH) {
        var hK = {
            ss: hI ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: hI ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        if (hH === "m") {
            return hI ? "минута" : "минуту"
        } else {
            return hJ + " " + cS(hK[hH], +hJ)
        }
    }
    var aB = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    gX.defineLocale("ru", {
        months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: aB,
        longMonthsParse: aB,
        shortMonthsParse: aB,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function(hH) {
                if (hH.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                } else {
                    if (this.day() === 2) {
                        return "[Во] dddd, [в] LT"
                    } else {
                        return "[В] dddd, [в] LT"
                    }
                }
            },
            lastWeek: function(hH) {
                if (hH.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                } else {
                    if (this.day() === 2) {
                        return "[Во] dddd, [в] LT"
                    } else {
                        return "[В] dddd, [в] LT"
                    }
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: d0,
            m: d0,
            mm: d0,
            h: "час",
            hh: d0,
            d: "день",
            dd: d0,
            M: "месяц",
            MM: d0,
            y: "год",
            yy: d0
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(hH) {
            return /^(дня|вечера)$/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "ночи"
            } else {
                if (hH < 12) {
                    return "утра"
                } else {
                    if (hH < 17) {
                        return "дня"
                    } else {
                        return "вечера"
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "M":
                case "d":
                case "DDD":
                    return hH + "-й";
                case "D":
                    return hH + "-го";
                case "w":
                case "W":
                    return hH + "-я";
                default:
                    return hH
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var eN = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"];
    var r = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
    gX.defineLocale("sd", {
        months: eN,
        monthsShort: eN,
        weekdays: r,
        weekdaysShort: r,
        weekdaysMin: r,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(hH) {
            return "شام" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "صبح"
            }
            return "شام"
        },
        calendar: {
            sameDay: "[اڄ] LT",
            nextDay: "[سڀاڻي] LT",
            nextWeek: "dddd [اڳين هفتي تي] LT",
            lastDay: "[ڪالهه] LT",
            lastWeek: "[گزريل هفتي] dddd [تي] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s پوء",
            past: "%s اڳ",
            s: "چند سيڪنڊ",
            ss: "%d سيڪنڊ",
            m: "هڪ منٽ",
            mm: "%d منٽ",
            h: "هڪ ڪلاڪ",
            hh: "%d ڪلاڪ",
            d: "هڪ ڏينهن",
            dd: "%d ڏينهن",
            M: "هڪ مهينو",
            MM: "%d مهينا",
            y: "هڪ سال",
            yy: "%d سال"
        },
        preparse: function(hH) {
            return hH.replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/,/g, "،")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්ර_සි_සෙ".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            ss: "තත්පර %d",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function(hH) {
            return hH + " වැනි"
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(hH) {
            return hH === "ප.ව." || hH === "පස් වරු"
        },
        meridiem: function(hH, hI, hJ) {
            if (hH > 11) {
                return hJ ? "ප.ව." : "පස් වරු"
            } else {
                return hJ ? "පෙ.ව." : "පෙර වරු"
            }
        }
    });
    var eL = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
        dr = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

    function cR(hH) {
        return (hH > 1) && (hH < 5)
    }

    function hp(hK, hJ, hI, hL) {
        var hH = hK + " ";
        switch (hI) {
            case "s":
                return (hJ || hL) ? "pár sekúnd" : "pár sekundami";
            case "ss":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "sekundy" : "sekúnd")
                } else {
                    return hH + "sekundami"
                }
                break;
            case "m":
                return hJ ? "minúta" : (hL ? "minútu" : "minútou");
            case "mm":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "minúty" : "minút")
                } else {
                    return hH + "minútami"
                }
                break;
            case "h":
                return hJ ? "hodina" : (hL ? "hodinu" : "hodinou");
            case "hh":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "hodiny" : "hodín")
                } else {
                    return hH + "hodinami"
                }
                break;
            case "d":
                return (hJ || hL) ? "deň" : "dňom";
            case "dd":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "dni" : "dní")
                } else {
                    return hH + "dňami"
                }
                break;
            case "M":
                return (hJ || hL) ? "mesiac" : "mesiacom";
            case "MM":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "mesiace" : "mesiacov")
                } else {
                    return hH + "mesiacmi"
                }
                break;
            case "y":
                return (hJ || hL) ? "rok" : "rokom";
            case "yy":
                if (hJ || hL) {
                    return hH + (cR(hK) ? "roky" : "rokov")
                } else {
                    return hH + "rokmi"
                }
                break
        }
    }
    gX.defineLocale("sk", {
        months: eL,
        monthsShort: dr,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: hp,
            ss: hp,
            m: hp,
            mm: hp,
            h: hp,
            hh: hp,
            d: hp,
            dd: hp,
            M: hp,
            MM: hp,
            y: hp,
            yy: hp
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function aq(hK, hJ, hI, hL) {
        var hH = hK + " ";
        switch (hI) {
            case "s":
                return hJ || hL ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                if (hK === 1) {
                    hH += hJ ? "sekundo" : "sekundi"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "sekundi" : "sekundah"
                    } else {
                        if (hK < 5) {
                            hH += hJ || hL ? "sekunde" : "sekundah"
                        } else {
                            hH += "sekund"
                        }
                    }
                }
                return hH;
            case "m":
                return hJ ? "ena minuta" : "eno minuto";
            case "mm":
                if (hK === 1) {
                    hH += hJ ? "minuta" : "minuto"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "minuti" : "minutama"
                    } else {
                        if (hK < 5) {
                            hH += hJ || hL ? "minute" : "minutami"
                        } else {
                            hH += hJ || hL ? "minut" : "minutami"
                        }
                    }
                }
                return hH;
            case "h":
                return hJ ? "ena ura" : "eno uro";
            case "hh":
                if (hK === 1) {
                    hH += hJ ? "ura" : "uro"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "uri" : "urama"
                    } else {
                        if (hK < 5) {
                            hH += hJ || hL ? "ure" : "urami"
                        } else {
                            hH += hJ || hL ? "ur" : "urami"
                        }
                    }
                }
                return hH;
            case "d":
                return hJ || hL ? "en dan" : "enim dnem";
            case "dd":
                if (hK === 1) {
                    hH += hJ || hL ? "dan" : "dnem"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "dni" : "dnevoma"
                    } else {
                        hH += hJ || hL ? "dni" : "dnevi"
                    }
                }
                return hH;
            case "M":
                return hJ || hL ? "en mesec" : "enim mesecem";
            case "MM":
                if (hK === 1) {
                    hH += hJ || hL ? "mesec" : "mesecem"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "meseca" : "mesecema"
                    } else {
                        if (hK < 5) {
                            hH += hJ || hL ? "mesece" : "meseci"
                        } else {
                            hH += hJ || hL ? "mesecev" : "meseci"
                        }
                    }
                }
                return hH;
            case "y":
                return hJ || hL ? "eno leto" : "enim letom";
            case "yy":
                if (hK === 1) {
                    hH += hJ || hL ? "leto" : "letom"
                } else {
                    if (hK === 2) {
                        hH += hJ || hL ? "leti" : "letoma"
                    } else {
                        if (hK < 5) {
                            hH += hJ || hL ? "leta" : "leti"
                        } else {
                            hH += hJ || hL ? "let" : "leti"
                        }
                    }
                }
                return hH
        }
    }
    gX.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: aq,
            ss: aq,
            m: aq,
            mm: aq,
            h: aq,
            hh: aq,
            d: aq,
            dd: aq,
            M: aq,
            MM: aq,
            y: aq,
            yy: aq
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /PD|MD/,
        isPM: function(hH) {
            return hH.charAt(0) === "M"
        },
        meridiem: function(hH, hI, hJ) {
            return hH < 12 ? "PD" : "MD"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cV = {
        words: {
            ss: ["секунда", "секунде", "секунди"],
            m: ["један минут", "једне минуте"],
            mm: ["минут", "минуте", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            dd: ["дан", "дана", "дана"],
            MM: ["месец", "месеца", "месеци"],
            yy: ["година", "године", "година"]
        },
        correctGrammaticalCase: function(hI, hH) {
            return hI === 1 ? hH[0] : (hI >= 2 && hI <= 4 ? hH[1] : hH[2])
        },
        translate: function(hK, hI, hH) {
            var hJ = cV.words[hH];
            if (hH.length === 1) {
                return hI ? hJ[0] : hJ[1]
            } else {
                return hK + " " + cV.correctGrammaticalCase(hK, hJ)
            }
        }
    };
    gX.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: true,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[у] [недељу] [у] LT";
                    case 3:
                        return "[у] [среду] [у] LT";
                    case 6:
                        return "[у] [суботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[у] dddd [у] LT"
                }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function() {
                var hH = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                return hH[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            ss: cV.translate,
            m: cV.translate,
            mm: cV.translate,
            h: cV.translate,
            hh: cV.translate,
            d: "дан",
            dd: cV.translate,
            M: "месец",
            MM: cV.translate,
            y: "годину",
            yy: cV.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var cT = {
        words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(hI, hH) {
            return hI === 1 ? hH[0] : (hI >= 2 && hI <= 4 ? hH[1] : hH[2])
        },
        translate: function(hK, hI, hH) {
            var hJ = cT.words[hH];
            if (hH.length === 1) {
                return hI ? hJ[0] : hJ[1]
            } else {
                return hK + " " + cT.correctGrammaticalCase(hK, hJ)
            }
        }
    };
    gX.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                var hH = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return hH[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: cT.translate,
            m: cT.translate,
            mm: cT.translate,
            h: cT.translate,
            hh: cT.translate,
            d: "dan",
            dd: cT.translate,
            M: "mesec",
            MM: cT.translate,
            y: "godinu",
            yy: cT.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(hH, hI, hJ) {
            if (hH < 11) {
                return "ekuseni"
            } else {
                if (hH < 15) {
                    return "emini"
                } else {
                    if (hH < 19) {
                        return "entsambama"
                    } else {
                        return "ebusuku"
                    }
                }
            }
        },
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "ekuseni") {
                return hH
            } else {
                if (hI === "emini") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "entsambama" || hI === "ebusuku") {
                        if (hH === 0) {
                            return 0
                        }
                        return hH + 12
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "e" : (hH === 1) ? "a" : (hH === 2) ? "a" : (hH === 3) ? "e" : "e";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var cD = {
            "1": "௧",
            "2": "௨",
            "3": "௩",
            "4": "௪",
            "5": "௫",
            "6": "௬",
            "7": "௭",
            "8": "௮",
            "9": "௯",
            "0": "௦"
        },
        fS = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        };
    gX.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            ss: "%d விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function(hH) {
            return hH + "வது"
        },
        preparse: function(hH) {
            return hH.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(hI) {
                return fS[hI]
            })
        },
        postformat: function(hH) {
            return hH.replace(/\d/g, function(hI) {
                return cD[hI]
            })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(hH, hJ, hI) {
            if (hH < 2) {
                return " யாமம்"
            } else {
                if (hH < 6) {
                    return " வைகறை"
                } else {
                    if (hH < 10) {
                        return " காலை"
                    } else {
                        if (hH < 14) {
                            return " நண்பகல்"
                        } else {
                            if (hH < 18) {
                                return " எற்பாடு"
                            } else {
                                if (hH < 22) {
                                    return " மாலை"
                                } else {
                                    return " யாமம்"
                                }
                            }
                        }
                    }
                }
            }
        },
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "யாமம்") {
                return hH < 2 ? hH : hH + 12
            } else {
                if (hI === "வைகறை" || hI === "காலை") {
                    return hH
                } else {
                    if (hI === "நண்பகல்") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        return hH + 12
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: true,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            ss: "%d సెకన్లు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "రాత్రి") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "ఉదయం") {
                    return hH
                } else {
                    if (hI === "మధ్యాహ్నం") {
                        return hH >= 10 ? hH : hH + 12
                    } else {
                        if (hI === "సాయంత్రం") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "రాత్రి"
            } else {
                if (hH < 10) {
                    return "ఉదయం"
                } else {
                    if (hH < 17) {
                        return "మధ్యాహ్నం"
                    } else {
                        if (hH < 20) {
                            return "సాయంత్రం"
                        } else {
                            return "రాత్రి"
                        }
                    }
                }
            }
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    gX.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            ss: "minutu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var l = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум"
    };
    gX.defineLocale("tg", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Имрӯз соати] LT",
            nextDay: "[Пагоҳ соати] LT",
            lastDay: "[Дирӯз соати] LT",
            nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
            lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "баъди %s",
            past: "%s пеш",
            s: "якчанд сония",
            m: "як дақиқа",
            mm: "%d дақиқа",
            h: "як соат",
            hh: "%d соат",
            d: "як рӯз",
            dd: "%d рӯз",
            M: "як моҳ",
            MM: "%d моҳ",
            y: "як сол",
            yy: "%d сол"
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "шаб") {
                return hH < 4 ? hH : hH + 12
            } else {
                if (hI === "субҳ") {
                    return hH
                } else {
                    if (hI === "рӯз") {
                        return hH >= 11 ? hH : hH + 12
                    } else {
                        if (hI === "бегоҳ") {
                            return hH + 12
                        }
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "шаб"
            } else {
                if (hH < 11) {
                    return "субҳ"
                } else {
                    if (hH < 16) {
                        return "рӯз"
                    } else {
                        if (hH < 19) {
                            return "бегоҳ"
                        } else {
                            return "шаб"
                        }
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function(hJ) {
            var hI = hJ % 10,
                hH = hJ >= 100 ? 100 : null;
            return hJ + (l[hJ] || l[hI] || l[hH])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: true,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(hH) {
            return hH === "หลังเที่ยง"
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "ก่อนเที่ยง"
            } else {
                return "หลังเที่ยง"
            }
        },
        calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            ss: "%d วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
        }
    });
    gX.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(hH) {
            return hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ac = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

    function gV(hH) {
        var hI = hH;
        hI = (hH.indexOf("jaj") !== -1) ? hI.slice(0, -3) + "leS" : (hH.indexOf("jar") !== -1) ? hI.slice(0, -3) + "waQ" : (hH.indexOf("DIS") !== -1) ? hI.slice(0, -3) + "nem" : hI + " pIq";
        return hI
    }

    function hx(hH) {
        var hI = hH;
        hI = (hH.indexOf("jaj") !== -1) ? hI.slice(0, -3) + "Hu’" : (hH.indexOf("jar") !== -1) ? hI.slice(0, -3) + "wen" : (hH.indexOf("DIS") !== -1) ? hI.slice(0, -3) + "ben" : hI + " ret";
        return hI
    }

    function g5(hK, hJ, hI, hL) {
        var hH = eT(hK);
        switch (hI) {
            case "ss":
                return hH + " lup";
            case "mm":
                return hH + " tup";
            case "hh":
                return hH + " rep";
            case "dd":
                return hH + " jaj";
            case "MM":
                return hH + " jar";
            case "yy":
                return hH + " DIS"
        }
    }

    function eT(hJ) {
        var hL = Math.floor((hJ % 1000) / 100),
            hH = Math.floor((hJ % 100) / 10),
            hI = hJ % 10,
            hK = "";
        if (hL > 0) {
            hK += ac[hL] + "vatlh"
        }
        if (hH > 0) {
            hK += ((hK !== "") ? " " : "") + ac[hH] + "maH"
        }
        if (hI > 0) {
            hK += ((hK !== "") ? " " : "") + ac[hI]
        }
        return (hK === "") ? "pagh" : hK
    }
    gX.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: true,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: gV,
            past: hx,
            s: "puS lup",
            ss: g5,
            m: "wa’ tup",
            mm: g5,
            h: "wa’ rep",
            hh: g5,
            d: "wa’ jaj",
            dd: g5,
            M: "wa’ jar",
            MM: g5,
            y: "wa’ DIS",
            yy: g5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var j = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
    };
    gX.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
        },
        ordinal: function(hJ, hK) {
            switch (hK) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return hJ;
                default:
                    if (hJ === 0) {
                        return hJ + "'ıncı"
                    }
                    var hI = hJ % 10,
                        hH = hJ % 100 - hI,
                        hL = hJ >= 100 ? 100 : null;
                    return hJ + (j[hI] || j[hH] || j[hL])
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(hH) {
            return "d'o" === hH.toLowerCase()
        },
        meridiem: function(hH, hI, hJ) {
            if (hH > 11) {
                return hJ ? "d'o" : "D'O"
            } else {
                return hJ ? "d'a" : "D'A"
            }
        },
        calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: an,
            ss: an,
            m: an,
            mm: an,
            h: an,
            hh: an,
            d: an,
            dd: an,
            M: an,
            MM: an,
            y: an,
            yy: an
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });

    function an(hJ, hI, hH, hL) {
        var hK = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [hJ + " secunds", "" + hJ + " secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [hJ + " míuts", "" + hJ + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [hJ + " þoras", "" + hJ + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [hJ + " ziuas", "" + hJ + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [hJ + " mesen", "" + hJ + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [hJ + " ars", "" + hJ + " ars"]
        };
        return hL ? hK[hH][0] : (hI ? hK[hH][0] : hK[hH][1])
    }
    gX.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    gX.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            ss: "%d ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    gX.defineLocale("ug-cn", {
        months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
            LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "يېرىم كېچە" || hI === "سەھەر" || hI === "چۈشتىن بۇرۇن") {
                return hH
            } else {
                if (hI === "چۈشتىن كېيىن" || hI === "كەچ") {
                    return hH + 12
                } else {
                    return hH >= 11 ? hH : hH + 12
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            var hK = hH * 100 + hJ;
            if (hK < 600) {
                return "يېرىم كېچە"
            } else {
                if (hK < 900) {
                    return "سەھەر"
                } else {
                    if (hK < 1130) {
                        return "چۈشتىن بۇرۇن"
                    } else {
                        if (hK < 1230) {
                            return "چۈش"
                        } else {
                            if (hK < 1800) {
                                return "چۈشتىن كېيىن"
                            } else {
                                return "كەچ"
                            }
                        }
                    }
                }
            }
        },
        calendar: {
            sameDay: "[بۈگۈن سائەت] LT",
            nextDay: "[ئەتە سائەت] LT",
            nextWeek: "[كېلەركى] dddd [سائەت] LT",
            lastDay: "[تۆنۈگۈن] LT",
            lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s كېيىن",
            past: "%s بۇرۇن",
            s: "نەچچە سېكونت",
            ss: "%d سېكونت",
            m: "بىر مىنۇت",
            mm: "%d مىنۇت",
            h: "بىر سائەت",
            hh: "%d سائەت",
            d: "بىر كۈن",
            dd: "%d كۈن",
            M: "بىر ئاي",
            MM: "%d ئاي",
            y: "بىر يىل",
            yy: "%d يىل"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "-كۈنى";
                case "w":
                case "W":
                    return hH + "-ھەپتە";
                default:
                    return hH
            }
        },
        preparse: function(hH) {
            return hH.replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/,/g, "،")
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

    function cQ(hJ, hI) {
        var hH = hJ.split("_");
        return hI % 10 === 1 && hI % 100 !== 11 ? hH[0] : (hI % 10 >= 2 && hI % 10 <= 4 && (hI % 100 < 10 || hI % 100 >= 20) ? hH[1] : hH[2])
    }

    function dZ(hJ, hI, hH) {
        var hK = {
            ss: hI ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
            mm: hI ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: hI ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        };
        if (hH === "m") {
            return hI ? "хвилина" : "хвилину"
        } else {
            if (hH === "h") {
                return hI ? "година" : "годину"
            } else {
                return hJ + " " + cQ(hK[hH], +hJ)
            }
        }
    }

    function b3(hH, hK) {
        var hI = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        };
        if (hH === true) {
            return hI.nominative.slice(1, 7).concat(hI.nominative.slice(0, 1))
        }
        if (!hH) {
            return hI.nominative
        }
        var hJ = (/(\[[ВвУу]\]) ?dddd/).test(hK) ? "accusative" : ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(hK) ? "genitive" : "nominative");
        return hI[hJ][hH.day()]
    }

    function a4(hH) {
        return function() {
            return hH + "о" + (this.hours() === 11 ? "б" : "") + "] LT"
        }
    }
    gX.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: b3,
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
            sameDay: a4("[Сьогодні "),
            nextDay: a4("[Завтра "),
            lastDay: a4("[Вчора "),
            nextWeek: a4("[У] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return a4("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return a4("[Минулого] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: dZ,
            m: dZ,
            mm: dZ,
            h: "годину",
            hh: dZ,
            d: "день",
            dd: dZ,
            M: "місяць",
            MM: dZ,
            y: "рік",
            yy: dZ
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(hH) {
            return /^(дня|вечора)$/.test(hH)
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 4) {
                return "ночі"
            } else {
                if (hH < 12) {
                    return "ранку"
                } else {
                    if (hH < 17) {
                        return "дня"
                    } else {
                        return "вечора"
                    }
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return hH + "-й";
                case "D":
                    return hH + "-го";
                default:
                    return hH
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var en = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"];
    var n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
    gX.defineLocale("ur", {
        months: en,
        monthsShort: en,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(hH) {
            return "شام" === hH
        },
        meridiem: function(hH, hJ, hI) {
            if (hH < 12) {
                return "صبح"
            }
            return "شام"
        },
        calendar: {
            sameDay: "[آج بوقت] LT",
            nextDay: "[کل بوقت] LT",
            nextWeek: "dddd [بوقت] LT",
            lastDay: "[گذشتہ روز بوقت] LT",
            lastWeek: "[گذشتہ] dddd [بوقت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s بعد",
            past: "%s قبل",
            s: "چند سیکنڈ",
            ss: "%d سیکنڈ",
            m: "ایک منٹ",
            mm: "%d منٹ",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک ماہ",
            MM: "%d ماہ",
            y: "ایک سال",
            yy: "%d سال"
        },
        preparse: function(hH) {
            return hH.replace(/،/g, ",")
        },
        postformat: function(hH) {
            return hH.replace(/,/g, "،")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            ss: "%d фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    gX.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: true,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM: function(hH) {
            return /^ch$/i.test(hH)
        },
        meridiem: function(hH, hI, hJ) {
            if (hH < 12) {
                return hJ ? "sa" : "SA"
            } else {
                return hJ ? "ch" : "CH"
            }
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            ss: "%d giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(hH) {
            return hH
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: true,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            ss: "%d s~écóñ~ds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(hJ) {
            var hH = hJ % 10,
                hI = (~~(hJ % 100 / 10) === 1) ? "th" : (hH === 1) ? "st" : (hH === 2) ? "nd" : (hH === 3) ? "rd" : "th";
            return hJ + hI
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            ss: "aayá %d",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "凌晨" || hI === "早上" || hI === "上午") {
                return hH
            } else {
                if (hI === "下午" || hI === "晚上") {
                    return hH + 12
                } else {
                    return hH >= 11 ? hH : hH + 12
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            var hK = hH * 100 + hJ;
            if (hK < 600) {
                return "凌晨"
            } else {
                if (hK < 900) {
                    return "早上"
                } else {
                    if (hK < 1130) {
                        return "上午"
                    } else {
                        if (hK < 1230) {
                            return "中午"
                        } else {
                            if (hK < 1800) {
                                return "下午"
                            } else {
                                return "晚上"
                            }
                        }
                    }
                }
            }
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "日";
                case "M":
                    return hH + "月";
                case "w":
                case "W":
                    return hH + "周";
                default:
                    return hH
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            ss: "%d 秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    gX.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "凌晨" || hI === "早上" || hI === "上午") {
                return hH
            } else {
                if (hI === "中午") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "下午" || hI === "晚上") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            var hK = hH * 100 + hJ;
            if (hK < 600) {
                return "凌晨"
            } else {
                if (hK < 900) {
                    return "早上"
                } else {
                    if (hK < 1130) {
                        return "上午"
                    } else {
                        if (hK < 1230) {
                            return "中午"
                        } else {
                            if (hK < 1800) {
                                return "下午"
                            } else {
                                return "晚上"
                            }
                        }
                    }
                }
            }
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "日";
                case "M":
                    return hH + "月";
                case "w":
                case "W":
                    return hH + "週";
                default:
                    return hH
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    });
    gX.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hH, hI) {
            if (hH === 12) {
                hH = 0
            }
            if (hI === "凌晨" || hI === "早上" || hI === "上午") {
                return hH
            } else {
                if (hI === "中午") {
                    return hH >= 11 ? hH : hH + 12
                } else {
                    if (hI === "下午" || hI === "晚上") {
                        return hH + 12
                    }
                }
            }
        },
        meridiem: function(hH, hJ, hI) {
            var hK = hH * 100 + hJ;
            if (hK < 600) {
                return "凌晨"
            } else {
                if (hK < 900) {
                    return "早上"
                } else {
                    if (hK < 1130) {
                        return "上午"
                    } else {
                        if (hK < 1230) {
                            return "中午"
                        } else {
                            if (hK < 1800) {
                                return "下午"
                            } else {
                                return "晚上"
                            }
                        }
                    }
                }
            }
        },
        calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(hH, hI) {
            switch (hI) {
                case "d":
                case "D":
                case "DDD":
                    return hH + "日";
                case "M":
                    return hH + "月";
                case "w":
                case "W":
                    return hH + "週";
                default:
                    return hH
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    });
    gX.locale("en");
    return gX
})));