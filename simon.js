// write 1 fumction without parameters like adding 4 numbers
//the next four lines contain the variables which are initialised 
function addthese()
{

  var numOne=10;

  var numTwo=20; 

  var numThree=30;

  var numFour=40; 
// these are my variables

var sum=numOne + numTwo + numThree + numFour; 

document.write(sum)

} 

addthese() //called my function

//write 1 function with parameters
function ParaMeters(parOne, parTwo, parThree, parFour, parFive) { //the parameter
  
  var AllParams=parOne + parTwo + parThree - parFour + parFive;
  
  document.write(AllParams) //display the function

}

ParaMeters(2, 3, 4, 5, 6) //gives my parameters values

//write 1 for loop with odd numbers between 50 and 100

var numBer=50;

for(numBer>=50;numBer<=100;numBer++) //the condition being odd numbers between 49 and 101

{if
    
  (numBer%2==1)
  { //modulas for 2 to remain with 1
  
    document.write(numBer);
  
  }
}
