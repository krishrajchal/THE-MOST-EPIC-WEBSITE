for (var i=0;i<20;i++){
	var a = document.createElement("iframe");
	a.id = i.toString();
	a.style.display = "none";
	a.style.width = "100";
	a.style.height = "50";
	a.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
	document.body.appendChild(a);
}
for (var i=0;i<20;i++){
	document.getElementById(i.toString()).src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
}

document.getElementById("a").onclick = function(){
	ssss();
}

function ssss(){
	for(var i = 0; i<20; i++){
		var a = document.getElementById(i.toString());
		if(a.style.display == "none"){
			a.style.display = "block";
			a.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
		}
		else{
			a.style.display = "none";
			a.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
		}
	}
}