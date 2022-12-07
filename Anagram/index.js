

function AnaGramChk(x,y,n,m){
    let flag=false;
    if(n!==m){
        flag=false;
    }else{
         x= x.split("").sort();
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
    flag===true?console.log('ANAGRAM'):console.log('NOT AN ANAGRAM');
}


let x='abcd';
let y='dabc';
let n=x.length;
let m=y.length;
AnaGramChk(x,y,n,m);
