function excuse(){
	var text = document.getElementById("text").value;
	try{
		eval(text);
	}
	catch(e){
		alert(e);
	}
}
//ִ���ı����е�����

function cleanText(){
	var text = document.getElementById("text");
	text.value = "";
}
//����ı����е�����

/////////////////////////////////////////////////////////////////////
function API(){
	alert("!!");
}
//��ʾ���õ�API
//////////////////////////////////////////////////////////////////////
			
			
			
function changeHeight(h){
	var canvas = document.getElementById("canvas");
	canvas.height += h;
	submit();
}
//�ı仭���߶�
				
function changeWidth(w){
	var canvas = document.getElementById("canvas");
	canvas.width += w;
	submit();
}
//�ı仭�����
			
function changeOX(scale){
	oxs += scale;
	submit();
}
//�ı�ԭ��X�ڻ����е�λ��
			
function changeOY(scale){
	oys += scale;
	submit();
}
//�ı�ԭ��Y�ڻ����е�λ��