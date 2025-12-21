const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

//console.dir(pokemon, { maxArrayLength: null })


// Exercise 1 
const pokemon59 = (number) => {
    return result = pokemon.find((pokemon) => {
    return pokemon.number === number;
})
}
return result

console.log(result);

console.log(pokemon59(59));
// Exercise 2 

// Exercise 3 

// Exercise 4 

// Exercise 5

// Exercise 6 

// Exercise 7 

// Exercise 8

// Exercise 9 

// Exercise 10 

// Exercise 11

// Exercise 12

// Exercise 13

// Exercise 14

// Exercise 15

// Exercise 16