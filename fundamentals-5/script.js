// OBJECTS
let user = new Object(); // "object constructor" syntax


// LITERALS AND PROPERTIES

// const objectName = {
    // member1Name: member1Value;
    // member2Name: member2Value;
    // member3Name: member3Value;
// };

let userA = { // "OBJECT LITERAL" syntax; MORE COMMON
    // OBJECT LITERAL - I LITERALLY WRITE OUT THE OBJECT CONTENTS AS I'VE COME TO CREATE IT
    // ...WHICH IS DIFFERENT FROM OBJECTS INSTANTIATED FROM CLASSES
    // userA is the object
    // properties can be put into the {} as key: value pairs

    name: 'John', // key/property name "name" stores value, "John"
    age: 30, // key/property name "age" stores value, 30 
             // last property in the list may end with a trailing comma,
             // this makes it easier to add/remove/move around properties 
};

// I can add, remove, and read files from the user1 object at any time


// property values are accessible using the DOT NOTATION
// DOT NOTATION - WAY TO ACCESS AN OBJECT'S PROPERTIES AND METHODS
// ... namespace, object name, must be entered first, a dot, then the item I want to access
// ... that can be a property name, an item of an array property, or a call to one of the object's methods

console.log(userA.name); // John
console.log(userA.age); // 30

userA.isAdmin = true; // adds a property, "isAdmin", and sets it to a value boolean of true
console.log(userA.isAdmin); // true

delete userA.age; // DELETE OPERATOR - removes a property


// SQUARE BRACKETS
userA['likes birds'] = true; // property names can have multiple words, but then it must be quoted,
                             // but dot access won't work for multiword properties
                             // dot requires the key to a valid variable identifier with no spaces, no starting digit, and 
                             // no special characters

console.log(userA['likes birds']); // true
delete userA['likes birds'];

let key = "likes dogs";

userA[key] = false; // square brackets are a way to get the property name as the result of any expression like from a variable
                   // variable name, key, won't work for dot access
console.log(userA[key]);

let keyA = prompt('What do you want to know about the user?', 'name'); // keyA may be calculated at runtime or depend on 
                                                                       // user input, then uses keyA to access the property
console.log(userA[keyA]);  // John (if user enters "name")


// COMPUTED PROPERTIES
let fruit = prompt('Which fruit to buy?', 'apple');

let bag = {
    [fruit]: 5, // COMPUTED PROPERTIES - uses square brackets in an object literal when creating an object
                // [fruit] means the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit = "apple"
                        // if a visitor enters "apple", bag will become {apple: 5}

let fruitA = prompt('Which fruit to buy?', 'banana'); // works similarly, but above looks nicer
let bagA = {};

bagA[fruitA] = 3; // takes property name from the fruit variable
console.log(bagA.banana); // 3

// more complex expressions can used inside square brackets
let fruitB = 'apple';
let bagB = {
    [fruitB + 'Computers']: 2 // bag.appleComputers = 2
};
console.log(bagB.appleComputers); // 2

// square brackets are more powerful than dot notation; they allow any property names and variables
// when property names are known and simple, dot is used
// if I need something more complex, switch to square brackets


// PROPERTY VALUE SHORTHAND
// existing variables are often used as values for property names
function makeUser(name, age) {
    return {
        name: name, // this use-case of making a property from a variable is so common, there's a
        age: age,   // special PROPERTY VALUE SHORTHAND
        // ...other properties
    };
}
let userB = makeUser("Mary", 35);
console.log(userB.name); // Mary

function makeUserA(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        // ...
    }
}
let userC = makeUserA("Bob", 40);
console.log(userC.name); 

let userD = {
    age: 45 // both normal properties and shorthand can be used in the same object
};


// PROPERTY NAMES LIMITATIONS
// a variable cannot have a name equal to one of the language-reserved words like "for", "let", "return"
// for an object property, there is no such restriction

let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return); // 6

// there are no limitations on property names
// they can be strings or symbols (symbols are a special type for identifiers)
// other types are converted to strings, e.g. number 0 becomes a string "0" when used as a property key

let objA = {
    0: "test" // same as "0": "test"
};

console.log(objA["0"]); // test
console.log(objA[0]); // test (same property)

let objB = {};
objB.__proto__ = 5; // __proto__ special property that cannot be set to a non-object value
console.log(objB.__proto__); // [object Object]; assignment to a primitive 5 is ignored

// it's possible to access any property; reading a non-existing property just returns "undefined"
let userE = {};
console.log(userE.noSuchProperty === undefined); // true means "no such property"


