//declare an array variable, then declare the value of i, and push both the value of 'i'
 //as it corresponds to its list partner + 1, then inline which dwarf as it relates to
 // 'i', then return the array with 'join' operation and quotations
function dwarfRollCall(dwarves) {
 var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `);
   }
   return array.join("");
}
//convert all letters to uppercase using 'a' for any string, then an arrow operator
  // to denote its change, '.toUppercase', then concatation with "!"
function summonCaptainPlanet(planeteerCalls){
   return planeteerCalls.map(a=>a.toUpperCase()+"!");
}
//set i to zero, and create an argument that makes any list with a word that has more than 
  //5 characters to be true and any less to be false
function longPlaneteerCalls(words) {
  for(let i=0; i < words.length; i++){
    if (words[i].length>4){
      return true;
    }
  }
  return false;
  }
   //create a list that checks for cheese in the ingredients using the 
  //|| for 'or' and a list of cheeses, returning no cheese when there isnt cheese in a list 
function findTheCheese (foods) {
  for(let i=0;i<foods.length;i++){
    if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="mozzerella"
    ||foods[i]=="swiss cheese"
  ){
    return foods[i];
   }
}
return "no cheese!";
}
var words = ['ball', 'boat', 'car', 'cat'];
function wordsWithB(words){
  if (words);
};