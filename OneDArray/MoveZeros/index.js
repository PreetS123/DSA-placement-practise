function MoveZeros(arr, n) {
  if (n == 1) return arr;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < n; i++) {
    arr[i] = 0;
  }
  return arr;
}
let arr = [0, 1, 0, 3, 12];
let n = arr.length;

let x = MoveZeros(arr, n);
console.log(x);
