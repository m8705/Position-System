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
function api(){
	alert("addCircle(x,y,r)\naddCos(a,omega,phi)\naddLine(x1,y1,x2,y2)\naddPoint(x,y)\naddRect(x, y, height, width)\naddSin(a,omega,phi)\naddTan(a,omega,phi)\naddText(text,x,y)\n\n\ndistance(x1,y1,x2,y2)\nk(x1,y1,x2,y2)\ntranslateX(x)\ntranslateY(y)\n\n\napi()\nchangeHeight(h)\nchangeWidth(w)\nchangeOX(scale)\nchangeOY(scale)\nclean()\nexcuse()\n");
}
//��ʾ���õĺ���
			
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