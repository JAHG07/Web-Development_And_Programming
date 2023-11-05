let strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
  let res = []
  if (strs.length == 1) return strs[0]
  let maxPrefix = strs[0].split('')

  return maxPrefix
};

console.log(longestCommonPrefix(strs))