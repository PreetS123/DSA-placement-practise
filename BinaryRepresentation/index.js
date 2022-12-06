

   function BinaryRepresentation(n){
           let bag=new Array(16).fill(0);
       while(n>0){
            bag.push(n%2);
            n=Math.floor(n/2);  
       }
       console.log(bag.join(""))
   }


   let n=7;
   BinaryRepresentation(n)