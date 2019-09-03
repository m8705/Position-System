function Text(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;//设置文本的值
		this.color = "brown";//设置文本的颜色
		this.fontSize = "15";//设置文本的字体大小
}
Text.prototype.draw = function(){
			var ca = $("canvas");
			var co = ca.getContext("2d");
			var x = translateX(this.x);
			var y = translateY(this.y);
			co.fillStyle = this.color;
			co.font = this.fontSize + "px Arial";
			co.textBaseline = "middle";
			co.fillText(this.value,x,y);
};

function Point(x, y){
	this.x = x;
	this.y = y;
	this.color = "red";//设置点的颜色
	this.size = 1;//设置点的大小
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






function Rect(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.area = height * width;//面积
	this.girth = 2 * (height + width);//周长
}
Rect.prototype.draw = function(){
	var ca = $("canvas");
	var co = ca.getContext("2d");
	co.strokeStyle = randomColor();
	co.lineWidth = 2;
	co.lineCap = "square";
	var x = translateX(this.x);
	var y = translateY(this.y);
	var width = this.width * ps.g / ps.ul;
	var height = this.height * ps.g / ps.ul;
	co.beginPath();
	co.moveTo(x, y);
	co.lineTo(x + width, y);
	co.moveTo(x, y);
	co.lineTo(x, y - height);
	co.moveTo(x + width, y);
	co.lineTo(x + width, y - height);
	co.moveTo(x, y - height);
	co.lineTo(x + width, y - height);
	co.stroke();
	co.closePath();
};




function Func(f){
	var myFunc = new String(f);
	myFunc=f.replace(/\^/g,"a");
	return myFunc;
}
/*Func.prototype.f = function(x){
	if(arguments.length===0){
		return this.f + '';
	}
	else{
		return eval(this.f);
	}
}*/