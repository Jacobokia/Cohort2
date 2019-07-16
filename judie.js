
 function addNumbers() { // adding numbers

        //declaring values and assigning them to their respective variables
     number1 = 5;
    number2 = 50;
    number3 = 16;
    number4 = 10;

    //adding the numbers and assigning them to the variable sum
    sum = number1 + number2 + number3 + number4

    //printing out the value of sum
    document.write("Sum = ", sum); //
}

addNumbers()


function addNumbers(number1,number2,number3,number4) { //adding the parameters 

        sum = number1 + number2 + number3 + number4 // adding the sum

            document.write("Sum = ", sum);
}

addNumbers(50,36,23,5)

function oddNumbers(){
    for(var x=50; x<=100; x++) { // looping through values between 50 and 100
        if (x%2!==0){ //checking for odd numbers between 50 and 100
        document.write(x); //this is printing
    }
}
}
//calling the function
oddNumbers()
