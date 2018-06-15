var slideItem = 0;


//Slide Show aparencia
window.onload = function() {

	setInterval(passarSlide,2000);

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for (var i=0; i<objs.length; i++) {
        objs[i].style.width = slidewidth+"px";
    }

}

//Slide show, ação de passar os slides
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	if (slideItem >=3) {
		slideItem = 0;
		
		

	} else{

		slideItem++;


	}
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	
	
	
}

//Ação de clicar na bolinha
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var bols = document.getElementsByClassName("bolinha");
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}


//Ação de exibir ou ocultar o menu mobile do portal.
function toggleMenu() {
	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}







































/*function mudarbola() {
	
	if(pos = 2){
		var name = document.getElementById("bol0");
		name.setAttribute("style","class","corbola");
	}

}

function bola1() {
	var boll1 = document.getElementById("bolinha1");
	boll1.setAttribute("class","corbola");
	if (slideItem = 1){
		booll1.setAttribute("class","bolinha");
		var boll2 = document.getElementById("bolinha2");
		boll2.setAttribute("class","corbola");
	}
}

function bola2() {
	if(slideItem = 0){
		boll1.setAttribute("class","bolinha");
	}

	
	if{
		var boll2 = document.getElementById("bolinha2");
		boll2.setAttribute("class", "corbola");
	}
	
}

Jeito correto de si basear!

var name = document.getElementById("bolinha1").className;
    console.log(name.className == "corbola");
    if(name == "corbola");{
   		document.getElementById("bolinha1").removeAttribute("class","bolinha");
   		document.getElementById("bolinha1").setAttribute("class","corbola");

    }else{
   		document.getElementById("bolinha1").setAttribute("class", "bolinha");
    }
*/




