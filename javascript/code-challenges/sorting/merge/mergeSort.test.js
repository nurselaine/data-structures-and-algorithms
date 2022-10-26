const { mergeSort } = require('./mergeSort');
let test1 = [8, 4, 23, 42, 16, 15];
let test2 = [6,2,4,1,7];

describe('Merge Sort Array', () => {
  it('Can sort an odd numbered array', () => {
    mergeSort(test2);

    expect(test2).toEqual([1,2,4,6,7]);
  });
  it('Can sort an even numbered array', () => {
    mergeSort(test1);

    expect(test1).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  })
})