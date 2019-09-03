//注册键盘事件
if(document.addEventListener){
	document.addEventListener('onkeydown',keydown,false);
}//W3C
window.onkeydown = document.onkeydown = keydown;//IE/Opera/Chrome/Safari

function keydown(e){
	e = e || window.event;
	var keycode = e.which ? e.which : e.keyCode; 
	switch(keycode){
		case 37://left
			if(ps.oxs < 0.9){
				changeOX(0.01);
			}
			break;
		case 38://up
		    if(ps.oys < 0.9){
				changeOY(0.02);
			}
			break;
		case 39://right
			if(ps.oxs > 0.1){
				changeOX(-0.01);
			}
			break;
		case 40://down
			if(ps.oys > 0.1){
				changeOY(-0.02);
			}
			break;
		case 13://enter
			if(ps.enterRun){
				submit();
				excuse();
			}
			break;
	}
}



/*判断鼠标滚轮方向和注册事件的代码由walkingp的源码修改而成*/
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

/*注册鼠标滚轮事件,要放在scrollFunc的定义后面*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari