let nums = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
  let res = []
  nums.sort((a,b)=>a-b)
  for(let [i,a] of nums.entries()){
    if (i > 0 && a === nums[i - 1]) continue
    let l = i+1
    let r = nums.length -1
    while(l<r){
      let sum = a + nums[l] + nums[r]
      if(sum > 0) r--
      else if (sum < 0) l++
      else{
        res.push([a,nums[l],nums[r]])
        l++
        while(nums[l] === nums[l-1] && l<r){
          l++
        }
      }
    }
  }
  return res
};

console.log(threeSum(nums))