// PROPERTY EXISTENCE TEST, "IN" OPERATOR
// special operator "in" tests whether the property exists in the object
// "key" in object

let userF = {name: 'John', age: 30};
console.log('age' in userF); // true, user.age exists
console.log('blabla' in userF); // false; left side of "in" must be a property name that's usually a quoted string

let userG = {age: 30}
let keyB = 'age';
console.log(keyB in userG); // if quotes are omitted, a variable should contain the actual property name to be tested
                          // true, property "age" exists

                          // when an object property exists and stores undefined, I need the "in" operator to test its existence
let objC = {
    test: undefined
};

console.log(objC.test); // it's undefined, so --no such property?
console.log('test' in objC); // true, the property does exist!

// "undefined" should not be explicitly assigned; mostly use "null" for unknown or empty values


// "FOR...IN" LOOP
// to walk over all keys of an object, use "for...in"

// for (key in object) {
    // executes the body for each key among onject properties
// }

// outputs all properties of user...
let userH = {
    name: 'John',
    age: 30,
    isAdmin: true
};

for (let key in userH) { // all "for" constructs allow me to declare the looping variable inside the loop, like "let key"
                         // could instead be "for (let prop in obj)"
    // keys
    console.log(key); // name, age, isAdmin
    // values for the keys
    console.log(userH[key]); // John, 30, true
}


// ORDERED LIKE AN OBJECT
// in objects, integer properties are sorted in ascending order and other properties appear in creation order
let codes = {
    '49': 'Germany',
    '41': 'Switzerland',
    '44': 'Germany',
    // ..,
    '1': 'USA'
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

// integer properties are strings that can be converted to and from an integer without a change
// "+49" and "1.2" are not integer properties

// Number(...) - explicity converts a string to a number
// Math.trunc - built-in function that removes the decimal part
console.log(String(Math.trunc(Number('49')))); // "49", same, integer property
console.log(String(Math.trunc(Number('+49')))); // "49", not same as "+49", not an integer property
console.log(String(Math.trunc(Number('1.2')))); // "1", not same as "1.2", not an integer property

let userI = {
    name: 'John',
    surname: 'Smith'
};
userI.age = 25; // add one more property to the userI object

// non-integer properties are listed in creation order
for (let prop in userI) {
    console.log(prop); // name, surname, age
}

// to fix the issue with the phone codes, I can "cheat" by making the codes non-integers when I add a "+"
let codesA = {
    '+49': 'Germany',
    '+41': 'Switzerland',
    '+44': 'Germany',
    // ..,
    '+1': 'USA'
};

for (let code in codesA) {
    console.log(+code); // 49, 41, 44, 1
}


//  HELLO, OBJECT TASK
let userJ = {};
userJ.name = 'John';
console.log(userJ.name);

userJ.surname = 'Smith';
console.log(userJ.surname);

userJ.name = 'Pete';
console.log(userJ.name);

delete userJ.name;
console.log(userJ.name);
console.log('name' in userJ);


// CHECK FOR EMPTINESS TASK
function isEmpty(obj) {
    for (let key in obj) {
        // if (key in obj)  {
        return false;
        // } else if (obj.key === undefined) {
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up"; // property name is 8:30 and its value is "get up"
console.log(isEmpty(schedule)); // false


// SUM OBJECT PROPERTIES TASK
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}
console.log(sum);

let salariesA = {};
let sumA = 0;
for (let salaryA in salariesA) {
    sumA += salariesA[salaryA];
}
console.log(sumA);


// MULTIPLE NUMERIC PROPERTY VALUES BY 2 TASK
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "number") { // has to be obj[prop] and not just prop
            obj[prop] *= 2;
        } 
    }        
}
multiplyNumeric(menu); // function modifies menu object itself, so no need to reassign the new menu to menu
console.log(menu);


