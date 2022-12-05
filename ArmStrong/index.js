  
   
      function ArmStrong(n){
         n= n.toString()
        //   console.log(typeof(n))

        let len=n.length;
        let out=0;
        for(let i of n){
            out=out+parseInt(i)**len;
            
        }
        out===parseInt(n)?console.log('armStrong'):console.log('not armStrong')
      }
      let n=134
      ArmStrong(n)