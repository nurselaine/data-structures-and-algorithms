# Hashmap Left Join

## Problem

  Create a function that take two hash maps and returns a data structure that holds the results of both hash maps using the LEFT JOIN logic

  ### Input: 
    - First param: Hash map that has word strings as keys and a string as the value. The value represents a synonym to the key string
    - Second param: Hash map that has word strings as keys and a string a the value. The value represents an antonym to the key string

## Algorithm 
1. Declare function and matrix to hold returning datastructure
  - Matrix is a 2d array, meaning an array with arrays. Each array within the array will hold the content's of the hash map's bucket. Each array within the matrix will represent a bucket in the hashtable and the values within the array will correlate to the key and values within the hash tables
  a. It will display the name/key of the bucket in the first index
  b. Next it will display the values within the bucket in consective indexes of the array
  c. Lastly, if no values exist in the right hashmap, 
  'NULL' should be added into the array
2. Using the left hash table (first param), retrieve an array of the hash table keys and initialize a array called keys
  a. The Matrix should have a total of the key arrays and each array would be at least 2 values
3. With the left hash table, begin traversing the hash table using the keys array. 
  a. Each traversal of the key should be compared with the right hash table (2nd parameter) key. 
  b. If a key is shared between the two hash maps. retrieve the values of the right hash map value using the shared key
  c. With that value, append it to the matrix at the according index of [current key][last index]
4. Once the entire hash table has been travsered, all values should have been added into the matrix
5. Return the matrix 