for(let i=0; i<20; i++){
    console.log(i);
}
// WAP of Even Nums 
for(let i=50; i<=100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// For-of loop
const nums = [ 2, 6, 7, 8, 4, 8];
for(let n of nums){
    console.log(n);
}

// While loop
console.log("------while loop----------");

let a = 30;
while (a<50){
    console.log(a);
    a+=10;
}
console.log("----do-while loop--------------");
//Do-while Loop

let b = 20;
do{
    console.log(b);
    b+=10;
}while(b<10);   

