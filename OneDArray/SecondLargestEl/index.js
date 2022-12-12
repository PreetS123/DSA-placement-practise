/// find the second largest element from positive number of array

function SecondLagestEl(arr) {
  let s = -1;
  let f = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > f) {
      s = f;
      f = arr[i];
    } else if (arr[i] > s && s !== f) {
      s = arr[i];
    }
  }
  console.log(s);
}

let arr = [2, 9, 7, 8, 4];
SecondLagestEl(arr);
