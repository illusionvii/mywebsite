let count = 0;

document.getElementById("buttonClick").onclick = function(){
	count+=1;
	document.getElementById("countLabel").innerHTML = count;
	}
