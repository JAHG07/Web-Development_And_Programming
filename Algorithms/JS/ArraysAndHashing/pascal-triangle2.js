let rowIndex = 5
// This solution runs in 0.055ms
var getRow = function(rowIndex) {
  console.time()
  let res = []
  let prev = 1
  res.push(prev)
  for(let i = 1; i <= rowIndex; i++){
    let current = (prev * (rowIndex-i+1))/i
    res.push(current)
    prev = current
  }
  console.timeEnd()
  return res
};
// Leetcode 1st solution runtime 0.099ms
var getRow1 = function(rowIndex) {
  console.time()
  let numRows = rowIndex + 1;
  let rows = [[1]];
  
  const appendRow = idx => {
      let prevRow = [0, ...rows[idx-1], 0];
      let row = [];

      for(let j=0; j<prevRow.length-1; j++){
          row.push(prevRow[j] + prevRow[j+1]);
      }
      rows.push(row);

      if(rows.length < numRows)
          appendRow(idx+1);
  }

  if(numRows > 1) appendRow(1)
  
  console.timeEnd()
  return rows[rows.length-1];
};

console.log(getRow(rowIndex))