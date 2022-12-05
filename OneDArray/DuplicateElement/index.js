

function RemoveDuplicate(n,arr){
    let obj={};
    for(let i=0; i<n; i++){
        if(obj[arr[i]]==undefined){
             obj[arr[i]]=1
        }else{
            obj[arr[i]]++;
        }
    }
    // console.log(Object.keys(obj));
    let c=0; 
    let pad='';
    for(let key in obj){
       pad+=key+" " 
       c++; 
    }
    console.log(pad,"\n",c)
}

let arr=[1, 1, 3, 3,6,5,6]
let n=arr.length;
RemoveDuplicate(n,arr)