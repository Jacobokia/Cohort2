//1.Add four numbers without parameters
function total(){ //function named total that has no parameters
  var fnum=10; //declare a variable named fnum and assign 10 to it
var snum=20; //declare a variable named snum and assign 20 to it
var tnum=30;//declare a variable named fnum and assign 30 to it
var fnum=40;//declare a variable named fnum and assign 40 to it
var total= fnum+snum+tnum+fnum; //declare a variable total and assign to it the variables to be added
document.write("\n"+total); //print the value of total
}
total(); //call the function total

//2.Add four numbers with parameters
function withParams(numOne, numTwo, numThree, numFour){ // function named withParams that has four parameters
  var myTotal = numOne + numTwo + numThree + numFour; // declare a variable named myTotal and assign the four parameters to it
  document.write("<br>"+ myTotal+"<br>"); //print the value of myTotal
}

withParams(2,4,6,8); //assign the parameters values and call the function withParams

//3.Check for odd numbers between 50 and 100
function oddNumbers(){// function named oddNumbers
  for(var odd=50; odd<=100; odd++){// declare a variable odd and assign 50 to it, set a condition that it should be less than or equal to 100 and increment the variable odd
  if(odd%2!=0){// if the variable odd when divided by 2 is not equal to zero
    document.write("\n" + odd + ","); //then print the variable
    
    }
  }
}

oddNumbers();// call the function oddNumbers
