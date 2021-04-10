var site = "";

for(var i=0; i<21; i++){
	var a = document.createElement('iframe');
	a.id = i.toString();
	a.src = site;
	a.width = "300";
	a.height = "200";
	document.querySelector('body').appendChild(a)
}

document.getElementById("c").addEventListener("change", g);

function g(){
	site = document.getElementById("c").value;
	document.getElementById("arandomdiv").focus();
	for(var i=0; i<21; i++){
		document.getElementById(i.toString()).src = "https://www.youtube.com/embed/"+site+"?playlist="+site+"&autoplay=1&loop=1";
	}
}