//Problem 3: Write a function called fib() that returns a list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34. (To construct this list, just use a FOR loop; underscore does not make your life easier here.)

function fib() {

  let x = 0;
  let y = 1;
  let list = [];
  let temp = 0;

  for (let i = 0; list.length < 100; i++) {

    list[i] = temp;
    temp = x + y;
    y = x;
    x = temp;

  }

  return list;

}

console.log(fib());

/* non underscore solution
function numsToStrings(nums) {

  let strings = [];

  for (let i = 0; i < nums.length; i++) {

    let string = `${nums[i]}`;
    strings[i] = string;

  }

  return strings;

}
*/

function numsToStrings(nums) {

  return _.map(nums, function(num){ return `${num}`; });

}

console.log(numsToStrings(fib()));

/* non underscore solution
function numEvenNums(nums) {

  let count = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 == 0)
      count++;

  }

  return count;

}
*/

function numEvenNums(nums) {

  let evenArr = _.filter(nuns, function(num){ return num % 2 == 0; });

  return evenArr.length;

}

console.log(numEvenNums(fib()));