//implement a function called countUniqueValues which accepts a sorted array
//and counts the unique values in the array.
//there can be negative numbers in the array, but it will always be sorted

//my solution

function countUniqueValues (arr) {
  if (arr.length < 2) {
    return arr.length
  }

  let count = 1;

  let prev = 0;
  let current = 1;

  while(current < arr.length) {
    if(arr[current] === arr[prev]) {
      current++
    } else {
      count++;
      prev = current;
      current++;
    }
  }

  return count;

}
