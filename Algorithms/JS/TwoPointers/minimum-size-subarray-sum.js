let nums = [12,28,83,4,25,26,25,2,25,25,25,12]
let target = 213

var minSubArrayLen = function(target, nums) {
  let l = 0
  let sum = 0
  let res = Infinity
  for(let r = 0; r < nums.length; r++){
    sum += nums[r]
    while (sum >= target){
      res = Math.min(r-l+1,res)
      sum -= nums[l++]
    }
  }
  return res === Infinity ? 0 : res
};

console.log(minSubArrayLen(target,nums))