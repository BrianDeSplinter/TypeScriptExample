let myString: string
// concatenations ok 'Hello' + 'world"
// function return 'Hello'.splice(0,3)
let myNum: number
// positive and negative numbers ok
// decimals 5.5
// expression 5 + 5
let myBool: boolean
let myVar: any
//accepts any data type
let strArr: string[]
// needs an array of strings
// can also be written as:
// let strArr: Array<string>
let numArr: number[]
// needs an array numbers
// can also be written as:
// let numArr: Array<number>
let boolArr: boolean[]
// needs an array of booleans
// can also be written as:
// let boolArr: Array<boolean>
let strNumTuple: [string, number]
// has to match pattern
// once past the defined requirements you can add anything
let myVoid: void
// will work with null or undefined
let myNull: null 
// will work with null or undefined
let myUndefined: undefined
// will work with null or undefined

myString = 'Fireworks'
myNum = 1776
myBool = true
myVar = "Happy 4th everyone!"
strArr = ['Stay', 'safe']
numArr = [7, 4, 1776]
boolArr = [true, false, true]
strNumTuple = ['Happy', 4]

console.log('String:', myString);
console.log('Number:', myNum);
console.log('Boolean:', myBool);
console.log('Any:', myVar);
console.log('String Array:', strArr);
console.log('Number Array:', numArr);
console.log('Boolean Array:', boolArr);
console.log('Tuple Array:', strNumTuple);
