const getReversed = (s) => {
  var r = "";
  for (var i = 0; i < s.length; i++) {
    r += s[s.length - 1 - i];
  }
  return r;
};

const numShifts = (s) => {
  var numShifts = -1;
  var r = getReversed(s);
  var noMatch = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] != r[i]) {
      noMatch++;
    }
  }
  return noMatch / 4;
};

var s = ["110011", "1010", "111000", "10110100"];

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
  console.log(getReversed(s[i]));

  console.log(numShifts(s[i]));
}
