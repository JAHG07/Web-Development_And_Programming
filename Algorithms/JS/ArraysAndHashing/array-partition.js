let nums = [1,4,3,2]

var arrayPairSum = function(nums) {
  nums.sort((a,b) => a-b)
  let sum = 0
  for(let i = 0; i < nums.length; i+=2){
    sum+=nums[i]
  }
  return sum
};

console.log(arrayPairSum(nums))