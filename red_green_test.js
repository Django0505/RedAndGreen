var rg = new RedOrGreen("mySquare");
	   color = document.getElementById("mySquare").backgroundColor;
	   //is it red
	   console.log("Ok");

	if(color = "rgb(255, 0, 0)"){
	    	        
	                rg.makeGreen();
	   // myElements backgound color should be green now
	                console.log("Green: Success");
	             if(color = "rgb(0, 255, 0)"){
	   //is it green now   
	                   
	                rg.makeRed();
	                console.log("Red: Success");

	   // myElements backgound should be red now
	    }else{
	    	console.log("Failure")};
	   //is it  red now
	}else{
		console.log("Failure")};