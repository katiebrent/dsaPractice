function validAnagram (str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }

  let frequencyStr1 = {};
  let frequencyStr2 = {};

  for(var i = 0; i< str1.length; i++) {
    frequencyStr1[str1[i]] = (frequencyStr1[str1[i]] || 0) + 1
  };

  for(var i = 0; i< str2.length; i++) {
    frequencyStr2[str2[i]] = (frequencyStr2[str2[i]] || 0) + 1
  };

  for(var key in frequencyStr1) {
    if(!frequencyStr2[key]) {
      return false
    }
    if(frequencyStr1[key] !== frequencyStr2[key]) {
      return false
    }
  }
  return true;
};