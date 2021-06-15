//write a function called averagePair. Given a sorted array of integers and a
//target average, determine if there is a pair of values in the array where the
//average of the pair equals the target average.

function averagePair (arr, avg) {
  if(arr.length < 2) {
    return false
  }


  let current = 0;
  let next = 1;

  while(current < arr.length) {
    if((arr[current] + arr[next])/2 === avg) {
      return true;
    }
    if(next === arr.length - 1) {
      next = current + 1;
      current++
    } else {
      next++
    }
  }
  return false;
}