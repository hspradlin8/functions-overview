/* function are doing things-name it accordingly- 
that way you know what the function is going to do*/

const makePizza = (cheese, meat, crust) => { /* 3 items inside the function are the parameters */
    console.log(`I want a ${meat} and ${cheese} pizza on ${crust} crust`);
}

makePizza("cheddar", "bacon", "thin"); /*arguments that are being given back*/

/*make a function that gives you back something*/

function giveMePizza(cheese, meat, crust) {
    return `I want a ${meat} and ${cheese} pizza on ${crust} crust`;
}

const grossPizza = giveMePizza("blue" , "pineapple" , "deep dish");

console.log("What I orderd" , grossPizza);

/* use the string literals(the back ticks) when we want to
 directly inject javascript into the string*/ 

 /*return is a way to return a function without displaying it. */ 

 const madiObject = {
     name: "Madi",
     hairColor: "Blonde"
 }

 /* Loop Overview- different than the function example */

 const pizzaArray = [
     {
         cheese: "blue cheese",
         meat: "bacon",
         crust: "thick"
     },
     {
         cheese: "cheddar",
         meat: "hamburger",
         crust: "thin"
     },
     {
         cheese: "feta",
         meat: "peppers",
         crust: "deep dish"
     }
 ]
 for (let i = 0; i < 100; i++) {
     //do the thing
     if(pizzaArray[i].cheese === "blue cheese"){
         window.alert("You have bad taste in pizzas")
     } else {
     makePizza(pizzaArray[i].cheese, pizzaArray[i].meat, pizzaArray[i].crust)
     
    }

 }
/* or you can do a forEach loop */ 

 pizzaArray.forEach((pizza) => {
     makePizza(pizza.cheese, pizza.meat, pizza.crust)
 })