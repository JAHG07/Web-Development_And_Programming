let strs = ['lint', 'code', 'love', 'you']

function encode(strs) {
  let res = ''
  for (let s of strs) {
    res += s.length + '#' + s
  }
  return res
}
function decode(str) {
  let res = []
  let i = 0
  while (i < str.length) {
    j = i
    while (str[j] != '#') {
      j++
    }
    let len = Number(str.substring(i, j))
    res.push(str.substring(j + 1, j + 1 + len))
    i = j + 1 + len
  }
  return res
}

let s = encode(strs)
console.log(s)
let dec = decode(s)
console.log(dec)
