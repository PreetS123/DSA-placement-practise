

function FibonaciiSeries(n){
  let zero=0;
  let one=1;
  let sum=0;
  for(let i=1; i<n; i++){
    sum=zero+one;
    zero=one;
    one=sum;
  }
  console.log(sum);
}


let n=9;
FibonaciiSeries(n)