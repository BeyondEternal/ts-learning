
//Callbacks
let callbackFunction = function(text:string){
    console.log('inside callbackFunction ' + text);
}

function doSomethingWithACallback(initialText:string, callbackFunction:any) {
    console.log('inside doSomethingWithACallBack '+ initialText)
    callbackFunction(initialText)
}

//doSomethingWithACallback('myText', callbackFunction)

//Signatures

function callbackFunctionSig(text:string): void{
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithACallbackSig(initialText:string, callback:(initialText:string)=>void) {
    console.log(`inside doSomethingWithACallbackSig ${initialText}`);
    callback(initialText)
}

doSomethingWithACallback("myText", callbackFunctionSig);

//Overrides

function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{
    return a+b
}

//Try... Catch

try {
    console.log(`1. attemping to parse JSON`)
    JSON.parse(`abcd=1234`)
} catch (error) {
    console.log(`2. try catch error: ${error}`)
} finally{
    console.log(`3. finally`)
}