function excuse(){
	var text = $("text").value;
	try{
		eval(text);
	}
	catch(e){
		alert(e);
	}
}
//ִ���ı����е�����

function cleanText(){
	var text = $("text");
	text.value = "";
}
//����ı����е�����

function API(){
	alert("!!");
}
//��ʾ���õ�API
			
function changeHeight(h){
	var ca = $("canvas");
	ca.height += h;
	submit();
}
//�ı仭���߶�
				
function changeWidth(w){
	var ca = $("canvas");
	ca.width += w;
	submit();
}
//�ı仭�����
			
function changeOX(scale){
	ps.oxs += scale;
	submit();
}
//�ı�ԭ��X�ڻ����е�λ��
			
function changeOY(scale){
	ps.oys += scale;
	submit();
}
//�ı�ԭ��Y�ڻ����е�λ��