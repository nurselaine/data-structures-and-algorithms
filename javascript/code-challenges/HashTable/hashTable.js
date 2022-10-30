'use strict';

const LinkedList = require('../linked-lists/LinkedList');

class HashTable{
  /**
   * Represents a hashmap
   * @constructor
   */
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   * Generates an index for a given key
   * @param {String} key
   * @returns number
   */
  hash(key){
    if(typeof(key) !== 'String') { key.toString() };

    let characters = key.split('');
    let asciiSum = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  };

  /**
   * Adds a key/value pair to linked list in hash table buck
   * @param {String} key
   * @param {*} value
   */
  set(key, value){
    let data = {[key]: value};
    let location = this.hash(key);
    let bucket = this.buckets[location];
    if(!bucket){
      bucket = new LinkedList();
    };
    bucket.insert({key, value});
    this.buckets[location] = bucket;
    // console.log(this.buckets[location].head.next);
  };

  /**
   * 
   * Finds the value associated with the key and returns the value
   * @param {String} key 
   * @returns {String}
   */
  get(key){
    let index = this.hash(key);
    let bucket = this.buckets[index];
    let value;
    if(bucket){
      let curr = bucket.head.next;
      while(curr.data.key != key && curr.next !== null){
        curr = curr.next;
      }
      value = curr.data.value;
    };
    return value;
  }

  /**
   * Finds whether value at given key exists and returns a boolean
   * @param {String} key 
   * @returns {boolean}
   */
  has(key){
    let location = this.hash(key);
    let bucket = this.buckets[location];
    if(bucket){
      let curr = bucket.head.next;
      while(curr.data.key !== key){
        curr = curr.next;
        if(curr.data.key === key){
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Returns collection of keys in hash table
   * @returns {Array}
   */
  keys(){
    let buckets = [];
    this.buckets.forEach(bucket => {
      let curr = bucket.head.next;

      if(bucket.length > 1){
        while(curr !== null){
          buckets.push(curr.data.key);
          curr = curr.next;
        }
      } else {
        buckets.push(curr.data.key);
      };
    });
    console.log('bucket--------',buckets);
    return buckets;
  };
};

let table = new HashTable(1024);

// console.log(table);
// console.log(table.hash('elaine'));
table.set('elaine', {name: 'Elaine', age: 23});
table.set('ealnie', {name: 'Elaine', age: 25});
table.set('bao', {name: 'Bao', age: 25});
table.set('oab', {name: 'Bao', age: 27});
// console.log(table.get('oab'));
console.log(table.keys());
console.log(table.has('elaine'));
console.log(table.has('money'));

module.exports = HashTable;
