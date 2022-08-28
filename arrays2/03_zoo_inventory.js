//animal name[][]
//animal type
//animals age
//variable that contains sentence
//loop through the array
//template literal
//return sentence outside of forloop

// YOUR CODE BELOW
function zooInventory(array) {
  let animalSentence = [];

  for (let i = 0; i < array.length; i++) {
    let animalName = array[i][0];
    let animalType = array[i][1][0];
    let animalAge = array[i][1][1];

    animalSentence.push(`${animalName} the ${animalType} is ${animalAge}.`);
  }
  return animalSentence;
}

describe('zooInventory', () => {
  it('is a function', () => {
    expect(typeof zooInventory).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = zooInventory([['Nemo', ['fish', 5]]]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array with the correct sentence, given one animal', () => {
    let zoo = [['Bai Yun', ['panda', 26]]];

    let returnedValue = zooInventory(zoo);
    expect(returnedValue[0]).toEqual('Bai Yun the panda is 26.');
  });

  it('returns the correct array of sentences, given multiple animals', () => {
    let zoo = [
      ['Hobbes', ['tiger', 32]],
      ['Simba', ['lion king', 23]],
    ];

    let returnedValue = zooInventory(zoo);

    let expectedValue = [
      'Hobbes the tiger is 32.',
      'Simba the lion king is 23.',
    ];

    expect(returnedValue).toEqual(expectedValue);
  });
});
