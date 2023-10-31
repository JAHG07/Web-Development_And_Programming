const num = 55
const names = "Jose Antonio"

names.toLocaleLowerCase()

const anyValue:any = "hola"
let myName:string = "Esto es un sting"
let anyOtherValue: unknown = 55

//inferencia de datos 
const a = 5
const b = 6
const c = a + b

//No se puede 
//c = 'Hola'
//a.propieties

//functions
function add(x:number, y: number):number{
  return x+y;
}
add(5,2)
function saludar({name,age} : {name:string , age: number}){
  console.log(`hola ${name} tines ${age}`);
}
saludar({name:"José", age:30})
function saludar2(person: {name:string,age:number}){
  const { name, age} = person
  console.log(`hola ${name} tines ${age}`);
}
saludar2({name:"José", age:30})

function saludar3({name,age} : {name:string , age: number}): number {
  console.log(`hola ${name} tines ${age}`);
  return age
}

const sayHiFromFunction = (fn: (name:string)=> void) => {
  return fn('Jose')
} 

const sayHi = ((name:string)=>{
  console.log("Hello")
})

sayHiFromFunction(sayHi)

//Tipar las arrow functions 
const sum = (a:number, b:number):number => {
  return a+b
}
const res: (a:number, b:number)=>number = (a,b)=>{
  return a-b
}
//never
function trowError(message:string): never {
  throw new Error(message)
}
//inferencias finciones anonimas segun el contexto
const avengers = ['Thor','Iron Man']

avengers.forEach(aveng=> aveng.toLocaleLowerCase())

//OObjeto 
let hero = {
  name: 'Thor',
  age: 1500
}
//esta mal hero.age = 'hola'
function createHero(name:string, age:number) {
  return {name, age}
}
const Tohr = createHero('Thor',1500)
//Type Alias
//Template union type
type HeroId = `${string}-${string}-${string}-${string}`
type Hero = { //esto se hace en PascalCase
  readonly id?: HeroId
  name:string
  age:number
  isActive?: boolean //optional propertie
  powerScale?:HeroPowerScale
}
let heros: Hero = {
  id: '123-123-123-123',
  name:'Spiderman',
  age:30
}
function createHeros(hero:Hero): Hero{
  const {name, age} = hero
  return { id:crypto.randomUUID(),name, age, isActive: true}
}
const Spiterman = createHeros({name:'Spiterman',age:30})

Spiterman.id?.toString()// si tiene id
//Esta mal Spiterman.id = 666

//Template Union Types 
type HexaDecimalColor = `#${string}`
const color: HexaDecimalColor = '#033522' 

//Union Types 
type HeroPowerScale = 'krilin' | 'veggeta' | 'goku'
Spiterman.powerScale = 'veggeta'

let ann: number | string
ann = 'esto puede ser un string o un numero'

//Intersection Types
type HeroBasicInfo = {
  name: string
  age: number
}
type AdditionalHeroInfo = {
  power?: HeroPowerScale
  id?: HeroId
}
type HeroFullInfo = HeroBasicInfo & AdditionalHeroInfo

//Type Indexing
type HeroProperties = {
  isActive: false
  address: {
    city: string
    planet: string
  }
}

const addresHero: HeroProperties['address'] = {
  city: "New York",
  planet: "Terra"
}
//Type From value
const address = {
  planet:'Terra',
  city:'Aguascalientes'
}

type Address = typeof address

const addressLol: Address = {
  planet:'Marte',
  city:'Ciudad de México'
}
//Type from function return
function getAddress() {
  return {
    planet: 'Terra',
    city: 'Guadalajara'
  }
}

type AdrressFunction = ReturnType<typeof getAddress>

//Arrays
const arr: number[] = []
const arr1: Array<number> = [1,2,3]
const both: (string | number)[] = [1,'',2,3]

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue]
]

const boardGame:GameBoard = [
  ['','',''],
  ['','',''],
  ['','','']
]



