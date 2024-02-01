/**
 * Selection Sort
 * Time complexity --> n*n
 * inner loop runs for n+(n-1)+(n-2)+...whose sum is n(n+1)/2;
 */

function SelectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

let arr = [2, 44, 1, 3, 8, 0];
let n = arr.length;

console.log(SelectionSort(arr, n));
