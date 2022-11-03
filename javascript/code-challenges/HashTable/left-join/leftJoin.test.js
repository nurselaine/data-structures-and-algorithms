const { HashTable } = require('../hashTable');
const { leftJoin } = require('./leftJoin');

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

let expectedResponse =  [
  [ 'fond', 'enamored', 'averse' ],
  [ 'guide', 'usher', 'follow' ],
  [ 'wrath', 'anger', 'delight' ],
  [ 'diligent', 'employed', 'idle' ],
  [ 'outfit', 'garb', 'NULL' ]
];


describe('Left Join Function', () => {
  test('Returns a data structure with shared keys from both hash tables', () => {
    let responseMatrix = leftJoin(table1, table2);

    expect(responseMatrix).toEqual(expect.arrayContaining(expectedResponse));
  })
})