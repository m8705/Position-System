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
				ps.ul = ps.ul / 2;//�Ŵ�,�����̶�֮��ľ�������
				ps.g = 40;
			}
			else{
				ps.g+=2;//�Ŵ�
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;//��С,�����̶�֮��ľ�������
				ps.g = 40;
			}
			else{
				ps.g-=2;//��С
			}
		}
		submit();
		excuse();
	}
	
	
	else if(e.detail){//Firefox
		if(e.detail < 0 && ps.g>0.1){
			if(ps.g>70){
				ps.ul = ps.ul / 2;//�Ŵ�,�����̶�֮��ľ�������
				ps.g = 40;
			}
			else{
				ps.g+=2;//�Ŵ�
			}
		}
		else{
			if(ps.g<30){
				ps.ul = ps.ul * 2;//��С,�����̶�֮��ľ�������
				ps.g = 40;
			}
			else{
				ps.g-=2;//��С
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






var picChecked = {//��ʾÿ��ͼƬ�Ƿ���굥����
	point:false,
	line:false,
	rect:false,
	circle:false
};

function msMove(id){//��ʾ�����ͼƬ���ƶ�
	var obj = $(id);
	obj.src ="image/" + id + "Change.bmp";
}

function msClick(id){//��ʾ�����ͼƬ�ϵ���
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

function msOut(id){//��ʾ����ͼƬ���Ƴ�
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