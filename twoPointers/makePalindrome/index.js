
 const PalindromeSwap=(str)=>{
     let obj={};
     for(let i=0; i<str.length; i++){
         if(obj[str[i]]===undefined){
          obj[str[i]]=1;
         }else{
          obj[str[i]]++;
         }
     }
    //  console.log(obj)
     let c=0;
     for(let key in obj){
        if(obj[key]%2==1){
          c++;
        }
     }
    c<2?console.log('We can make palindrome'):console.log("We can't make palindrome.");
 }


let str='aabcb'
 PalindromeSwap(str);