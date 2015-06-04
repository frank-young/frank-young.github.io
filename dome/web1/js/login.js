

/*  	表单验证
*=================================================================================
*/
function $(id){
	return document.getElementById(id);
}
	var ipt = document.getElementsByName("in");
		 var name= ipt[0];
		 var email = ipt[2];
 		 
		 var wraing = document.getElementsByName('wraing');//提示标签
		 var name_msg = wraing[0];
		 var pass_msg = wraing[1];
		 var pass2_msg = wraing[2];
		 var email_msg = wraing[3];
		 nosub = [];//用于判断表单是否提交

//用户名 交互
		 ipt[0].onfocus = function(){ 

		 	name_msg.style.visibility="visible";
		 	name_msg.innerHTML="请输入6-20个字符,字母或,数字,汉字或下划线";
			
		 }//得到焦点
		
		 ipt[0].onblur = function(){ 

		 	var re = /[^\w\u4e00-\u9fa5]/g;
		 	if(re.test(this.value)){ 
		 		name_msg.innerHTML="含有不合法字符！";
		 	}else if(this.value ==""){ 
		 		name_msg.innerHTML="不能为空！";
		 	}
		 	else if(this.value.length>20){ 
		 		name_msg.innerHTML="长度超过20！";
		 	}else if(this.value.length<6){ 
		 		name_msg.innerHTML="长度小于6！";
		 	}else{ 
		 		name_msg.innerHTML="OK! ";
		 		nosub[0] = true;
		 	}


		 }//失去焦点

//密码 交互
		 ipt[1].onfocus = function(){ 

		 	pass_msg.style.visibility="visible";
		 	pass_msg.innerHTML="请输入6-20个字符,字母或,数字";
			
		 }//得到焦点
		
		 ipt[1].onblur = function(){ 

		 	var word = /[^a-zA-Z\d]/g;
		 	if(word.test(this.value)){ 
		 		pass_msg.innerHTML="含有不合法字符！";
		 	}else if(this.value ==""){ 
		 		pass_msg.innerHTML="不能为空！";
		 	}
		 	else if(this.value.length>20){ 
		 		pass_msg.innerHTML="长度超过20！";
		 	}else if(this.value.length<6){ 
		 		pass_msg.innerHTML="长度小于6！";
		 	}else{ 
		 		pass_msg.innerHTML="OK! ";
		 		ipt[2].removeAttribute("disabled");
		 		nosub[1]  = true;
		 	}


		 }//失去焦点

//再次密码 交互
		 ipt[2].onfocus = function(){ 

		 	pass2_msg.style.visibility="visible";
		 	pass2_msg.innerHTML="请再次输入!";
			
		 }//得到焦点
		
		 ipt[2].onblur = function(){ 

		 	if(this.value != ipt[1].value){ 
		 		pass2_msg.innerHTML="两次密码不一样,请重新输入!";
		 	}else{ 
		 		pass2_msg.innerHTML="OK!";
		 		nosub[2] = true;
		 	}


		 }

//邮箱验证
		  ipt[3].onfocus = function(){ 
		  	email_msg.style.visibility="visible";
		 	
		 	email_msg.innerHTML="请输入你的邮箱";
			
		 }//得到焦点
		 
		 ipt[3].onblur = function(){ 
		 	var eml = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 	
		 	if(eml.test(this.value)){ 
		 		email_msg.innerHTML="OK!";
		 		nosub[3] = true;
		 		
		 	}else if(this.value ==""){ 
		 		email_msg.innerHTML="不能为空！";
		 	}else{ 
		 		email_msg.innerHTML="邮箱格式不对！!";
		 	}


		 }
/*
*=================================================================================
*/







/*	弹出框
*=================================================================================
*/
	function sub(){ 
		 var nameVal = ipt[0].value;
		 var emailVal = ipt[3].value;
		 var sex = document.getElementsByName("sexs");
		
		 if (sex[0].checked== true) { 
		 	alert('姓名：'+nameVal+'email:'+emailVal+' 性别：男'); 
		 	nosub[4] = true;
		 }else if (sex[1].checked== true){ 
		 	alert('姓名：'+nameVal+'email:'+emailVal+' 性别：女'); 
		 	nosub[5] = true;
		 }else{ 
		 	
		 	alert('填写不正确');
		 	
		 }
		 
	}
/*
*=================================================================================
*/





/*	提交表单判断函数
*=================================================================================
*/


	function subFun(){ 
		var num=0;
		for(var i=0; i<=nosub.length;i++){ 
			if (nosub[i] == true){ 
				num++;
			}
		}
		if(num == 5){ 
			return true;
		}
		else { 
			return false;
		}

	}



/*	
*=================================================================================
*/






/*	弹出层
*=================================================================================
*/
	var aph = $('aph');
	var showme = $('showMe');
	var close = $('close');
	var aphHeight =document.body.scrollHeight;

	function show() {
		
		showme.style.visibility="visible";
		aph.style.height=aphHeight+'px';
		aph.style.visibility="visible";

	}
	aph.onclick =function(){ 
		var quite = confirm('你是否不继续填写了？');
		if(quite == true){
			showme.style.visibility="hidden";
			aph.style.visibility="hidden";
			name_msg.style.visibility="hidden";
			pass_msg.style.visibility="hidden";
			pass2_msg.style.visibility="hidden";
			email_msg.style.visibility="hidden";
		}
	}
	close.onclick =function(){ 
		var quite = confirm('你是否不继续填写了？');
		if(quite == true){
			showme.style.visibility="hidden";
			aph.style.visibility="hidden";
			name_msg.style.visibility="hidden";
			pass_msg.style.visibility="hidden";
			pass2_msg.style.visibility="hidden";
			email_msg.style.visibility="hidden";
		}
	}
/*
*=================================================================================
*/








