function Text(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;//设置文本的值
		this.color = "brown";//设置文本的颜色
		this.fontSize = "15";//设置文本的字体大小
}
Text.prototype.draw = function(){
			var canvas = $("canvas");
			var context = canvas.getContext("2d");
			var x = translateX(this.x);
			var y = translateY(this.y);
			context.fillStyle = this.color;
			context.font = this.fontSize + "px Arial";
			context.textBaseline = "middle";
			context.fillText(this.value,x,y);
};








function Rect(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.area = height * width;//面积
	this.girth = 2 * (height + width);//周长
}
Rect.prototype.draw = function(){
	var canvas = $("canvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "blue";
	context.lineWidth = 2;
	context.lineCap = "quare";
	var x = translateX(this.x);
	var y = translateY(this.y);
	var width = this.width * g / ul;
	var height = this.height * g / ul;
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x + width, y);
	context.moveTo(x, y);
	context.lineTo(x, y - height);
	context.moveTo(x + width, y);
	context.lineTo(x + width, y - height);
	context.moveTo(x, y - height);
	context.lineTo(x + width, y - height);
	context.stroke();
	context.closePath();
};