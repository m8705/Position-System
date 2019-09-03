function addSin(a, omega, phi){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x,y;
	omega = (omega * 0.0503) / 2;//???
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
	//������
}
//����һ����Ϊa���ݺ���

///////////////////////
function addLog(a){
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