function filterRange (array, a, b){
  let newArray = [];

  if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
    console.log('Typed  number is outside the indices array');
  } else {
    for (let i =a; i<b; i++){
      if(!isNaN(array[i])){
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

let numbers = [0,1, 2, 'String1', 3, 4, 5, 6, 'String2', 'String3'];
console.log(filterRange(numbers,2,8));