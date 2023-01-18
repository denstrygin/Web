const strig: string = 'Hello'
const isFetching: boolean = true
const inte: number = 42
const float: number = 4.2

const numberArray: number[] = [1, 2, 2, 3, 4, 5, 6, 7]
const alterNative: Array<number> = [1, 2, 3, 4]

const contact: [string, number] = ["try", 34]

let variable: any = 42
variable = "string"
variable = []

function sayMyName(name: string): void {
    console.log(name)
}

function throwError(message: string): never {
    throw new Error(message)
}

function infenite(): never {
    while (true) {

    }
}

type Login = string | number
type SomeType = string | null | undefined

let id: Login = "string"
id = 23

sayMyName('Denchik')

console.log(strig)
console.log(id)