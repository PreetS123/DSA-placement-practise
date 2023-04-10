
  function PowerOf2(n){
    let flag=false;
     while (n>1){
      if(n%2===0){
        n=n/2;
        flag=true;
      }else{
        flag=false;
        break;
      }
     }
     flag===true?console.log('Yes'):console.log('No');
  }

  let n=128;
  PowerOf2(n);