/// find the second largest element from positive number array

function SecondLagestEl(arr) {
  let f = -1;
  let s = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > f) {
      s = f;
      f = arr[i];
    } else if (arr[i] > s && arr[i] !== f) {
      s = arr[i];
    }
  }
  console.log(s);
}

let arr = [2, 9, 7, 4];
SecondLagestEl(arr);
