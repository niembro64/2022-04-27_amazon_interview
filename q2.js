const getMaxFreq = (s) => {
  var max = 0;
  var temp = 0;
  for (var i = 0; i < s.length; i++) {
    temp++;
    if (s[i] != s[i + 1]) {
      max = temp > max ? temp : max;
      temp = 0;
    }
  }
  return max;
};

const getMinFreq = (s) => {
  var min = 9999999999999;
  var temp = 0;
  for (var i = 0; i < s.length; i++) {
    temp++;
    if (s[i] != s[i + 1]) {
      min = temp < min ? temp : min;
      temp = 0;
    }
  }
  return min;
};

const getFreqDev = (s) => {
  var maxFreqDev = 0;
  var temp = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      temp = getMaxFreq(s.substring(i, j)) - getMinFreq(s.substring(i, j));
      maxFreqDev = temp > maxFreqDev ? temp : maxFreqDev;
    }
  }

  return maxFreqDev;
};

var s = ["aaabbbcccz", "abbcccddddz", "abaabbaaabbbbz"];

for (var i = 0; i < s.length; i++) {
  // console.log(getFreqDev(s[i]));
  // console.log(getMaxFreq(s[i]));
  // console.log(getMinFreq(s[i]));
  console.log(getFreqDev(s[i]));
}
