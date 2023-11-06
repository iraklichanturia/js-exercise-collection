let splitIndex = Number(prompt('Enter split index'));
let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * 30 + 1));
}
console.log("Original Array:", arr);

// Use splice to split the array
if (splitIndex >= 0 && splitIndex <= arr.length) {
  const firstPart = arr.splice(0, splitIndex);
  console.log("First Part:", firstPart);
  console.log("Second Part:", arr);
} else {
  console.log("Invalid split index");
}
