let numbers = [2,7,11,15] 
let target = 9

var twoSum = function(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  let sum = 0
  while (l < r){
    sum = numbers[l] + numbers[r]
    if (sum === target) return [l+1,r+1]
    else if(sum < target) l++
    else r--
  }
}

console.log(twoSum(numbers,target))