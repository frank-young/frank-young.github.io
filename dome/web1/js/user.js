window.onload =func1;
//window.onload =remove1;

/*
*==================================================
*	弹出窗口函数
*
*==================================================
*/
function $(id){
	return document.getElementById(id);
}
function func1(){
		var aph = $('aph');
		var close = $('close');
		var aphHeight =document.body.scrollHeight;
		var showme = $('showMe');
		var tan = $("tan");
	tan.onclick = function(){ 
		addshow();
		return false;
	}
	aph.onclick =function(){ 
		var quite = confirm('你是否不继续填写了？');
		if(quite == true){
			addClose();//关闭函数
		}
	}
	close.onclick =function(){ 
		var quite = confirm('你是否不继续填写了？');
		if(quite == true){
			addClose();	
		}
	}

	//显示弹窗的函数
	this.addshow =function  show() {	
		showme.style.visibility="visible";//显示内容窗口
		aph.style.height=aphHeight+'px';//设置阴影高度和文本高度一样
		aph.style.visibility="visible";//显示阴影
	}//关闭弹窗的函数
	this.addClose = function clo(){ 
		showme.style.visibility="hidden";
		aph.style.visibility="hidden";
	}

	return false;
	
}


/*
*==================================================
*	添加文章函数
*
*==================================================
*/
	var addArtic = $("addArtic");
	var input = addArtic.getElementsByTagName("input");
	var textarea = addArtic.getElementsByTagName("textarea");
	var title = input[0].value;
	var author = input[1].value;
	var description = textarea[0].value;
	var content = textarea[1].value;
	var addall = $("addAll");
	var success = $("success");
	success.onclick = function(){ 
		add(input[0].value,textarea[0].value);
	}
	function add(title,description){ 
		if(title != ""&&description !=""){	
			var h2node = document.createElement("h2");
			var h2textnode = document.createTextNode(title);
			h2node.appendChild(h2textnode);
			addall.appendChild(h2node);
			var pnode = document.createElement("p");
			var ptextnode = document.createTextNode(description);
			pnode.appendChild(ptextnode);
			addall.appendChild(pnode);
			addbt();//增加删除，修改按钮
			alert('发布文章成功！');
			var addclo = new func1();
			addclo.addClose();	
			cls();
		
		}else{
			alert("标题或描述不能为空！")
		}
	}
//删除文章
function remove1(a){ 
	//element.nextSibling
	//element.previousSibling
	//element.removeChild()
	//var a = addall.getElementsByTagName("a");
	//a[1].onclick = function(){ 
		//var h2 = $("h2");
		var p = a.previousSibling.previousSibling;
		var h2=p.previousSibling.previousSibling;
		var a2 =a.nextSibling.nextSibling;
		h2.remove();
		p.remove();
		a2.remove();
		a.remove();
		//h2.firstChild.firstChild.nodeValue="";
		//p.firstChild.nodeValue="";
		//a2.firstChild.nodeValue="";
		//a.firstChild.nodeValue="";
	//}
	return false;
}
//修改文章
function re(b){ 
	//var a = addall.getElementsByTagName("a");
	//a[1].onclick = function(){ 
		//var h2 = $("p");
		var a1 = b.previousSibling.previousSibling;
		var p1=a1.previousSibling.previousSibling;
		var h21=p1.previousSibling.previousSibling;
		var tit = p1.firstChild.nodeValue;
		var des = h21.firstChild.firstChild.nodeValue;
	
		//创建对象
		var addclo = new func1();
		var addsho =  addshow();
	//}
}


//添加修改删除按钮函数
function addbt(){ 
	var remonode = document.createElement("a");
	var remotextnode = document.createTextNode("删除");
	remonode.setAttribute("onclick","remove1(this)");
	remonode.setAttribute("href","#");
	remonode.appendChild(remotextnode);
	addall.appendChild(remonode);
	var renode = document.createElement("a");
	var retextnode = document.createTextNode("修改");
	renode.setAttribute("onclick","re(this)");
	renode.setAttribute("href","#");
	renode.appendChild(retextnode);
	addall.appendChild(renode);
}

//清空表单数据
	function cls(){ 
		input[0].value="";
		input[1].value="";
		textarea[0].value="";
		textarea[1].value="";
	}


 

