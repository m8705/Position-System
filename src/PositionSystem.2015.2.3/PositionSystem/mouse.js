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
		if(e.wheelDelta < 0){
			ul = ul / 2;//�Ŵ�
		}
		else{
			ul = ul * 2;//��С
		}
		submit();
		excuse();
	}
	else if(e.detail){//Firefox
		if(e.detail < 0){
			ul = ul / 2;//�Ŵ�
		}
		else{
			ul = ul * 2;//��С
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