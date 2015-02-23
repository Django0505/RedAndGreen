
var assert = {
             i:0,
           pass:0,

         equals : function(ExpectedResult, Result){
         
          var newBlock = document.createElement('div');

    newBlock.id = "square"+this.i;
    newBlock.style.height = "150px";
    newBlock.style.width = "150px";
    newBlock.style.border = "5px solid black";
    newBlock.style.display = "inline-Block"

    document.body.appendChild(newBlock);
           var rg = new RedOrGreen( newBlock.id);
            if(Result === ExpectedResult ){
            newBlock.innerHTML= "Pass";
        rg.makeGreen();
        this.pass++;
        
       }else if(Result !== ExpectedResult){   

          rg.makeRed()
          newBlock.innerHTML= "Fail";

             } 
                this.i++;

             try {

          if(Result == "") throw "undefined";

      }
    catch(err) {

         alert(err);

       }

      }
}

var TestMyCode = {
     run : function(testName, testFunc){
            this.testName=testName;
          testFunc(assert);
            
    }
};

function results() {
  var dee = document.createElement('p');

  document.body.appendChild(dee);
  dee.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
};
