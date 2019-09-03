/***********************
* 函数：判断滚轮滚动方向
* 作者：walkingp
* 参数：event
* 返回：滚轮方向 1：向上 -1：向下
*************************/
var scrollFunc=function(e){
	var direct=0;
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){
			ul = ul / 2;//放大
		}
		else{
			ul = ul * 2;//缩小
		}
		submit();
		excuse();
	}
	else if(e.detail){//Firefox
		if(e.detail < 0){
			ul = ul / 2;//放大
		}
		else{
			ul = ul * 2;//缩小
		}
		submit();
		excuse();
	}
}
/*注册事件*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari