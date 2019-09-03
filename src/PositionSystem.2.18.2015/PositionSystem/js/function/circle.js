function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = Math.abs(radius);//避免半径为负数时出错
	this.area = Math.PI * radius * radius;//面积
	this.girth = 2 * Math.PI * radius;//周长
	function c(v){//用来转换圆心坐标的正负号
		
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
	
	this.f = function(x){
		if(this.x===undefined||this.y===undefined||this.radius===undefined){//参数未定义
			return undefined;
		}
		else{
			if(arguments.length === 0){//未传入参数,则返回圆的方程
				return "(x" + c(this.x) + ")^2 + (y" + c(this.y) + ")^2 = " + this.radius * this.radius;
			}
			else if(arguments.length === 1){//传入一个参数x,则返回x在圆上的坐标
				if(x > this.x + radius || x < this.x - radius){//x不在圆的范围内
					return undefined;
				}
				else{
					return '±' + Math.sqrt((this.radius * this.radius) - (x - this.x) * (x - this.x)) + this.y;//取的点在圆上，返回该点的纵坐标
				}
			}
		}
	}
}
Circle.prototype.draw = function(){
	if(this.radius===0){
		;
	}
	else{
		var ca = $("canvas");
		var co = ca.getContext("2d");
		co.strokeStyle = randomColor();
		co.lineWidth = 2;
		var x = translateX(this.x);
		var y = translateY(this.y);
		co.beginPath();
		co.arc(x, y, this.radius * ps.g / ps.ul, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
		
		co.strokeStyle = randomColor();
		co.moveTo(x,y);
		co.lineTo(x,y);
		
		co.fillStyle = "black";
		co.font = "15px Arial";
		co.textBaseline = "middle";
		//co.fillText(this.f(),x + 10,y-15);
		//co.fillText("(" + this.x + "," + this.y+")",x + 10,y);
		//绘制圆的方程和圆心坐标
		
		co.stroke();
		co.closePath();
	}
};
//绘制圆