var pic = document.getElementById("vimage");

var clear=document.getElementById("but_clear");

var origX=-1;
var origY=-1;
pic.addEventListener("click",
		     function(e){
			 var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			 c.setAttribute("cx", e.offsetX);
			 c.setAttribute("cy", e.offsetY);
			 c.setAttribute("r", 10);
			 c.setAttribute("fill", "red");
			 c.setAttribute("stroke", "black");
			 
			 if (origX>=0){
			     var l = document.createElementNS('http://www.w3.org/2000/svg','line');
			     l.setAttribute('x1',origX);
			     l.setAttribute('y1',origY);
			     l.setAttribute('x2',e.offsetX);
			     l.setAttribute('y2',e.offsetY);
			     l.setAttribute("stroke", "black")
			     pic.appendChild(l);
			 }
			 pic.appendChild(c);
			 origX=e.offsetX;
			 origY=e.offsetY;
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
