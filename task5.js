var elementId= document.getElementById(elementId);
var setBackgroundColor = function(elementId, color){
	if(color !== elementId.style.backgroundColor){
		
		elementId.style.backgroundColor = color;
		if(color){
		alert("Success");
	  }
	}
	else{
		alert("Failure");
	}
};
