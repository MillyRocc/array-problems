// YOUR CODE BELOW
function arrayFlattener(arr) {
  //initialize flattenedArray variable
  let flattenedArray = [];
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //if the element is an array remove it, and push it to the flattenedArray variable
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }

      console.log(flattenedArray);
    } else {
      //if its not an array, push to flattenedArray variable
      flattenedArray.push(arr[i]);
    }
  }

  //return flattenedArray variable
  return flattenedArray;
}

describe('arrayFlattener', () => {
  it('is a function', () => {
    expect(typeof arrayFlattener).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = arrayFlattener([1, 2, [3]]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a one-dimensional array', () => {
    // get the return value from the function
    let returnedValue = arrayFlattener('this is crazy');

    // make sure none of the elements in the array are an array
    let foundInnerArray = false;

    for (let i = 0; i < returnedValue.length; i++) {
      let element = returnedValue[i];

      if (Array.isArray(element)) {
        foundInnerArray = true;
        break;
      }
    }

    expect(foundInnerArray).toEqual(false);
  });

  it('returns a one-dimensional array with the correct elements', () => {
    let returnedValue = arrayFlattener([
      'I',
      'am',
      'working',
      ['on', 'another', 'level'],
    ]);
    expect(returnedValue).toEqual([
      'I',
      'am',
      'working',
      'on',
      'another',
      'level',
    ]);
  });
});
