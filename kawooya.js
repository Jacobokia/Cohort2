//function to add 4 numbers 
function add() {
    //declaring and initiating variables
    var num1 = 5;
    var num2 = 10;
    var num3 = 1;
    var num4 = 20;
    var sum = num1 + num2 + num3 + num4;
    //printing output
    document.write(sum);
}
//invoke function
add();



//function to add 4 numbers with parameter

function add(num1, num2, num3, num4) {
    var sum = num1 + num2 + num3 + num4;
    document.write(sum);

}
//pass values to variables and invoke function
add(2, 5, 7, 10)

//function to output odd numbers between 50 and 100
function checkOdd() {
    for (var num >= 50; num <= 100; num++;) {
        if (num % 2 != 0) {
            document.write(num)
        }
    }

}
checkOdd();
