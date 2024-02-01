/**
 * Reversing an array using inbuilt function.
 * Time complexity is O(n);
 * Space complexity is O(n), since their are n number of integers.
 */

function reverseString(str){
    const strRev=str.split("").reverse().join('')
    console.log(strRev);
}
reverseString("Hello Love");

// using For loop
function reverseStr(str){
    let rev="";
    for(let i=str.length-1; i>=0; i--){
        rev+=str[i];
    }
    console.log(rev);
}

reverseStr("Loveeeee");


//Recursively
function recursiveReverse(str){
    if (str === "") {
        return "";
    } else {
        return recursiveReverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(recursiveReverse("may"));