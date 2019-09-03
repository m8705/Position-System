function rotate(angle){
	var co = $("canvas").getContext("2d");
	co.setTransform(1,0,0,1,0,0);
	var angleInRadians = angle*Math.PI/180;
	co.rotate(angleInRadians);
}