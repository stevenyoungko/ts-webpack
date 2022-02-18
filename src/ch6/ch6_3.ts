// ========= extends ========= 
// class Animal {
//   run() {
//     console.log('run')
//   } 
// }

// class Dog extends Animal {
//   run() {
//     console.log('dog run ..')
//   }
// }
// class Cat extends Animal {}

// const d1 = new Dog()
// d1.run()

// const c1 = new Cat()
// c1.run()

// ========= constructor super ========= 
// class Animal {
//   name: string
//   constructor(name1: string) {
//     this.name = name1
//   }
//   run() {
//     console.log(`${this.name} is run`)
//   } 
// }

// class Dog extends Animal {
//   run() {
//     super.run() // 覆蓋原本的方法 又想要拿到原本的內容，透過super可以呼叫父層
//     console.log(`dog ${this.name} is run`)
//   } 
// }
// class Cat extends Animal {}

// const d1 = new Dog('ddd1')
// console.log(d1)
// d1.run()

// const c1 = new Cat('ccc1')
// c1.run()

// ========= abstract 抽像 =========
// 好處是本身有一些基本功能可以讓Dog去用，但是會有一些東西會是約束說，你如果繼承我就必須實作出來的功能
// 相較於interface abstract多了本身可以先有一些功能
abstract class Animal {
  run() {
    console.log(`is run`)
  }
  abstract hello(): void
}

// 抽象類別是不可以被new
// const a1 = new Animal()

class Dog extends Animal {
  hello() {
    console.log('hello dog')
  }
}

class Cat extends Animal {
  hello() {
    console.log('hello cat')
  }
}

const d1 = new Dog()
d1.run()
d1.hello()