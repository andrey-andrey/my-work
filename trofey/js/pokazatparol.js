//function show() {
   // var p = document.getElementById('pwd');
   // p.setAttribute('type', 'text');
//}

//function hide() {
   // var p = document.getElementById('pwd');
   // p.setAttribute('type', 'password');
//}

//var pwShown = 0;

//document.getElementById("eye").addEventListener("click", function () {
   // if (pwShown == 0) {
        //pwShown = 1;
       // show();
    //} else {
       // pwShown = 0;
       // hide();
   // }
//});



document.getElementById("eye").addEventListener("click", function(e){
        var pwd = document.getElementById("pwd");
		cvet = document.getElementById('eye');
        if(pwd.getAttribute("type")=="password"){
            pwd.setAttribute("type","text");
			cvet.style.background = 'url(img/sprite.png)';
			cvet.style.backgroundPosition = "-511px -365px";
        } else {
            pwd.setAttribute("type","password");
			cvet.style.background = 'url(img/sprite.png)';
			cvet.style.backgroundPosition = "-469px -365px";
			
        }
    });
	
	regv.onclick = function() {  		
	var  prov = /^\d+$/ 	
		var name = document.getElementById('name').value;
		var osibka = document.getElementById('osh');
		if (prov.test(name)== false){
			
			osibka.style.display ='block';
   
		}
		else{
			osibka.style.display ='none';	
		}
	
  };
  
