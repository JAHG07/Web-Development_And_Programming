let s = "()" 

var isValid = function(s, stack = []) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for(const char of s){
    const isBracket = (char in pairs)
    if(!isBracket){
      stack.push(char)
      continue
    } 
    const isEqual = (stack[stack.length-1] === pairs[char])
    if(isEqual){
      stack.pop()
      continue
    }
    return false
  }
  return !stack.length
};

console.log(isValid(s))