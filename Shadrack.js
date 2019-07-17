<script>
   /*this function adding var without a paramenter*/

    function add() {
        var No1=5;
        var No2=10;
        var No3=2;
        var No4=20;
        var all=No1+No2+No3+No4;
    //the "var all" adds every "var" 
        console.log(all); 
    // console.log will instruct js to out put every "var" added in "var all" and after call the fun-name "add()"
        
    }
    add();



   /* this function adds var with paramenters*/

    function sum(hen,cows,dogs,cats) 
// here i spacify the paramenters 
    {
        var pet=hen+cows+dogs+cats; 
// here i create a var that adds the paramenters
        console.log(pet); 
// this shows the answer when call the function name
    }
    sum(10,2,4,5);





 /* fuction that shows odd number from 50-100
 
     function floop() 
     // create a function and give it a name floop
    {
        for (var numb=50; numb<=100;numb++) 
        // write a for-loop and i declare a var, give a condition, and increment it
        if (numb%2!=0) { 
            console.log(numb);
        } 
        // an if statement that show odd numbers between 50-100
        
    }
    floop();
</script>
