
  function DublicateZeros(arr){
    let stk=[];
    let top=0;
    for(let i=0; i<arr.length; i++){
        let curr=arr[i];
        if(curr===0){
            stk.push(0);
            stk.push(0);
        }else{
            stk.push(arr[i]);
        }
         arr[i]= stk[top++];
    }
    return arr;
  }
 
  let arr = [1,0,2,3,0,4,5,0];
  console.log(DublicateZeros(arr));