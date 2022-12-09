

  function ReverseArray(arr,n){
    let bag="";
    for(let i=n-1; i>=0; i--){
        bag+=arr[i]+" ";
    }
    console.log(bag)
  }
 
  let arr=[3,1,5,4,7];
  let n=arr.length;
  ReverseArray(arr,n)