var currentColor = "green"

function myFunction(){
   if(currentColor === "green"){

       currentColor = "red";
       document.getElementById("square").style.backgroundColor = "red";
       document.getElementById("button1").value = "Make green";
    
   }
   else{ 
   	  currentColor = "green";
   	   document.getElementById("square").style.backgroundColor = "green";
       document.getElementById("button1").value = "Make red";

   }
 

};
 