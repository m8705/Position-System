
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
//�ڵ�(x,y)������һ���ı�text

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
//�ڵ�(x,y)������һ����

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
//���Ƶ�(x1,y1)���(x2,y2)������

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
//�ڵ�(x,y)������һ���뾶Ϊr��Բ

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
//�ڵ�(x,y)������һ����Ϊheight,��Ϊwidth�ľ���

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
		//(0.1 / a):ʹȡ��ľ���������ı�����С��ʹͼ��������ܴ��ʱ���Ա���һ������
		y = translateY(a * Math.sin(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		//(0.1 / a):ʹȡ��ľ���������ı�����С��ʹͼ��������ܴ��ʱ���Ա���һ������
		y = translateY(a * Math.sin(omega * x + phi));
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}
//����һ�����Ϊa����λΪomega*x+phi������ͼ��

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
//����һ�����Ϊa����λΪomega*x+phi������ͼ��


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
//����һ�����Ϊa����λΪomega*x+phi������ͼ��



/////////////////
function addPower(a){
	if (arguments.length !== 1){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//�Ƚ�С������ֵ���ٻ�������꣬����������
	var point = {
		x:x , y:y
	};//������һ��������꣬�������������ߣ�ʹͼ��ƽ��
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
	//������
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
	//������
}
//����һ����Ϊa���ݺ���

///////////////////////
function addLog(a){
	if (arguments.length !== 1){
		throw new Error("Argument error!");
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//�Ƚ�С������ֵ���ٻ�������꣬����������
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