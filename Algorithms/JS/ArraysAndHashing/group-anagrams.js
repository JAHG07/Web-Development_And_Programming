let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function (strs) {
  const groupAn = new Map()
  strs.forEach(str => {
    let temp = str.split('').sort((a, b) => a - b)
    console.log(temp)
  });
};

console.log(groupAnagrams(strs))