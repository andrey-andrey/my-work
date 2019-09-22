const progress = document.querySelector('.progress');

window.addEventListener('scroll',progressBar);
function progressBar(e){
	
	let windowScrol = document.body.scrollTop || document.documentElement.scrollTop;
	let windowhight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScrol / windowhight * 100;
	progress.style.width = per + '%';
	
}

   


