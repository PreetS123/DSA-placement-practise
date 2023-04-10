  
   
      function ArmStrong(n){
         let out=0;
         n=n.toString();
         let p=n.length;
         for(let i=0; i<p; i++){
            out+=n[i]**p;
         }
         out===parseInt(n)?console.log('Arm strong number'):console.log('Not an arm strong number');
      }
      let n=1634;
      ArmStrong(n)