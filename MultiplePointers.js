//creating pointers or values that correspond to an index or position
//and move towards the beginning, end or middle based on a certain
//condition

//efficient for solving problems with minimal space complexity

//write a function called sumZero which accepts a sorted array of integers
//Function should find the first pair where the sum is 0.
//return an array that includes both values that sum to zero
//or return undefined if a pair does not exist

//naive solution

function sumZero(arr) {
  for (var i = 0; i< arr.length; i++) {
    for(let j = i+1; j< arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//optimized solution

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = left + right;
    if(sum === 0) {
      return [left, right]
    } else if(sum > 0) {
      right--
    } else {
      left++
    }
  }
}