let s = "Let's take LeetCode contest"

var reverseWords = function(s) {
  let l = 0
  let n = s.length
  let res = ''

  while(l < n){
    while(l<n && s[l] == ' ') l++
    if(l>=n) break
    let r = l+1
    while(r<=n && s[r]!=' ') r++
    let sub = s.substring(l,r).split('')
    for(let i = 0, j = sub.length-1; i < j; i++,j--){
      [sub[i],sub[j]] = [sub[j],sub[i]]
    }
    sub = sub.join('')
    if(res.length==0) res = sub
    else res = res + ' ' + sub
    l=r+1
  }
  return res
};

console.log(reverseWords(s))