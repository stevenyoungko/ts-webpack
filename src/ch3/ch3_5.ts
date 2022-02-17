// unknown?
let name3: unknown = 'steven'
name3 = '123'

// 斷言？
let name4: unknown = '123'
let name5 = name4 as string

// 斷言應用
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json() as { userId: number, id: number, title: string, completed: boolean }
  console.log(data)
}
getData()

// any 與 unknown
// unknown -> (安全的any)

let liveStatus = false
function getLiveName() {
  let liveName: unknown
  if (liveStatus) {
    liveName = 'abc'
  } else {
    liveName = null
  }
  return liveName
}

const result = getLiveName()
if (typeof result === 'string') {
  result.split('')
}