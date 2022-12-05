

function FibonaciiSeries(n){
  let n1=0;
  let n2=1;
  let s=0;
  for(let i=1; i<n; i++){
    s+=n1+n2;
    n1=n2;
    n2=s;
  }
  console.log(s);
}


let n=7;
FibonaciiSeries(n)