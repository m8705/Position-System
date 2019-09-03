
function addText(text, x, y){
	if (arguments.length !== 3){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	x = translateX(x);
	y = translateY(y);
	context.fillStyle = "brown";
	context.font = "15px Arial";
	context.textBaseline = "middle";
	context.fillText(text,x,y);
}
//在点(x,y)处绘制一个文本text

function addPoint(x, y){
	if (arguments.length !== 2){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "red";
	context.lineWidth = 5;
	context.lineCap = 'round';
	x = translateX(x);
	y = translateY(y);
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x, y);
	context.stroke();
	context.closePath();
}
//在点(x,y)处绘制一个点

function addLine(x1, y1, x2, y2){
	if (arguments.length !== 4){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "red";
	context.lineWidth = 2;
	context.lineCap = 'round';
	x1 = translateX(x1);
	y1 = translateY(y1);
	x2 = translateX(x2);
	y2 = translateY(y2);
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.closePath();
}
//绘制点(x1,y1)与点(x2,y2)的连线

function addCircle(x, y, r){
	if (arguments.length !== 3){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "blue";
	context.lineWidth = 2;
	x = translateX(x);
	y = translateY(y);
	context.beginPath();
	context.arc(x, y, r * g, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
	context.stroke();
	context.closePath();
}
//在点(x,y)处绘制一个半径为r的圆

function addRect(x, y, height, width){
	if (arguments.length !== 4){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "blue";
	context.lineWidth = 2;
	context.lineCap = 'quare';
	x = translateX(x);
	y = translateY(y);
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x + width * g, y);
	context.moveTo(x, y);
	context.lineTo(x, y + height * g);
	context.moveTo(x + width * g, y);
	context.lineTo(x + width * g, y + height * g);
	context.moveTo(x, y + height * g);
	context.lineTo(x + width * g, y + height * g);
	context.stroke();
	context.closePath();
}
//在点(x,y)处绘制一个长为height,宽为width的矩形

function addSin(a, omega, phi){
	if (arguments.length !== 3){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x,y;
	omega = (omega * 0.0503) / 2;
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
	if (arguments.length !== 3){
		throw new Error("Argument error!");
	}
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
	if (arguments.length !== 3){
		throw new Error("Argument error!");
	}
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
	if (arguments.length !== 1){
		throw new Error("Argument error!");
	}
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
	for(x1 = -x; x1 < canvas.width - 45; x1 += 0.1){
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
	if (arguments.length !== 1){
		throw new Error("Argument error!");
	}
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