class SimpleClass {
    id: number | undefined
    print(): void {
        console.log(`SimpleClass has id: ${this.id}`)
    }
}

let mySimpleClass = new SimpleClass()


mySimpleClass.id = 1001
mySimpleClass.print()


//IMPLEMENTING INTERFACES
interface IPrint {
    print(): void
}

function printClass(a: IPrint) {
    a.print()
}

class ClassA implements IPrint {
    print() {
        console.log(`ClassA.print()`)
    }
}

class ClassB implements IPrint {
    print() {
        console.log(`ClassB.print()`)
    }
}

let classA = new ClassA()
let classB = new ClassB()

printClass(classA)
printClass(classB)

//CLASS CONSTRUCTORS

class ClassWithConstructor {
    id: number
    name: string
    constructor(_id: number, _name: string) {
        this.id = _id
        this.name = _name
    }
}

let classWithConstructor = new ClassWithConstructor(1, "name")

console.log(`classWithConstructor: ${JSON.stringify(classWithConstructor)}`)

//CLASS FUNCTIONS

/**
 * @syntax constructor() also can be a function override
 */

class ComplexType implements IComplexType {
    id: number
    name: string
    constructor(idArg: number, nameArg: string)
    constructor(idArg: string, nameArg: string)
    constructor(idArg: any, nameArg: any) {
        this.id = idArg
        this.name = nameArg
    }
    print(): string {
        return `id: ${this.id} name: ${this.name}`
    }
    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1
    }
    usingTheOptionalParameters(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1
        }
    }
    usingDefaultParameters(defaultArg1: number = 0) {
        this.id = defaultArg1
    }
    usingRestSyntax(...argArray: number[]) {
        if (argArray.length > 0) {
            this.id = argArray[0]
        }
    }
    usingFunctionCallback(callback: (id: number) => string) {
        callback(this.id)
    }
}

let ct_1 = new ComplexType(1, "ct_1")
let ct_2 = new ComplexType("abc", "ct_2")
// let ct_3 = new ComplexType(true, "test")

interface IComplexType {
    id: number,
    name: string,
    print(): string,
    usingTheAnyKeyword(arg1: any): any,
    usingTheOptionalParameters(optionalArg1?: number): void,
    usingDefaultParameters(defaultArg1?: number): void
    usingRestSyntax(...argArray: number[]): void,
    usingFunctionCallback(callback: (id: number) => string): void
}


//CLASS MODIFIERS

class ClassWithPublicProperty {
    public id: number | undefined
}

let publicAccess = new ClassWithPublicProperty()

publicAccess.id = 10


class ClassWithPrivateProperty {
    private id: number | undefined
}

let privateAccess = new ClassWithPrivateProperty()
// privateAccess.id = 20

//CONSTRUCTOR ACCESS MODIFIER

class ClassWithAutomaticProperties {
    constructor(public id: number, private name: string) { }
}
let myAutoClass =
    new ClassWithAutomaticProperties(1, "className")
console.log(`myAutoClass id: ${myAutoClass.id}`)
//console.log(`myAutoClass.name: ${myAutoClass.name}`)

//READONLY PROPERTIES

class ClassWithReadOnly {
    readonly name: string
    constructor(_name: string) {
        this.name = _name
    }
    // setReadOnly(_name:string){
    //     this.name = _name
    // }
}

// CLASS PROPERTY ACCESSORS

class ClassWithAccessors {
    private _id: number | undefined
    get id() {
        console.log(`inside get id()`)
        return <number>this._id
    }
    set id(value: number) {
        console.log(`inside set id()`)
        this._id = value
    }
}

let classWithAccessors = new ClassWithAccessors()

classWithAccessors.id=2
console.log(`id property is set to ${classWithAccessors.id}`)

//STATIC FUNCTIONS

class StaticClass{
    static printTwo(){
        console.log('2')
    }
}

StaticClass.printTwo()

// STATIC PROPERTIES

class StaticProperty{
    static count = 0
    updateCount(){
        StaticProperty.count++
    }
}

let firstInstance = new StaticProperty()

console.log(`StaticProperty.count = ${StaticProperty.count}`)
firstInstance.updateCount()
console.log(`StaticProperty.count = ${StaticProperty.count}`)

let secondInstance = new StaticProperty()
secondInstance.updateCount()
console.log(`StaticProperty.count = ${StaticProperty.count}`)


//NAMESPACES

namespace FirstNameSpace{
    class NotExported{

    }
    export class NameSpaceClass{
        id: number | undefined
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass()

//  let notExported = new FirstNameSpace.NotExported()

namespace SecondNameSpace{
    export class NameSpaceClass{
        name: string | undefined
    }
}

let secondNameSpace = new SecondNameSpace.NameSpaceClass()
