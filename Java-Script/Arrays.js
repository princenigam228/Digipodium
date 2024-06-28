const arr1 = ['abc', 123, true, null];

console.log(arr1);

console.log(typeof arr1);

console.log(Array.isArray(arr1));

const movies = ["sholey", 'Rockstar', 'Fukrey', 'Newton', 'sahgdvahsg', 'ashdgjahsg'];

//indexing

console.log(movies[3]);

console.log(movies[1]);

console.log(movies.indexOf('Newton'));

console.log(movies[-2]);

console.log(movies.at(-2));

//Slicing  

console.log(movies.slice(2, -1));

//Array Traversal

const nums = [2, 6, 8, 2, 1, 98, 23];

for(let i=0; i<nums.length; i++){
    
    console.log(nums[i]);
}

//Traverse using forEach Function

//nums.forEach( (n) => {console.log(n*n); } );

//new array Even Numbers
const evennums = [];
for(let i = 0; i<nums.length; i++){
    if (nums % 2 === 0){
        evennums.push(n);
    }
};

console.log(evennums);



