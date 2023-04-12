/*
Input Form
arr=[[1,3],[3,4],[4,6],[6,7]];

Output Form
arr=[1,3,4,6,7];
*/

 function DuplicateRemove(arr){
   let obj={};
   for(let i=0; i<arr.length; i++){
    let temp=arr[i];
     for(let j=0; j<temp.length; j++){
        if(obj[temp[j]]===undefined){
            obj[temp[j]]=1;
        }else{
            obj[temp[j]]++;
        }
     }
   }
   console.log(Object.keys(obj));
 }

 DuplicateRemove([[1,3],[3,4],[4,6],[6,7]]);