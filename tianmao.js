window.onload = function(){
	document.getElementById("denglu").onclick = function(){
		var userName = document.getElementById("username");
		var passWord = document.getElementById("password");
		if(userName.value == ""){
			alert("请输入账号！");
		}else if(passWord.value == ""){
			alert("请输入密码！");
		}else if(userName.value.length < 6 || userName.value.length > 18){
			alert("用户名必须在6~18位字符之间！");
		}else if(passWord.value.length < 6 || passWord.value.length > 18){
			alert("密码必须在6~18位字符之间！");
		}else{}
	}
}