//addition function without parameters

function add(){
    let x=2,y=10,c=3,d=6;
   sum=x+y+c+d;
   document.writeln ("here is the addition sum without parameters");
    document.write("<br>"+sum+"<br>");
   
   }

//addition with parameter
function addpara(x,y,z,n){
    let sum=x+y+z+n;

    document.writeln ("here is the addition sum with parameters");
    document.writeln ("<br>"+sum+"<br>");


}
   
//function to print out all odd numbers from 50-100
function odd(){

    document.writeln ("<br>odd numbers from 50-100 <br>");
    let i; // counter
    for (i = 50; i < 100; i++) { //looping from 50 with the condition limiting to 100 and the increment of 1
      if(i%2!=0){
          document.writeln(i); //writing to document
      }
    }
}


//function invocation


add()
addpara(20,30,10,50)

odd()
