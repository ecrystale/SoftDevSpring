/*
  Emily Lee
  SoftDev pd7
  K#11 -- Ask Circles [Change || Die] While On The Go
  2019-03-13
*/


var pic = document.getElementById("vimage");

var clear=document.getElementById("but_clear");

var move=document.getElementById("but_move");

var question=document.getElementById("but_quest");

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
	c.setAttribute("r", 15);
	c.setAttribute('xvel',1)
	c.setAttribute('yvel',1)
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
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");
    c.setAttribute('xvel',1)
    c.setAttribute('yvel',1)
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
			   window.cancelAnimationFrame(id);
			   moving=false
		       }
		       
		      );


var id;

var moving;

var animate= function(){
    window.cancelAnimationFrame(id);
    moving=true;
    for (var i = 0; i < pic.children.length; i++) {
	c = pic.children[i];
	r=parseInt(c.getAttribute("r"))
	x=parseInt(c.getAttribute("cx"))
	y=parseInt(c.getAttribute("cy"))
	color=c.getAttribute("fill")
	xVel=parseInt(c.getAttribute('xvel'))
	yVel=parseInt(c.getAttribute('yvel'))
	
	//pic.removeChild(c)
//	c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	if(x<=r || x>=pic.getAttribute("width")-r){
	    xVel=-1*xVel
	}
	if(y<=r || y>=pic.getAttribute("height")-r){
	    yVel=-1*yVel
	}
	xr=x+xVel
	yr=y+yVel
	c.setAttribute('xvel',xVel)
	c.setAttribute('yvel',yVel)
	c.setAttribute("cx",xr);
	c.setAttribute("cy",yr);
	// c.setAttribute("r", 10);
	// c.setAttribute("fill", color);
	// c.addEventListener("click", changes);
	//pic.append(c);
	//c.setAttribute(move,true)
    }
    
    id = window.requestAnimationFrame(animate);
    //animate()
}

var anim = function(){
    if(moving){
	for (var i = 0; i < pic.children.length; i++) {
	    c = pic.children[i];
	    c.setAttribute('xvel',(Math.floor(Math.random()*10)+1))
	    c.setAttribute('yvel',(Math.floor(Math.random()*10)+1))	    
	}
    }
}

move.addEventListener("click", animate);

question.addEventListener("click",anim);
