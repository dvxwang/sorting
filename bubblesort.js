//'use strict';

// bubbleSort takes an array and returns a sorted array.
function bubbleSort(unSortedArray) {
  // if(!unSortedArray.length) return [];

  var sortedArray = unSortedArray.slice();
  
  //iterating the array
  for(var j = sortedArray.length-1; j>0; j--) {
    //iterating the index
    for(var i = 0; i<j; i++) {
      var a = sortedArray[i];
      var b = sortedArray[i+1];
      var compare = a > b;
      if(!!compare) {
        console.log(sortedArray);
        sortedArray = swap.call(sortedArray,i,a,b);
        console.log(sortedArray);
      } 
    }
  }
  return sortedArray;
}

function swap(index, old, cur) {
  this[index]=cur;
  this[index+1]=old;
  return this;
}