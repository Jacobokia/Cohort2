/*
1. function to add 4 numbers
2. funciton with parameters
3. function to check odd numbers between 50-100
*/


//1 . Function without parameters
function addFourNumbers() {   // declaring the function 
    var num1 = 3;
    var num2 = 4;
    var num3 = 3;
    var num4 = 5;
    
    // declaring and assigning the variable total to the sum of the variables above
    total = num1 + num2 + num3 + num4 
    
    // printing out the value total to the console
    console.log(total)                
}

//2 . Function with parameters

// declaring the function to
function addFourNumbersWithParam(num1, num2, num3, num4) { 

    // declaring and assigning the variable total to the sum of the variables above
    total = num1 + num2 + num3 + num4
    console.log(total)
}

addFourNumbersWithParam(10, 10, 10, 10);
addFourNumbers();

//3 . Function to output odd numbers between 50-100

function addOddNumbers() {
    for (var num = 50; num <= 100; num++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}

addOddNumbers();

