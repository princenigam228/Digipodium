//object
const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy-24',
    Price : 120000,
    Colors : ['Blck', 'pink', 'blue'] 
};

console.log(smartphone.Colors[0]);

smartphone.Colors.push('Green')

console.log(smartphone.Colors); 

const smartphoneArray = [
    {
        brand: 'Samsung', model: 'Galaxy-S24', Price: 120000,
        Colors: ['Blck', 'Blue', 'White']
    },
    {
        brand: 'Vivo', model: 'S24', Price: 23500,
        Colors: ['White', 'Blue']
    },
    {
        brand: 'Apple', model: '14-plus', Price: 60000,
        Colors: ['Gray', 'Blue']
    },
    {
        brand: 'Apple', model: 'i phone 15-pro', Price: 150000,
        Colors: ['Red', 'Blue']
    },
    {
        brand: 'Motorola', model: '12pro', Price: 12000,
        Colors: ['navy blue', 'black']
    },
];

console.log(smartphoneArray.length);

console.log(smartphoneArray[0].Price);

console.log(smartphoneArray.length);

smartphoneArray[4].Colors.splice(1,0,"red");

console.log(smartphoneArray[4].Colors);


//Filtering
console.log("----filter price-----");

const array = smartphoneArray.filter( (phone ) => {return phone.Price >= 120000 });

console.log(array);
//filter all samsung phones 

console.log("---filter samsung phone ");

const Samsung = smartphoneArray.filter( (phone) => { return phone.brand === "Samsung"});

console.log(Samsung);

//filter colors

console.log('-----filter colors----');

const white = smartphoneArray.filter ((phone) => {return phone.Colors.includes('White')});

console.log(white);


//map phones

const brandphones = smartphoneArray.map ((phone) => {return phone.brand});

console.log(brandphones);

//find unique brands in array 

const uniqueBrands = Array.from(new Set(brandphones));  // Array.form used for make array of new set 

console.log(uniqueBrands);





