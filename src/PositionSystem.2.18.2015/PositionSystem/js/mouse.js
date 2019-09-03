/***********************
* 函数：判断滚轮滚动方向
* 作者：walkingp
* 参数：event
* 返回：滚轮方向 1：向上 -1：向下
*************************/
var scrollFunc=function(e){
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//up
			if(ps.g>70){
				ps.ul = ps.ul / 2;//放大,并将刻度之间的距离重置
				ps.g = 40;
			}
			else{
				ps.g+=2;//放大
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;//缩小,并将刻度之间的距离重置
				ps.g = 40;
			}
			else{
				ps.g-=2;//缩小
			}
		}
		submit();
		excuse();
	}
	
	
	else if(e.detail){//Firefox
		if(e.detail < 0 && ps.g>0.1){
			if(ps.g>70){
				ps.ul = ps.ul / 2;//放大,并将刻度之间的距离重置
				ps.g = 40;
			}
			else{
				ps.g+=2;//放大
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;//缩小,并将刻度之间的距离重置
				ps.g = 40;
			}
			else{
				ps.g-=2;//缩小
			}
		}
		submit();
		excuse();
	}
	
}
/*注册事件*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari






var picChecked = {//表示每个图片是否被鼠标单击过
	point:false,
	line:false,
	rect:false,
	circle:false
};

function msMove(id){//表示鼠标在图片上移动
	var obj = $(id);
	obj.src ="image/" + id + "Change.bmp";
}

function msClick(id){//表示鼠标在图片上单击
	if(picChecked[id]){
		for(var name in picChecked){
			picChecked[name] = false;
		}
	}
	else{
		for(var name in picChecked){
			picChecked[name] = false;
		}
		picChecked[id]=true;
	}
}

function msOut(id){//表示鼠标从图片上移出
	var obj = $(id);
	obj.src ="image/" + id + ".bmp";
}



//canvas
/*var mouseX;
var mouseY;
var ca = $("canvas");
ca.addEventListener("click",MousePosition, false);

function MousePosition(e){
	mouseX=e.clientX-ca.offsetLeft;
	mouseY=e.clientY-ca.offsetTop;
}
alert(mouseX+","+mouseY);*/