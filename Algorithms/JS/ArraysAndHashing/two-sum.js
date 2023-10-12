let nums = [2, 7, 11, 15]
let target = 9

var twoSum = function (nums, target) {
  const hasNum = new Map()
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (hasNum.has(diff)) return [hasNum.get(diff), i]
    hasNum.set(nums[i], i)
  }
};

var twoSum1 = function (nums, target) {
  const hasNum = {}
  for (let [i, n] of Object.entries(nums)) {
    let o = parseInt(i)
    let diff = target - nums[o]
    if (diff in hasNum) return [hasNum[diff], o]
    hasNum[n] = o
  }
};

console.log(twoSum1(nums, target))