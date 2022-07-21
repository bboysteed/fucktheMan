$(function() {
    var a = function() {
        LIBS.ajax({
            url: "https://3752906148-ls.k2kqv858qm.com/notice",
            cache: false,
            success: function(b) {
                $("#notices").html(b)
            }
        })
    };
    a();
    setInterval(a, 30000)
});