let arr=[1,2,3,4,5,6];
//output to be obtained
//[2,1,4,3,6,5];

function swapDifferently(arr){
    
    for(let i=0; i<arr.length;i=i+2){
        let temp=arr[i]
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    return arr;
}

console.log(swapDifferently(arr));