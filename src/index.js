module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {    //convert two-dimensional array to one-dimensional array
      let arr = bracketsConfig[i];
      for (let j = 0; j < arr.length; j++) {
          brackets.push(arr[j]);
      }      
  }

  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
      let brace = str[i];      
      let j = brackets.indexOf(brace);           
      let l = brackets.lastIndexOf(brace);
       
      if ((j >= 0) && (j % 2 == 0)) {
        if (j == l) {  
        stack.push(j);
        } 
        if (j != l) {
            if (j == stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(j);
            }
        }
      }
      if ((j >= 0) && (j % 2 == 1)) {
          let last = stack.pop();
          if (last != j - 1) return false;
      }  
}
  return stack.length === 0;
}


