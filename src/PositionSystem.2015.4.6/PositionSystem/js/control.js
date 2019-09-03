function drawGraph(){
	
}



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
	excuse();
}
//改变原点X在画布中的位置
			
function changeOY(scale){
	ps.oys += scale;
	submit();
	excuse();
}
//改变原点Y在画布中的位置