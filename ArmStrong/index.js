  
   
      function ArmStrong(n){
        n= n.toString();
        let len= n.length;
        let out=0;
        for(let i of n){
          out+= parseInt(i)**len
        }
        out===parseInt(n)?console.log('ArmStrong Number'):console.log('Not an armStrong Number');
      }
      let n=153;
      ArmStrong(n)