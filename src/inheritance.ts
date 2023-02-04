interface IBase {
    id: number | undefined
}

interface IDerivedFromBase extends IBase {
    name: string | undefined
}

class InterfaceInheritanceClass implements IDerivedFromBase {
    id: number | undefined
    name: string | undefined
}

// CLASS INHERITANCE

class BaseClass implements IBase {
    id: number | undefined
}

class DerivedFromClass
    extends BaseClass
    implements IDerivedFromBase {
    name: string | undefined
}

interface IFirstInterface{
    id: number | undefined
}

interface ISecondInterface{
    name: string | undefined
}

class MultipleInterfaces
implements IFirstInterface, ISecondInterface{
    id: number | undefined
    name: string | undefined
}

