var currentColor = getComputedStyle(document.getElementById("mySquare")).backgroundColor;
alert(currentColor);

var setBackgroundColor = function(elementId, color){
	if(currentColor === "rgb(255, 0, 0)"){
		//return currentColor = 'green';
		//document.getElementById("mySquare").backgroundColor = "green";
		alert("Success")
	}
	else{
		alert("Failure")
	}
}
