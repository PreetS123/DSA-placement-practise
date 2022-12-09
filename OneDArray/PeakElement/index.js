

function PeakElement(arr,n){
    let peak=-1;
    for(let i=0; i<n; i++){
        if(arr[i-1]<arr[i] && arr[i+1]<arr[i]){
            peak=arr[i];
            break;
        }
    }
    console.log(peak);
}


let arr=[5, 10, 20, 15];
let n=arr.length;
PeakElement(arr,n)