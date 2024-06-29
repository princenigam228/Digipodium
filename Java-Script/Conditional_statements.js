function isPositive(num) {
    // Your code here
    if (num>0){
        return "Positive"
    };
  };
  console.log(isPositive(2));  // Positive
  console.log(isPositive(-3)); // (no output)
  console.log(isPositive(0));  // (no output)

  //checkAge

  function checkAge(age) {
    // Your code here
    if (age>18){
        return 'Adult'
    };
  };
  console.log(checkAge(20));  // Adult
  console.log(checkAge(15));  // Minor
  
  