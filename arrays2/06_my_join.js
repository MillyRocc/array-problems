// YOUR CODE BELOW
function myJoin(arr, separator) {
  let joinedArr = '';

  for (let i = 0; i < arr.length - 1; i++) {
    let element = arr[i];

    if (element === undefined || element === null) {
      joinedArr += '';
    } else {
      joinedArr += element;
    }

    if (separator === undefined) {
      joinedArr += ',';
    } else {
      joinedArr += separator;
    }
  }
  joinedArr += arr[arr.length - 1];
  return joinedArr;
}

//create a joinedArr that will return the modified string
//create a separator variable to reference it later in the if statement (edge case)
//^^ ie. if(separator === undefined)
//loop through the length of the array, and insert a delimitter (if provided) between each element
//push the modified arr into joinedArr
//return joinedArr

//   if(arr[i] === undfined || null){
//     arr[i] === " "
//   }

//  if (separator === undefined){
//     separator = ',';
//   }

describe('myJoin', () => {
  it('is a function', () => {
    expect(typeof myJoin).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = myJoin(['apples', 'bananas']);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a string with all of the array element joined together, separated by the separator', () => {
    let returnedValue = myJoin(['Beyonce', 'Kelly', 'Michelle'], ' and ');
    expect(returnedValue).toEqual('Beyonce and Kelly and Michelle');
  });

  it('returns a string with all of the array element joined together using a comma as the default separator', () => {
    let returnedValue = myJoin(['Beyonce', 'Kelly', 'Michelle']);
    expect(returnedValue).toEqual('Beyonce,Kelly,Michelle');
  });

  it('returns a string that replaces null or undefined values with an empty string', () => {
    let returnedValue = myJoin([null, 'came, ', 'saw, ', 'conquered.'], 'I ');
    expect(returnedValue).toEqual('I came, I saw, I conquered.');
  });
});
