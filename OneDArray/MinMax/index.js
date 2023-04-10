
function MinMax(arr,n){
   let min=1/0;
   let max=-1/0;
   for(let i=0; i<n; i++){
    if(arr[i]<min){
        min=arr[i];
    }
    if(arr[i]>max){
        max=arr[i];
    }
   }
   console.log('Minimum:'+min," ",'Maximum:'+max);
}



let arr=[3, 2000, 1, 56, 10000, 167,-22];
let n=arr.length;
 MinMax(arr,n)