type RGB = readonly [number,number,number]

const BLACK: RGB = [0,0,0]
// esto no va BLACK.push(4) // las tuplas son mutables 

// Enums
const enum ERROR_TYPES_ENUM {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

// JS
const ERROR_TYPES = {
  NOT_FOUND : 'notFound',
  UNAUTHORIZED : 'unathorized',
  FORBIDDEN : 'forbidden'
}

function mostrarmendaje(tipoDeError: ERROR_TYPES_ENUM){
  if(tipoDeError === ERROR_TYPES_ENUM.NOT_FOUND){
    console.log('No se encontro el archivo')
  }else if(tipoDeError === ERROR_TYPES_ENUM.UNAUTHORIZED){
    console.log('Acceso denegado')
  }else if(tipoDeError === ERROR_TYPES_ENUM.FORBIDDEN){
    console.log('Acceso prohibido')
  }
}

// Aserciones de tipos 
const canvas = document.getElementById('canvas')
// null si no lo encuentra 
// HTMLElement si lo encuentra 

// es inferencia -> TypeScript se da cuenta dentro del if
// ya solo el cancas va a poder se un HTMLCanvasElemnt
if(canvas instanceof HTMLCanvasElement){
  const ctx = canvas.getContext('2d')
}

export type Pokedex = {
  pokemon: Pokemon[];
}

export type Pokemon = {
  id:              number;
  num:             string;
  name:            string;
  img:             string;
  type:            Type[];
  height:          string;
  weight:          string;
  candy:           string;
  candy_count?:    number;
  egg:             Egg;
  spawn_chance:    number;
  avg_spawns:      number;
  spawn_time:      string;
  multipliers:     number[] | null;
  weaknesses:      Type[];
  next_evolution?: Evolution[];
  prev_evolution?: Evolution[];
}

export enum Egg {
  NotInEggs = "Not in Eggs",
  OmanyteCandy = "Omanyte Candy",
  The10KM = "10 km",
  The2KM = "2 km",
  The5KM = "5 km",
}

export type Evolution = {
  num:  string;
  name: string;
}

export enum Type {
  Bug = "Bug",
  Dark = "Dark",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}

// Acersion fetching en TypeScript 
const API_URL = `Pokedex...`
const response = await fetch(API_URL)
if(!response.ok){
  throw new Error('Request Fail')
}
const data = await response.json() as Pokedex

data.pokemon.map(pokemon=> {
  return{
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.type
  }
})

// Interface 
interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
      path: string;
  }
}
const hero: Hero = {
  id: 1017296,
  name: 'Naruto Uzumaki',
  description: 'Um ninja de quatro anos que vive em Konohagakure com seus amigos e familiares.',
  thumbnail:{
    path: '/media/heroes/naruto-uzumaki.jpg'
  },
}
interface Product {
  id: number,
  name: string,
  price: number
}

interface Shoe extends Product {
  brand: string
}

interface Carrito {
  total: number,
  productos: Shoe[]
}

interface CarritoOps {
  add: (poduct:Product) => void
  remove: (id: number) => void
}

interface CarritoOps {
  clear(): void
}


let carrito:Carrito = {
  total: 100,
  productos:[
    {
      id:5,
      name:'Monitor',
      price:3400,
      brand: 'pumba'
    }
  ]
}
// Narrowing
function mostrarLongitud(objeto:(number | string)){
  if(typeof objeto === 'string'){
    return objeto.length
  }
  return objeto.toString().length
}
mostrarLongitud(1)

interface Mario {
  nombre: string
  saltar: ()=>void
}
interface Sonic {
  nombre: string
  correr: ()=>void
}

type Personaje = Mario | Sonic

// type guard
function checkIsSonic(personaje: Personaje): personaje is Sonic{
  return (personaje as Sonic).correr === undefined
}

function jugar(personaje: Personaje){
  if(checkIsSonic(personaje)){
    personaje.correr()
  }
}
// Never
function fn(x: string | number):void{
  if(typeof x === 'string'){
    //do something
  } else if(typeof x === 'number'){
    //do something
  }else{
    x
  }
}
// Clases
interface Animals {
  name: string
  sound?: string
}

class Animal implements Animals{
  name: string
  sound?: string | undefined
  constructor(name:string,sound:string){
    this.name = name
    this.sound = sound
  }
}