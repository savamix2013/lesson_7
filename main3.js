const { mergeSort } = require('./main2.js');
module.exports = { SliceArr };

function SliceArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let FirstSideArr = []
  let SecondPartArr = []

  const middle = Math.floor(arr.length / 2);

  for(i = 0; i < middle; i++){
 FirstSideArr.push(arr[i])
  }
  for(i = middle; i < arr.length; i++){
    SecondPartArr.push(arr[i])
  }

  if(FirstSideArr > 1 || SecondPartArr > 1){
    return mergeSort(SliceArr(FirstSideArr), SliceArr(SecondPartArr))
  }

  return mergeSort(SliceArr(FirstSideArr), SliceArr(SecondPartArr));
}
