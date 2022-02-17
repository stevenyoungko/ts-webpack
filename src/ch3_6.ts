// union
const arr7: (string|boolean)[] = []
arr7.push('123')
arr7.push(false)

let liveName: string | number
liveName = '123'
liveName = 123
// liveName = false

// 永遠不可能發生
// never
// if (typeof liveName === 'string') {
//   liveName.split('')
// }

// 強制斷言

let liveName2 = 123

// ...

let liveName3 = liveName2 as unknown as string