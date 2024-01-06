  
   
      function ArmStrong(n){
        let out=0;
        n=n.toString();
        let len=n.length;
        for(let i=0; i<len; i++){
           out+= (n[i]**len);
        }
        out==parseInt(n)?console.log("Is armstrong number"):console.log("Not an armstrong");
      }
      // let n=1634;
      let n=153;
      ArmStrong(n)