// OBJECT BASICS
// as with many things in JS, object creation starts with defining and initializing a variable
const person = { // name, age, bio, introduceSelf are members of the object

    name: ["Bob", "Smith"], // property value is an array
    age: 32, // property value is a number 
    bio() { // or bio: function (); property value is a method
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() { // or introduceSelf(); property value is a method
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

// METHODS - FUNCTIONS THAT ALLOW AN OBJECT TO DO SOMETHING WITH ITS DATA


// OBJECT AS OBJECT PROPERTIES
// an object property can itself be an object
const personA = {
    name: {
        first: "Bob", // methods would need to be changed, from name[0] to name.first and from name[1] to name.last
        last: "Smith",
    },
};

console.log(person['age']);
console.log(personA['name']['first']); // bracket notation works if a an object property is itself an object
                                       // instead of using an index number to select an item, I am using the name associated
                                       // with each property's value

// OBJECTS AS ASSOCIATED ARRAYS - objects map strings to values in the same way that arrays map numbers to values


// BRACKET NOTATION
// if an object property name is held in a variable, I can access the value using bracket notation BUT NOT dot notation

function logProperty(propertyName) {
    console.log(person[propertyName]); // logProperty() can use person[propertyName], but it can't use person.propertyName
}

logProperty('name'); // ['Bob', 'Smith']
logProperty('age'); // 32


// SETTING OBJECT MEMBERS
// I can set/update the value of object members by declaring the member I want to set, using dot or bracket notation
person.age = 45;
person['name']['first'] = "Cratchit";

// and I can create completely new members
person['eyes'] = 'hazel';
person.farwell = function () {
    console.log('Bye everybody!');
};

// bracket notation can be used to set member values AND member names dynamically
// I want users to be able to store custom value types in their people data by having the user...
// const myDataName = nameInput.value; type the member name into one text input
// const myDataValue = nameValue.value; type the member value into another text input

// then I can add the new member name and value to the person object
// person[myDataName] = myDataValue;

const myDataNameA = 'height'; // again, I cannot add a property to an object with a variable pointing to the property name
const myDataValueA = '1.75m'; // ...with dot notation
person[myDataNameA] = myDataValueA; // I can add that property with bracket notation


// WHAT IS "THIS"?
// THIS KEYWORD - REFERS TO THE CURRENT OBJECT THE CODE IS BEING WRITTEN INSIDE
// ...this enables me to use the same method definition for every I create

const personB = {
    name: 'Chris',
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`); // "Hi! I'm Chris."
    },
};

const personC = {
    name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`); // "Hi! I'm Deepti."
    },
};

// this keyword will be essential when I start using constructors to create more than one object from a single object
// definition


// INTRODUCING CONSTRUCTORS
// one way to define the set of methods and properties an object can have...
function createPerson(name) { // the function takes a parameter, name, to set the value of the name property to
    const obj = {}; // first creates a new object
    obj.name = name; // the object's first member is a property
    obj.introduceSelf = function () { // the object's second member is a method
                                      // value of this method will be the same for all objects created 
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj; // lastly returns the new object
}

const salva = createPerson('Salva');
salva.name;
salva.introduceSelf(); // "Hi, I'm Salva."

const frankie = createPerson('Frankie');
frankie.name;
frankie.introduceSelf(); // "Hi, I'm Frankie."
// This above is long-winded: create an empty object, initialize it, and return it

// CONSTRUCTOR - A FUNCTION CALLED USING THE NEW KEYWORD
// calling a constructor will: 1) create a new object
                            // 2) bind "this" to the new object; I can refer to "this" in my constructor code
                            // 3) run the code in the constructor
                            // 4) return the new object

// constructors start with a capital letter and are named for the type of object they create
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const salvaA = new Person('Salva'); // call "new" to call Person() as a constructor
salvaA.name;
salvaA.introduceSelf();

const frankieA = new Person('Frankie');
frankieA.name;
frankieA.introduceSelf();

// every time I've been working on an exampld that uses a built-in browser API or JavaScript object, I've been using objects
// built-in browser APIs nad JS objects are built using object structures

let myString;
// myString.split(","); // using split method available on a string object

// creating a string, is done as an instance of String, and therefore the string has several common methods and properties
// available to it

// when I access the document object model...
const myDiv = document.createElement('div');     // using a method available on a Document object
const myVideo = document.querySelector('video'); // using a method available on a Document object

// for each webpage loaded, an instance of Document is created, called document
// document represents the entire page's structure, content, and other features like its URL, odcument has several common
// methods and properties available to it

// this is true of any built-in object or API: Array, Math, and so on
// exception: Notifications API which allows modern browsers to fire system notifications requires me to instantiate 
// a new object instance using the constructor for each notification I want to fire

// const myNotification = new Notification('Hello!'); // returns undefined


// OBJECT BASICS 1
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
let catName = cat['name'];
cat.greeting();
cat.color = 'black';

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

// section.appendChild(para1);
// section.appendChild(para2);
  

// OBJECT BASICS 2
let bandInfo;

const favBand = {
    name: 'Yellow Magic Orchestra',
    nationality: 'Japanese',
    genre: 'electronic',
    members: 3,
    formed: 1978,
    split: 1984,
    albums: [
        {
            name: 'Yello Magic Orchestra',
            released: 1978
        },
        {
            name: 'Paraiso',
            released: 1978
        }
    ]
}

bandInfo = `My favorite band is named ${favBand.name}. They are ${favBand.nationality} and had been active for ${favBand.split - favBand.formed} years. Their music style is ${favBand.genre}. Their first album was titled ${favBand.albums[0]['name']}, and it was released in ${favBand.albums[0]['released']}.`


// OBJECT BASICS 3
const cat1 = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
  }

const cat2 = {
    name : 'Mao',
    breed : 'American Shorthair',
    color : 'orange',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
  }
  
cat1.greeting();
cat2.greeting();


// OBJECT BASICS 4
function Cat(name) {
    this.name = name;
    this.greeting = function () {
     console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    };
  }
  
  const cat3 = new Cat('Bertie');
  cat3.breed = 'Cymric';
  cat3.greeting();
    
  
  const cat4 = new Cat('Elfie');
  cat4.breed ='Aphrodite Giant';
  cat4.greeting();


// if I get really good at array methods, filter, map, sort, reduce, etc., my JS programming will get better

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  // pass filter method, a function that loops over every single item in the array
  // for each inventor, decide whether I will keep it or not
  const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; // means I will keep inventor in the new array
    }
    // no need to account for else statement, because everything else will be thrown out if it's not returned truthy
  });
  // console.table(fifteen);

  const fifteenA = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)) // arrow function now
          // parameter the function takes, arrow, conditions 
          // if both conditions are true, the arrow function will return a boolean of true

  console.table(fifteenA);


  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

  // pass map method, an array, map method does something to that array, and map returns a new array of the same length
  // map will always return the same amount of items as I give it

  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
        // parameter the function takes, arrow, concatenate (+) value of first property and value of last property
  console.log(fullNames);


  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  // takes two items, return 1 to put an item later, and return -1 to put an item first
  // sort "bubbles" items up and down the array

  const ordered = inventors.sort(function(firstPerson, secondPerson) {
    if (firstPerson.year > secondPerson.year) { 
        return 1; // move down
    } else {
        return -1;
    }
  });
  // console.table(ordered);

  const orderedA = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);
  // ternary operator gets me an implicit return

  console.table(orderedA);


  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  // sort and map will take in items and sort them or turn the items into something else 
  // reduce method allows me to build something on a loop through every single item

  var totalYears = 0;

  for (var i = 0; i < inventors.length; i++) {
    totalYears += (inventors[i].passed - inventors[i].year);
  }
  console.log(totalYears);

  const totalYearsA = inventors.reduce((total, inventor) => {
    // reduce method gives me a running total ("total") after every loop
    return total + (inventor.passed - inventor.year);
  }, 0); // the "0" means, on the first loop, total equals 0

  console.log(totalYearsA);


  // 5. Sort the inventors by years lived

  const oldest = inventors.sort(function(lastPerson, nextPerson) {
  // instead of returning 1 or -1, create variables to return in my if statement
    const theLastPerson = lastPerson.passed - lastPerson.year;
    const theNextPerson = nextPerson.passed - nextPerson.year;
    if (theLastPerson > theNextPerson) {
        return -1;
    } else {
        return 1;
    }
  });
  // console.table(oldest);

  const oldestA = inventors.sort(function(lastPerson, nextPerson) {
    // instead of returning 1 or -1, create variables to return in my if statement
      const theLastPersonA = lastPerson.passed - lastPerson.year;
      const theNextPersonA = nextPerson.passed - nextPerson.year;
      return theLastPersonA > theNextPersonA ? -1 : 1;
    });
    console.table(oldestA);


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

    // I need to first get the DOM elements out of the page
    // 1. Go to dev tools for site
    // 2. Inspect whatever the "Boulevards of Paris" element contains
    // 3. the ul element is inside the div class ="mw-category-group" which is inside the div class ="mw-category" 
    // in the console...
    // const category = document.querySelector(".mw-category");
    // const links = Array.from(category.querySelectorAll('a')); // querySelector can be called on any existing elements;
                                                     // doesn't always have to be called on document
                                                     // looking for anchor, links inside of category
    // or const links = [...category.querySelectorAll('a')]; // spread takes every item out of an iterable and put it into
    // an array in this case 
    // 4. convert the list of links into a list of names
    // 5. filter the list of names for ones that include "de"
    // const de = links
        // .map(link => link.textContent) // returning a new array of the same length
        // .filter(streetName => streetName.includes('de')); // filter out the names that have "de"
        // parameter the function takes is streetName, loops through the array with arrow function, condition is to check if
        // each streetName includes "de"
    // 6. this will give me a subset of the initial array that contains "de" inside of the items


  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const alpha = people.sort(function (lastOne, nextOne) { // this gives me list of items with Last Name, First Name
    const [aLast, aFirst] = lastOne.split(', '); // I can destructure the array and turn it into variables instead, "last" and "first"
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1; // if bLast's first letter is earlier in the alphabet, it is less than aLast's first letter
  });
  // console.log(alpha); // if I want to change the new alphabetized set into an array or object, I should use reduce

  const alphaA = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', '); 
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  });
  console.log(alphaA);


  // 8. Reduce Exercise

  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  // I want to tally the instances of each
  const transportation = data.reduce(function(obj, item) {
    // console.log(item);
    if (!obj[item]) {
        obj[item] = 0; // set the count of the item to 0
    }
    obj[item]++;
    return obj;
  }, {}); // start with a blank object
  // here, reduce starts with a blank object
  // and every time I loop over an item, I first see if there's a 0 to start from
  // ...if no zero, I make a zero
  // ...then go ahead and increment it
  console.log(transportation);


  const peopleA = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // .some checks if at least one item in my array meets a condition

    const isAdult = peopleA.some(function(person) {
        const currentYear = (new Date()).getFullYear(); 
        if (currentYear - person.year >= 19) {
            return true;
        }
    });
    // console.log(isAdult); // should be true because there is someone who is 19 or older
    // console.log({isAdult}); shows me the name of the variable as the value of it

    const isAdultA = peopleA.some(person => {
        const currentYear = (new Date()).getFullYear();
        return (currentYear - person.year >= 19); 
    });
    // console.log(isAdultA);

    const isAdultB = peopleA.some(person => ((new Date()) // using the implicit return without "return"
        .getFullYear()) - person.year >= 19);
    console.log(isAdultB);


    // Array.prototype.every() // is everyone 19 or older?
    // .every checks if every item meets a condition
    const allAdults = peopleA.every(person => ((new Date()) // using the implicit return without "return"
        .getFullYear()) - person.year >= 19);
    console.log(allAdults);


    // Array.prototype.find()
    // Find is like filter, but instead returns just the first item that it finds
    // find the comment with the ID of 823423
    const comment = comments.find(comment => comment.id === 823423);     
    console.log(comment);


    // Array.prototype.findIndex()
    // Find the comment with this ID
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // delete the comment with the ID of 823423
    // comments.splice(index, 1);
    // console.table(comments);
    // OR
    const newComments = [ // builds a new array of the comments where comments[0] goes to comments[index + 1] 
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];
    console.table(newComments);

    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    
    const getTheTitles = books.map(function (book) {
        return book.title;
    }); 
    
    console.log(getTheTitles);

    // let peopleB = [
        // {
          // name: "Carly",
          // yearOfBirth: 1942,
          // yearOfDeath: 1970,
        // },
        // {
          // name: "Ray",
          // yearOfBirth: 1962,
          // yearOfDeath: 2011,
        // },
        // {
          // name: "Jane",
          // yearOfBirth: 1912,
          // yearOfDeath: 1941,
        // },
      // ]

      // const findTheOldest = people.reduce((prev, current) => {
        // let prevYearsLived = prev.yearOfDeath - prev.yearOfBirth; 
        // let currentYearsLived = current.yearOfDeath - current.yearOfBirth;
        // return (prevYearsLived > currentYearsLived) ? prev : current;
      // });

      const peopleB = [
        {
          name: "Carly",
          yearOfBirth: 1066,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]

      const findTheOldest = peopleB.reduce((prev, current) => {
        const currentYear = (new Date()).getFullYear();
        let prevYearsLived = prev.yearOfDeath - prev.yearOfBirth; 
        let currentYearsLived = current.yearOfDeath - current.yearOfBirth;
        if (prev.yearOfDeath === undefined) {
            prevYearsLived = currentYear - prev.yearOfBirth; 
        } else if (current.yearOfDeath === undefined) {
            currentYearsLived = currentYear - current.yearOfBirth;
        }
        return (prevYearsLived > currentYearsLived) ? prev : current;
      });

      console.log(findTheOldest.name);
 

    



