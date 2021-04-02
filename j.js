var site = "https://www.youtube.com/embed/FtE6SV_1wu4?autoplay=1";

for (var i=0;i<21;i++){
	var a = document.createElement("iframe");
	a.id = i.toString();
	a.style.display = "block";
	a.style.width = "100";
	a.style.height = "50";
	a.src = site;
	document.body.appendChild(a);
}