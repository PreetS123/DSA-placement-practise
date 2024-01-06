function FibonaciiSeries(n) {
  let f = 0;
  let s = 1;
  let sun = 0;
  for (let i = 1; i < n; i++) {
    sun = s + f;
    f = s;
    s = sun;
  }
  console.log(sun);
}

let n = 9;
FibonaciiSeries(n);
