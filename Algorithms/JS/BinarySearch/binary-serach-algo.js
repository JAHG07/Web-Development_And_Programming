function binarySearch(list, target) {
  let [l, r] = [0, list.length - 1]
  while (l <= r) {
    let mid = (l + r) >> 1
    let guess = list[mid]
    if (target === guess) return mid
    else if (target <= guess) r = mid - 1
    else l = mid + 1
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5], 5))
