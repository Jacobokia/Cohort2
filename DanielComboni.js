/*
    @author:  Daniel Comboni
*/

// non-parameterized function to add 4 numbers 
function addFourNumbersWithoutParameters() {

    //declaring the numbers to be added (i.e firstNumber, secondNumber, thirdNumber, fourth) and initializing them
    let firstNumber = 10;
    let secondNumber = 20;
    let thirdNumber = 30;
    let fourth = 40;

    // declaring and assigning sum to the total of the variables above
    let sum = firstNumber + secondNumber + thirdNumber + fourth;

    // printing out sum
    console.log(`the sum = ${sum}`);
}

// invoking the function addFourNumbersWithoutParameters
addFourNumbersWithoutParameters();

// parameterized function to add 4 numbers
function addFourNumbersWithParameters(firstNumber, secondNumber, thirdNumber, fourth) {

    // declaring and assigning sum to the total of the variables above
    let sum = firstNumber + secondNumber + thirdNumber + fourth;

    // printing out the sum
    console.log(`the sum = ${sum}`);
}

// invoking the function addFourNumbersWithParameters
addFourNumbersWithParameters(1, 2, 3, 4);

// function to print out odd numbers between 50 and 100
function printOddNumbersFrom50To100() {

    // for loop to iterate from 51 to 99
    for (let index = 51; index < 100; index++) {

        // checking if the value in index variable is odd
        if (index % 2 != 0) {
            console.log(index);
        }

    }

}

// invoking the function printOddNumbersFrom50To100
printOddNumbersFrom50To100();


