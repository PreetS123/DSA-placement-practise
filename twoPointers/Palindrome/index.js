const Palindrome = (str) => {
  let s=0; 
  let e=str.length-1;
  let flag = false;
  while(s<=e){
     if(str[s]==str[e]){
        flag=true;
        s++;
        e--;
     }else{
      flag=false;
      break;
     }
  }
  flag==true?console.log('Palindrome'):console.log('Not a palindrome');
};

let str = "nrnk";
Palindrome(str);
