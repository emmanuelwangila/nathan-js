const array = [3, 4, 7, 8, 89];

const mappedArray = array.map((arr) => {
  return arr + 2;
});

const forArray = array.forEach((arr, i) => {
  return (array[i] = arr + 3);
});

console.log(mappedArray, forArray, array);

// null and defined

console.log(typeof null);
console.log(typeof undefined);
