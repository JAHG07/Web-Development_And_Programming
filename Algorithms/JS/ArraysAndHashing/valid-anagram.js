let s = "anagram"
let t = "nagaraa"

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const countS = new Map()
  const countT = new Map()

  for (let i in s) {
    countS.set(s[i], 1 + countS.get(s[i]) || 1)
    countT.set(t[i], 1 + countT.get(t[i]) || 1)
  }
  console.log(countS)
  console.log(countT)
  for (let c in countS) {
    console.log(c)
    if (countS[c] !== countT[c]) {
      return false
    }
  }
  return true
};

console.log(isAnagram(s, t))