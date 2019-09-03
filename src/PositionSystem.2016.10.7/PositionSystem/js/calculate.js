﻿function translateX(x){
	var ox = $("#canvas")[0].width * ps.oxs;//原点的x坐标
	x = (x * ps.g) / ps.ul + ox;//转换长度,并映射到坐标系中
	return x;
}
//将坐标系中的x转换为画布中的横坐标

function translateY(y){
	var oy = $("#canvas")[0].height * ps.oys;//原点的y坐标
	y = oy - (y * ps.g) / ps.ul;//转换长度,并映射到坐标系中
	return y;
}
//将坐标系中的y转换为画布中的纵坐标


function turnBackX(x){
	var ox = $("#canvas")[0].width * ps.oxs;
	x = ox - (ps.g * x) / ps.ul;
	return x;
}
//将画布中的横坐标转换为坐标系中的横坐标

function turnBackY(y){
	var oy = $("#canvas")[0].height * ps.oys;
	y = oy + (ps.g * y) / ps.ul;
	return y;
}
//将画布中的纵坐标转换为坐标系中的纵坐标

function log(){
	if(arguments.length === 1){//底数为10
		return Math.log(arguments[0]);
	}
	else if(arguments.length === 2){//底数自定义
		return Math.log(arguments[1])/Math.log(arguments[0]);//Log换底公式
	}
	else{
		return 0;
	}
}

function angle(a){
	return a * (Math.PI / 180);
}
//根据角度返回弧度

function CLength(l){
	return l + ps.g / ps.ul - 40;//缩放时保持长度的比例和缩放的比例一致
}