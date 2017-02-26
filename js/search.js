$(function(){
    $(".item").click(function(){
        $(".search-text").val($(this).text());

    });
    $(".search-button").click(function(){
        if($(".search-button").val()!=""){
            if($(".history a.item").length<=5){
                $("<a/>").text( $(".search-text").val()).addClass("item").appendTo($(".history .hot-content"));
            }
        }
        window.location.href="crowds.html";
    });
    $(".clear").click(function(){
        $("#history a.item").remove();
    });
});