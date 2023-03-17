/*4.	Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

var array = [6, 11, 9, 0, 3];

var filtersEven = array => array.filter(num => num % 2 === 0)

console.log(filtersEven(array));
//  % operator is used to determine if a number is even

// function filterEvens(arr) {
//   let evens = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }

// console.log(filterEvens([6, 11, 9, 0, 3]));