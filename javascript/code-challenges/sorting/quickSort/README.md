# QuickSort

  Sort algorithm that uses a pivot and a left and a right pointer. With these pointers, the pivot is a marker to either swap left and right or vice versa. 

### Algorithm
  First set a pivot, it can be any element but for now we will use the right most element. 

  After that we will 


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