
  function PrimeCheck(n){
    let c=0;
    for(let i=2; i<n; i++){
       if(n%i==0){
              c++;
       }
    }
    c>0?console.log('not a prime'):console.log('prime number')
  }

  let n=121;
  PrimeCheck(n)