//use of map.js

const nums = [2, 5, 13, 7, 4, 9, 2];

const newNums = nums.map ( (n) => {return n*n} );

console.log(newNums);

//use of map.js
const prices = [23.55, 28.27, 493.99, 3752.237, 374.3];

const newPrices = prices.map ( (n) => {return parseInt(n); } );

console.log(newPrices);