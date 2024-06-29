//use of map.js

const nums = [2, 5, 13, 7, 4, 9, 2];

const newNums = nums.map ( (n) => {return n*n} );

console.log(newNums);

//use of map.js
const prices = [23.55, 28.27, 493.99, 3752.237, 374.3];

const newPrices = prices.map ( (n) => {return parseInt(n); } );

console.log(newPrices);

//Filter

const evenNums = nums.filter( (n) => {return n%2 === 0} );

console.log(evenNums);

const prices2 = [599, 2300, 9800, 12000, 6400, 120, 600 ]

const filteredprices = prices2.filter( (price) => {return price > 600 && price < 8000 } );

console.log(filteredprices);

const names = ['raju', 'pinki',' kaliya', 'chutki'];

const names2 = names.filter ( (name) => {return name.length >= 6});

console.log(names2);

