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