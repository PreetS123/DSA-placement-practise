

function AnaGramChk(x,y,n,m){
    if(n!=m){
        console.log('NOT AN ANAGRAM');
        return;
    }
    x=x.split('').sort();
    y=y.split('').sort();
    // console.log(x,y)
     let flag=false;
     for(let i=0; i<n; i++){
            if(x[i]===y[i]){
                flag=true;
            }else{
                flag=false;
            }
     }
     flag===true?console.log('ANAGRAM'):console.log('NOT AN ANAGRAM');
}


let x='abcde';
let y='dabc';
let n=x.length;
let m=y.length;
AnaGramChk(x,y,n,m);
