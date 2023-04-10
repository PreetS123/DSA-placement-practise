/// find the second largest element from positive number of array

function SecondLagestEl(arr) {
  let s = -1;
  let f = -1;
 for(let i=0; i<arr.length; i++){
  if(arr[i]>f){
      s=f;
      f=arr[i];
  }
  // else if(s!==f && arr[i]>s){
  //   s=arr[i];
  // }
 }
  console.log(s);
}

let arr = [2,7,8,0,1,5,7,7,3];
SecondLagestEl(arr);
