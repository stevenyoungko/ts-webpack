function get(a: string, b: number, c: boolean) {
  return a + b
}

// get('123', 123)

// 可選參數
function set(name: string, age?: string) {
  if (typeof age === 'string') {
    return age.split('')
  }
}

// return type
function getNum() {
  return 100
}

function getName(): string {
  return ''
}

// type
type Info = {
  name: string,
  age: number
}

function createUserInfo(info: Info) {
  console.log(info.age)
  return info
}

// never
// 不會回傳任何東西的一個function
function getUserData(): never {
  throw new Error('error')
}

// vold (靜態的意思)
// 不會回傳任何東西
function hello() {
  console.log()
}

// 構建函數
// new
type CardObj = {
  name: string
}

type CardCreator = {
  new(name: string): CardObj
}

function createCard(cardCreator: CardCreator) {
  return new cardCreator('steven')
}

// return [] (避免union情況發生)
function getArr() {
  // return [0, 2, 'steven'] as const
  return [0, 2, 'steven'] as [number, number, string]
}

const [id, age, userName] = getArr()