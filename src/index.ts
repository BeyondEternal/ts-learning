let mensaje: string = "Hola mundo"

mensaje = "Adiós mundo"


mensaje = "Chau mundo"
//console.log(mensaje)

let extincionDinosaurios: number = 76_000_000
let dinosaurioFav: string = "T-Rex"
let extintos = true

// extintos = 42

function listening(config: any) {
    return config
}

let tupla: [number,string[]] = [3,['Hola','Mundo']]

enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande

console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id:number,
  nombre: string,
  talla: Talla,
  direccion: Direccion
}

const objeto: Persona = { id: 1, nombre: 'Hola Mundo', talla: Talla.Chica, direccion: {numero: 1, calle: 'Esmeralda', pais: 'México'} }

const arr: Persona[] = []


function printPosition (position: {lat: number, long: number,}){
  console.log(`Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`)
}