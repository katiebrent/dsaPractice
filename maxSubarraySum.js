//this pattern involves creating a window which can either be an array or number
//from one position to another

//depending on certain conditions, the window either increases or closes (and a
//new window is created)

//very useful for keeping tack of a subset of data in an array or string.


//write a function called maxSubarraySum which accepts an array of integers
//and a number called n. The function should calculate the maximum sum of n
//consecutive elements in an array.

//naive solution

function maxSubarraySum(arr, n) {
  if(n > arr.length) {
    return null;
  }

  var max = -Infinity;

  for (let i=0; i<arr.length - n + 1; i++) {
    temp = 0;
    for(let j = 0; j< n; j++) {
      temp+= arr[i + j]
    }
    if(temp > max) {
      max = temp;
    }
  }
  return max;

}

//sliding window approach

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) {
    return null
  };

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for(let i = num; i<arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//[1, 8, 2, 9, 3, 1, 4], 3