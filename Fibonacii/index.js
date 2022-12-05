

function FibonaciiSeries(n){
    let s=0;
    let n1=0;
    let n2=1;
  for(let i=1; i<n; i++){
     s=n1+n2;
     n1=n2;
     n2=s;
  }
  console.log(n2);
}


let n=3;
FibonaciiSeries(n)