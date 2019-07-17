/*
1. function to add 4 numbers
2. funciton with parameters
3. function to check odd numbers between 50-100
*/

/* Samson */

/*==================================================================================================================================
1 . Function without parameters
===================================================================================================================================*/

function addFourNumbers() {   // declaring the function 
    
    //declaring and assigning the values to variables simultaneously
    var num1 = 3;
    var num2 = 4;
    var num3 = 3;
    var num4 = 5;
    
    // declaring and assigning the variable total to the sum of the variables above
    var total = num1 + num2 + num3 + num4 
    
    // printing out the value total to the console
    console.log(total)                
}
    //calling the function (addFourNumbers) 
addFourNumbers();

/*==================================================================================================================================
2 . Function with parameters
===================================================================================================================================*/

// declaring the function with parameters
function addFourNumbersWithParam(num1, num2, num3, num4) { 

    // declaring and assigning the variable total to the sum of the variables above
    var total = num1 + num2 + num3 + num4
    console.log(total)
}
// invoking the function(addFourNumbersWithParam) and passing the arguments
addFourNumbersWithParam(10, 15, 25, 10);

/*=================================================================================================================================
3 . Function to output odd numbers between 50-100
=================================================================================================================================*/

function addOddNumbers() {                    // function declaration
    
     // iterating through the numbers between 50-100
    for (var num = 50; num <= 100; num++) {        
        // conditional statement to check whether the numbers are odd or not
        if (num % 2 !== 0) {         
            // prints out the values
            console.log(num);                 
        }
    }
}
//Calling the function 
addOddNumbers();
