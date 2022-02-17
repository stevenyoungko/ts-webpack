// overload function 重載
// 多個一樣名稱的function

// function getData(data: string) {
//   // ...
// }

// function getData2(data: number) {
//   // ...
// }

// =============== overload ===============
type Info2 = {}

function getData(data: string): string[]
function getData(data: number): number
function getData(data: boolean): boolean
function getData(data: Info2): Info2
function getData(data: unknown): unknown {
  console.log()
  if (typeof data === 'string') return []
  if (typeof data === 'number') return 999

  // 判斷 info2 return 某個data
  return false
}

getData('')
getData(123)


// error 
// function getData(data: string): string[]
// function getData(data: number): number
function getData(data: number | string): number | string[] {
  return 999
}