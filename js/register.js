//检查两次输入密码是否一致
		function checkForm(){
			var pw1 = document.getElementById("pw1").value;
			var pw2 = document.getElementById("pw2").value;
			if(pw1 !== pw2){
				alert('两次输入密码不一致！');
				return false;
			}
			return true;
		}

