//Qn.1 Create one functio without parameters adding 4 numbers
function addFourNumbers(){
    //function without parameters to add four numbers
    var number1 = 20;
    // declaring variable number1 and assigning it value of 20
    var number2 = 40;
    // declaring variable number2 and assigning it value of 40
    var number3 = 70;
    // declaring variable number3 and assigning it value of 70
    var number4 = 34;
    // declaring variable number4 and assigning it value of 34
    var total = number1 + number2 + number3 + number4;
    // declarign variable total and assigning the result of adding the four variables
    
    console.log("The total is: " + total);
    //printing the total value to the console
    }
    addFourNumbers();
    // calling the function "addFourNumbers" which adds the four variables

// Qn.2 Function with four parameters
function addFourNumberWithParameters(numberone, numbertwo, numberthree, numberfour){
    //function with four parameters to add four numbers

   var result = numberone + numbertwo + numberthree + numberfour;
    // declaring variable result and assigning it the sum of the four variables
    
    console.log("The result is: " +result);
    //printing the total value to the console
    }
    addFourNumberWithParameters(7, 8, 9, 90);
    // calling the function "addFourNumberWithParameters" which adds the four parameters passed

// Qn.3  Function to check for odd numbers between 50 and 100
function printOddNumbers(){
    //function to print odd numbers between 50 and 100
    for (numberone = 50; numberone <= 100; numberone++){
    // for loop containing variable numberone with a declaration, condition and increment statements
        if (numberone%2 != 0){
        // if statement wit a condition for outputting odd numbers
        console.log(numberone);
        // printing the odd numbers to the console
        }
    }
    }
    printOddNumbers();
    // calling the function "printOddNumbers" which prints odd numbers between 50 and 100
