console.log("\n\nExamples");
function add(a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(toAdd));
console.log(add(...toAdd));

var groupA = ['Veronika', 'Shelley'];
var groupB = ['James'];
var final = [3];

console.log(final);

final = [3, groupA];
console.log(final);

final = [3, ...groupA];
console.log(final);

final = [...groupB, 3, ...groupA];
console.log(final);

console.log("\n\nChallenge 1");
// write function that takes (name, age) & prints greeting:
// Hi Nicholas, you are 31
// call function using a spread on person array
var personA = ['Nicholas', 31];
var personB = ['Veronika', 30];

function greet(name, age) {
  console.log("Hi " + name + ", you are " + age + "!");
}
greet(...personA);
greet(...personB);

console.log("\n\nChallenge 2");
// Combine two arrays, loop over values, printing them out
// Hi Nicholas
var names = ['James', 'Gregory'];
var final = ['Nicholas', ...names];

function greet(name) {
  console.log("Hi " + name + "!");
}

final.forEach(function (name) {
  console.log("Hi " + name + "!");
});
