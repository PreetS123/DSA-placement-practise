/*
You are given an array of N-1 integers and integers are in the range of 1 to N.
 There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer
Note : You have to take the input yourself
Sample Input 1 
4 5 1 3
Sample Output 1
2
*/


 function MissingInt(arr){
    let s=0;
    let n=arr.length;
    let tsum=((n+1)*(n+2))/2;
    for(let i=0; i<arr.length; i++){
       s+=arr[i];
    }
    console.log(tsum-s);
 }

 let arr=[4,5,1,3];
 MissingInt(arr);