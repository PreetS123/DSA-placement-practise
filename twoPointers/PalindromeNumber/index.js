
const PalindromeNumber=(num)=>{
    num= num.toString();
    let s=0; 
    let e=num.length-1;
    let flag=false;
    while(s<=e){
        if(num[s]==num[e]){
            flag=true;
            s++;
            e--;
        }else{
            flag=false;
            break;
        }
    }
    flag==true?console.log('Yes'):console.log('No');
}
 
PalindromeNumber(21212);