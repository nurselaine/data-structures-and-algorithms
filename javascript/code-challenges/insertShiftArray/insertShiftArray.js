'use strict';

const insertShiftArray = (arr, value) => {
  let newArr = [];
  let mid = Math.round((arr.length -1)/2);

  let i = 0;
  let j = 0;
  while(i <= arr.length){
    if(i === mid){
      newArr[i++] = value;
    } else {
      newArr[i++] = arr[j++];
    }
  }
  return newArr;
};

insertShiftArray([1,2,4,5], 3);
