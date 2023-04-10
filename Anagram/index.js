

function AnaGramChk(x,y,n,m){
    let flag=false;
   if(n!==m){
    flag=false;
   }else{
       x=x.split("").sort();
       y=y.split("").sort();
       for(let i=0; i<x.length; i++){
          if(x[i]===y[i]){
            flag=true;
          }else{
            fleg=false;
            break;
          }
       }
   }
   flag===true?console.log('Yes'):console.log('No');
}


let x='abcd';
let y='ddbac';
let n=x.length;
let m=y.length;
AnaGramChk(x,y,n,m);
