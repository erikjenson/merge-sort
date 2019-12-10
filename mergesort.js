function split(wholeArray) {
  const midPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midPoint);
  //console.log('this is firstHalf->', firstHalf);
  const secondHalf = wholeArray.slice(midPoint);
  //console.log('this is secondHalf->', secondHalf);

  return [firstHalf, secondHalf];
}

function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  while (left[i] && right[j]) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else if (right[j] <= left[i]) {
      result.push(right[j]);
      j++;
    }
  }
  if (left[i]) {
    for (let idx = i; idx < left.length; idx++) {
      result.push(left[idx]);
    }
  } else if (right[j]) {
    for (let num = j; num < right.length; num++) {
      result.push(right[num]);
    }
  }
  console.log('merge result', result);
  return result;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  debugger;
  //const midPoint = Math.floor(end / 2);
  //, start = 0, end = array.length
  const splitArray = split(array);

  const left = mergeSort(splitArray[0]);
  const right = mergeSort(splitArray[1]);
  const result = merge(left, right);
  return result;
}
