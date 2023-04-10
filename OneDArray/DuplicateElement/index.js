

function RemoveDuplicate(n,arr){
     let obj={};
     for(let i=0; i<n; i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]++;
        }
     }
     let pad="";
     for(var key in obj){
       pad+=key+" ";
     }
     console.log(pad);
}

let arr=[1, 1, 3, 3,6,5,6]
let n=arr.length;
RemoveDuplicate(n,arr)