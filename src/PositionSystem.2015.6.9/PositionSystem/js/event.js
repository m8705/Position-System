//keyboard
if(document.addEventListener){
	document.addEventListener('onkeydown',keydown,false);
}//W3C
window.onkeydown = document.onkeydown = keydown;//IE/Opera/Chrome/Safari

function keydown(e){
	//var c = $("canvas");
	e = e || window.event;
	var keycode = e.which ? e.which : e.keyCode; 
	switch(keycode){
		case 37:
			if(ps.oxs < 0.8){
				changeOX(0.01);
			}
			break;//left
		case 38:
		    if(ps.oys < 0.8){
				changeOY(0.01);
			}
			break;//up
		case 39:
			if(ps.oxs > 0.2){
				changeOX(-0.01);
			}
			break;
			//right
		case 40:
			if(ps.oys > 0.2){
				changeOY(-0.01);
			}
			break;
			//down
	}
}







//mouse
/***********************
*判断鼠标滚轮方向和注册事件的代码由walkingp的源码修改而成
*************************/
var scrollFunc=function(e){
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//up
		    if(ps.ul>=0.05){
				if(ps.g>90){
					ps.ul = ps.ul / 2;//放大,并将刻度之间的距离重置
					ps.g = 60;
				}
				else{
					ps.g+=2;//放大
				}
			}
		}
		else{
			if(ps.ul<=128){
				if(ps.g<30){
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
			if(ps.ul>=0.05){
				if(ps.g>90){
					ps.ul = ps.ul / 2;//放大,并将刻度之间的距离重置
					ps.g = 60;
				}
				else{
					ps.g+=2;//放大
				}
			}
		}
		else{
			if(ps.ul<=128){
				if(ps.g<30){
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
	
}
/*注册鼠标滚轮事件*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari