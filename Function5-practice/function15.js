/* -7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa
*/

function makeNewStr(arr) {
   var result = "";
   for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string" && arr[i].length > 1) { 
         result += arr[i].slice(0, 2);        
        }      
      }
      console.log(result);
    
    }
    makeNewStr([      "M",      "Anne",      12,      "Steve",      "Joe",      "John",      "David",      "Mark",      true,      "A",    ]);