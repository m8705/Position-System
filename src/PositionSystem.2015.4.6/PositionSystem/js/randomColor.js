function randomColor(){
	var Value = ['0','1','2','3','4','5','6','7','8','9',"a","b","c","d","e","f"];
	var color = "#";
	var temp="";
	for(var c=0;c<10;c++){
		temp=Math.random();
		temp = Math.floor(temp * 16 - 1);
		if(temp>0){
			color += Value[temp];
		}
		if(color.length<7){
			;
		}
		else if(color.length===7){
			break;
		}
	}
	
	return color;
}