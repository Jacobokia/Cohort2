//function that addingFourNumbersWithoutParams

function addingFourNumbersWithoutParams(){
  let numOne = 10;
  let numTwo =20;
  let numThree =30;
  let numFour =40;
  let total =numOne+numTwo+numThree+numFour;
  console.log(total);
  
}

addingFourNumbersWithoutParams()
//Function that addFourNumbersWithParams
function addFourNumbersWithParams(numOne,numTwo,numThree,numFour){
let total = numOne+numTwo+numThree+numFour;  
console.log(total);
}

addFourNumbersWithParams(9,8,7,6);
//Function that oddNumbersFromFiftyToHundred
function oddNumbersFromFiftyToHundred(){
  
  for(let odd = 51; odd <= 99; odd++){
    if(odd % 2 != 0){
      console.log(odd);
    }
  }
    
}

oddNumbersFromFiftyToHundred();
