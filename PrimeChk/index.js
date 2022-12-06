
  function PrimeCheck(n){
    let c=0;
         for(let i=2; i<n; i++){
                if(n%i===0){
                    c++;
                }
         }
         c===0?console.log('YES'):console.log('NO')
  }

  let n=9;
  PrimeCheck(n)