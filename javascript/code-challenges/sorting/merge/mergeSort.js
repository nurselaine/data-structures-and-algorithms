let test1 = [8, 4, 23, 42, 16, 15];
let test2 = [6,2,4,1,7];

const mergeSort = (arr) => {
  let n = arr.length;

  if(n > 1){
    let mid = Math.ceil(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  };

  if(i === left.length){
    while(j < right.length){
      arr[k] = right[j++];
      k++;
    }
  }; 
  if (j === right.length){
    while(i < left.length){
      arr[k] = left[i++];
      k++;
    }
  };
} 

mergeSort(test1);

module.exports = { mergeSort };