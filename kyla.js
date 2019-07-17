//make a function that adds four numbers.
//the function name shall be total_4.

function total_4() {
    //my variables
    var var1 = 10, var2 = 20, var3= 30,var4 = 40;
    var total = var1 + var2 + var3 + var4;//adding the total
    document.write(total);
    
    
}
total_4()

//make a function that has parameters with 4 agruements

function arguments(para1,para2,para3,para4) {
    //this arguements will then be added
    var totalpars = para1 + para2 + para3 + para4;
    document.write(totalpars);//output total
    
}
arguments(9,7,9,6)//the numbers that fill in for the parameters

//nwrite a for loop with odd numbers between 50 and 100
var num = 50;
for(num>=50; num<=100;num++)//the condition thta facilitates the loop
{
if(num % 2 == 1){ //how to find the odd numbers with use of modulas
document.write(num); //outputs the odd numbers
}
}

