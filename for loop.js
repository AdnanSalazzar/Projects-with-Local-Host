const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//in here you can do if statement to skip or condition but in for eachwe have to go throigh it

for (const value of numbers) {
  console.log(value);
}

numbers.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

///Deconstructing Array now

const [first, second, third, ...restofThem] = numbers;
first;
second;
third;
restofThem;

///How to copy number
/* 
const copyofNumberArray = [...numbers]; */

const copyofNumberArray = [...numbers];
copyofNumberArray;

//Finding item with idex

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

console.log(names.indexOf("Alice", 1));

console.log(names.indexOf("Adam"));

console.log(names.lastIndexOf("Bob"));

console.log(names.findIndex((name) => name === "Tiff"));
console.log(names.find((name) => name === "Tiff"));

///include some and every
const digits = [10, 20, 30, 40, 50];

console.log(numbers.includes(10));
//somewhere in the arrray this condition is ticked once
console.log(digits.some((num) => num > 20));
console.log(digits.every((num) => num > 20));

/////
//Filter loops through array and u decide if it stay or not !

const boundTen = digits.filter((value) => value > 20);
console.log(boundTen);

const people = [{ names: "John" }, { names: "Merry" }];

const jPeople = people.filter(({ names }) => names.startsWith("J"));
console.log(jPeople);

///multiple in one line
const midValue = digits.filter((num) => num > 10).filter((num) => num < 50);
midValue;

///filter with different arguments  value , index , array
const progressionArray = digits.filter((v, i, a) => a.includes(v + 10));
console.log(progressionArray);

///slice
const prevmidValue = digits.filter((num) => num > 10).filter((num) => num < 50);
midValue;

// first is inclusve sencond is exclisve
const middleVaue = digits.slice(1, 4);
console.log(midValue);

/// map

const numbers2 = [-10, 20, 30, -40];

const numberMul10 = numbers2.map((v) => v * 10);
numberMul10;

const allpositive = numbers2
  .filter((value) => value >= 0)
  .map((value) => value * 100);
allpositive;

///flat

const numeber = [
  [10, 20, 30],
  [10, 20, 30],
  [10, 20, 30],
];

const onearray = numeber.flat();
onearray;

const onearray2 = numeber.flat(Infinity);
onearray2;

///reduce
numbers;
let sum = 0;
for (const value of numbers) {
  sum = sum + value;
}

sum = 0;
sum;
numbers2;
let summ;
///function and initial value
sum = numbers.reduce((sum, value) => {
  return sum + value;
}, 0);

numbers.reduce((sum, value) => (sum += value), 0);
sum;

names;

const listofnames = names.reduce((str, name , index) => {
  return str + (index > 0 ? ", " : "") + name;
}, "");

listofnames;

const listofnames2 = names.join(",")
listofnames2