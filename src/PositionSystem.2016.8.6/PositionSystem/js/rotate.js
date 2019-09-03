function rotate(ang){
	var c = getContext();
	c.setTransform(1,0,0,1,0,0);
	var angleInRadians = ang*Math.PI/180;
	c.rotate(angleInRadians);
}