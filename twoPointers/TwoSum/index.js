

  function TwoSum(n,k,arr){
    let s=0;
    let e=n-1;
    let flag=false;
    while(s<=e){
         if((arr[s]+arr[e])===k){
          flag=true;
          break;
         }
         else if((arr[s]+arr[e])>k){
             e--;
         }else{
            s++;
         }
    }
     if(flag===true){
        console.log(s,e);
     }else{
        console.log('-1','-1');
     }
  }


  let arr=[2 ,7, 11 ,15];
  let n= arr.length;
  let k=9

  TwoSum(n,k,arr)