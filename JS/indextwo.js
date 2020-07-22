const objOne = {
  name: "Josh",
  age: 23,
};

let newObj = objOne;

objOne["name"] = "Tracey";

// console.log(newObj === objOne);
console.log(newObj);

const arrayNums = [2, 4, 5, 3, 54, 64, 6, 4, 4];

function findMaxNum(array) {
  let max;
  max = Math.max(...array);
  console.log(max);
}
