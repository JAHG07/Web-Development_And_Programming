let haystack = "a"
let needle = "a"

var strStr = function(haystack, needle) {
  for(let i = 0; i < haystack.length; i++){
    let count = 0
    for(let j = 0; j < needle.length;j++){
      if(needle[j] == haystack[i+j]) count ++
      if(count == needle.length) return i
    }
  }
  return -1
};

console.log(strStr(haystack,needle))