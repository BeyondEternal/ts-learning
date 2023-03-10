import { log } from "console"

//UNION TYPE
let unionType: string | number

unionType = 1
console.log(`unionType: ${unionType}`)

unionType = "test"
console.log(`unionType: ${unionType}`)


//TYPE GUARDS
function addWithUnion(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        console.log('first argument is a string')
        return arg1 + arg2
    }
    if (typeof arg1 == "number" && typeof arg2 == "number") {
        console.log('both are numbers')
        return arg1 + arg2
    }
    console.log('default return')
    return arg1.toString() + arg2.toString()
}

console.log(addWithUnion("1", 2))

//TYPE ALIASES

type StringOrNumber = string | number

function addWithAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString()
}

type CallbackWithString = (arg: string) => void

function usingCallbackWithString(callback: CallbackWithString) {
    callback('this is a string')
}


//NULL AND UNDEFINED

function testUndef(test: null | number) {
    console.log('test parameter' + test)
}

//testUndef()

let x: number | undefined
x = 1
x = undefined
// x = null


//Null operands
function testNullOperands(
    arg1: number,
    arg2: number | null | undefined
) {
    // let a = arg1+arg2
    // let b = arg1*arg2
    // let c = arg1<arg2
}

//NEVER
/**
 * @type never restrict to use a return in my funct 
 * */
function alwaysThrow(): never {
    throw 'this will always throw'
    // return -1
}

enum TestNeverEnum {
    FIRST,
    SECOND
}

function getEnumValue(value: TestNeverEnum): string {
    switch (value) {
        case TestNeverEnum.FIRST: return 'first case'
        case TestNeverEnum.SECOND: return 'second case'
    }
    let returnValue: never = value
}

//Unknown
/**
 * @type unknown is a type-safe like any
 */

let unknownType: unknown = "an unknown string"
console.log(`unknownType : ${unknownType}`)

unknownType = 1
console.log(`unknownType : ${unknownType}`)


//OBJECT REST AND SPREAD

let fistObj = { id: 1, name: "firstObj" }

let secondObj = { ...fistObj }

console.log(`secondObj : ${JSON.stringify(secondObj)}`)

let nameObj = { name: "nameObj" }
let idObj = { id: 1 }

let thirdObj = { ...nameObj, ...idObj }

console.log(`thirdObj : ${JSON.stringify(thirdObj)}`)

let objPrec1 = { id: 1, name: "object prec 1" }
let objPrec2 = { id: 1001, description: "object prec 2 descripton" }

let obj4 = { ...objPrec1, ...objPrec2 }
console.log(`obj4 : ${JSON.stringify(obj4)}`)
// it also works with arrays

let firstArray = [1, 2, 3, 4, 5]
firstArray = [...firstArray, 6, 7, 8]

console.log(`firstArray : ${firstArray}`)

let secondArray = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" }
]
secondArray = [
    { id: -1, name: "name-1" },
    ...secondArray,
    { id: 3, name: "name3" }
]
console.log(`secondArray : ${JSON.stringify(secondArray)}`)

//TUPLES

let tupleType: [string, boolean]
tupleType = ["test", false]
// tupleType = ["test"]

console.log(`tupleType[0] : ${tupleType[0]}`)
console.log(`tupleType[1] : ${tupleType[1]}`)

let [t1, t2] = tupleType
console.log(`t1: ${t1}`)
console.log(`t2: ${t2}`)

let optionalTuple: [string, boolean?]
optionalTuple = ["test", false]
console.log(`optionalTuple: ${optionalTuple}`)
optionalTuple = ["test"]
console.log(`optionalTuple: ${optionalTuple}`)


function useTupleAsRest(...args: [number, string, boolean]) {
    let [arg1, arg2, arg3] = args
    console.log(`arg1: ${arg1}`)
    console.log(`arg2: ${arg2}`)
    console.log(`arg3: ${arg3}`)
}

useTupleAsRest(1, "stringValue", false)

type RestTupleType = [number, ...string[]]

let restTuple: RestTupleType = [1, "string1", "string2", "string3"]

//BIG INT

console.log(`using bigint :`)
let bigIntNumber: bigint = 9_007_199_254_740_991n
for (let i = 0; i < 10; i++) {
console.log(`${i} : ${bigIntNumber + BigInt(i)}`)
}