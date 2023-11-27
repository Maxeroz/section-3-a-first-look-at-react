// Why Do Front-End Frameworks Exist?
// React vs. Vanilla JavaScript
// What is React?
// Setting Up Our Development Environment

const flickSwitch = function (arr, result = true) {
  return arr.map((word, i) => {
    if (word === "flick") result = !result;
    return result;
  });
};

console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));

let a = 1;
let b = 2;
a = a + 1;

console.log(a, b);
