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
function api(){
	alert("addCircle(x,y,r)\naddCos(a,omega,phi)\naddLine(x1,y1,x2,y2)\naddPoint(x,y)\naddRect(x, y, height, width)\naddSin(a,omega,phi)\naddTan(a,omega,phi)\naddText(text,x,y)\n\n\ndistance(x1,y1,x2,y2)\nk(x1,y1,x2,y2)\ntranslateX(x)\ntranslateY(y)\n\n\napi()\nchangeHeight(h)\nchangeWidth(w)\nchangeOX(scale)\nchangeOY(scale)\nclean()\nexcuse()\n");
}
//显示可用的函数
			
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