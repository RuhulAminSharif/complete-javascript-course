'use strict';

/*
///////////////////////////////////////
// Scoping in Practice 

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if( birthYear >= 1981 && birthYear <= 1996 ) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); -> error
    console.log(millenial);
    // add(2,3); -> error
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); -> error
// printAge(); -> error
*/

/*
///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);


var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
function addDecl(a, b) {
  return a + b;
}
const addExpr = function(a, b) {
  return a + b;
}
const addArrow = ( a, b ) => a + b;

console.log(addDecl(2,3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

/*
///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function(birthYear){
  console.log(2037-birthYear);
  console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  birthYear: 1991,
  calcAge: function(){
    console.log(this);
    console.log(2037-this.birthYear);
    
  },
}
jonas.calcAge();

const matilda = {
  birthYear: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Karim';

const jonas = {
  firstName: 'Jonas',
  birthYear: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);

    // const self = this;
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments); -> error
  return a + b;
};
addArrow(2, 5, 8);
