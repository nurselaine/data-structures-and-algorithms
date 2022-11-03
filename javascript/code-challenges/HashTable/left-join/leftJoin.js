'use strict';
const { HashTable } = require('../hashTable');

// const leftJoin = (table1, table2) => {
  
//   let arrayKeys = table1.keys();
//   let tablesMatrix = new Array[arrayKeys.length][];

//   for(let i = 0; i < arrayKeys.length; i++){
//     for(let j = 0; j < 3; j++){
//       if(j === 0){
//         tablesMatrix[i][j] = arrayKeys[i];
//       } else if (j === 1){
//         tablesMatrix[i][j] = table1.get(arrayKeys[i]);
//       } else if (j === 2){
//         if(table1.get(arr[i]) === table2.get(arr[i])){
//           tablesMatrix[i][j] = table2.get(arrayKeys[i]);
//         } else {
//           tablesMatrix[i][j] = 'NULL';
//         }
//       }
//     }
//   }
//   return tablesMatrix;
// };

const leftJoin = (table1, table2) => {
  let results = []; // will push arrays into this array

  // we will now create arrays where table1 and table2 share keys
  let keys = table1.keys(); 
  let count = 0;
  console.log(keys.length);
  while(count < keys.length){
    console.log(keys[count]);
    let keyArray = [];
    keyArray.push(keys[count]);
    keyArray.push(table1.get(keys[count]));

    if(table2.has(keys[count])) {
      keyArray.push(table2.get(keys[count]));
    } else {
      keyArray.push('NULL');
    }

    results.push(keyArray);
    count++;
  }
  return results;
}

let table1 = new HashTable(1024);
table1.set('diligent', 'employed');
table1.set('fond', 'enamored');
table1.set('guide', 'usher');
table1.set('outfit', 'garb');
table1.set('wrath', 'anger');


let table2 = new HashTable(1024);
table2.set('diligent', 'idle');
table2.set('fond', 'averse');
table2.set('guide', 'follow');
table2.set('flow', 'jam');
table2.set('wrath', 'delight');

// leftJoin(table1, table2);
console.log(leftJoin(table1, table2));

module.exports = { leftJoin };