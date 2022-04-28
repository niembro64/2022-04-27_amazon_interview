const getReversed = (s) => {
  var r = "";
  for (var i = 0; i < s.length; i++) {
    r += s[s.length - 1 - i];
  }
  return r;
};

const countOnes = (s) => {
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      count++;
    }
  }
  return count;
};

const getNumMismatches = (s) => {
  var m = 0;
  var r = getReversed(s);
  for (var i = 0; i < Math.floor(s.length); i++) {
    if (r[i] != s[i]) {
      m++;
    }
  }
  return m;
};

const getMid = (s) => {
  return s[Math.floor(s.length / 2)];
};

const numShifts = (s) => {
  if (s.length == 0) {
    return 0;
  }
  // if odd remove middle element;
  var numShifts = -1;
  var r = getReversed(s);
  var numOnes = countOnes(s);
  var numMismatches = getNumMismatches(s);
  // console.log(numMismatches);
  var isEven = s.length % 2 == 0 ? true : false;

  if (isEven) {
    if (numOnes % 2 == 0) {
      // EVEN EVEN
      // 1100 1010 1001 111000
      // 4    4    0
      //////////////////// good
      numShifts = numMismatches / 4;
      return numShifts;
    } else {
      // EVEN ODD
      // 1000
      //////////////////// good
      numShifts = -1;
      return numShifts;
    }
  } else {
    if (numOnes % 2 == 0) {
      // ODD EVEN | zero to center
      // 110
      numShifts = Math.floor(numMismatches / 4);
      if (getMid(s) == "1") {
        numShifts++;
      }
      return numShifts;
    } else {
      // ODD ODD | one to center
      // 100
      numShifts = Math.floor(numMismatches / 4);
      if (getMid(s) == "0") {
        numShifts++;
      }
      return numShifts;
    }
  }
};

var see = ["0011", "1010", "1001"];
var seo = ["0001", "0100"];
var soe = [
  "00011",
  "11011",
  "11000",
  "10100",
  "1111000",
  "111111000",
  "111101100",
  "111111110000000",
  "1111111111000000000",
];
var soo = ["00111", "11010", "10101", "00111"];

sxx = ["10", "1", "", "10001", "01010", "01001"];
var s = sxx;
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
  // console.log(getReversed(s[i]));
  console.log(numShifts(s[i]));
  // numShifts(s[i]);
  console.log();
}

