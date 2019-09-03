function Line(){
	if(arguments.length === 2){
		//����Ĳ����� k, b
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
			var ca = $("canvas");
			var co = ca.getContext("2d");
			co.strokeStyle = this.color;
			co.lineWidth = this.lineWidth;
			co.lineCap = "round";
			
			//����һ���㣬������㿪ʼ����
			var x1 = 0;
			var y1 = b;
			
			
			//����һ��Զ���ĵ�(ax,ay)�������봫���x1,y1��õ�����
			var ax = turnBackX(ca.width) + this.b * ps.g;
			var ay = ax * (-k);
			co.beginPath();
			co.moveTo(translateX(x1) + this.b * ps.g, translateY(y1));/////////////////////////////
			co.lineTo(ax, ay);
			co.stroke();
			co.closePath();
			
			//����һ��Զ���ĵ�(bx,by)�������봫���x1,y1��õ�����
			var bx = turnBackX(-ca.width) + this.b * ps.g;
			var by = bx * (-k);
			co.beginPath();
			co.moveTo(translateX(x1) + this.b * ps.g, translateY(y1));////////////////////////////
			co.lineTo(bx, by);
			co.stroke();
			co.closePath();
		}
	}
	
	
	
	if(arguments.length === 3){
		//����Ĳ����� x1, y1, k
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
			var ca = $("canvas");
			var co = ca.getContext("2d");
			co.strokeStyle = this.color;
			co.lineWidth = this.lineWidth;
			co.lineCap = "round";
			
			//����һ��Զ���ĵ�(ax,ay)�������봫���x1,y1��õ�����
			var ax = turnBackX(ca.width);
			var ay = ax * (-k);
			co.beginPath();
			co.moveTo(translateX(x1), translateY(y1));
			co.lineTo(ax, ay);
			co.stroke();
			co.closePath();
			
			//����һ��Զ���ĵ�(bx,by)�������봫���x1,y1��õ�����
			var bx = turnBackX(-ca.width);
			var by = bx * (-k);
			co.beginPath();
			co.moveTo(translateX(x1), translateY(y1));
			co.lineTo(bx, by);
			co.stroke();
			co.closePath();

		}
	}
	
	if(arguments.length === 4){
		//����Ĳ����� x1, y1, x2, y2
		var x1 = arguments[0];
		var y1 = arguments[1];
		var x2 = arguments[2];
		var y2 = arguments[3];
		
		if((x1 === x2) && (x1 === y1) && (x1 === y2)){
			//x1===x2===y1===y2
			this.x = x1;
			this.y = y1;
			this.color = "red";//���õ����ɫ
			this.size = 5;//���õ�Ĵ�С
			this.draw = function(){
				var ca = $("canvas");
				var co = ca.getContext("2d");
				co.strokeStyle = this.color;
				co.lineWidth = this.size;
				co.lineCap = "round";
				x = translateX(x1);
				y = translateY(y1);
				co.beginPath();
				co.moveTo(x1, y1);
				co.lineTo(x1, y1);
				co.stroke();
				co.closePath();
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
					var ca = $("canvas");
					var co = ca.getContext("2d");
					co.strokeStyle = this.color;
					co.lineWidth = this.lineWidth;
					co.lineCap = "round";
					x1 = translateX(x1);
					y1 = translateY(y1);
					y2 = translateY(y2);
					co.beginPath();
					co.moveTo(x1, y1);
					co.lineTo(x1, y2);
					co.stroke();
					co.closePath();
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
				var ca = $("canvas");
				var co = ca.getContext("2d");
				co.strokeStyle = this.color;
				co.lineWidth = this.lineWidth;
				co.lineCap = "round";
				x1 = translateX(x1);
				x2 = translateX(x2);
				y1 = translateY(y1);
				co.beginPath();
				co.moveTo(x1, y1);
				co.lineTo(x2, y1);
				co.stroke();
				co.closePath();
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
				var ca = $("canvas");
				var co = ca.getContext("2d");
				co.strokeStyle = this.color;
				co.lineWidth = this.lineWidth;
				co.lineCap = "round";
				x1 = translateX(x1);
				y1 = translateY(y1);
				x2 = translateX(x2);
				y2 = translateY(y2);
				co.beginPath();
				co.moveTo(x1, y1);
				co.lineTo(x2, y2);
				co.stroke();
				co.closePath();
			}
		}
	}
	
	
	
	
}