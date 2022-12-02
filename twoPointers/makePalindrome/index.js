
 const PalindromeSwap=(str)=>{
   let obj={};
   for(let i=0; i<str.length; i++){
    if(obj[str[i]]===undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
   }
   let c=0;
   for(let key in obj){
          if(obj[key]===1){
            c++;
          }
   }
   if(c<2){
     console.log('isPalindrome')
   }else{
    console.log('notPalindrome')
   }

 }


let str='abkbke'
 PalindromeSwap(str);