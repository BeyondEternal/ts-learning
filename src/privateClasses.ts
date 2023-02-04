class CountClass {
    private _count:number;
    constructor() {
        this._count=0
    }
    countUp(){
        this._count++;
    }
    getCount(){
        return this._count
    }
}

let countInstance = new CountClass()
countInstance.countUp()
