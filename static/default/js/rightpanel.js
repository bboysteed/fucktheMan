$(function() {
    $(".rptab1").click(function() {
        var a = $(this).index();
        $(".rightpanel").find("table").css("display", "none");
        $(".rptab1").removeClass("tabactive1");
        $(this).addClass("tabactive1");
        $(".rightpanel").find("table").eq(a).css("display", "table")
    });
    $(".rptab2").click(function() {
        var a = $(this).index();
        $(".rightpanel").find("table").css("display", "none");
        $(".rptab2").removeClass("tabactive2");
        $(this).addClass("tabactive2");
        $(".rightpanel").find("table").eq(a).css("display", "table");
        if (a == 1) {
            $(".rightpanel").find("table").eq(a + 1).css("display", "table")
        }
    });
    $(".rptab3").click(function() {
        var a = $(this).index();
        $(".rightpanel").find("table").css("display", "none");
        $(".rptab2").removeClass("tabactive2");
        $(this).addClass("tabactive3");
        $(".rightpanel").find("table").eq(0).css("display", "table")
    })
});