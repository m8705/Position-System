function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.area = Math.PI * radius * radius;//���
	this.girth = 2 * Math.PI * radius;//�ܳ�
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
	//����ת��Բ�������������
	
	this.f = function(x){
			if(arguments.length === 0){
				return "(x" + c(this.x) + ")^2 + (y" + c(this.y) + ")^2 = " + this.radius * this.radius;//����Բ�ķ���
			}
			else if(arguments.length === 1){
					if(x > this.x + radius || x < this.x - radius){
						return Infinity;//ȡ�ĵ㲻��Բ��
					}
					else{
						return '��' + Math.sqrt((this.radius * this.radius) - (x - this.x) * (x - this.x)) + this.y;//ȡ�ĵ���Բ�ϣ����ظõ��������
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
		//����Բ������
		
		context.stroke();
		context.closePath();
};
//����Բ