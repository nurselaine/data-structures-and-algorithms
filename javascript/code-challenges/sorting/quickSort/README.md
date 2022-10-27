# QuickSort

  Sort algorithm that uses a pivot and a left and a right pointer. With these pointers, the pivot is a marker to either swap left and right or vice versa. 

### Algorithm
  First set a pivot, it can be any element but for now we will use the right most element. 

  After that we will use a helper function called partition to find the pivot point of the array. 

  Within partition, the midpoint of the array is assigned to the pivot point and a left and right pointer are initialized. The left and right pointer will increment/decrement towards to pivot point and once they reach +/- pivot index, they will be swapped only if the right pointer is < the left pointer

  this process is repeated until swapping is not longer possible. 

  Once the partition returns, it will initilaize the mid pointer in the quickSort function. Then the function will invoke quickSort and pass in the left pointer and newly initially mid pointer. The process for partitioning will repeat and the left and right pointers will moves towards the pivot point of the left half of the array and swap elements accordingly until it can no longer swap.

  Now back in the quickSort function, we move on to invoke quickSort again but passing in the mid and the right pointer to partition. Swapping occurs in this half of the array until it is no longer able to.

  Now we have both the left side of the array sorted and the right side of the array sorted, so the returning array of quickSort is now fully sorted.


### Alternative Lab
  Implement the functions sortYear, sortTitle, and inGenre in the file sort.ts.
    Execute your tests while developing using npm run watch
    Execute your tests in CI using npm test

  **Functions:**
  sortYear
  - Arguments: movies array
  - Sorts the input array by year, in ascending order.
  - Efficiency: O(N), sort method is O(n*log(n)) time complexity and space complexity O(1)
  
  sortTitle
  - Arguments: movies array
  - Sorts the input array by title, ignoring "The " at the beginning of titles.
  - Efficiency: O(N), sort method is O(n*log(n)) time complexity and space complexity O(1)

  inGenre
  - Arguments: movies array, genre string
  - Filters the input array, returning only those movies who include genre
  - Filter function uses O(N) time complexity 