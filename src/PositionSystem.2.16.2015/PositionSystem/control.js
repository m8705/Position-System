function excuse(){
	var text = $("text").value;
	try{
		eval(text);
	}
	catch(e){
		alert(e);
	}
}
//执行文本框中的内容

function cleanText(){
	var text = $("text");
	text.value = "";
}
//清空文本框中的内容

function API(){
	alert("!!");
}
//显示可用的API
			
function changeHeight(h){
	var ca = $("canvas");
	ca.height += h;
	submit();
}
//改变画布高度
				
function changeWidth(w){
	var ca = $("canvas");
	ca.width += w;
	submit();
}
//改变画布宽度
			
function changeOX(scale){
	ps.oxs += scale;
	submit();
}
//改变原点X在画布中的位置
			
function changeOY(scale){
	ps.oys += scale;
	submit();
}
//改变原点Y在画布中的位置