$(function(){
  					var lis=$("#header-right li:has('ul')");
  					lis.hover(function(){
  					$(this).children('ul').toggleClass('show');
  						})
  				})