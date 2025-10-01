const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); // name: "Double Cheese Burger"
console.log(secondBurger.name); // name: "Double Cheese Burger"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 1, perchè sia hamburger sia secondBurger fanno riferimento all'oggetto creato in memoria
