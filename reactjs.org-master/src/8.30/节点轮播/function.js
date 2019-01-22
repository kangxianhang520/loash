//****************************************
//通过类名获取元素的兼容性函数
//classname 类名的名称
//obj 父元素
//getClass(classname,obj)
function getClass(classname,obj){
	var obj=obj ||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var all=obj.getElementsByTagName("*");
		console.dir(all);
	}
}
//*********************************************************
// 获取多种元素的函数
// .box  #aa div
// 函数的名称$
// 形参：obj 父对象
// 	     select 选择的元素
function $(select,obj=document){
	if(typeof select=='string'){//判断select是否为字符串
		select=select.trim();//去除select两端的空格
    	if(select.charAt(0)=='.'){//判断select的第一个字符是否为.
    		return obj.getElementsByClassName(select.slice(1));//select.slice(1)将字符串的第一个字符除掉
    	}else if(select.charAt(0)=='#'){//判断select的第一个字符是否为#
    		return obj.getElementById(select.slice(1));
    	}else if(/^[a-z|1-6]{1,10}/.test(select)){
    		return obj.getElementsByTagName(select);
    	}
	}else if(typeof select==='function'){//判断select是否为函数
		window.onload=function(){
			select();
		}
	}
} 
//********************************************
//子对象.appendTo(父对象)将子对象添加到父对象的最后
	Object.prototype.appendTo=function(father){
		father.appendChild(this);
	}
//************************************************
// 对象1.insertAfter(对象2);将对象1插入到对象2的后面
	Object.prototype.insertAfter=function(obj2){
		var parent=obj2.parentNode;//获取对象2的父节点
		var next=obj2.nextElementSibling;//获取对象2的下一个类型为1的元素节点（标签）
		if(next){
			parent.insertBefore(this,next);//this指的是对象1
		}else{	
			this.appendTo(parent);
		}
	}
