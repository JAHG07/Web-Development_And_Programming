// let a = "10"
// let b = "11"

// var addBinary = function(a, b) {
//   let res = []
//   let carry = 0
//   let sum = 0
//   let long = a.length > b.length ? a.length : b.length
//   for(let i = 0; i < long; i++){
//     sum = (Number(a[a.length-1-i]) || 0) + (Number(b[ b.length-1-i]) || 0) + carry
//     if(sum >= 3){
//       carry = 1
//       sum = 1
//     }else if(sum == 2){
//       carry = 1
//       sum = 0
//     }else if(sum == 1){
//       carry = 0
//       sum = 1
//     }else{
//       carry = 0
//       sum = 0
//     }
//     res.unshift(sum)
//   }
//   if(carry == 1) res.unshift(1)
//   return res.join('')
// }; 

let a = "10"
let b = "11"

var addBinary = function(a, b) {
  let res = ""
  let carry = 0
  let m = a.length
  let n = b.length
  for(let i = a.length-1, j = b.length-1; i>=0 || j>=0; i--,j--){
    let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry
    res = (sum % 2) + res
    carry = sum > 1 ? 1 : 0
  }
  if(carry) res = '1' + res
  return res
}; 
console.log(addBinary(a,b))