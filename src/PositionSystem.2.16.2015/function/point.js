function Point(x, y){
	this.x = x;
	this.y = y;
	this.color = "red";//设置点的颜色
	this.size = 5;//设置点的大小
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