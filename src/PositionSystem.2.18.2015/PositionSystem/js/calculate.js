function translateX(x){
	var ca = $("canvas");
	var ox = ca.width * ps.oxs;
	x = (x * ps.g) / ps.ul + ox;
	return x;
}
//将坐标系中的x转换为画布中的横坐标

function translateY(y){
	var ca = $("canvas");
	var oy = ca.height * ps.oys;
	y = oy - (y * ps.g) / ps.ul;
	return y;
}
//将坐标系中的y转换为画布中的纵坐标


function turnBackX(x){
	var ca = $("canvas");
	var ox = ca.width * ps.oxs;
	x = ox - (ps.g * x) / ps.ul;
	return x;
}
//将画布中的横坐标转换为坐标系中的横坐标

function turnBackY(y){
	var ca = $("canvas");
	var oy = ca.height * ps.oys;
	y = oy + (ps.g * x) / ps.ul;
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

function CLength(l){
	return l + ps.g / ps.ul - 40;//缩放时保持长度的比例和缩放的比例一致
}