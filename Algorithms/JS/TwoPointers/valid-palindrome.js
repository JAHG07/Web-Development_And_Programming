let  s = "A man, a plan, a canal: Panama"

var isPalindrome = function(s) {
  let newS = ''
    for(const n of s){
      if(n.charCodeAt() > 47 && n.charCodeAt() < 58
      || n.charCodeAt() > 64 && n.charCodeAt() < 91
      || n.charCodeAt() > 96 && n.charCodeAt() < 123
      ){
        newS += n
      }
      newS = newS.toLocaleLowerCase()
    }
    let l = 0
    let r = newS.length-1
    while (l <= r){
      if(newS[l] == newS[r]){
        l++
        r--
      }else{
        return false
      }
    }
  return true
};

var isPalindrome1 = function(s) {
 let l = 0
 let r = s.length-1
 while (l<=r){
  while(l<r && !isAlphaNum(s[l])) l++
  while(r>l && !isAlphaNum(s[r])) r--
  if(s[l].toLocaleLowerCase() != s[r].toLocaleLowerCase()) return false
  l++
  r--
 }
 return true
};

function isAlphaNum(a){
  return (a.charCodeAt() > 47 && a.charCodeAt() < 58
      || a.charCodeAt() > 64 && a.charCodeAt() < 91
      || a.charCodeAt() > 96 && a.charCodeAt() < 123
    ) 
}


var isPalindrome3 = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return str === str.split("").reverse().join("")
};


console.log(isPalindrome(s))
console.log(isPalindrome1(s))
console.log(isPalindrome3(s))