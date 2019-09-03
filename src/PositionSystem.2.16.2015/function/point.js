function Point(x, y){
	this.x = x;
	this.y = y;
	this.color = "red";//���õ����ɫ
	this.size = 5;//���õ�Ĵ�С
}
Point.prototype.draw = function(){
		var canvas = $("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = this.color;
		context.lineWidth = this.size;
		context.lineCap = "round";
		var x = translateX(this.x);
		var y = translateY(this.y);
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, y);
		context.stroke();
		context.closePath();
};