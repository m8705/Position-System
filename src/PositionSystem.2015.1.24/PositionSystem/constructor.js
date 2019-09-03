function Text(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;
		this.color = "brown";
		this.fontSize = "15";
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
	this.color = "red";
	this.size = 5;
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
	if(arguments.length === 4){
		//传入的参数是 x1, y1, x2, y2
		var x1 = arguments[0];
		var y1 = arguments[1];
		var x2 = arguments[2];
		var y2 = arguments[3];
		
		if(x1 === x2){
			if((x1 === y1) && (x1 === y2)){
				//x1===x2===y1===y2
				this.k = Infinity;
				this.function = function(){return x1;}
			}
			else{
				//x1===x2
				this.k = Infinity;
				this.function = function(x){
					if(arguments.length === 0){
						return "x = " + x1;
					}
					else if(arguments.length === 1){
						return "ERROR";
					}
				};
			}
		}
		
		else if(y1 === y2){
			//y1===y2
			this.k = 0;
			this.function = function(x){
				if(arguments.length === 0){
					return "y = " + y1;
				}
				else if(arguments.length === 1){
					return y1;
				}
			};
		}
		
		else{
			//x1!==x2,y1!==y2
			this.k = function(){return (y2 - y1) / (x2 - x1);};
			this.function = function(x){
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
	
	if(arguments.length === 3){
		//传入的参数是 x1, y1, k
		var x1 = arguments[0];
		var y1 = arguments[1];
		var k = arguments[2];
		this.k = k;
		this.function = function(x){
			if(arguments.length === 0){
				return "y = " + this.k + "x " + "+ " + (y1 - this.k * x1);
			}
			else if(arguments.length === 1){
				return this.k * x + (y1 - this.k * x1);
			}
		}
		this.draw = function(){
			
			//////////////////////////////////////////////
			var canvas = document.getElementById("canvas");
			var context = canvas.getContext("2d");
			context.strokeStyle = "red";
			context.lineWidth = 2;
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
			/////////////////////////////////////////////////
		}
	}
	
	
}

function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.area = Math.PI * radius * radius;//面积
	this.girth = 2 * Math.PI * radius;//周长
	this.function = function(x){
			if(arguments.length === 0){
				return "(x" + (-x) + ")^2 + (y" + (-y) + ")^2 = " + radius * radius;
			}
			else if(arguments.length === 1){
				///////////////////////////////
				return 0;
				////////////////////////////////
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