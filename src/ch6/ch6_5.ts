// static 靜態 (可以被共用的東西)

class Bank {
  private static balance: number = 1000
  static withdraw(money: number) {
    if (this.balance <= 0) return
    this.balance -= money
  }
  static getBalance() {
    return this.balance
  }
}

// 設定為static後 不需調用即可馬上使用
// console.log(Bank.balance)
console.log(Bank.getBalance())

function userAwithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance())
}

function userBwithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance())
}

userAwithdraw(200)
userAwithdraw(300)