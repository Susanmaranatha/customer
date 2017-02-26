$(function(){
		$("a.vali_code").click(function(){
        $(this).css({"display":"none"});
        $(this).siblings("a.time").css({"display":"inline-block"});
        $(this).siblings("a.time").text("59秒后重发");
        var num=59;
        function time() {
            if (num>0) {
                num--;
                $("a.time").html(num+ "秒后重发");
            }else{
                $("a.vali_code").css({"display":"inline-block"});
                $("a.time").css({"display":"none"});
                clearInterval(t);
            }
        }
        var t=setInterval(time,1000);
    });
})
