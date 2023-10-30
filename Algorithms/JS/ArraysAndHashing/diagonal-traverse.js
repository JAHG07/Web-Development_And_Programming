let mat = [[1,2,3],[4,5,6],[7,8,9]]

var findDiagonalOrder = function(mat) {
  if(mat.length == 0) return []
  
  let m = mat.length
  let n = mat[0].length
  let r = 0
  let c = 0
  const res = new Array(m * n)
  
  for(let i = 0 ; i < res.length; i++){
    res[i] = mat[r][c]
    if((r+c) % 2 == 0){
      if(c == n - 1) r++
      else if (r == 0) c++
      else {
        r--
        c++
      }
    }
    else{
      if(r == m - 1) c++
      else if(c == 0) r++
      else{
        r++
        c--
      }
    }
  }
  return res
}

console.log(findDiagonalOrder(mat))