'use strict';
const HashTable = require('./hashTable');

let test1 = new HashTable(1024);

describe('HashTable Class', () => {
  it('Can instantiate an empty hashtable with defined size', () => {
    let hashtable = new HashTable(1024);

    expect(hashtable.size).toEqual(1024);
    expect(hashtable[9]).toBeFalsy();
    expect(hashtable).toBeInstanceOf(HashTable);
  });

  it('Can set a key/value to your hashtable', () => {
    test1.set('test1', {test: 'Test1', number: 1});
    test1.set('test2', {test: 'Test2', number: 2});
    test1.set('test3', {test: 'Test3', number: 3});

    expect(test1.get('test1')).toEqual({test: 'Test1', number: 1});
    expect(test1.get('test2')).toEqual({test: 'Test2', number: 2});
    expect(test1.get('test3')).toEqual({test: 'Test3', number: 3});
  });

  it('Retrieving based on a key returns the value stored', () => {
    expect(test1.get('test1')).toEqual({test: 'Test1', number: 1});
    expect(test1.get('test2')).toEqual({test: 'Test2', number: 2});
    expect(test1.get('test3')).toEqual({test: 'Test3', number: 3});
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let response = test1.get('test4');

    expect(response).toBeFalsy();
    expect(response).toBeUndefined();
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let result = test1.keys();
    const expected = ['test2', 'test1', 'test3'];

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(3);
  });

  it('Successfully handle a collision within the hashtable', () => {
    test1.set('1test', {test: '1Test', number: 1});
    test1.set('2test', {test: '2Test', number: 2});
    test1.set('3test', {test: '3Test', number: 3});

    expect(test1.get('1test')).toEqual({test: '1Test', number: 1});
    expect(test1.get('2test')).toEqual({test: '2Test', number: 2});
    expect(test1.get('3test')).toEqual({test: '3Test', number: 3});
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let response1 = test1.get('test1');
    let response2 = test1.get('1test');

    expect(response1).toEqual(expect.objectContaining({test: 'Test1', number: 1}));
    expect(response2).toEqual({test: '1Test', number: 1});
  });

  it('Successfully hash a key to an in-range value', () => {
    let response = test1.hash('njaigaj');

    expect(response).toBeLessThanOrEqual(1024);
    expect(response).toBeGreaterThanOrEqual(0);
  })
})