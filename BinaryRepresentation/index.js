

   function BinaryRepresentation(n){
        let bag="";
        while(n>0){
            bag+= n%2;
            n=Math.floor(n/2)
        }
        console.log(bag)
   }


   let n=7;
   BinaryRepresentation(n)