// Rest參數 (function)


// 多個參數 -> func
function calculate(...nums: number[]) {
  console.log(nums)
}

calculate(1,2,3,4,5)

function calculate2(a: number, b: number, c: number) {
  console.log(a)
  console.log(b)
  console.log(c)
}

const nums2 = [1,2,3] as const
calculate2(...nums2)