$(function(){
//				$("ul li:gt(0)").css("background","red");
				var ins=$("ul li:gt(0)");
				ins.hide();
				$(".zhsh").click(function(){
//					ins.show();
//					alert(ins.is(":hidden"));
					if(ins.is(":hidden")==true)
					{
						ins.show();
						$(".zhanshi").text("隐藏部分说明");
						$(".zhanshi").css("background", "url(img/up1.png)");
						$(".zhanshi").css("background-repeat", "no-repeat");
					}
					else
					{
						ins.hide();
						$(".zhanshi").text("展开全部说明");
						$(".zhanshi").css("background", "url(img/down1.png)");
						$(".zhanshi").css("background-repeat", "no-repeat");
					}
				})
			
			function allSelect() {
		            if ($(":checkbox").attr("checked") != "checked") {
		                $(":checkbox").attr("checked", "checked");
		            }
		            else {
		                $(":checkbox").removeAttr("checked");
		            		}
		      		}	
	      			var input = $(".allinall");
					$(".circle").toggle(function(){
						$(this).append("<img src='img/gou.png'>");
						$(this).css("border","none");
						$(".circle1").append("<img src='img/gou.png'>");
						$(".circle1").css("border","none");
						allSelect();
					},function(){
						$(this).find('img').remove();
						$(this).css("border","1px solid #49484B");
						$(".circle1").find('img').remove();
						$(".circle1").css("border","1px solid #49484B");
						allSelect();
			})
				
			function a(){
						$(this).append("<img src='img/gou.png'>");
						$(this).css("border","none");
						var price = $(this).parents(".content1").find(".money-price").text();
						var num = $(this).parents(".content1").find(".num").text();
//						console.log(price)
						$("#whole").find(".price").html(num*price);
			}
				
			function b(){
						$(this).find('img').remove();
						$(this).css("border","1px solid #49484B");
			}
				
				
				$(".circle1").toggle(a,b)



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

			$(".circle1").on("click",function(){
				var $circle = $(this).parents(".content1").find(".circle1");
				if($circle.css("border") != "none"){
					$(this).repaceWith("<img src='img/gou.png'>");
					$(this).css("border","none");
					var price = $(this).parents(".content1").find(".money-price").text();
					var num = $(this).parents(".content1").find(".num").text();
					$("#whole").find(".price").html(num*price);
				}
			})


					
				
					$(".add").click(function(e){
					    e.stopPropagation();
						var  numadd = +$(this).next(".num").html()+1;
						$(this).siblings(".num").html(numadd);	
						var $circle = $(this).parents(".content1").find(".circle1");

						
						if( $circle.css("border") !== "none"){

							$circle.click(function(){
//								$(this).append("<img src='img/gou.png'>");
//								$(this).css("border","none");
								var price = $(this).parents(".content1").find(".money-price").text();
								var num = $(this).parents(".content1").find(".num").text();
								console.log(price)
								$("#whole").find(".price").html(num*price);
							})
							
							$circle.click();
						}
					})
					
					$(".sub").click(function(){
						var numsub=$(this).prev(".num").html()-1;
	//					var numsub=$(this).parent().find(".num").html()-1;
						if(numsub<1){
							return false;
						}
						$(this).siblings(".num").html(numsub);	
					})
				})