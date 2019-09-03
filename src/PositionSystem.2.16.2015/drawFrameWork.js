			var g = 40;
			//刻度之间的距离
			var gL = 5;
			//每一个刻度线的长度，不要去轻易设置
			var dto = 0;
			//刻度到原点的距离
			var ul = 1;
			//单位长度,表示将坐标缩放后绘制的两个刻度之间的长度与缩放前两个刻度之间的长度的比值
			var oxs = 0.5;
			//原点的X占画布宽度的比例，改变它会影响原点在画布中的横坐标
			var oys = 0.5;
			//原点的Y占画布高度的比例，改变它会影响原点在画布中的纵坐标
			var xAxisName = "X";
			//X轴的名称
			var yAxisName = "Y";
			//X轴的名称
			var originName = "O";
			//原点的名称
			
			window.addEventListener('load', submit, false);
			
			function submit(){
				drawFrameWork(oxs, oys);
				//开始绘制
			}
			
			function drawFrameWork(Myoxs,Myoys){
				//Myoxs:传入的参数，表示原点的X占画布宽度的比例
				//Myoys:传入的参数，表示原点的Y占画布宽度的比例
				var canvas = $("canvas");
				var context = canvas.getContext("2d");
				//获得上下文
				var canvasHeight = canvas.height;
				var canvasWidth = canvas.width;
				//获得画布的宽度和高度
				var ox = canvasWidth * Myoxs;
				var oy = canvasHeight * Myoys;
				//设置原点的X,Y坐标
				var xEnd = canvasWidth - 30;
				//设置X轴箭头的横坐标
				var yEnd = 20;
				//设置Y轴箭头的纵坐标
				
					canvas.height = canvasHeight;
					canvas.width = canvasWidth;
					//清空画布
				
					context.strokeStyle = "#000000";
					context.lineWidth = 1;
					context.strokeRect(0, 0, canvasWidth, canvasHeight);
					//绘制画布的边框
					
					context.lineCap = 'square';
					context.beginPath();
					context.moveTo(ox, oy);
					context.lineTo(0, oy);
					context.moveTo(ox, oy);
					context.lineTo(xEnd, oy);
					//绘制X轴
					context.moveTo(ox, oy);
					context.lineTo(ox, yEnd);
					context.moveTo(ox, oy);
					context.lineTo(ox, canvasHeight);
					//绘制Y轴
					context.moveTo(xEnd, oy);
					context.lineTo(xEnd - 10, oy - 5);
					context.moveTo(xEnd, oy);
					context.lineTo(xEnd - 10, oy + 5);
					//绘制X轴的箭头
					context.moveTo(ox, yEnd);
					context.lineTo(ox - 5, 30);
					context.moveTo(ox, yEnd);
					context.lineTo(ox + 5, 30);
					//绘制Y轴的箭头
					
					context.fillStyle = "black";
					context.font = "15px Arial";
					context.textBaseline = "middle";
					context.fillText(xAxisName, xEnd-10, oy+25);
					context.fillText(yAxisName, ox - 15, yEnd);
					context.fillText(originName, ox - 13, oy + 10);
					//绘制x,y坐标轴的名称和原点的名称
					
					for(dto=0 ; (ox+dto) > 0; dto -= g){
						context.moveTo(ox + dto, oy);
						context.lineTo(ox + dto, oy - gL);
					}
					//绘制原点左边的X轴标度
					
					for(dto = 0; (ox + dto) <= canvasWidth - 40; dto += g){
						context.moveTo(ox + dto, oy);
						context.lineTo(ox + dto, oy - gL);
					}
					//绘制原点右边的X轴标度
					
					for(dto = 0; (oy + dto) > 30; dto -= g){
						context.moveTo(ox, oy + dto);
						context.lineTo(ox + gL, oy + dto);
					}
					//绘制原点上面的Y轴标度
					
					for(dto = 0; (oy + dto) <= canvasHeight; dto += g){
						context.moveTo(ox, oy + dto);
						context.lineTo(ox + gL, oy + dto);
					}
					//绘制原点下面的Y轴标度
					
					var t1 = 0;
					for(dto = 0; (ox + dto) > 0; dto -= g){
						t1-=ul;
						context.fillStyle = "black";
						context.font = "15px Arial";
						context.textBaseline = "middle";
						context.fillText(t1,ox + dto - g - 10, oy - gL + 15);//40
					}
					//绘制X轴上的负数标度
					
					var t2 = 0;
					for(dto = 0; (ox + dto) <= canvasWidth; dto += g){
						if((ox + dto + 35) >= xEnd){
							;
						}
						else{
							t2+=ul;
							context.fillStyle = "black";
							context.font = "15px Arial";
							context.textBaseline = "middle";
							context.fillText(t2, ox + dto + g - 5, oy - gL + 15);//35
						}		
					}
					//绘制X轴上的正数标度
					
					var t3 = 0;
					for(dto = 0; (oy + dto) > 30; dto -= g){
						if((oy+dto-g) <= yEnd){
							;
						}
						else{
							t3 += ul;
							context.fillStyle = "black";
							context.font = "15px Arial";
							context.textBaseline = "middle";
							context.fillText(t3, ox + 20, oy + dto - g);
						}	
					}
					//绘制Y轴上的正数标度
					
					var t4 = 0;
					for(dto = 0; (oy + dto) <= canvasHeight; dto += g){
						t4 -= ul;
						context.fillStyle = "black";
						context.font = "15px Arial";
						context.textBaseline = "middle";
						context.fillText(t4, ox + 15, oy + dto + g);
					}
					//绘制Y轴上的负数标度
					
					context.stroke();
					context.closePath();
			}
			
			
			