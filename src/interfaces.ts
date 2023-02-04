interface IComplexType1 {
    id: number,
    name: string
}

let complexType: IComplexType1

complexType = {
    id: 1,
    name: "test"
}


//Optional properties

interface IOptionalProp {
    id: number,
    name?: string
}

let optionalProp: IOptionalProp


let idOnly: IOptionalProp = { id: 2 }
let idAndName: IOptionalProp = { id: 2, name: "idAndName" }

idAndName = idOnly

//Weak types

interface IWeakType {
    id?: number,
    name?: string
}

let weakTypeNoOverlap: IWeakType;

weakTypeNoOverlap = {
    // description: "my description"
}

//Type inference with the in operator

interface IHasIdAndNameProperty {
    id: number,
    name: string
}

interface IHasDescAndValueProperty {
    description: string,
    value: number
}


function printNameOrDescription(value: IHasDescAndValueProperty | IHasIdAndNameProperty){
    if('id' in value){
        console.log(`found id ! | name: ${value.name}`);        
    }
    if('value' in value){
        console.log(`found value ! description: ${value.description}`)
    }
}

printNameOrDescription({id:1, name:"test"})