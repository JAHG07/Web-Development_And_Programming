let matrix = [[1,2,3],[4,5,6],[7,8,9]]

var spiralOrder = function(matrix) {
  let bottom = matrix.length -1
  let right = matrix[0].length -1
  let left = 0
  let top = 0
  let res = []
  let size = matrix.length * matrix[0].length

  while(res.length < size){
    for(let i = left; i <= right && res.length < size; i++){
      res.push(matrix[top][i])
    }
    top++
    for(let i = top; i <= bottom && res.length < size; i++){
      res.push(matrix[i][right])
    }
    right--
    for(let i = right; i >= left && res.length < size; i--){
      res.push(matrix[bottom][i])
    }
    bottom--
    for(let i = bottom; i>= top && res.length < size; i--){
      res.push(matrix[i][left])
    }
    left++
  }
  return res
}

console.log(spiralOrder(matrix))