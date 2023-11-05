//1. Remove Duplicates: Write a program that removes duplicate values from an array. Use the splice() method to modify the array in place.

// write random numbers in array from 1 to 100
let count = 0;
let arr = [];
for (let i = 0; i < 50; i++) {
  arr.push(Math.floor(Math.random() * 100 + 1));
}
console.log("array before modify" + "\n", arr);
// remove duplicate values from array using splice
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1);
      count++;
    }
  }
}
console.log("array after remove dublicate values" + "\n", arr);
console.log("Removed Dublicate values quantity", count);
