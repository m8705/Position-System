function addSin(a, omega, phi){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x,y;
	omega = (omega * 0.0503) / 2;//???
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.lineCap = 'round';
	for(x = translateX(0); x >= 0; x -= (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的正弦图像

function addCos(a, omega, phi){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x,y;
	omega = (omega * 0.0503) / 2;
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.lineCap = 'round';
	for(x = translateX(0);x >= 0;x -= (0.1 / a)){
		y = translateY(a * Math.cos(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		y = translateY(a * Math.cos(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的余弦图像


function addTan(a, omega, phi){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x,y;
	omega = (omega * 0.0503) / 2;
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.lineCap = 'round';
	for(x = translateX(0);x >= 0;x -= (0.1 / a)){
		y = translateY(a * Math.tan(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		y = translateY(a * Math.tan(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的正切图像



/////////////////
function addPower(a){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//先将小的数求值，再换算成坐标，减少运算量
	var point = {
		x:x , y:y
	};//代表上一个点的坐标，用来将两点连线，使图像平滑
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.lineCap = 'round';
	/*for(x1 = x; x1 > 0 ;x1 -= 0.1){
		y1 = Math.pow(x1, a);
		x = translateX(x1);
		y = translateY(y1);
		context.beginPath();
		context.moveTo(point.x, point.y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
		point.x = x;
		point.y = y;
	}*/
	//正半轴
	/////////////
	x = translateX(0);
    y = translateY(0);
	point.x = translateX(0);
	point.y = translateY(0);
	for(x1 = -x; x1 < canvas.width - 45; x1 += 0.01){//x1+=0.1;
		y1 = Math.pow(x1, a);
		x = translateX(x1);
		y = translateY(y1);
		context.beginPath();
		context.moveTo(point.x, point.y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
		point.x = x;
		point.y = y;
	}
	//负半轴
}
//绘制一个幂为a的幂函数

///////////////////////
function addLog(a){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//先将小的数求值，再换算成坐标，减少运算量
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.lineCap = 'round';
	
	for(x1 = x; x1 > 0 ;x1 -= 0.1){
		y1 = Math.log(x) / Math.log(a);
		x = translateX(x1);
		y = translateY(y1);
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}