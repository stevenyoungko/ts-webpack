// 泛型
// <>

// T -> type
function print<T>(data: T) {
  let name: T
  console.log(data)
}

// 使用
print<string>('steven')
print<number>(123)
print<boolean>(false)