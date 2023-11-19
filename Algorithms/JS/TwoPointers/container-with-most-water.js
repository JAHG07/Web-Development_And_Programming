let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

var maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let maxWater = 0
  let water = 0
  while (l < r) {
    water = Math.min(height[l], height[r]) * (r - l)
    maxWater = Math.max(maxWater, water)
    if (height[r] >= height[l]) {
      while (height[r] >= height[l] && l < r) l++
    }
    else {
      while (height[l] > height[r] && r > l) r--
    }
  }
  return maxWater
};

console.log(maxArea(height))