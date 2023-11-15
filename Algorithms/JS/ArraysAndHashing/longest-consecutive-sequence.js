let nums = [100, 4, 200, 1, 3, 2]

var longestConsecutive = function (nums) {
  const Sequence = new Set(nums)
  let maxSeq = 0
  let count = 0
  for (let n of nums) {
    if (!Sequence.has(n - 1)) {
      count++
      let j = 1
      while (Sequence.has(n + j)) {
        count++
        j++
      }
    }
    maxSeq = Math.max(maxSeq, count)
  }
  return maxSeq
};

console.log(longestConsecutive(nums))