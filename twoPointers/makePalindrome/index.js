
 const PalindromeSwap=(str)=>{
   let obj={};
   for(let i=0; i<str.length; i++){
       if(obj[str[i]]===undefined){
        obj[str[i]]=1;
       }
       else{
        obj[str[i]]++;
       }
   }

   let c=0;
   for(let key in obj){
    if(obj[key]%2==1){
      c++;
    }
   }
   c<2?console.log('YES'):console.log('NO');

 }


let str='abkbkeaellmn'
 PalindromeSwap(str);