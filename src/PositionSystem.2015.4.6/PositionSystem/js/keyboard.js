if(document.addEventListener){
	document.addEventListener('onkeydown',keydown,false);
}//W3C
window.onkeydown = document.onkeydown = keydown;//IE/Opera/Chrome/Safari

function keydown(e){
	//var c = $("canvas");
	e = e || window.event;
	var keycode = e.which ? e.which : e.keyCode; 
	switch(keycode){
		case 37:
			if(ps.oxs < 0.8){
				changeOX(0.01);
			}
			break;//left
		case 38:
		    if(ps.oys < 0.8){
				changeOY(0.01);
			}
			break;//up
		case 39:
			if(ps.oxs > 0.2){
				changeOX(-0.01);
			}
			break;
			//right
		case 40:
			if(ps.oys > 0.2){
				changeOY(-0.01);
			}
			break;
			//down
	}
}