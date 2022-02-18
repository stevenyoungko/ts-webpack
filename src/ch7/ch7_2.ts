// interface 泛型
interface Card<T> {
  title: string,
  desc: T
}

function printCardInfo<TT> (desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: 'steven',
    desc
  }
  return data
}

console.log(printCardInfo<number>(999))

interface CarProps<TTT> {
  name: TTT
}

class Car<TTT> implements CarProps<TTT> {
  name: TTT
  constructor(value: TTT) {
    this.name = value
  }
}

const car1 = new Car<string>('bmw')