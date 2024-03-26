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

let a = null;
console.log(a);

//  double == compare's without matching types -coercian

console.log(null == undefined);
//  tripple equals compares types and values...
console.log(null === undefined);

// event delegation jvascript
// provide event listener to the parent and acces the child through it

document.querySelector("#schools").addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName == "LI") {
    window.location.href += "#" + event.target.id;
  }
});

let arrays = [
  [1, 2],
  [3, 4],
  [4, 5, 6, 7],
  [8, 9, [10, 11], 12, 14],
];

const flatArr = arrays.flat(2);
console.log(flatArr);
