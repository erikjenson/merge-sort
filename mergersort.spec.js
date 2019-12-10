describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let arr = [3, 2, 4, 1, 5];
    expect(split(arr)).toEqual([
      [3, 2],
      [4, 1, 5],
    ]); // your code here
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    let left = [2, 3];
    let right = [1, 4, 5];
    expect(merge(left, right)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('MergeSort function', function() {
  it('returns sorted array', function() {
    let arr = [3, 2, 4, 1, 5];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});
