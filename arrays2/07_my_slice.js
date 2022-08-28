// YOUR CODE BELOW

/*
1.) Define a function that accepts 3 params
2.) declare a variable that will store a copy of the arr (which will be returned later)
3.) loop through the length of the originalArr
4.) if end Idx is undefined -> include all the indices starting at & including the startIdx through the end of original Array
-> if(!endIdx){}
5.) if startIdx is undefined -> return a copy of the original array
-> if(!startIdx){...originalArr}
6.) if startIdx & endIdx are neg intergers, count indices from the bacc of the arr
-> if(Math.sign(startIdx || endIdx === -1)){
    array.length-1
}
7.) somehow push all these onto the copiedArray
8.) return copiedArray

*/

function mySlice(originalArr, startIdx, endIdx) {
  let modifiedArr = [];

  if (startIdx === undefined) {
    //modifiedArr.push(...originalArr)
    return originalArr;
  }

  if (endIdx === undefined) {
    endIdx = originalArr.length;
  }

  if (startIdx < 0) {
    startIdx = originalArr.length + startIdx;
  }

  if (endIdx < 0) {
    endIdx = originalArr.length + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    modifiedArr.push(originalArr[i]);
  }
  return modifiedArr;
}

describe('mySlice', () => {
  it('is a function', () => {
    expect(typeof mySlice).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = mySlice([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a copy of the array with the correct starting value', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 2);
    expect(returnedValue).toEqual(['bialy', 'brioche']);
  });

  it('returns a copy of the array with the correct ending value', () => {
    let returnedValue = mySlice(
      ['bagel', 'baguette', 'bialy', 'brioche'],
      0,
      2
    );
    expect(returnedValue).toEqual(['bagel', 'baguette']);
  });

  it('returns a copy of the array with the correct starting and ending values', () => {
    let returnedValue = mySlice(
      ['bagel', 'baguette', 'bialy', 'brioche'],
      1,
      3
    );
    expect(returnedValue).toEqual(['baguette', 'bialy']);
  });

  it('returns a copy of the array with the correct starting value if the startingIdx is negative', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2);
    expect(returnedValue).toEqual(['bialy', 'brioche']);
  });

  it('returns a copy of the array with the correct ending value if the endingIdx is negative', () => {
    let returnedValue = mySlice(
      ['bagel', 'baguette', 'bialy', 'brioche'],
      0,
      -1
    );
    expect(returnedValue).toEqual(['bagel', 'baguette', 'bialy']);
  });

  it('returns a copy of the array if startingIdx and endingIdx are undefined', () => {
    let returnedValue = mySlice(['bagel', 'baguette', 'bialy', 'brioche']);
    expect(returnedValue).toEqual(['bagel', 'baguette', 'bialy', 'brioche']);
  });
});
