"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Array Methods
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

// SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

/////////////////////////////////////////////////
// Looping Arrays: forEach
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("----for of ----");
// for (const currMovement of movements) {
for (const [idx, currMovement] of movements.entries()) {
  if (currMovement > 0) {
    console.log(`Movement ${idx + 1}: You deposited ${currMovement}`);
  } else {
    console.log(`Movement ${idx + 1}: You withdrew ${Math.abs(currMovement)}`);
  }
}

console.log("----for each ----");
// continue and break does not work on forEach loop
movements.forEach(function (currMovement, idx, arr) {
  if (currMovement > 0) {
    console.log(`Movement ${idx + 1}: You deposited ${currMovement}`);
  } else {
    console.log(`Movement ${idx + 1}: You withdrew ${Math.abs(currMovement)}`);
  }
});

// Data Transformations: map, filter, and reduce

// The map method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map( function(currMovement){
//   return currMovement * eurToUsd;
// });
const movementsUSD = movements.map((currMovement) => currMovement * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDForOF = [];
for (const currMovement of movements) {
  movementsUSDForOF.push(currMovement * eurToUsd);
}
console.log(movementsUSDForOF);

const movementsDescription = movements.map(function (currMovement, idx, arr) {
  let str;
  if (currMovement > 0) {
    str = `Movement ${idx + 1}: You deposited ${currMovement}`;
  } else {
    str = `Movement ${idx + 1}: You withdrew ${Math.abs(currMovement)}`;
  }
  return str;
});
console.log(movementsDescription);

// The filter method
const deposites = movements.filter(function (currMovement, idx, arr) {
  return currMovement > 0;
});
console.log(movements);
console.log(deposites);

let depositesForOf = [];
for (const currMovement of movements) {
  if (currMovement > 0) depositesForOf.push(currMovement);
}
console.log(depositesForOf);

const withdrawals = movements.filter(function (currMovement) {
  return currMovement < 0;
});
console.log(withdrawals);

// The reduce method
const balance = movements.reduce(function (
  accumulator,
  currMovement,
  idx,
  arr
) {
  return (accumulator += currMovement);
},
0); // 0 -> the initial value of the accumulator
console.log(balance);

let balanceForOf = 0;
for (const currMovement of movements) {
  balanceForOf += currMovement;
}
console.log(balanceForOf);
