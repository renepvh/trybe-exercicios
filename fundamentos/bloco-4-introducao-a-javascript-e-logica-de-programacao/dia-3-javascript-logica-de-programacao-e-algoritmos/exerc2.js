let word = 'tryber';

// let invert = word.split("").reverse().join("");

// console.log(invert);

// // console.log(word.split());

let array = []

for (let index = word.length - 1; index >= 0; index -=1){
  let newArray = (word[index]);
  // newArray.push(array)
  // console.log(newArray);
  array.push(newArray)
}

console.log(array);