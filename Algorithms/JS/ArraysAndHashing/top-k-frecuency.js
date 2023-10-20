let nums = [3, 0, 1, 0]
let k = 1

var topKFrequent = function (nums, k) {
  const count = new Map()
  const freq = new Array(nums.length).fill(undefined)
  for (const n of nums) {
    count.set(n, count.get(n) + 1 || 1)
  }
  for (const [val, index] of count) {
    if (!freq[index]) freq[index] = []
    freq[index].push(val)
  }
  const res = []
  console.log(freq)
  for (let i = freq.length - 1; i >= 0; i--) {
    if (!freq[i]) continue
    for (const n of freq[i]) {
      res.push(n)
      if (res.length === k) return res
    }
  }

};

console.log(topKFrequent(nums, k))