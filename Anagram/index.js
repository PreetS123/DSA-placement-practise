

function AnaGramChk(x,y,n,m){
   let flag= false;
   if(n!==m){
    return;
   }else{
    x=x.split("").sort();
    y=y.split("").sort();
    for(let i=0; i<n; i++){
       if(x[i]===y[i]){
         flag=true;
       }else{
        flag=false;
        break;
       }
    }
   }
  flag===true?console.log("Is anagram"):console.log("Not a anagram");
}


let x='aabcde';
let y='abbcde';
let n=x.length;
let m=y.length;
AnaGramChk(x,y,n,m);
