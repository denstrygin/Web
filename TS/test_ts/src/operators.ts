interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let myName: PersonKeys = 'name'
myName = 'age'
//myName = 'job' - error

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAt'>
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'
//u1 = '_id' - error