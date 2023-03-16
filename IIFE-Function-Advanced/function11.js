 /*11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 111 
   4
4321*/
// function writeNumbers(arr) {
//   var max = 0;
//   var newArr = [];
//   for (i = 0; i < arr.length; i++ ) {
//       arr[i] = arr[i].toString();
//       if (arr[i].length > max) {
//           max = arr[i].length;
//       }
//   }
//   for (i = 0; i < arr.length; i++ ) {
//       for (j = 0; j < arr[i].length; j++) {
//           var blank = (max - arr[i].length);
//           var str = " ";
//       }
//       newArr.push(str.repeat(blank) + arr[i]);
//   }
//   return newArr.join("\n");
// }
// console.log(writeNumbers([78, 111, 4, 4321]));


// function rightAlignNumbers(numbers) {
//   for (let number of numbers) {
//     console.log(String(number).padStart(4));
//   }
// }
// console.log(writeNumbers([78, 111, 4, 4321]));

function alignRight(arr) {
  let maxLength = Math.max(...arr.map(x => x.toString().length));
  arr.map(x => {
    let diff = maxLength - x.toString().length;
    console.log(' '.repeat(diff) + x);
  });
}
alignRight([78, 111, 4, 4321]);