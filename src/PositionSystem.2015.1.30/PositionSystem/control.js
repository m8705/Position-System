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
			
function clean(){
	var canvas = document.getElementById("canvas");
	canvas.width = canvas.width;
	canvas.height = canvas.height;
	submit();
}

/////////////////////////////////////////////////////////////////////
function API(){
	alert("!!");
}
//��ʾ���õĺ���
//////////////////////////////////////////////////////////////////////
			
function changeHeight(h){
	var canvas = document.getElementById("canvas");
	canvas.height += h;
	//�ı仭���߶�
	submit();
}
			
function changeWidth(w){
	var canvas = document.getElementById("canvas");
	canvas.width += w;
	//�ı仭�����
	submit();
}
			
function changeOX(scale){
	oxs += scale;
	//�ı�ԭ��X�ڻ����е�λ��
	submit();
}
			
function changeOY(scale){
	oys += scale;
	//�ı�ԭ��Y�ڻ����е�λ��
	submit();
}