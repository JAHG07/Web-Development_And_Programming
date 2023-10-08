const nums = [1, 2, 3]

var containsDuplicate = function (nums) {
  const duplicate = new Set(nums)
  if (duplicate.size != nums.length) return true
  return false
};

console.log(containsDuplicate(nums))