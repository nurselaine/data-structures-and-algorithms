const { quickSort, partition, swap } = require('./quickSort');

const test1 = [5,3,7,6,2];
const test2 = [1];
const test3 = [];

describe('quicksort algorithm', () => {
  it('Can sort an array in ascending order', () => {
    quickSort(test1, 0, test1.length -1);

    expect(test1).toEqual([2,3,5,6,7])
  });

  it('Can sort an array with one element', () => {
    quickSort(test2);

    expect(test2).toEqual([1])
  });

  it('Can handle an empty array', () => {
    quickSort(test3, 0, 0);

    expect(test3).toEqual([]);
  });
});

