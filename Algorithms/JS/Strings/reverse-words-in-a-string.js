let s = "a good   example"

var reverseWords = function(s) {
  let l = 0
  let n = s.length
  let res = ''

  while(l < n){
    while(l<n && s[l] == ' ') l++
    if(l>=n) break
    let r = l+1
    while(r<=n && s[r]!=' ') r++
    let sub = s.substring(l,r)
    if(res.length==0) res = sub
    else res = sub + ' ' + res
    l=r+1
  }
  return res
};

console.log(reverseWords(s))