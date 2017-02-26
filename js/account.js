$(function(){
				$(".add").click(function(){
//					alert($(".num").html());
					var numadd=+$(".num").html()+1;
					$(".num").html(numadd);
					//alert($(".ori-pricenum").html());
					var totprice=$(".ori-pricenum").html()*numadd;
					$(".pricenum").html(totprice);
				})
				$(".sub").click(function(){
//					alert($(".num").html());
					var numsub=$(".num").html()-1;
					if(numsub<1){
						return false;
					}
					$(".num").html(numsub);
					//alert($(".ori-pricenum").html());
					var totprice=$(".ori-pricenum").html()*numsub;
					$(".pricenum").html(totprice);
				})
			})