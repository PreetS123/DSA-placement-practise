
const PalindromeNumber=(num)=>{
    num=num.toString();
    let s=0,e=num.length-1;
    let flag=false;
    while(s<=e){
        if(num[s]==num[e]){
            s++;
            e--;
            flag=true;
        }else{
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log('Palindrome')
    }else{
        console.log('Not Palindrome')
    }
}
 
PalindromeNumber(1221);