$(function() {
    var a = function() {
        LIBS.ajax({
            url: "notice",
            cache: false,
            success: function(b) {
                $("#notices").html(b)
            }
        })
    };
    a();
    setInterval(a, 30000)
});