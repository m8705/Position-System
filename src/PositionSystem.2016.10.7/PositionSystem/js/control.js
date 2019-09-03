﻿function excuse(){
	var t = $("#code").val();
	try{
		eval(t);
	}
	catch(err){
		alert(err);
	}
}
//执行文本框中的内容

function changeHeight(h){
	$("#canvas")[0].height += h;
	submit();
	excuse();
}
//改变画布高度
				
function changeWidth(w){
	$("#canvas")[0].width += w;
	submit();
	excuse();
}
//改变画布宽度
			
function changeOX(scale){
	ps.oxs += scale;
	ps.y0 = ps.oys * $("#canvas")[0].width;
	submit();
	excuse();
}
//改变原点X在画布中的位置
			
function changeOY(scale){
	ps.oys += scale;
	ps.y0 = ps.oys * $("#canvas")[0].height;
	submit();
	excuse();
}
//改变原点Y在画布中的位置

function clean(){
	if(ps.showXY){
		submit();
	}
	else{
		changeHeight(0);
	}
}
//清屏

function example(){
	var s1 = "text(1,1,'hello,world!');";
	var s2 = "point(3,3);";
	var s3 = "line(-1,-2,1,4);";
	var s4 = "vector(1,10);";
	var s5 = "rect(-1,1,1,1);";
	var s6 = "circle(0,0,3);";
	var eg = [s1,s2,s3,s4,s5,s6]
	var n = Math.ceil(Math.random()*6);
	$("#code").val(eg[n-1]);
}
//举栗子