  
   
      function ArmStrong(n){
        n=n.toString();
        let len=n.length;
        let out=0;
        for(let i=0; i<len; i++){
          out+= n[i]**len;
        }
        out===parseInt(n)?console.log('IT IS AN ARMSTRONG NUMBER'):console.log('NOT AN ARMSTRONG NUMBER');
      }
      let n=153;
      ArmStrong(n)