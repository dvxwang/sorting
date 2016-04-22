function split(wholeArray) {
  var len = Math.ceil((wholeArray.length)/2);
  var firstHalf = wholeArray.slice(0,len);
  var secondHalf = wholeArray.slice(len);
  return [firstHalf, secondHalf];
}

function merger(wholeArray) {
  var result=[];
  function unsplit(arr1,arr2) {
    if ((!arr1.length) && (!arr2.length)){
      return;
    }
    else {
      if (arr1.length === 0){
        result.push(arr2[0]);
        arr2=arr2.slice(1);
      }
      else if (arr2.length === 0){
        result.push(arr1[0]);
        arr1=arr1.slice(1);
      }
      else if (arr1[0] > arr2[0]) {
        result.push(arr2[0]);
        arr2=arr2.slice(1);
      }
      else {
        result.push(arr1[0]);
        arr1=arr1.slice(1);
      }
      unsplit(arr1,arr2);
    }
  }
  unsplit(wholeArray[0],wholeArray[1]);
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  else {
    var res=split(array);
    return merger([mergeSort(res[0]),mergeSort(res[1])]);
  }
}