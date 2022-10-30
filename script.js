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

// Spread Operator

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBucket = [...shoppingList , "Paneer" , "Cheese"];
console.log(shoppingBucket);


// Default Parameters

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const myFunc = (item = "something") => console.log(`I'm going to buy ${item} from the grocery shop`);

myFunc();

// Prints I'm going to buy something from the grocery shop


// muFunc("milk") prints "I'm going to buy milk from the grocery shop"




// includes(

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

listIngredients.includes("chocolate") ? console.log("We are going to make a chocolate cake") : console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");

