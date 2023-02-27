const array: number[] = [1, 2, 3, 4];

const reducedValue = array.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(reducedValue);
