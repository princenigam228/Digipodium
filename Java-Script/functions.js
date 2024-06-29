console.log("----Function Starts-------")

function addnums (a, b){
    var c = a + b;

    console.log(c);
}

addnums (345, 67);
// console.log(c);
console.log("------------Average Function------------");

const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;

    return(avg); //return uses here because it helps the function from call outside the fucnction                              //OR console.log(avg);
}
const res = getAvg(76,558,56)
console.log(res);


console.log("-------Arrow Function--------");
//Arrow Function--

const fact = (n) => {
    let f = 1;

    for(let i=2; i<=n; i++){
        f = f*i;
    }
    return f;

};  

const ans = fact(6);
console.log(ans);


console.log("------------Odd Nums-------------");
//WAP to print Odd Nums 

const oddNums = (start, end) => {
    for (let i = start; i<=end; i++ ){
        if(i%2 !== 0){
            console.log(i);
        }
    }
};

oddNums(40, 90);



console.log("------fibbonaci series----------");

//fibbonaci series

let [a, b] = [2, 3];
console.log(a);
console.log(b);

for(let i=0; i<=6; i++){
    let c = a+b;
    console.log(c);
    [a,b] = [b,c];
};


