$(function() {
    $("#settingbet").dialog({
        autoOpen: false,
        modal: true,
        width: 270,
        show: {
            duration: 500
        },
        hide: {
            duration: 500
        }
    })
});

function showsetting() {
    var c = LIBS.cookie("defaultSetting");
    if (c) {
        var a = c.split(",");
        for (i = 0; i < a.length; i++) {
            $(".ds").eq(i).val(a[i])
        }
    }
    var b = LIBS.cookie("settingChecked");
    if (!b) {
        b = 1
    }
    $("input[name='settingbet'][value=" + b + "]").prop("checked", true);
    $("input.ds").onlyNumber();
    $("#settingbet").dialog("open")
}

function postQuickAmount(a, b) {
    return $.ajax({
        url: "/web/rest/member/quickAmount",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(a),
        success: function(c) {
            try {
                if (!c.status && c.status === "success") {
                    alert("保存失败")
                } else {
                    b(true)
                }
            } catch (d) {
                alert("保存失败")
            }
        },
        error: function(c) {
            if (c.responseJSON) {
                alert("保存失败：" + c.responseJSON.message)
            } else {
                alert("保存失败")
            }
        }
    })
}

function submitsetting() {
    var b = new Array();
    for (i = 0; i < 8; i++) {
        var a = $(".ds").eq(i).val();
        if (a) {
            b.push(a)
        }
    }
    var c = $("input[name=settingbet]:checked").val();
    var d = {
        amount1: $(".ds").eq(0).val(),
        amount2: $(".ds").eq(1).val(),
        amount3: $(".ds").eq(2).val(),
        amount4: $(".ds").eq(3).val(),
        amount5: $(".ds").eq(4).val(),
        amount6: $(".ds").eq(5).val(),
        amount7: $(".ds").eq(6).val(),
        amount8: $(".ds").eq(7).val(),
        enabled: c == 1 ? true : false
    };
    postQuickAmount(d, function(e) {
        if (c == 0) {
            setTimeout(function() {
                parent.showMsg("停用后，如需启用需至快选金额设定视窗点选启用！")
            }, 500)
        }
        LIBS.cookie("settingChecked", c);
        LIBS.cookie("defaultSetting", b)
    });
    $("#settingbet").dialog("close")
};