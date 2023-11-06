let nums = [0]

var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0
  let l = 0
  let r = 0
  while(l < nums.length){
    if (nums[r] == 1){
      r++
    } else{
      maxCount = Math.max(maxCount,r-l)
      r++
      l=r
    }
  }
  return maxCount
}

console.log(findMaxConsecutiveOnes(nums))