//color
function randomColor(){
	var Value = ['0','1','2','3','4','5','6','7','8','9',"a","b","c","d","e","f"];
	var color = "#";
	var temp="";
	for(var c=0;c<10;c++){
		temp=Math.random();
		temp = Math.floor(temp * 16 - 1);
		if(temp>0){
			color += Value[temp];
		}
		if(color.length<7){
			;
		}
		else if(color.length===7){
			break;
		}
	}
	return color;
}

//graphic

function text(x,y,t){
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	c.fillStyle = "#000000";
	c.font = "15px Arial";
	c.textBaseline = "middle";
	c.fillText(t,x,y);
}

function point(x,y){
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	c.strokeStyle = "red";
	c.lineWidth = 2;
	c.beginPath();
	c.arc(x, y, 1, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
	c.stroke();
	c.closePath();
}

function line(x1,y1,x2,y2){
	x1 = translateX(x1);
	y1 = translateY(y1);
	x2 = translateX(x2);
	y2 = translateY(y2);
	var c = getContext();
	c.strokeStyle = "red";
	c.lineWidth = 1;
	c.lineCap = "round";
	c.beginPath();
	c.moveTo(x1, y1);//start
	c.lineTo(x2, y2);//end
	c.closePath();
	c.stroke();
}

function vector(x,y){
	var c = getContext();
	if(arguments.length===4){
		x = translateX(x);
		y = translateY(y);
		var x1 = arguments[2];
		var y1 = arguments[3];
		x1 = translateX(x1);
		y1 = translateY(y1);
		c.strokeStyle = "red";
		c.lineWidth = 1;
		c.lineCap = "round";
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x1, y1);
		c.setTransform(1,0,0,1,0,0);
		c.translate(x1,y1);
		c.rotate(-15*Math.PI/180);
		c.moveTo(x1, y1);
		c.lineTo(x1-5, y1-5);
		c.rotate(30*Math.PI/180);
		c.moveTo(x, y);
		c.lineTo(x1+5, y1+5);
		c.stroke();
		c.closePath();
	}
	else{
		if(x===0&&y===0){
			c.strokeStyle = "red";
			c.lineWidth = 1;
			c.lineCap = "round";
			c.beginPath();
			c.moveTo(translateX(0),translateY(0));
			c.lineTo(translateX(0),translateY(0));
			c.stroke();
			c.closePath();
		}
		else{
			x = translateX(x);
			y = translateY(y);
			c.strokeStyle = "red";
			c.lineWidth = 1;
			c.lineCap = "round";
			c.beginPath();
			c.moveTo(translateX(0),translateY(0));
			c.lineTo(x, y);
			c.setTransform(1,0,0,1,0,0);
			c.translate(x,y);
			c.rotate(150*Math.PI/180);
			c.moveTo(0, 0);c.lineTo(10,-10);
			c.rotate(150*Math.PI/180);
			c.moveTo(0,0);
			c.lineTo(-10,10);
			c.stroke();
			c.closePath();
		}
	}
}

function rect(x, y, h, w){
	x = translateX(x);
	y = translateY(y);
	w = w * ps.g / ps.ul;
	h = h * ps.g / ps.ul;
	var c = getContext();
	/*
	c.strokeStyle = randomColor();
	c.lineWidth = 1;
	c.lineCap = "square";
	
	c.beginPath();
	c.moveTo(x, y);
	c.lineTo(x + w, y);
	c.moveTo(x, y);
	c.lineTo(x, y - h);
	c.moveTo(x + w, y);
	c.lineTo(x + w, y - h);
	c.moveTo(x, y - h);
	c.lineTo(x + w, y - h);
	c.stroke();
	c.closePath();
	*/
	c.fillStyle=randomColor();
	c.fillRect(x,y,h,w);
};

function circle(x, y, r){
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	c.strokeStyle = randomColor();
	c.lineWidth = 1;
	c.beginPath();
	c.arc(x, y, r * ps.g / ps.ul, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
	c.moveTo(x,y);
	c.lineTo(x,y);
	c.stroke();
	c.closePath();
}
//绘制圆

/////////////////
function power(a){
	var canvas = $("canvas");
	var c = getContext();
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//先将小的数求值，再换算成坐标，减少运算量
	var point = {
		x:x , y:y
	};//代表上一个点的坐标，用来将两点连线，使图像平滑
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	point.x = x;
	point.y = y;
	for(x1 = -x; x1 < canvas.width - 45; x1 += 0.1){//x1+=0.1;
		y1 = Math.pow(x1, a);
		x = translateX(x1);
		y = translateY(y1);
		c.beginPath();
		c.moveTo(point.x, point.y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
		point.x = x;//x
		point.y = y;//y
	}
	//负半轴
}
//绘制一个幂为a的幂函数

///////////////////////
function log(a){
	var c = getContext();
	var x = translateX(0);
	var y = translateY(0);
	var x1,y1;//先将小的数求值，再换算成坐标，减少运算量
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	
	for(x1 = x; x1 > 0 ;x1 -= 0.1){
		y1 = Math.log(x) / Math.log(a);
		x = translateX(x1);
		y = translateY(y1);
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
	}
	c.stroke();
	c.closePath();
}


function sin(a, omega, phi){
	var c = getContext();
	var x,y;
	omega = (omega * 0.0503) / 2;//???
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	for(x = translateX(0); x >= 0; x -= (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的正弦图像


function cos(a, omega, phi){
	var c = getContext();
	var x,y;
	omega = (omega * 0.0503) / 2;
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	for(x = translateX(0);x >= 0;x -= (0.1 / a)){
		y = translateY(a * Math.cos(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		y = translateY(a * Math.cos(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的余弦图像

function tan(a, omega, phi){
	var c = getContext();
	var x,y;
	omega = (omega * 0.0503) / 2;
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	for(x = translateX(0);x >= 0;x -= (0.1 / a)){
		y = translateY(a * Math.tan(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
	
	for(x = translateX(0); x <= canvas.width - 45; x += (0.1 / a)){
		y = translateY(a * Math.tan(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.stroke();
		c.closePath();
	}
}
//绘制一个振幅为a，相位为omega*x+phi的正切图像