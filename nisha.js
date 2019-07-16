//1.Add four numbers without parameters
function total(){
  var fnum=10;
var snum=20;
var tnum=30;
var fnum=40;
var total= fnum+snum+tnum+fnum;
document.write("\n"+total);
}
total();

//2.Add four numbers with parameters
function withParams(numOne, numTwo, numThree, numFour){
  var myTotal = numOne + numTwo + numThree + numFour;
  document.write("<br>"+ myTotal+"<br>");
}

withParams(2,4,6,8);

//3.Check for odd numbers between 50 and 100
function oddNumbers(){
  for(var odd=50; odd<=100; odd++){
  if(odd%2!=0){
    document.write("\n" + odd + ",");
    
    }
  }
}

oddNumbers();
