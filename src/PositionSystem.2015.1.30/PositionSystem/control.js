function excuse(){
	var text = document.getElementById("text").value;
	try{
		eval(text);
	}
	catch(e){
		alert(e);
	}
}
//执行文本框中的内容
			
function clean(){
	var canvas = document.getElementById("canvas");
	canvas.width = canvas.width;
	canvas.height = canvas.height;
	submit();
}

/////////////////////////////////////////////////////////////////////
function API(){
	alert("!!");
}
//显示可用的函数
//////////////////////////////////////////////////////////////////////
			
function changeHeight(h){
	var canvas = document.getElementById("canvas");
	canvas.height += h;
	//改变画布高度
	submit();
}
			
function changeWidth(w){
	var canvas = document.getElementById("canvas");
	canvas.width += w;
	//改变画布宽度
	submit();
}
			
function changeOX(scale){
	oxs += scale;
	//改变原点X在画布中的位置
	submit();
}
			
function changeOY(scale){
	oys += scale;
	//改变原点Y在画布中的位置
	submit();
}