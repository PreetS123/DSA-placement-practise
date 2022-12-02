

function CheckPalindrome(str){
    let obj={};

    for(let i=0; i<str.length; i++){
         if(obj[str[i]]===undefined){
            obj[str[i]]=1;
         }else{
            obj[str[i]]++;
         }
    }
    // console.log(obj);
    let c=0; 
    for(let key in obj){
        if(obj[key]%2==1){
            c++;
        }
    }
    if(c<3){
       console.log('YES')
    }else{
        console.log('NO')
    }
}



let str='abcbbb';
CheckPalindrome(str);