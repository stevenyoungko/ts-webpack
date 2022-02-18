// TS 所提供的成員類型  (公開、私有、受保護的)

// public private protected
class UserInformation {
  protected name: string = 'steven'
}

// const uInfo = new UserInformation()
// console.log(uInfo)

// 如果是protected 除了自己本身和繼承它以外的人都無法訪問他 private 只有自己本身
class StreamerInformation extends UserInformation {
  hello() {
    console.log(this.name)
  }
}

const sInfo = new StreamerInformation()
sInfo.hello()

// =========================================================================
// 可以保證name不會被修改 但是可以被訪問
class UserInformation2 {
  private name: string = 'steven'
  getName() {
    return this.name
  }
}

class StreamerInformation2 extends UserInformation2 {
  // hello() {
  //   console.log(this.name)
  // }
}

const sInfo2 = new StreamerInformation2()
console.log(sInfo2.getName())






// js原生成員寫法 (2020)
// 等同於private
class UserInformation3 {
  #name: string = 'steven'
  getName() {
    return this.#name
  }
}

const sInfo3 = new UserInformation3()
console.log(sInfo3.getName())