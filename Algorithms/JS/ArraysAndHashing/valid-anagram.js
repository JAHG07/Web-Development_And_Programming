let s = "anagram"
let t = "nagaram"

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const countS = new Map()
  const countT = new Map()

  for (let i in s) {
    countS.set(s[i], 1 + countS.get(s[i]) || 1)
    countT.set(t[i], 1 + countT.get(t[i]) || 1)
  }
  for (const [key, val] of countS) {
    if (countS.get(key) !== countT.get(key)) {
      return false
    }
  }
  return true
};

console.log(isAnagram(s, t))