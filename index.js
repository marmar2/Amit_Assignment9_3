  

//var container = document.querySelector('.container');
  
  var x;
  var y;
   
   
   var canvas = document.querySelector('.canvas');
 
   var context = canvas.getContext('2d');
   
    function drawPixel(context, x, y) {
		
	var roundedX = Math.round(x);
    var roundedY = Math.round(y);
    context.fillStyle = 'black';
  	context.fillRect(roundedX, roundedY, 2, 2);
}

    
  
   function setCoords(e, type) {
	   
   let X = `${type}X`;
   let Y = `${type}Y`;
   
    drawPixel(context, e[X], e[Y]); // x=20 y=10
   }
   // console.log(e[X].innerHTML);
   
   // e[X].style.backgroundColor="black";
   // e[Y].style.backgroundColor="black";
  
  // }
  
  canvas.addEventListener('mousemove',function(e){
	  
	  setCoords(e,"offset");
	  // setCoords(e, "client");
      // setCoords(e, "page");
      // setCoords(e, "screen");
 
	 
  });
  
  