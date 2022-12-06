
  function PowerOf2(n){
    let flag=false;
    let c=0;
   
      while(n>1){
        if(n%2===0){
         n=n/2 
         flag=true;
      }else{
        flag=false;
        break;
      }
    }
    flag===true?console.log('yes'):console.log('no')
  }

  let n=66;
  PowerOf2(n);