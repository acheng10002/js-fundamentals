const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
        sum += number;
    })
    return sum;
};

sumArray([2, 2, 2]);

// formats for continuation lines

// let reallyReallyLongLine =
    // something + 
    // somethingElse + 
    // anotherThing + 
    // howManyTacos + 
    // oneMoreReallyLongThing;

// let anotherReallyReallyLongLine = something + somethingElse + anotherThing + 
                                  // howManyTacos + oneMoreReallyLongThing;

// Clean Naming
const numberOfThings = 10;
const myName = 'Thor';
const selected = true;

function getCount() {
    return numberOfThings;
}

