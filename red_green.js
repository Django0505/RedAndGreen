

function RedOrGreen(elementId){
	var myElement = document.getElementById(elementId);

	// this is not returning the color
    
 	//document.getElementById(elementId).style.backgroundColor;

    //  this.elementId:elementId;
     //this.color = myElement.style.backgroundColor;
    this.makeRed = function(){
		 myElement.style.backgroundColor= "red";
    };
               
    this.makeGreen = function(){
    	myElement.style.backgroundColor= "green";
    };

};
