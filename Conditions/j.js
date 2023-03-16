/*var car = 'bmw';

var result = '';

switch (car) {

case 'vw':

case 'audi':

case 'bmw':

result = 'Great german car!';

break;

case 'fiat':

result = 'Good Italian car!';

break;

default:

result = 'I don\'t know';

break;

}
console.log(result)*/

/*var punishment = '';

for (var i = 0; i < 100; i++) {

punishment += 'I will never do this again\n';

}
console.log(punishment)*/

/*var res = '\n';

for (var i = 0; i < 5; i++) {

for (var j = 0; j < 5; j++) {

res += '*\t';

}

res += '\n';

}
console.log(res)*/

/*var a = ['a', 'b', 'c', 'x', 'y', 'z'];

var result = '\n';

for (var i in a) {

result += 'index: ' + i + ', value: ' + a[i] + '\n';

}
console.log(result)*/

//Write a code to find the sum of first 10 natural numbers and show that sum on screen.
/*function canYouSpotTheProblem() {

  "use strict";
  var counter = "";
  for (counter = 0; counter < 10; counter++)
  
  console.log("Happy happy");
  
  }
  
  canYouSpotTheProblem();*/

  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }
  
  console.log(containsNumbers('1b8952abd'));