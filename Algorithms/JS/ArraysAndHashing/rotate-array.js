let nums = [1,2,3,4,5,6,7]
let k = 3

var rotate0 = function(nums, k) {
  let copy = []
  for(let i = 0; i < nums.length; i++){
    copy[(i+k)%nums.length] = nums[i]
  }
  return copy
};


var rotate = function(nums, k) {
  k = k%nums.length
  let [l,r] = [0,nums.length-1]
  while(l<r){
    [nums[l],nums[r]] = [nums[r],nums[l]]
    l++
    r--
  }
  [l,r] = [0,k-1]
  while(l<r){
    [nums[l],nums[r]] = [nums[r],nums[l]]
    l++
    r--
  }
  [l,r] = [k,nums.length-1]
  while(l<r){
    [nums[l],nums[r]] = [nums[r],nums[l]]
    l++
    r--
  }
  return nums
};

console.log(rotate(nums,k))