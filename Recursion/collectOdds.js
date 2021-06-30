//takes in a list of nums and collects the odd numbers

function collectOdds(nums) {
  let result = [];

  function helper(input) {
    if(input.length === 0) {
      return;
    }
    if(input[0] % 2 !== 0) {
      result.push(input[0])
    }
    helper(input.slice(1));
  }
  helper(nums);

  return result;

}