$(function(){
//				$("ul li:gt(0)").css("background","red");
				var ins=$("ul li:gt(0)");
				ins.hide();
				$(".reveal").click(function(){
//					ins.show();
//					alert(ins.is(":hidden"));
					if(ins.is(":hidden")==true)
					{
						ins.show();
						$(".exhibition").text("隐藏部分说明");
						$(".exhibition").css("background", "url(images/up.png)");
						$(".exhibition").css("background-repeat", "no-repeat");
					}
					else
					{
						ins.hide();
						$(".exhibition").text("展开全部说明");
						$(".exhibition").css("background", "url(images/down.png)");
						$(".exhibition").css("background-repeat", "no-repeat");
					}
				})
			
			function allSelect() {
		            if ($(":checkbox").attr("checked") != "checked") {
		                $(":checkbox").attr("checked", "checked");
		                var price = $(".content").find(".money-price");
						var num= 0;
						for (var i = 0; i < price.length; i++) {
							num = parseInt(num) + parseInt($(price[i]).text());
						}
						$("#whole").find(".price").text(parseInt(num).toFixed(2));
		            }
		            else {
		                $(":checkbox").removeAttr("checked");
		                $(".selects").find('img').remove();
		                
		                $("#whole").find(".price").html("0.00");
		            	}
		      		}	
	      			var input = $(".allinall");
					$(".circle").toggle(function(){
						$(this).append("<img src='images/selected.png'>");
						$(this).css("border","none");
						$(".circle-initial").append("<img src='images/selected.png'>");
						$(".circle-initial").css("border","none");
						allSelect();
					},function(){
						$(this).find('img').remove();
						$(this).css("border","1px solid #49484B");
						$(".circle-initial").find('img').remove();
						$(".circle-initial").css("border","1px solid #49484B");
						allSelect();
			})
				
			function a(){
						$(this).append("<img src='images/selected.png'>");
						$(this).css("border","none");
						var price = $(this).parents(".content").find(".money-price").text();
						var num = $(this).parents(".content").find(".num").text();

						$("#whole").find(".price").html(parseInt(num*price).toFixed(2));
			}
				
			function b(){
						$(this).find('img').remove();
						$(this).css("border","1px solid #49484B");
			}
				
				
				$(".circle-initial").toggle(a,b)



//			$(".circle1").on("click",function(){
//				var $circle = $(this).parents(".content1").find(".circle1");
//				if($circle.css("border") != "none"){
//					
//					$(this).append("<img src='img/gou.png'>");
//					$(this).css("border","none");
//					var price = $(this).parents(".content1").find(".money-price").text();
//					var num = $(this).parents(".content1").find(".num").text();
//					$("#whole").find(".price").html(num*price);
//					
//				}
//				else if($circle.css("border") == "none"){
//					$(this).find("img").remove();
//					$(this).css("border","1px solid #49484B");
//				}
//			})

			

			$(".amounts button").click(function(event){
				var elem = event.target;
				if($(elem).text() == "+"){					   
						var numadd = parseInt($(elem).parent().next().text());
            			$(elem).parent().next().text(numadd + 1);   
						var $circle = $(elem).parents(".content").find(".circle-initial");						
						if( $circle.css("border") !== "none"){
							$circle.click(function(){
								$(this).replaceWith("<img src='images/selected-small.png'>");		

								var price = $(this).parents(".content").find(".money-price").text();
								var num = $(this).parents(".content").find(".num").text();
								var partmoney=0;
								//console.log(price)
								for(var i= 0;i<$(num).length;i++){
									partmoney=parseInt($(num[i]).text())*parseInt($(price).text());
					            }
								$("#whole").find(".total-money").html(parseInt(partmoney).toFixed(2));
							})
							$circle.click();
						}
				}
			})
					
				
					
					
					$(".sub").click(function(){
						var numsub=$(this).prev(".num").html()-1;
						var price = $(this).parents(".content").find(".money-price").text();
	//					var numsub=$(this).parent().find(".num").html()-1;
						if(numsub<1){
							return false;
						}
						$(this).siblings(".num").html(numsub);
					})						
										
	$(".amounts button").click(function(event) {
        var elem = event.target;
        if ($(elem).text() == "+") {
            var numadd = parseInt($(elem).prev().text());
            $(elem).prev().text(numadd + 1);            
            for(var i= 0,p_total=0;i<$(".commodity.select").length;i++){
                var x=$(".commodity.select")[i];
                p_total+=$(x).children(".detail ").children(".price_num").children(".price").children("span").text()*$(x).children(".detail ").children(".price_num").children(".num").children("span").text()
            }
            $(".pay p span").text(parseFloat(p_total).toFixed(2));
        } else {
            var snum = parseInt($(elem).next().text());
            $(elem).next().text(snum - 1);
            for(var i= 0,p_total=0;i<$(".commodity.select").length;i++){
                var x=$(".commodity.select")[i];
                p_total+=$(x).children(".detail ").children(".price_num").children(".price").children("span").text()*$(x).children(".detail ").children(".price_num").children(".num").children("span").text()
            }
            $(".pay p span").text(parseFloat(p_total).toFixed(2));
        }
        event.stopPropagation();
    });
					
					
					
					
					
//					$(".circle-initial").on("click",function(){
//						var $circle = $(this).parents(".content").find(".circle-initial");
//						if($circle.css("border") != "none"){
//							$(this).append("<img src='images/selected-small.png'>");
//							$(this).css("border","none");
//							var price = $(this).parents(".content").find(".money-price").text();
//							var num = $(this).parents(".content").find(".num").text();
//							$("#whole").find(".total-money").html(num*price);
//							}
//						else if($circle.css("border") == "none"){
//								$(this).find("img").remove();
//								$(this).css("border","1px solid #49484B");
//							}
//					})

				})