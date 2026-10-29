//Variables
let n: number = 4; // let is used to change value later
n = 5;
const PI = 3.14; // const is used unchange values or final values.

let name: string = "Abdallah";
let isAdmin: boolean = true;
let x: any;
x = "Guest";
x = 5;
x = false;

// Functions
// Normal functions
//1. void type
function greet(): void {
  console.log("Greet!!!");
}

// calling
greet();

//2. return something
function hello(): string {
  return "Hello there!";
}

// calling
const h = hello();

console.log(h);

// Arrow/lambda/fat arrow/callback/anonymous functions
const sq = (n: number) => n * n;

//calling
const square = sq(4);
console.log(square);
const add = (a: number, b: number) => {
  return a + b;
};

//call
const res = add(3, 3);
console.log(res);
