//Variables
var n = 4; // let is used to change value later
n = 5;
var PI = 3.14; // const is used unchange values or final values.
var name = "Abdallah";
var isAdmin = true;
var x;
x = "Guest";
x = 5;
x = false;
// Functions
// Normal functions
//1. void type
function greet() {
    console.log("Greet!!!");
}
// calling
greet();
//2. return something
function hello() {
    return "Hello there!";
}
// calling
var h = hello();
console.log(h);
// Arrow/lambda/fat arrow/callback/anonymous functions
var sq = function (n) { return n * n; };
//calling
var square = sq(4);
console.log(square);
var add = function (a, b) {
    return a + b;
};
//call
var res = add(3, 3);
console.log(res);
