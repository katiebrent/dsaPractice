// write a function called findLongestSubstring which accepts a string and
//returns the length of the longest substring with all distinct characters

function findLongestSubstring (str) {

  if(str.length === 1) {
    return 1;
  }
  let longest = 0;

  let counter = {};

  let start = 0;
  let end = 0;

  while (end < str.length) {
    if(counter[str[end]]) {
      counter[str[start]] = undefined;
      start++
      end = start
    };
    if(!counter[str[end]]) {
      counter[str[end]] = 1;
      let tempLength = end - start + 1;
      if(tempLength > longest) {
        longest = tempLength;
        end++
      }
    }

  }

  return longest


}
