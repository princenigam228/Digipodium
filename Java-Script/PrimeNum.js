const nums = 7;
let prime = true;

for (let i=2; i<nums; i++){
    if (num%i === 0){
        console.log('not prime');
        prime = False;
        break;
    }
}

if(prime) console.log('prime');