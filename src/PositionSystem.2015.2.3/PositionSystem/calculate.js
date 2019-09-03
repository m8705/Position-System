function translateX(x){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var ox = canvas.width * oxs;
	x = (x * g) / ul + ox;
	return x;
}
//将坐标系中的x转换为画布中的横坐标

function translateY(y){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var oy = canvas.height * oys;
	y = oy - (y * g) / ul;
	return y;
}
//将坐标系中的y转换为画布中的纵坐标


function turnBackX(x){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var ox = canvas.width * oxs;
	x = ox - (g * x) / ul;
	return x;
}
//将画布中的横坐标转换为坐标系中的横坐标

function turnBackY(y){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var oy = canvas.height * oys;
	y = y + (g * x) / ul;
	return y;
}
//将画布中的纵坐标转换为坐标系中的纵坐标

function distance(x1, y1, x2, y2){
	if(x1 === x2){
		return Math.abs(y1 - y2);
	}
	else if(y1 === y2){
		return Math.abs(y1-y2);
	}
	else{
		return Math.sqrt( (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) );
	}
}
//计算点(x1,y1)与点(x2,y2)之间的距离

function log(){
	if(arguments.length === 1){
		return Math.log(arguments[0]);
	}
	else if(arguments.length === 2){
		return Math.log(arguments[1])/Math.log(arguments[0]);//Log换底公式
	}
	else{
		return 0;
	}
}