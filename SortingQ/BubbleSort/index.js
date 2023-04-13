

  function BubbleSort(arr,n){
    for(let i=0; i<n; i++){
      for(let j=0; j<n-i+1; j++){
        if(arr[j]>arr[j+1]){
          let temp= arr[j];
          arr[j]= arr[j+1];
          arr[j+1]= temp;
        }
      }
    }
    return arr;
  }

  let arr=[2,4,1,3,8,6];
  let n=arr.length;
  console.log(BubbleSort(arr,n));