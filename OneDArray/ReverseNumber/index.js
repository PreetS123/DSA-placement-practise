

function ReverseNumber(n){
    let r=0;
   if(n<10){
    console.log(n);
   }else{
     while(n>0){
        let rem= n%10;
        r=r*10+rem;
        n=Math.floor(n/10);
     }
    }
  console.log(r);
}
let n=12
ReverseNumber(n)