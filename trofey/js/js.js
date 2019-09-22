var modal = document.getElementById('myModal');
var і = document.getElementById('mybtn');
var v = document.getElementById('vchod');
var regist = document.getElementById('regist');
var avt = document.getElementById('avt');

var span = document.getElementsByClassName("close")[0];
	і.onclick = function (){
	modal.style.display = "block";
	avt.style.display ="none";
	regist.style.display ="flex";
	
}
v.onclick = function (){
	modal.style.display = "block";
	avt.style.display ="flex";
	regist.style.display ="none";
	
	
}

	span.onclick = function(){
	modal.style.display = "none";
	
}
	window.onclick = function (event){
	if (event.target==modal){
		modal.style.display ="none";
	}
}
