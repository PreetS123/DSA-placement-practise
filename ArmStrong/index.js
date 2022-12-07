  
   
      function ArmStrong(n){
        n=n.toString();
        let len=n.length;
        let out=0;
        for(let i of n){
          out+= i**len;
        }
        out===parseInt(n)?console.log('IT IS AN ARMSTRONG NUMBER'):console.log('NOT AN ARMSTRONG NUMBER');
      }
      let n=153;
      ArmStrong(n)