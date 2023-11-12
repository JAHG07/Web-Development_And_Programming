let s = ["h","e","l","l","o"]

var reverseString = function(s) {
  // [s[l],s[r]] = [s[r],s[l]]
  for(let l = 0, r = s.length-1; l < r; l++,r--){
    swap(s,l,r)
  }
  return s
};

function swap(s,l,r){
  let temp = s[l]
  s[l] = s[r]
  s[r] = temp
}

console.log(reverseString(s))