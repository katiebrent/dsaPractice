//write a function called power which accepts a base and an exponent.
//the function should return the power of the base to the exponent

function power(num, pow) {
  if(pow === 0) {
    return 1;
  }

  return (num * power(num , pow - 1));

}

console.log(power(2, 4))