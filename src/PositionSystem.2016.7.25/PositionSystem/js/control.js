function excuse(){
	var t = $("code").value;
	try{
		eval(t);
	}
	catch(err){
		alert(err);
	}
}
//ִ���ı����е�����

function changeHeight(h){
	var ca = $("canvas");
	ca.height += h;
	submit();
	excuse();
}
//�ı仭���߶�
				
function changeWidth(w){
	var ca = $("canvas");
	ca.width += w;
	submit();
	excuse();
}
//�ı仭�����
			
function changeOX(scale){
	ps.oxs += scale;
	ps.y0 = ps.oys * $("canvas").width;
	submit();
	excuse();
}
//�ı�ԭ��X�ڻ����е�λ��
			
function changeOY(scale){
	ps.oys += scale;
	ps.y0 = ps.oys * $("canvas").height;
	submit();
	excuse();
}
//�ı�ԭ��Y�ڻ����е�λ��

function clean(){
	if(ps.showXY){
		submit();
	}
	else{
		changeHeight(0);
	}
}
//����

function example(){
	var s1 = "text(1,1,'hello,world!');";
	var s2 = "point(3,3);";
	var s3 = "line(-1,-2,1,4);";
	var s4 = "vector(1,10);";
	var s5 = "rect(-1,1,1,1);";
	var s6 = "circle(0,0,3);";
	var eg = [s1,s2,s3,s4,s5,s6]
	var n = Math.ceil(Math.random()*6);
	$("code").value = eg[n-1];
}
//������