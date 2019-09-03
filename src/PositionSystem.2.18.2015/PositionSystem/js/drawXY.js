var ps = {
	g:40,
	//刻度之间的距离
	gL:5,
	//每一个刻度线的长度，不要去轻易设置
	ul:1,
	//单位长度,表示将坐标缩放后绘制的两个刻度之间的长度与缩放前两个刻度之间的长度的比值
	oxs:0.5,
	//原点的X占画布宽度的比例，改变它会影响原点在画布中的横坐标
	oys:0.5,
	//原点的Y占画布高度的比例，改变它会影响原点在画布中的纵坐标
	
	drawXY:true,
	xAxisName:"X",
	//X轴的名称
	yAxisName:"Y",
	//X轴的名称
	originName:"0"
	//原点的名称
};

//var pen;

window.addEventListener('load', submit, false);

function submit(){
	drawXY(ps.oxs, ps.oys);
	//开始绘制
}

function drawXY(Myoxs,Myoys){
	if(ps.drawXY){
		//Myoxs:传入的参数，表示原点的X占画布宽度的比例
		//Myoys:传入的参数，表示原点的Y占画布宽度的比例
		var ca = $("canvas");
		var co = ca.getContext("2d");
		//获得上下文
		var caH = ca.height;
		var caW = ca.width;
		//获得画布的宽度和高度
		var ox = caW * Myoxs;
		var oy = caH * Myoys;
		//设置原点的X,Y坐标
		var xEnd = caW - 30;
		//设置X轴箭头的横坐标
		var yEnd = 20;
		//设置Y轴箭头的纵坐标
	
		ca.height = caH;
		ca.width = caW;
		//清空画布
	
		co.strokeStyle = "#000000";
		co.lineWidth = 1;
		co.strokeRect(0, 0, caW, caH);
		//绘制画布的边框
	
		co.lineCap = 'square';
		co.beginPath();
		co.moveTo(ox, oy);
		co.lineTo(0, oy);
		co.moveTo(ox, oy);
		co.lineTo(xEnd, oy);
		//绘制X轴
		co.moveTo(ox, oy);
		co.lineTo(ox, yEnd);
		co.moveTo(ox, oy);
		co.lineTo(ox, caH);
		//绘制Y轴
		co.moveTo(xEnd, oy);
		co.lineTo(xEnd - 10, oy - 5);
		co.moveTo(xEnd, oy);
		co.lineTo(xEnd - 10, oy + 5);
		//绘制X轴的箭头
		co.moveTo(ox, yEnd);
		co.lineTo(ox - 5, 30);
		co.moveTo(ox, yEnd);
		co.lineTo(ox + 5, 30);
		//绘制Y轴的箭头
		co.fillStyle = "black";
		co.font = "15px Arial";
		co.textBaseline = "middle";
		co.fillText(ps.xAxisName, xEnd-10, oy+25);
		co.fillText(ps.yAxisName, ox - 15, yEnd);
		co.fillText(ps.originName, ox - 13, oy + 10);
		//绘制x,y坐标轴的名称和原点的名称
		var dto = 0;
		//刻度到原点的距离
	
		for(dto=0 ; (ox+dto) > 0; dto -= ps.g){
			co.moveTo(ox + dto, oy);
			co.lineTo(ox + dto, oy - ps.gL);
		}
		//绘制原点左边的X轴标度

		for(dto = 0; (ox + dto) <= caW - 40; dto += ps.g){
			co.moveTo(ox + dto, oy);
			co.lineTo(ox + dto, oy - ps.gL);
		}
		//绘制原点右边的X轴标度
		var t1 = 0;
		for(dto = 0; (ox + dto) > 0; dto -= ps.g){
		t1-=ps.ul;
		co.fillStyle = "black";
		co.font = "15px Arial";
		co.textBaseline = "middle";
		co.fillText(t1,ox + dto - ps.g - 10, oy - ps.gL + 15);
		}
		//绘制X轴上的负数标度

		var t2 = 0;
		for(dto = 0; (ox + dto) <= caW; dto += ps.g){
			if(ox + dto + ps.g - 5>xEnd){
				break;
			}
			else{
				t2+=ps.ul;
				co.fillStyle = "black";
				co.font = "15px Arial";
				co.textBaseline = "middle";
				co.fillText(t2, ox + dto + ps.g - 5, oy - ps.gL + 15);
			}		
		}
		//绘制X轴上的正数标度
		for(dto = 0; (oy + dto) > 30; dto -= ps.g){
		co.moveTo(ox, oy + dto);
		co.lineTo(ox + ps.gL, oy + dto);
		}
		//绘制原点上面的Y轴标度

		for(dto = 0; (oy + dto) <= caH; dto += ps.g){
			co.moveTo(ox, oy + dto);
			co.lineTo(ox + ps.gL, oy + dto);
		}
		//绘制原点下面的Y轴标度
	
		var t3 = 0;
		for(dto = 0; (oy + dto) > 30; dto -= ps.g){
			if((oy+dto-ps.g) <= yEnd){
				;
			}
			else{
				t3 += ps.ul;
				co.fillStyle = "black";
				co.font = "15px Arial";
				co.textBaseline = "middle";
				co.fillText(t3, ox + 20, oy + dto - ps.g);
			}	
		}
		//绘制Y轴上的正数标度
	
		var t4 = 0;
		for(dto = 0; (oy + dto) <= caH; dto += ps.g){
			t4 -= ps.ul;
			co.fillStyle = "black";
			co.font = "15px Arial";
			co.textBaseline = "middle";
			co.fillText(t4, ox + 15, oy + dto + ps.g);
		}
		//绘制Y轴上的负数标度
	
		co.stroke();
		co.closePath();
	}
}	