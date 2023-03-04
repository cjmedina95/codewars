// ==== Problem Description ====
// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?
//
// Write a function cakes(), which takes the recipe (object) and the available ingredients 
// (also an object) and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// ==== Solution Description ====
// Uses an array to store the available quantities divided by the recipe quantities.
// This allows the array to be sorted so that cakeServings[0] supplies the item with
// the least amount of "servings" available in the ingredient list.
function cakes(recipe, available) {
    if (recipe.length > available.length) return 0;
    
    let cakeServings = [];
    
    for (const item in recipe) {
      if (!(item in available)) return 0;
      if (recipe[item] > available[item]) return 0;
      else {
        cakeServings.push(Math.floor(available[item] / recipe[item]));
      }
    }
  
    return cakeServings.sort()[0];
  }