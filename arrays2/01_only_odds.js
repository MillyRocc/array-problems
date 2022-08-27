// YOUR CODE BELOW
function onlyOdds(number) {
  let sum = 0;
  if (number < 1) {
    return sum;
  } else {
    for (let i = number; i >= 1; i--) {
      if (i % 2 === 1) {
        sum += i;
      }
    }
    return sum;
  }
}

describe('onlyOdds', () => {
  it('is a function', () => {
    expect(typeof onlyOdds).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = onlyOdds(6);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of all odd nums between the provided argument and 0', () => {
    let returnedValue = onlyOdds(10);
    expect(returnedValue).toEqual(9 + 7 + 5 + 3 + 1);
  });

  it('returns 0 if inputted argument is less than 1', () => {
    let returnedValue = onlyOdds(-5);
    expect(returnedValue).toEqual(0);
  });
});
