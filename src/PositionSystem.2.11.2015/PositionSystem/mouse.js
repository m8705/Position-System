/***********************
* �������жϹ��ֹ�������
* ���ߣ�walkingp
* ������event
* ���أ����ַ��� 1������ -1������
*************************/
var scrollFunc=function(e){
	var direct=0;
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//up
			if(g>80){
				ul = ul / 2;//�Ŵ�
				g = 40;
			}
			else{
				g+=2;
			}
		}
		else{
			if(g<20){
				ul = ul * 2;
				g = 40;
			}
			else{
				g-=2;
			}
		}
		submit();
		excuse();
	}
	
	
	else if(e.detail){//Firefox
		if(e.detail < 0 && g>0.1){
			if(g>70){
				ul = ul / 2;//�Ŵ�
				g = 40;
			}
			else{
				g+=2;
			}
		}
		else{
			if(g<30){
				ul = ul * 2;
				g = 40;
			}
			else{
				g-=2;
			}
		}
		submit();
		excuse();
	}
	
}
/*ע���¼�*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari