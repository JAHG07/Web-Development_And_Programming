let nums = [-1, 1, 0, -3, 3]

var productExceptSelf = function (nums) {
  let preF = 1
  let postF = 1
  const output = []
  for (let i = 0; i < nums.length; i++) {
    output.push(preF)
    preF = preF * nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    let res = postF * output[i]
    output[i] = res
    postF = postF * nums[i]
  }
  return output
};

console.log(productExceptSelf(nums))