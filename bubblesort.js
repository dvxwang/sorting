'use strict';

// bubbleSort takes an array and returns a sorted array.
function bubbleSort(unSortedArray) {
  // if(!unSortedArray.length) return [];
  this.count=0;

  let sortedArray = unSortedArray.slice();

  //iterating the array
  for(let j = sortedArray.length-1; j>0; j--) {
    //iterating the index
    for(let i = 0; i<j; i++) {
      let a = sortedArray[i];
      let b = sortedArray[i+1];
      let compare = a > b;
      if(!!compare) {
        this.getCount();
        sortedArray[i] = b;
        sortedArray[i+1] = a;
      } 
    }
  }

  

  return sortedArray;
}

bubbleSort.prototype.getCount= function() {
    this.count++;
}