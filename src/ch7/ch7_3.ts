interface A {
  name: string
}

interface B extends A {}
const b: B = { name: 'steven' }

// class
class AA {}
class BB extends AA {}

// 在條件判斷上的extends
// 左子又父
// 這個extends只是判斷左邊是否相容右邊而已
type T1 = string extends number ? string : number
const a: T1 = 123

// 子介面
type T2 = B extends A ? string : number


// 誰能滿足誰
interface C { name: string }
interface D { name: string, age: number }
type T3 = D extends C ? string : number


// 基本泛型用法
type TT1 = 'steven' extends 'steven2' ? string : number
type TT2<T> = T extends 'bruce' ? string : number
type res = TT2<'steven'>

// union泛型用法
type TT3 = 'steven' | 'steven2' extends 'steven' ? string : number
type TT4<T> = T extends 'steven' ? string : number
type R1 = TT4<'steven' | 'steven2'> 
// 解釋
// 1. 'steven' -> T = string
// 2. 'steven2' -> T = number
// string | number 


// never 是所有類型的子類別
type N1 = never extends 'steven' ? string : number
type N2<T> = T extends 'steven' ? string : number
type R2 = N2<never> // 被當成一個空的union

type TT5<T> = [T] extends ['steven'] ? string : number
type R3 = TT5<'steven' | 'steven2'>