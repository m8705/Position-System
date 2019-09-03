function Text(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;//设置文本的值
		this.color = "brown";//设置文本的颜色
		this.fontSize = "15";//设置文本的字体大小
		this.draw = function(){
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			x = translateX(x);
			y = translateY(y);
			context.fillStyle = this.color;
			context.font = this.fontSize + "px Arial";
			context.textBaseline = "middle";
			context.fillText(value,x,y);
		}
}

function Point(x, y){
	this.x = x;
	this.y = y;
	this.color = "red";//设置点的颜色
	this.size = 5;//设置点的大小
	this.draw = function(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = this.color;
		context.lineWidth = this.size;
		context.lineCap = "round";
		x = translateX(x);
		y = translateY(y);
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
	}
}

function Line(){
	
	if(arguments.length === 2){
		//传入的参数是 k, b
		var k = arguments[0];
		var b = arguments[1];
		this.k = k;
		this.b = b;
		this.f = function(x){
			if(arguments.length === 0){
				return "y = " + this.k + "x " + "+ " + this.b;
			}
			else if(arguments.length === 1){
				return this.k * x + b;
			}
		}
		this.color = "red";
		this.lineWidth = "2";
		this.draw = function(){
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			context.strokeStyle = this.color;
			context.lineWidth = this.lineWidth;
			context.lineCap = "round";
			
			//计算一个点，从这个点开始连线
			var x1 = 0;
			var y1 = b;
			
			
			//设置一个远处的点(ax,ay)，用来与传入的x1,y1与该点连线
			var ax = turnBackX(canvas.width) + this.b * g;
			var ay = ax * (-k);
			context.beginPath();
			context.moveTo(translateX(x1) + this.b * g, translateY(y1));/////////////////////////////
			context.lineTo(ax, ay);
			context.stroke();
			context.closePath();
			
			//设置一个远处的点(bx,by)，用来与传入的x1,y1与该点连线
			var bx = turnBackX(-canvas.width) + this.b * g;
			var by = bx * (-k);
			context.beginPath();
			context.moveTo(translateX(x1) + this.b * g, translateY(y1));////////////////////////////
			context.lineTo(bx, by);
			context.stroke();
			context.closePath();
		}
	}
	
	
	
	if(arguments.length === 3){
		//传入的参数是 x1, y1, k
		var x1 = arguments[0];
		var y1 = arguments[1];
		var k = arguments[2];
		this.k = k;
		this.f = function(x){
			if(arguments.length === 0){
				return "y = " + this.k + "x " + "+ " + (y1 - this.k * x1);
			}
			else if(arguments.length === 1){
				return this.k * x + (y1 - this.k * x1);
			}
		}
		this.color = "red";
		this.lineWidth = "2";
		this.draw = function(){
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			context.strokeStyle = this.color;
			context.lineWidth = this.lineWidth;
			context.lineCap = "round";
			
			//设置一个远处的点(ax,ay)，用来与传入的x1,y1与该点连线
			var ax = turnBackX(canvas.width);
			var ay = ax * (-k);
			context.beginPath();
			context.moveTo(translateX(x1), translateY(y1));
			context.lineTo(ax, ay);
			context.stroke();
			context.closePath();
			
			//设置一个远处的点(bx,by)，用来与传入的x1,y1与该点连线
			var bx = turnBackX(-canvas.width);
			var by = bx * (-k);
			context.beginPath();
			context.moveTo(translateX(x1), translateY(y1));
			context.lineTo(bx, by);
			context.stroke();
			context.closePath();

		}
	}
	
	if(arguments.length === 4){
		//传入的参数是 x1, y1, x2, y2
		var x1 = arguments[0];
		var y1 = arguments[1];
		var x2 = arguments[2];
		var y2 = arguments[3];
		
		if((x1 === x2) && (x1 === y1) && (x1 === y2)){
			//x1===x2===y1===y2
			this.x = x1;
			this.y = y1;
			this.color = "red";//设置点的颜色
			this.size = 5;//设置点的大小
			this.draw = function(){
				var canvas = document.getElementById("canvas");
				var context = canvas.getContext("2d");
				context.strokeStyle = this.color;
				context.lineWidth = this.size;
				context.lineCap = "round";
				x = translateX(x1);
				y = translateY(y1);
				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x1, y1);
				context.stroke();
				context.closePath();
			}
		}
		
			if(x1 === x2){
				//x1===x2
				this.k = Infinity;
				this.f = function(x){
					if(arguments.length === 0){
						return "x = " + x1;
					}
					else if(arguments.length === 1){
						return "ERROR";
					}
				};
				this.color = "red";
				this.lineWidth = "2";
				this.draw = function(){
					var canvas = document.getElementById("canvas");
					var context = canvas.getContext("2d");
					context.strokeStyle = this.color;
					context.lineWidth = this.lineWidth;
					context.lineCap = "round";
					x1 = translateX(x1);
					y1 = translateY(y1);
					y2 = translateY(y2);
					context.beginPath();
					context.moveTo(x1, y1);
					context.lineTo(x1, y2);
					context.stroke();
					context.closePath();
				}
			}
	
		
		else if(y1 === y2){
			//y1===y2
			this.k = 0;
			this.f = function(x){
				if(arguments.length === 0){
					return "y = " + y1;
				}
				else if(arguments.length === 1){
					return y1;
				}
			};
			this.color = "red";
			this.lineWidth = "2";
			this.draw = function(){
				var canvas = document.getElementById("canvas");
				var context = canvas.getContext("2d");
				context.strokeStyle = this.color;
				context.lineWidth = this.lineWidth;
				context.lineCap = "round";
				x1 = translateX(x1);
				x2 = translateX(x2);
				y1 = translateY(y1);
				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y1);
				context.stroke();
				context.closePath();
				}
		}
		
		else{
			//x1!==x2,y1!==y2
			this.k = function(){return (y2 - y1) / (x2 - x1);};
			this.f = function(x){
				if(arguments.length === 0){
					return "y = " + this.k + "x " + "+ " + (y1 - this.k * x1);
				}
				else if(arguments.length === 1){
					return this.k * x + (y1 - this.k * x1);
				}
			}
			this.color = "red";
			this.lineWidth = "2";
			this.draw = function(){
				var canvas = document.getElementById("canvas");
				var context = canvas.getContext("2d");
				context.strokeStyle = this.color;
				context.lineWidth = this.lineWidth;
				context.lineCap = "round";
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
		}
	}
	
	
	
	
}
/////////////
function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.area = Math.PI * radius * radius;//面积
	this.girth = 2 * Math.PI * radius;//周长
	function c(v){
		//用来将原点坐标的正负号转换
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
	this.draw = function(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = "blue";
		context.lineWidth = 2;
		x = translateX(x);
		y = translateY(y);
		context.beginPath();
		context.arc(x, y, radius * g, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
		context.stroke();
		context.closePath();
	}
}
////////////////////////
function Rect(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.area = height * width;//面积
	this.girth = 2 * (height + width);//周长
	this.draw = function(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = "blue";
		context.lineWidth = 2;
		context.lineCap = "quare";
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
}




//////////////

function x2(x){
	return x * x;
}