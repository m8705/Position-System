function addSin(a, omega, phi){
	var canvas = $("canvas");
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

function Sin(a, omega, phi){
	this.a = a;
	this.omega = omega;
	this.phi = phi;
	this.phase = function(){/*相位*/
		if(omega===0){
			if(phi===0){
				return 0;
			}
			else{
				return phi;
			}
		}
		else if(phi===0){
			return omega;
		}
		else{
			if(omega===1){
				return "x" + "+" + phi;
			}
			else{
				return omega + "x" + "+" + phi;
			}
		}
	}
	this.t = 2 * Math.PI / omega;/*周期*/
	this.symmetryAxis = 0;/*对称轴*/
	
}