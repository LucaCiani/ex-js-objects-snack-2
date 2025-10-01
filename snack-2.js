const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ingredients: ["Salad", "Meat", "Bread", "Tomato"]
console.log(secondBurger.ingredients[0]); // ingredients: ["Salad", "Meat", "Bread", "Tomato"]

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 2 perchè è stata eseguita una copia del primo oggetto, ma in tutti e due gli oggetti si fa riferimento allo stesso array
