'use strict';

const binarySearch = (array, value) => {
  let startPoint = 0;
  let endPoint = array.length - 1;
  let middlePoint = Math.round((startPoint + endPoint)/2);

  while(startPoint < endPoint){

    if(array[middlePoint] < value){
      startPoint = middlePoint + 1;
    }

    if(array[middlePoint] > value){
      endPoint = middlePoint - 1;
    }

    if(array[middlePoint] === value) {
      return middlePoint;
    }
    middlePoint = Math.floor((startPoint + endPoint)/2);
  }
  return -1;
};

console.log(binarySearch([2,4,6, 9], 7));
