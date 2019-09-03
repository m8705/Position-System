function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.area = Math.PI * radius * radius;//面积
	this.girth = 2 * Math.PI * radius;//周长
	function c(v){
		
		if(v > 0){
			return -v;
		}
		else if(v < 0){
			return '+' + (-v);
		}
		else{
			return '';
		}
	}
	//用来转换圆心坐标的正负号
	
	this.f = function(x){
			if(arguments.length === 0){
				return "(x" + c(this.x) + ")^2 + (y" + c(this.y) + ")^2 = " + this.radius * this.radius;//返回圆的方程
			}
			else if(arguments.length === 1){
					if(x > this.x + radius || x < this.x - radius){
						return Infinity;//取的点不在圆上
					}
					else{
						return '±' + Math.sqrt((this.radius * this.radius) - (x - this.x) * (x - this.x)) + this.y;//取的点在圆上，返回该点的纵坐标
					}
				
			}
	}
}
Circle.prototype.draw = function(){
		var canvas = $("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = "blue";
		context.lineWidth = 2;
		var x = translateX(this.x);
		var y = translateY(this.y);
		context.beginPath();
		context.arc(x, y, this.radius * g / ul, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
		
		context.strokeStyle = "red";
		context.moveTo(x,y);
		context.lineTo(x,y);
		
		//context.fillStyle = "black";
		//context.font = "15px Arial";
		//context.textBaseline = "middle";
		//context.fillText("(" + this.x + "," + this.y+")",x  + 10,y);
		//绘制圆心坐标
		
		context.stroke();
		context.closePath();
};
//绘制圆