let nums = [0,1,0,3,12]

var moveZeroes = function(nums) {
  let l = 0
  let r = 1
  while (r < nums.length){
    if(nums[l] == 0 && nums[r] !== 0){
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      l++
    }else if(nums[r] == 0 && nums[l] !==0){
      l++
    }else{
      r++
    }
    }
    return nums
};

console.log(moveZeroes(nums))