var site = "";

for(var i=0;i<21;i++){
	var a = document.createElement("iframe");
	a.id = i.toString();
	a.style.display = "block";
	a.style.width = "100";
	a.style.height = "50";
	document.body.appendChild(a);
}

document.getElementById("text").addEventListener("change", g);

function g(){
	for(var i = 0;i<21;i++){
		a.src = "https://www.youtube.com/embed/"+document.getElementById("c").innerHTML+"?autoplay=1";
	}
}