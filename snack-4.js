const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
};

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: "Main Street",
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const copyChef = { ...chef };

// In questo modo viene eseguita una copia di chef che contiene anche la funzione

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const copyRestaurant = structuredClone(restaurant);

// In questo modo abbiamo una copia precisa di restaurant contenente anche l'oggetto complesso Date()
