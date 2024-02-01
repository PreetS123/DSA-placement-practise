/**
 * Reversing an array using inbuilt function.
 */

function reverseString(str){
    const strRev=str.split("").reverse().join('')
    console.log(strRev);
}
reverseString("Hello Love");