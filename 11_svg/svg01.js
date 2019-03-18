/*
  Emily Lee
  SoftDev pd7
  K#09 -- Connect the Dots
  2019-03-13
*/


var pic = document.getElementById("vimage");

var clear=document.getElementById("but_clear");

var move=document.getElementById("but_move");

var changes =  function(e){
    c=e.target
    e.stopPropagation(); 
    //e.preventDefault()
    if(c.getAttribute("fill")=="blue"){
	pic.removeChild(c)
	c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	xr=Math.random()*pic.getAttribute("width");
	//console.log(pic.width);
	yr=Math.random()*pic.getAttribute("height");
	c.setAttribute("cx",xr);
	c.setAttribute("cy",yr);
	c.setAttribute("r", 10);
	c.setAttribute("fill", "red");
	c.addEventListener("click", changes);
	pic.appendChild(c);			
    }
    
    else if (c.getAttribute("fill")=="red"){
	c.setAttribute("fill", "blue");
    }
}



var firsts = function(e){
    e.preventDefault()
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
//    x = e.offsetX;
//    y = e.offsetY;
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.addEventListener("click",changes);
    pic.appendChild(c);
}


pic.addEventListener("click",firsts);

clear.addEventListener("click",
		       function(e){
			   while (pic.lastChild) {
			       pic.removeChild(pic.lastChild);
			   }
			   origX=-1;
			   origY=-1;
		       }
		      );


var id;
var moving;

var movement = function(e){
    if (moving==false){
	window.cancelAnimationFrame(id);
	var xVel = 1;
	var yVel = 1;
	for (c in pic){
	    c.setAttribute('xvel',xVel)
	    c.setAttribute('yvel',yVel)
	}
	for (c in pic){
	    x=c.getAttribute("cx")
	    y=c.getAttribute("cy")
	    color=c.getAttribute("fill")
	    xVel=c.getAttribute('xvel')
	    yVel=c.getAttribute('yvel')
	    
	    pic.removeChild(c)
	    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    
	    xr=x+xVel
	    yr=y+yVel
	    if(xr<=0 || xr>=pic.getAttribute("width")-5){
		xVel=-1*xVel
	    }
	    if(xr<=0 || xr>=pic.getAttribute("height")-5){
		yVel=-1*yVel
	    }
	    c.setAttribute('xvel',xVel)
	    c.setAttribute('yvel',yVel)
	    c.setAttribute("cx",xr);
	    c.setAttribute("cy",yr);
	    c.setAttribute("r", 10);
	    c.setAttribute("fill", color);
	    c.addEventListener("click", changes);
	    pic.append(c);
	    id = requestAnimationFrame(c);
	}
	moving=true;
    }
    else{
	cancelAnimationFrame(id)
	moving=false;
    }
}

function animate(c){
    x=c.getAttribute("cx")
    y=c.getAttribute("cy")
    color=c.getAttribute("fill")
    pic.removeChild(c)
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    if(xr<=0 || xr>=pic.getAttribute("width")-5){
	xVel=-1*xVel
    }
    if(xr<=0 || xr>=pic.getAttribute("height")-5){
	yVel=-1*yVel
    }
    xr=x+xVel
    yr=y+yVel
    c.setAttribute("cx",xr);
    c.setAttribute("cy",yr);
    c.setAttribute("r", 10);
    c.setAttribute("fill", color);
    c.addEventListener("click", changes);

    id = requestAnimationFrame(c);
}

move.addEventListener("click", movement);
