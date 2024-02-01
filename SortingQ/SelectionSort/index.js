
/**
 * Selection Sort
 */

function SelectionSort(arr,n){
    for(let i=0; i<=n-2; i++){
        let min=i;
       for(let j=i; j<n; j++){
        if(arr[j]<arr[min]){
           min=j;
        }
       }
       let temp=arr[min]
           arr[min]=arr[i];
           arr[i]=temp;
    }
    return arr;
}




let arr=[2,4,1,3,8,6];
let n=arr.length;

console.log(SelectionSort(arr,n));