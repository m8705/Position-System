/***********************
* �������жϹ��ֹ�������
* ���ߣ�walkingp
* ������event
* ���أ����ַ��� 1������ -1������
*************************/
var scrollFunc=function(e){
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//up
			if(ps.g>70){
				ps.ul = ps.ul / 2;//�Ŵ�
				ps.g = 40;
			}
			else{
				ps.g+=2;
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;
				ps.g = 40;
			}
			else{
				ps.g-=2;
			}
		}
		submit();
		excuse();
	}
	
	
	else if(e.detail){//Firefox
		if(e.detail < 0 && ps.g>0.1){
			if(ps.g>70){
				ps.ul = ps.ul / 2;//�Ŵ�
				ps.g = 40;
			}
			else{
				ps.g+=2;
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;
				ps.g = 40;
			}
			else{
				ps.g-=2;
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
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari