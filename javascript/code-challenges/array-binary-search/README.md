## Binary Search

#### Collaborators: Elaine Huynh & Teresa Philips

### WhiteBoard Process

#### Problem Domain

Write a function called **BinarySearch** which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

  **input**: array, value (any datatype matching with array type)
  **output**: index of value (integer)

#### Testcases
  1. What if array contains multiple occurences of the value
  2. What are the constraints of the arrays size?
  3. Arrays with of even numbered lengths, what is considered the middle? The element to the left or the element to the right?

#### Visualization
  [1, 2, 3, 4, 5], 4 => 3         [2, 4, 6, 7, 9], 11 => -1

  Solution 1:
  <br>
  [**1**, 2, **3**, 4, **5**]
  <br>
  declare a variable for middle pointer as well as a start and end pointers of the array

  Determine whether given value is greater than or less than the element at midpoint
  Since 5 greater than 3 => change start pointer to be mid pointer so the next search would be performed on [3, 4, 5]

  Now calculate updated middle pointer to repeat steps until match is found:
  middle pointer is equal to the sum of start index and end index / 2


          [3, 4, 5], 4 => 4 === middle pointer value, so return middle pointer
  Determine whether given value is greater than OR less than OR equal to middle point. Since middle point is equal to given value of 4 then we can return the middle index.

  If 4 was not inside the array then return -1

#### Algorithm
Solution 1:
  1. Declare function called binarySearch that takes in an array and value
  2. Declare variable for a start pointer, end pointer, and a middle pointer
  3. Assign start pointer to zero and end pointer to the length of the array subtracted by one.
  4. Write an expression to find the middle pointer by adding the values of the start pointer and end pointer then divide the sum by two.
  5. Iterate the array using a while loop until start pointer is equal to or greater the end pointer
  6. Use conditional logic to compare if our value is greater than, less than, or equal to search key
  7. Depending on the result, move the start pointer to the middle pointer plus one OR move the end pointer to the middle pointer minus one
  8. Repeat steps 6 and 7 until search key matches to middle pointer. Once search key matches, then return the middle pointer
  9. If middle pointer isn't found, exit the while loop, then return -1

  [view code here](./binarySearch.js)


#### Big O Notation
solution 1: time complexity is O(N) because one loop is being used to iterate through the entire input. Space complexity is O(N) because a new array is being used to copy the given array

soluation 2: time complexity O(Log(N)) because input size is being cut in half at each action being performed. Size complexity is O(1) where the new arrays being used are smaller than the given array size. No data structures greater than the given array is being used.

[Challenge Two](https://firebasestorage.googleapis.com/v0/b/remo-conference.appspot.com/o/Event%2FChatMedia%2Fjie6qqcf59o%2F9_20_22%20Challenge%20Two.png?alt=media&token=07b66403-f48a-42cb-817b-1b4793848529)
