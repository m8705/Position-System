//color
function randomColor(){
	var list = ['0','1','2','3','4','5','6','7','8','9',"a","b","c","d","e","f"];
	var color = "#";
	var temp="";
	for(var c=0;c<10;c++){
		temp=Math.random();
		temp = Math.floor(temp * 16 - 1);
		if(temp>0){
			color += list[temp];
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

function text(x,y,t,fontSize){
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	if(!fontSize||fontSize<0){//fontsize不存在或不合法
		fontSize = 15;
	}
	c.fillStyle = "#000000";
	c.font = fontSize + "px Arial";
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
	
	c.moveTo(x,y);
	c.lineTo(x,y);
	
	c.closePath();
	c.stroke();
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
	if(arguments.length===4){//e.g. (1,2)->(-3,-4)
		var x1 = arguments[2];
		var y1 = arguments[3];
		var k = (y1-y)/(x1-x);
		x = translateX(x);
		y = translateY(y);
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
		c.rotate(angle(-15));
		c.moveTo(x1, y1);
		c.lineTo(x1-5, y1-5);
		c.rotate(angle(30));
		c.moveTo(x, y);
		c.lineTo(x1+5, y1+5);
		c.closePath();
		c.stroke();
	}
	else{
		if(x===0&&y===0){//(0,0)
			c.strokeStyle = "red";
			c.lineWidth = 1;
			c.beginPath();
			c.arc(x, y, 1, angle(0),angle(360), false);
			c.closePath();
			c.stroke();
		}
		else{//(1,2)
			x = translateX(x);
			y = translateY(y);
			c.strokeStyle = "red";
			c.lineWidth = 1;
			c.lineCap = "round";
			c.beginPath();
			c.moveTo(ps.x0,ps.y0);
			c.lineTo(x, y);
			c.setTransform(1,0,0,1,0,0);
			c.translate(x,y);
			c.rotate(angle(150));
			c.moveTo(0, 0);c.lineTo(10,-10);
			c.rotate(angle(150));
			c.moveTo(0,0);
			c.lineTo(-10,10);
			c.closePath();
			c.stroke();
		}
	}
}

function rect(x, y, h, w, isFilled){
	x = translateX(x);
	y = translateY(y);
	w = w * ps.g / ps.ul;
	h = h * ps.g / ps.ul;
	var c = getContext();
	if(isFilled){
		c.fillStyle=randomColor();
		c.fillRect(x,y-h,h,w);
	}
	else{
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
		c.closePath();
		c.stroke();	
	}
}

function circle(x, y, r, isFilled){
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	if(isFilled){
		c.fillStyle = randomColor();
		c.beginPath();
		c.arc(x, y, r * ps.g / ps.ul, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
		c.closePath();
		c.fill();
	}
	else{
		c.strokeStyle = randomColor();
		c.lineWidth = 1;
		c.beginPath();
		c.arc(x, y, r * ps.g / ps.ul, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
		c.moveTo(x,y);
		c.lineTo(x,y);
		c.closePath();
		c.stroke();
	}
}
//绘制圆

function arc(x, y, r, staAngle, endAngle, clockWise, isFilled){/*clockWise:顺时针*/
	x = translateX(x);
	y = translateY(y);
	var c = getContext();
	if(isFilled){
		c.fillStyle = randomColor();
		c.beginPath();
		c.arc(x, y, r * ps.g / ps.ul, angle(staAngle), angle(endAngle), clockWise);
		c.closePath();
		c.fill();
	}
	else{
		c.strokeStyle = randomColor();
		c.lineWidth = 1;
		c.beginPath();
		c.arc(x, y, r * ps.g / ps.ul, angle(staAngle), angle(endAngle), clockWise);
		c.closePath();
		c.stroke();
	}
}
//绘制扇形






function power(a){
	var c = getContext();
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	
	for(;;){//非负半轴
		y1 = Math.pow(x1, a);
	}
	
	//初始化
	
	for(;;){//负半轴
		y1 = Math.pow(x1, a);
	}
	
}
//绘制一个幂为a的幂函数


function log(a){
	var c = getContext();
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	
	for(;;){//只考虑正半轴
		y1 = Math.log(x) / Math.log(a);
	}
	
}





/*function sin(a, omega, phi){
	var c = getContext();
	var x,y;
	omega = (omega * 0.0503) / 2;//???
	c.strokeStyle = "blue";
	c.lineWidth = 1;
	c.lineCap = 'round';
	for(x = ps.x0; x >= 0; x -= (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.closePath();
		c.stroke();
	}
	
	for(x = ps.x0; x <= canvas.width - 45; x += (0.1 / a)){
		//(0.1 / a):使取点的距离随振幅的变大而减小，使图像在振幅很大的时候仍保持一定精度
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(x, y);
		c.lineTo(x, y);
		c.closePath();
		c.stroke();
	}
}

*/
//绘制一个振幅为a，相位为omega*x+phi的正弦图像

function sin(a, omega, phi){
	var x0 = ps.x0;
	var y0 = ps.y0;
	var c = getContext();
	var w = $("#canvas")[0].width;
	omega = (omega * 0.0503)/2; /*CLength(omega);*/
	var past = {
		x:x0,
		y:translateY(a * Math.sin(omega * x + phi))
	};
	c.strokeStyle = "red";
	c.lineWidth = 1;
	c.lineCap = 'round';
	for(var x=x0,y;x<=w-40; x+=5){
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(past.x, past.y);
		c.lineTo(x, y);
		past.x = x;
		past.y = y;
		c.closePath();
		c.stroke();
	}
	past.x = x0;
	past.y = translateY(a * Math.sin(omega * 0 + phi));
	for(x=x0;x>-6; x-=5){
		y = translateY(a * Math.sin(omega * x + phi));
		c.beginPath();
		c.moveTo(past.x, past.y);
		c.lineTo(x, y);
		past.x = x;
		past.y = y;
		c.closePath();
		c.stroke();
	}
}