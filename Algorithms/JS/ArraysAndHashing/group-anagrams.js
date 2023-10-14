let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function (strs) {
  const groupAn = new Map()
  for (let i = 0; i <= strs.length - 1; i++) {
    let temp = strs[i].split('').sort().join('')
    if (groupAn.has(temp)) {
      groupAn.get(temp).push(strs[i])
    } else {
      groupAn.set(temp, [])
      groupAn.get(temp).push(strs[i])
    }
  }
  return [...groupAn.values()]
};

var groupAnagrams1 = function (strs, groupAn = new Map()) {
  for (const s of strs) {
    const count = new Array(26).fill(0)
    for (const c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    const newCount = count.toString()
    if (groupAn.has(newCount)) {
      groupAn.get(newCount).push(s)
    } else {
      groupAn.set(newCount, [])
      groupAn.get(newCount).push(s)
    }
  }
  return [...groupAn.values()]
};

console.log(groupAnagrams1(strs))