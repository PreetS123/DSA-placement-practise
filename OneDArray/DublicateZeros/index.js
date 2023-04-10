
  function DublicateZeros(arr){
       let stk=[];
       for(let i=0; i<arr.length && stk.length<arr.length; i++){
          let curr=arr[i];
          if(curr===0){
            stk.push(curr);
            stk.push(0);
          }else{
            stk.push(arr[i]);
          }
       }
       console.log(stk);
  }
 
  let arr = [1,0,2,3,0,4,5,0];
  DublicateZeros(arr);