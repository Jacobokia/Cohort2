
// //Adding four numbers without perimeters.
function add() {
    var number1 = 100;
    var number2 = 200;
    var number3 = 300;
    var number4 = 400;
    var result = number1 + number2 + number3 + number4;

    console.log(result);
}

add()

//Adding four numbers with perimeters.
function add(a, b, c, d) {
    var result = a + b + c + d;
    console.log(result);
}
add(100, 200, 300, 400);

//Checking for OddNumbers between 50-100.
function addOddNumber() {
    for (var odd = 50; odd <= 100; odd++) {
        if (odd % 2 !== 0) {
            console.log(odd);
        }

    }
}
addOddNumber();
