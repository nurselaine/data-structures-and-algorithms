# HashTable/Hash map

### Challenge
  How to implement a hash table class using an array and handles collisions using a linked list. Hash maps are a collection based on the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object built in JavaScript. Map object holds key-value pairs and keeps track of the insertion order of each key. Each key in the Map object is unique, and can be accessed in O(1) time. HashMaps have a pre-defined size and generate an index for each key/value pair being inserted. When multiple key/value pairs share the same index, it is known as a collision. In order to maintain time efficiency of searching using a HashMap, we do not want collisions to occur; however, in the case of a collision, it can be handled by assigning each bucket {index} in the set array to a linked list when assigned a key/value pair. Doing this provides the flexibility of chaining on key/value pairs within the same bucket.

  ## Approach and Efficiency
    Retreiving data from Hash Map (best scenario) time complexity should be O(1); however in the case of a unreasonably sized table and frequent collisions, the time efficiency would be dependent on how large the bucket it is traversing

    Adding to a hash map will be O(1) in this implementation

    Returning an array of all keys within the hash map would take O(N + M) complexity as it requires traversal of each bucket and each bucket's linked list. N being the length of the hash table and m being the lenth of the linked lists within each bucket

  # API

  set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
  
  get
    - Arguments: key
    - This method should hash the key and retreive the key's value from the correlating bucket handling linked list traversal as needed.
    - Returns: Value associated with that key in the table
  
  has
    - Arguments: key
    - This method should hash the key and traverse the correlating linked list if necessary to return the key's value
    - Returns: Boolean, indicating if the key exists in the table already.
  
  keys
    - This method should traverse the entire hash table and add each key to an array that will be returned
    - Returns: Collection of keys

  hash
    - Arguments: key
    - this method will calculate a unique index using the key's characters. This index will create a linked list within a bucket
    - Returns: Index in the collection for that key

  repeatedWord
    - Arguments: string
    - this method finds the first word to occur more than once in a string and returns that word
    - Time efficiency requires O(N) worst case scenarios; however, this algorithm is adaptive and will return once the first repetitive string is found. Depending on the input, the output is O(N - M). Space complexity is dependent on the size of the hashtable. 
    - returns string
