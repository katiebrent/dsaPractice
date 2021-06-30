//write a function that takes in an array of numbers and
//returns the product of them.

function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3, 10]))