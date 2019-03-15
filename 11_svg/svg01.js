/*
Emily Lee
SoftDev pd7
K#09 -- Connect the Dots
2019-03-13
*/


var pic = document.getElementById("vimage");

var move=document.getElementById)"but_move");

var clear=document.getElementById("but_clear");


var moving;

move.addEventListener("click",
		      function(e){
			  if (!moving){
			      movement();
			      moving=true;
			  }
		      })

var movement(){

}


pic.addEventListener("click",
		     function(e){
			 c=e.target
			 e.preventDefault()
			 if(c.getAttribute("fill")=="blue"){
			     pic.removeChild(c)
			     c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			     x=Math.random()*pic.getAttribute("width");
			     console.log(pic.width)
			     y=Math.random()*pic.getAttribute("height");
			     c.setAttribute("cx",x);
			     c.setAttribute("cy",y);
			     c.setAttribute("r", 10);
			     c.setAttribute("fill", "red");			
			 }
			 
			 else if (c.getAttribute("fill")=="red"){
			     c.setAttribute("fill", "blue");
			 }

			 else{
			     var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			     c.setAttribute("cx", e.offsetX);
			     c.setAttribute("cy", e.offsetY);
			     c.setAttribute("r", 10);
			     c.setAttribute("fill", "red");
			 }
			 pic.appendChild(c);
		     }
		     
		    );

clear.addEventListener("click",
		       function(e){
			   while (pic.lastChild) {
			       pic.removeChild(pic.lastChild);
			   }
			   origX=-1;
			   origY=-1;
		       }
		      );
