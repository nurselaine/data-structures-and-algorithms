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
    console.log(bucket);
    if(bucket){
      let curr = bucket.head.next;
      while(curr.data.key !== key && curr.next != null){
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
    return buckets;
  };
};

function repeatWord(str){
  let arr = str.split(' ');
  let unique = new Map();
  let repeat;

  for(let i = 0; i < arr.length; i++){
    let word = arr[i].toLowerCase();
      if(word.includes(',')){
        word = word.split('');
        word.pop();
        word = word.join('');
      }
    if(unique.has(word)) {
      repeat = arr[i];
      return repeat;
    } else {
      unique.set(word, true)
    };
  }
  return repeat;
}
let str = "Once upon a time, there was a brave princess who...";
let str2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
let str3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
console.log('repeat fn ',(repeatWord(str3)));

// let table = new HashTable(1024);
// console.log(table);
// console.log(table.has('heoo'));

// console.log(table);
// console.log(table.hash('elaine'));
// table.set('elaine', {name: 'Elaine', age: 23});
// table.set('ealnie', {name: 'Elaine', age: 25});
// table.set('bao', {name: 'Bao', age: 25});
// table.set('oab', {name: 'Bao', age: 27});
// table.set('heoo', {hello: 'helloo'});
// console.log(table.get('oab'));
// console.log(table.keys());
// console.log(table.has('elaine'));
// console.log(table.has('ealelainenie'));
// console.log(table.has('elaine'));

module.exports = {HashTable, repeatWord};
