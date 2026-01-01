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
  difficulty:[],
}

//console.dir(pokemon, { maxArrayLength: null })


// Exercise 1 
const pokemonid = (number) => {
    return result = pokemon.find((pokemon) => {
    return pokemon.number === number;
})
}

//console.log(pokemonid(59).name);

// Exercise 2 

//console.log(game)

// Exercise 3 
game.difficulty = "Med"
//console.log(game)

// Exercise 4 
//console.log(pokemonid(25).name);
game.party.push (pokemonid(25).name);
//console.log(game)

// Exercise 5
game.party.push (pokemonid(16).name, pokemonid(50).name, pokemonid(101).name);
//console.log(game)

// Exercise 6 
game.gyms.forEach(gyms => {
   if (gyms.difficulty <= 2) {
    gyms.completed = true;
   }
});

//console.log(game)

// Exercise 7 
game.party.splice(0,1,pokemonid(26).name)

//console.log(game)

// Exercise 8
for (let gang of game.party) {
  //console.log(gang);
}

// Exercise 9 
pokemon.forEach(pokemon => {
  if (pokemon.starter === true) {
   //console.log(pokemon.name); 
  } 
});
 
// Exercise 10 
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Exercise 11
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = game.items.find(item => 
    item.name === "pokeball");
pokeball.quantity--; 
};

game.catchPokemon();

//console.log(game);

// Exercise 12

game.gyms.forEach(gyms => {
   if (gyms.difficulty <= 6) {
    gyms.completed = true;
   }
});
//console.log(game)

// Exercise 13
game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  for (let i = 0; i < this.gyms.length; i++) {
    if (this.gyms[i].completed === true) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  }

  console.log(gymTally);
};

//game.gymStatus();


// Exercise 14
game.partyCount = function () {
  return this.party.length;
};
//console.log(game.partyCount());

// Exercise 15
game.gyms.forEach(gyms => {
   if (gyms.difficulty <= 7) {
    gyms.completed = true;
   }
});
//console.log(game)

// Exercise 16
console.log(game)