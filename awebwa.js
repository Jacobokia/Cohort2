<script>
//function without parameters adding four numbers
    function add() {
        var num1=2;
        var num2=4;
        var num3=6;
        var num4=8;
        var sum=num1+num2+num3+num4;
       console.log(sum);
       
    }
    add();


//fuction with parameters outputting arguements
    function arg(a, b, c, d) 
    {
  console.log(arguments[0]);
  

  console.log(arguments[1]);
  

  console.log(arguments[2]);

  console.log(arguments[3]);
  
}

arg(1, 2, 3, 4);


//function outputing odd numbers between 50 and 100

    function odd() {
       var x;

       for(x = 50;x<=100;x++){
       
       if(x%2 != 0){
       
       console.log(x);
       
       }
       
       }
            
        }
    
    odd();

</script>
