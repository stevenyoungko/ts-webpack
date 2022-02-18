class User {
  constructor(name1: string) {
    console.log('物件建立之前')
    this.name = name1
  }

  name: string
  age: number
  address: string

  add() {}
  update() {}
  delete() {}
}

const u1 = new User('steven1')
const u2 = new User('steven2')
const u3 = new User('steven3')

// u1.name = 'steven1'
// u2.name = 'steven2'
// u3.name = 'steven3'

console.log('u1', u1)
console.log('u2', u2)
console.log('u3', u3)

// 拿到設計圖 ---> ????(建立物件前想做什麼) ----> 建立出物件
