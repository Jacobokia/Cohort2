// write 1 fumction without parameters like adding 4 numbers
//the next four lines contain the variables which are initialised 
function addthese() {
var so=10 
var like=20 
var the=30
var girl=40 
// these are my variables
var sum=so+like+the+girl 
document.write(sum)
} 
addthese() //called my function

//write 1 function with parameters
function kyle(jo, fa, is, al, es) { //the parameter
  var kyle=jo+fa+is-al+es;
  document.write(kyle) //display the function
}
kyle(2,3,4,5,6) //gives my parameters values

//write 1 for loop with odd numbers between 50 and 100
var yosh=50;
for(yosh>=50;yosh<=100;yosh++) //the condition being odd numbers between 49 and 101
{if
    (yosh%2==1){ //modulas for 2 to remain with 1
        document.write(yosh);
    }
}