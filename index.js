function dwarfRollCall(dwarves) {
 //declare array variable, then declare the value of i, and push both the value of 'i'
 //as it corresponds to its list partner + 1, then inline which dwarf as it relates to
 // 'i', then return the array with 'join' operation and quotations
 var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `);
   }
   return array.join("");
}
function summonCaptainPlanet(planeteerCalls){
  //convert all letters to uppercase using 'a' for any string, then an arrow operator
  // to denote its mutation, '.toUppercase', then concatation with "!"
   return planeteerCalls.map(a=>a.toUpperCase()+"!");
}

function longPlaneteerCalls(words) {
  //set i to zero, and create an argument that makes any list with a word that has more than 
  //5 characters to be true and any less to be false
  for(let i=0; i < words.length; i++){
    if (words[i].length>4){
      return true;
    }
  }
  return false;
  }
function findTheCheese (foods) {
  //create a list that checks for cheese in the ingredients using the 
  //|| for 'or' and a list of cheeses, returning no cheese when there isnt cheese in a list 
  for(let i=0;i<foods.length;i++){
    if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="mozzerella"
  ){
    return foods[i];
   }
}
return "no cheese!";
}