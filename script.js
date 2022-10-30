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

// Object Literal

function addressMaker({city , state}) {
    const newAddress = { city , state , country: 'United States'};
  console.log(newAddress);
    };


addressMaker({city: 'Austin', state: 'Texas'});

// For-of Loop

let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes)
  total += income;

console.log(total)

// For of loop Challenge


const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (const student of students){
    console.log(`${student.name} lives in ${student.city}`);
}