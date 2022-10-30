// Template literals + Object Destructuring
const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

const { name,club, address:{ city } } = player;
console.log(`${name} plays for ${club} and lives in ${city}`);


// Array Destructuring
let names = ['Subramanya', 'Coding God', 'Rao'];
const [firstName] = names;
console.log(firstName , ...names);

