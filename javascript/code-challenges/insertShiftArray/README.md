## Array Insert Shift

#### Collaborators: Elaine Huynh & Stephen Clemmer

### WhiteBoard Process

#### Problem Domain

Write a function called **insertShiftArray** which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

  **input**: array, value (any datatype matching with array type)
  **output**: array (new array with added value)

#### Testcases
  1. Is array emtpy
  2. Does the array need to be returned in it's original form or can it be changed in place
  3. What are the constraints of the arrays size?
  4. Do we add given value right of center when adding to an odd numbered array or do we replace the middle value in the array

#### Visualization
  [1,2,4,5] 3 => [1,2,3,4,5] value 3 has been added to the middle of the array

 Solution 1:
  [1,2,4,5] 3 & newArr [] => newArr[1,2,3,4,5]
    a. Use an emtpy array to copy all of the given array's values
    b. Find the midpoint of the given array and use conditional logic while iterating through given array to add given value into newArr

 Solution 2:
  [1,2,4,5] 3 => [1,2] [4,5] => [1,2,3] [4,5] => [1,2,3,4,5]
    a. Split the array in half
    b. Add given value to the end of front array
    c. concatenate front and back array to return new array

#### Algorithm
Solution 1:
  1. Declare the function insertShiftArray and pass in an arry and value parameter
  2. Find and Declare a reference to the middle index of the given array and declare an empty array to return
  3. Iterate through given array using a for loop
  4. Each iteration should copy given array's elements into empty array
  5. Using conditional logic, add the given value

  [view code here](./insertShiftArray.js)

 Solution 2: this method uses in-built methods native to JS
  1. Declare the function insertShiftArray and pass in an arry and value parameter
  2. Declare a front and end arr and find midpoint of given arr
  3. Using slice() method, assign front to slice(0, mid) and end to slice(mid, arr.length -1)
  4. Use .push() to add given value to end of front arr
  5. Concatenate front to end arr and return the arr

#### Big O Notation
solution 1: time complexity is O(N) because one loop is being used to iterate through the entire input. Space complexity is O(N) because a new array is being used to copy the given array

soluation 2: time complexity O(Log(N)) because input size is being cut in half at each action being performed. Size complexity is O(1) where the new arrays being used are smaller than the given array size. No data structures greater than the given array is being used.

[Challenge Two](https://firebasestorage.googleapis.com/v0/b/remo-conference.appspot.com/o/Event%2FChatMedia%2Fjie6qqcf59o%2F9_20_22%20Challenge%20Two.png?alt=media&token=07b66403-f48a-42cb-817b-1b4793848529)
