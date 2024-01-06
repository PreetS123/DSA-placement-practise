function PowerOf2(n) {
  let flag = false;
  if (n == 1) return;
  else {
    for (let i = 0; i < n; i++) {
      if (n % 2 === 0) {
        n = n / 2;
        flag = true;
      } else flag = false;
    }
  }
  flag==true? console.log("Power of 2"): console.log("Not a power of two");
}

let n = 128;
PowerOf2(n);
