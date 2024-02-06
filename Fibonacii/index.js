function FibonaciiSeries(n) {
  let f = 0;
  let s = 1;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = f + s;
    f = s;
    s = sum;
  }
  console.log(sum);
}

let n = 9;
FibonaciiSeries(n);
