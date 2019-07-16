//function that add 4 numbers

function addFourNumbersWithoutParam(){
    var a = 15;
    var b = 10;
    var c = 19;
    var d = 20;

    var result = a + b + c + d;
    console.log(result);
}

addFourNumbersWithoutParam();

//function with parameters - calling four arguments

function fourNumberswithParam(a,b,c,d){
    var result = a + b + c + d;
    
    console.log(result);
  }
  
  fourNumberswithParam(2,3,4,5);
  

  
  

  //function that checks odd numbers between 50 and 100.
function checkOddNumbers(){
    for(var num = 50; num <= 100; num++;){
        if(num % 2 !== 0){
            console.log(num)
        }
    }
        
}
  checkOddNumbers();
  

  
