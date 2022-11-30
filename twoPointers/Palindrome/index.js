const Palindrome = (str) => {
  let s = 0;
   let e = str.length-1;
  let flag = false;
  while (s <= e) {
    if (str[s] == str[e]) {
      s++;
      e--;
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

let str = "nrn";
Palindrome(str);
