/*
Problem Domain: Reverse an array without using built-in methods. Function should take in one parameter arr and return arr reversed

Visual/Algo
[1, 2 ,3, 4, 5] would be [5, 4, 3, 2, 1]
use two pointers: one at the start and one at the end of the arr
use another function that swaps two numbers and takes two numbers as params
[1 and 5 would swap places] => [5, 2, 3, 4,1]
this way, reversal can be done in place

Pseudocode

function reverseArr(arr){
  make two pointers
  start
  end

  use a while loop(start < end){
    move pointers each iteration
    arr[end--] = swapNumbers(start, end)[1];
    arr[start++] = swapNumbers(start,end)[0];
  }
}

function swapNumbers(start, end){
  use a temp to swap start and end
  temp = start
  end = start
  start = temp
  return [start, end]
}
*/ 

// Code

const reverseArray = (arr) => {
  let reverse = [];
  let count = arr.length -1;

  for(let num in arr){
    reverse.push(arr[count--]);
  }

  return reverse;
}

// const reverseArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while(start < end){
//     // console.log(arr[start], arr[end]);
//     let s2 = end;
//     let e2 = start;
//     // console.log(arr[e2], arr[end]);
//     console.log(arr);
//     arr[start] = arr[end];
//     console.log(arr);
//     arr[end] = arr[start];
//     console.log(arr, end);

//     start++;
//     end--;
//   }

//   return arr;
// }

// const swap = (start, end) => {
//   let temp = start;
//   start = end;
//   end = temp;

//   return [start, end];
// }


// Tests

let test_1 = [1,2,3,4,5];
let test_2 = [0,0,0,2,5,92494,2931020];
let test_3 = [];

// console.log(reverseArray(test_1));
console.log(reverseArray(test_1));
test_1.reverse();
console.log(reverseArray(test_2));
test_2.reverse();
console.log(reverseArray(test_3));
test_3.reverse();

// Big O Notation
// Time complexity is O(N) because a loop is being used to iterate the entire input. The time it takes to reverse the array is directly proportional to the size of the input
// Space Complexity is O(1) - no extra data structure was added that matched the same size as the input
