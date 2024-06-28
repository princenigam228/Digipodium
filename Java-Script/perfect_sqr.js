function isPerfectSquare(num) {
    if (num < 0) {
        return false; 
    }
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

console.log(isPerfectSquare(16));  
console.log(isPerfectSquare(25));  
console.log(isPerfectSquare(14));  
console.log(isPerfectSquare(-4));  
