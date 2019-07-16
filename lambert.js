function sum(){    //function for summing the numbers
     var a=35,b=46,c=32,d=23;       //declaring and initialising variables
     var e=a+b+c+d;     //variable for adding the numbers
     document.write("The sum of the numbers is " + e +"<br />");       //dispalying the sum in the document
 }

 function add(num1,num2,num3,num4){     //function for adding numbers
     var num5=num1+num2+num3+num4;      //variable for summing the numbers
     document.write("The four numbers add up to: " + num5 +"<br />");   //displays the sum in the document
 }

 function displayOddNumbers(){  //function for displaying odd numbers
 for(var numb=50;numb<100;numb++){    //for loop looping the numbers between 50 and 100
    if(numb%2!=0){      //checking whether the condition is true
     document.write(numb+",");  //displaying the odd numbers separated by commas in the document
    }
}
}

sum();  //invoking the sum function
add(34,23,12,46);   //invoking the add function with the four arguments to the function
displayOddNumbers();    //calling the displayOddNumbers function
