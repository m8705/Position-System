function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = Math.abs(radius);//����뾶Ϊ����ʱ����
	this.area = Math.PI * radius * radius;//���
	this.girth = 2 * Math.PI * radius;//�ܳ�
	function c(v){//����ת��Բ�������������
		
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
		if(this.x===undefined||this.y===undefined||this.radius===undefined){//����δ����
			return undefined;
		}
		else{
			if(arguments.length === 0){//δ�������,�򷵻�Բ�ķ���
				return "(x" + c(this.x) + ")^2 + (y" + c(this.y) + ")^2 = " + this.radius * this.radius;
			}
			else if(arguments.length === 1){//����һ������x,�򷵻�x��Բ�ϵ�����
				if(x > this.x + radius || x < this.x - radius){//x����Բ�ķ�Χ��
					return undefined;
				}
				else{
					return '��' + Math.sqrt((this.radius * this.radius) - (x - this.x) * (x - this.x)) + this.y;//ȡ�ĵ���Բ�ϣ����ظõ��������
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
		//����Բ�ķ��̺�Բ������
		
		co.stroke();
		co.closePath();
	}
};
//����Բ