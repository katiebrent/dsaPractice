//write a function that accepts two arrays and returns true
//if every value in the array has it's corresponding value squared
//in the second array. Frequency must be the same.

// naive solution
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  for(var i = 0; i< arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}


//optimized solution

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for(var i = 0; i< arr1.length; i++) {

      frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }

  for(var i = 0; i< arr1.length; i++) {

      frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }

  for(var key in frequencyCounter1) {
    if(!frequencyCounter2[key ** 2]) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true;
}
