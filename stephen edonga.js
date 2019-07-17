//function without parameters.
function add(){
  var num1=12;
  var num2=32;
  var num3=7;
  var num4=43;
  var num5=num1+num2+num3+num4;
  console.log(num5);
}
add();

//funtion with parameters.
function add(a,b,c,d){
  var e=a+b+c+d;
  console.log(e);
  
}
add(19,8,23,1);


//function with odd numbers from 50-100.
function oddNumbers(){
  for(var b=50; b<=100; b++)
  {
    if(b%2!=0){
      console.log(b);
    }
  }
  
}
oddNumbers();



