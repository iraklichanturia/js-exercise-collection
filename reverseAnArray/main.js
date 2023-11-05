// 2.Reverse an Array: Create a function that takes an array as input and reverse the elements.
let arr = [];
for (let i = 0; i <= 60; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log("random array before reverse" + "\n", arr);
//use the splice() method to reverse the elements within the same array
arr.reverse();
console.log("random array after reverse" + "\n", arr);
