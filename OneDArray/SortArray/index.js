
function SortingArray(arr,n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i+1; j++){
            if(arr[j]>arr[j+1]){
                Swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

  function Swap(arr,i,j){
    let temp=arr[i];
    arr[i]= arr[j];
    arr[j]=temp;
  }

  let arr=[0, 23, 14, 12, 9];
  let n= arr.length;
  let x=SortingArray(arr,n);
  console.log(x);