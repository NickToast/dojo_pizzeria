function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepporoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var myPizza = pizzaOven("deep dish", "marinara", ["mozzarella", "aged parmesan"], ["sausage", "chicken", "pepperoni", "tomatoes", "green bell peppers", "garlic", "basil"]);
console.log(myPizza);

var morePizza = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["mushroom", "tomatoes", "chicken", "bbq sauce topping", "basil", "garlic", "olives"]);
console.log(morePizza);

