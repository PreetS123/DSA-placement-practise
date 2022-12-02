/*
Given an array A of non-negative integer of size m.your task is to sort the array in non-decrease
order and print out the original indices of the new sorted array.
Example:
A=[4,5,3,7,1]
After sorting the new array becomes A=[1,3,4,5,7].
The required output should be "3 1 0 2 4";
*/


   function ReturnIndex(arr){
        let n=arr.length;
       let index=[];
       for(let i=0; i<n; i++){
        index.push(i);
       }
       for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            let temp,temp1;
            if(arr[j]<arr[j+1]){
                 temp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;

                 temp1=index[j];
                 index[j]= index[j+1];
                  index[j+1]=temp1;
            }
        }
       }
        console.log(index.join(" "));
   }


   let arr=[4,5,3,7,1];
   ReturnIndex(arr);