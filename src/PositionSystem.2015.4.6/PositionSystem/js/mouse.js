/***********************
*�ж������ַ����ע���¼��Ĵ�����walkingp��Դ���޸Ķ���
*************************/
var scrollFunc=function(e){
	e=e || window.event;

	if(e.wheelDelta){//IE/Opera/Chrome
		if(e.wheelDelta < 0){//up
		    if(ps.ul>=0.05){
				if(ps.g>90){
					ps.ul = ps.ul / 2;//�Ŵ�,�����̶�֮��ľ�������
					ps.g = 60;
				}
				else{
					ps.g+=2;//�Ŵ�
				}
			}
		}
		else{
			if(ps.ul<=128){
				if(ps.g<30){
					ps.ul = ps.ul * 2;//��С,�����̶�֮��ľ�������
					ps.g = 60;
				}
				else{
					ps.g-=2;//��С
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
					ps.ul = ps.ul / 2;//�Ŵ�,�����̶�֮��ľ�������
					ps.g = 60;
				}
				else{
					ps.g+=2;//�Ŵ�
				}
			}
		}
		else{
			if(ps.ul<=128){
				if(ps.g<30){
					ps.ul = ps.ul * 2;//��С,�����̶�֮��ľ�������
					ps.g = 60;
				}
				else{
					ps.g-=2;//��С
				}
			}
		}
		submit();
		excuse();
	}
	
}
/*ע���������¼�*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

//canvas
var canvas = $("canvas");
canvas.addEventListener("click",locate, false);

function locate(e){
	var ca = $("canvas");
	var mouseX=e.clientX-ca.offsetLeft;
	var mouseY=e.clientY-ca.offsetTop;
	alert(mouseX+","+mouseY);
}