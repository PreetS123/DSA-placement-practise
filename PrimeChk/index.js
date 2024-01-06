function PrimeCheck(n) {
  let c = 0;
  for (let i = 2; i < n/2; i++) {
   if(n%i===0) c++;
  }
  c>0?console.log("Not a prime"):console.log("Is prime");
}

let n = 61;
PrimeCheck(n);
