$(document).ready(function(){
	initialize();
});

function initialize(){

	$(document).keydown(function(e){
		switch(e.keyCode){
			case 37://left
				//if(ps.oxs < 0.9){
					changeOX(0.02);
					
				//}
				break;
			case 38://up
				//if(ps.oys < 0.9){
					changeOY(0.02);
					
				//}
				break;
			case 39://right
				//if(ps.oxs > 0.1){
					changeOX(-0.02);
					
				//}
				break;
			case 40://down
				//if(ps.oys > 0.1){
					changeOY(-0.02);
					
				//}
				break;
		}
	});
	
	$("#showXY").change(function(){
		if($("#showXY").val()===1){//显示XY
			alert("!!!!");
		}
		else{
			alert("!!");
		}
		submit();
	});
	
	$("#code").keydown(function(e){
		if(e.keyCode===13){
			if(ps.enterRun){
				submit();
				excuse();
			}
		}
	});
	submit();
}



/*判断鼠标滚轮方向和注册事件的代码由walkingp的源码修改而成*/
var scrollFunc=function(e){
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//滚轮上滑
		    if(ps.ul>=0.1){//刻度上一格的最小单位为0.05
				if(ps.g>70){
					ps.ul = ps.ul / 2;//放大,并将刻度之间的距离重置
					ps.g = 60;
				}
				else{
					ps.g+=2;//放大
				}
			}
		}
		else{//滚轮下滑
			if(ps.ul<=256){//刻度上一格的最大单位为512
				if(ps.g<50){
					ps.ul = ps.ul * 2;//缩小,并将刻度之间的距离重置
					ps.g = 60;
				}
				else{
					ps.g-=2;//缩小
				}
			}
		}
		submit();
		excuse();
	}
	else if(e.detail){//Firefox
		if(e.detail < 0){
			if(ps.ul>=0.1){
				if(ps.g>70){
					ps.ul = ps.ul / 2;
					ps.g = 60;
				}
				else{
					ps.g+=2;//放大
				}
			}
		}
		else{
			if(ps.ul<=256){
				if(ps.g<50){
					ps.ul = ps.ul * 2;
					ps.g = 60;
				}
				else{
					ps.g-=2;//缩小
				}
			}
		}
		submit();
		excuse();
	}
}

/*注册鼠标滚轮事件,要放在scrollFunc的定义后面*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari