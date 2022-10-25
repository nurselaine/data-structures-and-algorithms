'use strict';
// import {insertionSort} from './insertion/insertionSort';

const insertionSort = (arr) => {

  for(let i = 1; i < arr.length; i++){

    let j = i -1;
    let temp = arr[i];

    while(j >= 0 && temp < arr[j]){

      arr[j + 1] = arr[j];
      j = j -1;

      arr[j + 1] = temp;
    };
  };
  return arr;
};


let test1 = [8, 4, 23, 42, 16, 15];

describe('Validate Insertion Sorting', () => {
  it('Can sort an integer array from min to max values', () => {
    test1 = insertionSort(test1);

    expect(test1).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
