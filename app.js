let myArray = [
  { n: 1, c: 1 },
  { n: 2, c: 1 },
  { n: 3, c: 1 },
  { n: 4, c: 1 },
  { n: 5, c: 1 },
];

const filerArray = (arr) => {
  arr.filter((e, i) => {
    console.log("object", e);
    console.log("index", i);
  });
};

filerArray(myArray);
