// function hello2(text: string) {
//   console.log(text)
// }

// function hello3(text: number) {
//   console.log(text)
// }

// hello2('steven')
// hello3(123)


// ================ 泛型 ====================
// T = type
function hello2<T, U>(text: T, text2: U): T {
  let data: T = text
  let data2: U = text2
  console.log(text, text2)
  return data
}

hello2<string, number>('steven123', 123)
hello2<number, boolean>(123, false)