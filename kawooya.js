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



//function with parameter

function add(num1, num2, num3, num4) {
    var sum = num1 + num2 + num3 + num4;
    document.write(sum);

}
add(2, 5, 7, 10)


function checkOdd() {
    for (var num >= 50; num <= 100; num++;) {
        if (num % 2 != 0) {
            document.write(num)
        }
    }

}
checkOdd();