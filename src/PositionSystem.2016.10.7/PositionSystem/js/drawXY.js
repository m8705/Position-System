function getContext(){
	return $("#canvas")[0].getContext("2d");
}


var ps = {
	enterRun:0,
	//按下键盘执行代码
	showXY:1,
	//显示坐标轴和边框
	useRandomColor:0,
	//使用随机色
	
	
	g:60,
	//刻度之间的距离
	gL:5,
	//每一个刻度线的长度，不要去轻易设置
	ul:1,
	//单位长度,表示将坐标缩放后绘制的两个刻度之间的长度与缩放前两个刻度之间的长度的比值
	oxs:0.5,
	//原点的X占画布宽度的比例，改变它会影响原点在画布中的横坐标
	oys:0.5,
	//原点的Y占画布高度的比例，改变它会影响原点在画布中的纵坐标
	
	x0:350,//原点X坐标350
	y0:220//原点Y坐标220
};

function submit(){
	if(ps.showXY){
		drawXY(ps.oxs, ps.oys);
		//开始绘制
	}
}

function drawXY(oxs,oys){
	var ca = $("#canvas")[0];
	var c = getContext();
	//获得上下文
	var caH = ca.height;
	var caW = ca.width;
	//获得画布的宽度和高度
	var ox = caW * oxs;
	var oy = caH * oys;
	//设置原点的X,Y坐标
	var xEnd = caW - 30;
	//设置X轴箭头的横坐标
	var yEnd = 20;
	//设置Y轴箭头的纵坐标
	
		ca.height = caH;
		//清空画布
	if(ps.showXY){
		//oxs:传入的参数，表示原点的X占画布宽度的比例
		//oys:传入的参数，表示原点的Y占画布宽度的比例
		var ca = $("#canvas")[0];
		var c = getContext();
		//获得上下文
		var caH = ca.height;
		var caW = ca.width;
		//获得画布的宽度和高度
		var ox = caW * oxs;
		var oy = caH * oys;
		//设置原点的X,Y坐标
		var xEnd = caW - 30;
		//设置X轴箭头的横坐标
		var yEnd = 20;
		//设置Y轴箭头的纵坐标
	
		ca.height = caH;
		//清空画布
	
		c.strokeStyle = "#000000";
		c.lineWidth = 1;
		c.lineCap = 'square';
		c.beginPath();
		c.moveTo(ox, oy);
		c.lineTo(0, oy);
		c.moveTo(ox, oy);
		c.lineTo(xEnd, oy);
		//绘制X轴
		c.moveTo(ox, oy);
		c.lineTo(ox, yEnd);
		c.moveTo(ox, oy);
		c.lineTo(ox, caH);
		//绘制Y轴
		c.moveTo(xEnd, oy);
		c.lineTo(xEnd - 10, oy - 5);
		c.moveTo(xEnd, oy);
		c.lineTo(xEnd - 10, oy + 5);
		//绘制X轴的箭头
		c.moveTo(ox, yEnd);
		c.lineTo(ox - 5, 30);
		c.moveTo(ox, yEnd);
		c.lineTo(ox + 5, 30);
		//绘制Y轴的箭头
		c.fillStyle = "black";
		c.font = "12px Arial";
		c.textBaseline = "middle";
		c.fillText("X", xEnd-10, oy+25);
		c.fillText("Y", ox - 15, yEnd);
		c.fillText("0", ox - 13, oy + 10);
		//绘制x,y坐标轴的名称和原点的名称
		var dto = 0;
		//刻度到原点的距离
	
		for(dto=0 ; (ox+dto) > 0; dto -= ps.g){
			c.moveTo(ox + dto, oy);
			c.lineTo(ox + dto, oy - ps.gL);
		}
		//绘制原点左边的X轴标度

		for(dto = 0; (ox + dto) <= caW - 40; dto += ps.g){
			c.moveTo(ox + dto, oy);
			c.lineTo(ox + dto, oy - ps.gL);
		}
		//绘制原点右边的X轴标度
		var t1 = 0;
		for(dto = 0; (ox + dto) > 0; dto -= ps.g){
			t1-=ps.ul;
			c.fillStyle = "black";
			c.font = "12px Arial";
			c.textBaseline = "middle";
			c.fillText(t1,ox + dto - ps.g - 10, oy - ps.gL + 15);
		}
		//绘制X轴上的负数标度

		var t2 = 0;
		for(dto = 0; (ox + dto) <= caW; dto += ps.g){
			if(ox + dto + ps.g - 5>xEnd){
				break;
			}
			else{
				t2+=ps.ul;
				c.fillStyle = "black";
				c.font = "12px Arial";
				c.textBaseline = "middle";
				c.fillText(t2, ox + dto + ps.g - 5, oy - ps.gL + 15);
			}		
		}
		//绘制X轴上的正数标度
		for(dto = 0; (oy + dto) > 30; dto -= ps.g){
			c.moveTo(ox, oy + dto);
			c.lineTo(ox + ps.gL, oy + dto);
		}
		//绘制原点上面的Y轴标度

		for(dto = 0; (oy + dto) <= caH; dto += ps.g){
			c.moveTo(ox, oy + dto);
			c.lineTo(ox + ps.gL, oy + dto);
		}
		//绘制原点下面的Y轴标度
	
		var t3 = 0;
		for(dto = 0; (oy + dto) > 30; dto -= ps.g){
			if((oy+dto-ps.g) <= yEnd){
				;
			}
			else{
				t3 += ps.ul;
				c.fillStyle = "black";
				c.font = "12px Arial";
				c.textBaseline = "middle";
				c.fillText(t3, ox + 20, oy + dto - ps.g);
			}	
		}
		//绘制Y轴上的正数标度
	
		var t4 = 0;
		for(dto = 0; (oy + dto) <= caH; dto += ps.g){
			t4 -= ps.ul;
			c.fillStyle = "black";
			c.font = "12px Arial";
			c.textBaseline = "middle";
			c.fillText(t4, ox + 15, oy + dto + ps.g);
		}
		//绘制Y轴上的负数标度
	
		c.closePath();
		c.stroke();
	}
}	