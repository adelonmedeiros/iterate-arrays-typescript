const array: number[] = [1, 2, 3, 4];

const filteredArray = array.filter((value: number) => {
  return value % 2 === 0;
});
console.log(filteredArray);
