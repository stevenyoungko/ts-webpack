// ============================ 擴充 ==============================
// type Animal = {
//   name: string
// }

// type Dog = Animal & {
//   age: number
// }

// type Cat = Animal

// let dog: Dog = {
//   name: '',
//   age: 12
// }

// let cat: Cat = {
//   name: ''
// }

// interface Animal {
//   name: string
// }

// interface Dog extends Animal {}

// let dog: Dog = {}

// 結論
// 如果是擴充，兩者皆可使用

// ============================ 合併 ==============================

// interface Animal {
//   name: string
// }

// interface Animal {
//   age: number
// }

// let dog: Animal = {}

// type Animal {
//   name: string
// }

// type Animal {
//   age: number
// }

// let dog: Animal = {}

// 結論
// 如果是type的話不能做合併 interface則可
