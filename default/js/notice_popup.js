function noticePopup(b, a) {
    getSkinColor();
    $(function() {
        var c = $("<div>").appendTo($(".Notice"));
        c.attr("id", "notice" + b);
        $("<div>").addClass("back_body").appendTo(c);
        if ((typeof(skinColor) == "undefined") || (skinColor == null)) {
            skinColor = "blue"
        }
        a = escapeHtml(a);
        c.append('<div class="notice_div ' + skinColor + '_back"><a href="#"><div id="notClose' + b + '" class="close_icon"></div></a><div class="notice_icon"><div class="nicon_icon1"></div></div><div class="notice_font">' + a + '</div><div id="notice_button' + b + '" class="notice_button"><a href="#" class="notice_yellow animate">知道</a></div></div>');
        $("#notice_button" + b + " , #notClose" + b).click(function() {
            $("#notice" + b).hide();
            $(".details").hide()
        });
        $(".close_icon , .notice_button").click(function() {
            $(".noticeChild").hide();
            $(".details").hide()
        });
        $(".nicon_button").click(function() {
            $(".noticeChild").hide();
            $(".details").show()
        })
    })
}
$(document).ready(function() {
    $("#footer .more").click(function() {
        showNoticeDetails()
    });
    $(".close_icon , .notice_button").click(function() {
        $(".noticeChild").hide();
        $(".details").hide()
    })
});

function escapeHtml(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

function noticePopupWithMore(a, c, b) {
    $(function() {
        getSkinColor();
        if ((typeof(skinColor) == "undefined") || (skinColor == null)) {
            skinColor = "blue"
        }
        var d = $("<div>").appendTo($(".Notice"));
        var e = 1;
        d.attr("id", "notice" + c);
        $("<div>").addClass("back_body").appendTo(d);
        $("<div>").addClass("back_body").appendTo(d);
        b = escapeHtml(b);
        d.append('<div class="notice_div ' + skinColor + '_back"><a href="#"><div id="notClose' + c + '" class="close_icon"></div></a><div class="notice_page"><a href="#" id="btnPrev' + c + '" class="notice_prev" ><<</a>' + c + "/" + a + '<a href="#" class="notice_next" id="btnNext' + c + '">>></a></div><div class="notice_icon"><div class="nicon_icon1"></div><div class="nicon_button"><a href="#" class="notice_white animate">更多</a></div></div><div class="notice_font">' + b + '</div><div id="notice_button' + c + '" class="notice_button"><a href="#" class="notice_yellow animate">知道</a></div></div>');
        if (c > 1) {
            $("#notice" + c).hide()
        }
        if (c == a) {
            e = 3
        } else {
            if (c == 1) {
                e = 1
            } else {
                e = 2
            }
        }
        $("#dtlColor").attr("class", "details_div " + skinColor + "_back");
        $("#notice_button" + c + " , #notClose" + c).click(function() {
            if (c < a) {
                var f = c + 1;
                $("#notice" + f).show()
            }
            $("#notice" + c).hide();
            $(".details").hide()
        });
        $("#btnNext" + c).click(function() {
            if (c < a) {
                var f = c + 1;
                $("#notice" + f).show()
            }
            $("#notice" + c).hide();
            $(".details").hide()
        });
        $("#btnPrev" + c).click(function() {
            if (c > 1) {
                var f = c - 1;
                $("#notice" + f).show();
                $("#notice" + c).hide();
                $(".details").hide()
            }
        });
        $(".nicon_button").click(function() {
            $(".Notice").hide();
            showNoticeDetails()
        })
    })
}

function showNoticeDetails() {
    getSkinColor();
    if ((typeof(skinColor) == "undefined") || (skinColor == null)) {
        skinColor = "blue"
    }
    $("#dtlFont").html("");
    $.ajax({
        url: "notice1",
        type: "GET",
        contentType: "application/json",
        data: "",
        success: function(c) {
            if (c.length == 0) {
                $("#dtlColor").attr("class", "details_div " + skinColor + "_back");
                $("#dtlFont").append('<div style="overflow-y: hidden;">暂无公告</div>')
            } else {
                for (var b = 0; b < c.length; b++) {
                    if (b + 1 == c.length) {
                        dfClass = 3
                    } else {
                        if (1 == 0) {
                            dfClass = 1
                        } else {
                            dfClass = 2
                        }
                    }
                    var a = new Date(c[b].created).toLocaleString();
                    $("#dtlColor").attr("class", "details_div " + skinColor + "_back");
                    var d = escapeHtml(c[b].text);
                    $("#dtlFont").append('<div class="df' + dfClass + '"><div class="df_data">' + a + "</div><div>" + d + "</div></div>")
                }
            }
        },
        error: function(a) {
            alert("失败：" + a.code + ",请检查状况後重试。")
        },
        complete: function() {
            $(".details").show()
        }
    })
}

function redPackPopup() {
    $(function() {
        $.getJSON("payment/getbonusinfo", function(a) {
            if (a.data.length > 0) {
                $.ajax({
                    url: "payment/drawbonus",
                    type: "GET",
                    contentType: "application/json",
                    data: {
                        transId: a.data[0].id,
                        amount: a.data[0].amount
                    },
                    success: function(b) {
                        if (a.success == true) {
                            $("#redPack .redpack_amount").text(a.data[0].amount);
                            $("#redPack .redpack_remark").text(a.data[0].remark);
                            if (!window.IS_MOBILE) {
                                loadBonus()
                            }
                            $("#redPack").show();
                            if (!window.IS_MOBILE) {
                                loadAccount()
                            }
                        } else {
                            alert(a.message)
                        }
                    },
                    error: function(b) {
                        alert("失败：" + b.code + ",请检查状况後重试。")
                    },
                    complete: function() {
                        $("#redPackIcon").hide()
                    }
                })
            }
        })
    })
};