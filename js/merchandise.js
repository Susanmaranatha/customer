$(function(){
//				alert($(".aixin").html());
//				alert($(".concert").text());
//				var tu=$(".aixin").html();
//				alert(tu.is("<img src='img/aixin1.png'/>"));
				$(".fright").toggle(function(){
//					if(.aixin.is("<img src='img/aixin1.png'/>"))
					$(".aixin").html("<img src='img/aixin2.png'/>");
					$(".concert").text("已关注");
				},function(){
					$(".aixin").html("<img src='img/aixin1.png'/>");
					$(".concert").text("关注");
				})
				
				$(".fcenter").toggle(function(){
//					if(.aixin.is("<img src='img/aixin1.png'/>"))
					$(".gouwuche").html("<img src='img/gouwuche2.png'/>");
				},function(){
					$(".gouwuche").html("<img src='img/gouwuche1.png'/>");
				})
				

				
				$(".support").click(function(){
//					console.log("12");
					var reported=+$(".people").text() + 1;
					if(reported > parseInt( $(".target").text() / $(".unit-price").text() ) ){
						return false;
					}
					var percent = (reported / ( $(".target").text() / $(".unit-price").text() ))*100;
//					console.log(percent);
					if(percent > 95){
						$(".now").addClass("active")
					}
					
					$(".now").css({
						width:percent+"%"
					});
					//console.log("through the css")
					$(".people").html(reported);
					var remony=reported * $(".unit-price").text();
					$(".money").html(remony);
				})
				
				
				var intDiff = parseInt(432000);//倒计时总秒数量
				function timer(intDiff){
   				window.setInterval(function(){
    			var day=0,
        		hour=0,
       			minute=0,
        		second=0;//时间默认值        
    				if(intDiff > 0){
        			day = Math.floor(intDiff / (60 * 60 * 24));
        			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    						}
    				if (minute <= 9) minute = '0' + minute;
    				if (second <= 9) second = '0' + second;
    				$('#day_show').html(day+"天");
    				$('#hour_show').html('<s id="h"></s>'+hour+'时');
    				$('#minute_show').html('<s></s>'+minute+'分');
    				$('#second_show').html('<s></s>'+second+'秒');
    				intDiff--;
    				}, 1000);
					} 
					$(function(){
    					timer(intDiff);
						}); 
				
			})