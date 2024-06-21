//variable declaration keyword var)
var X = "Hello World!";
//undefined type in JS
var x;   
console.log(x);
if(x ==undefined){
    console.log("x is undefined")
}
/*
a) Function definition syntax
1. function a ( Arguments){
 -- function body --
 }
 2. var a = function ( Arguments){
 -- function body --
 }
-- Arguments are not declare with the keyword var

 b) Function invokation or execution ways

 1. function compare (x,y) { --- }
 2. var a = compare(4,5);
 3. compare(4, "a");
 4. compare();
 

*/
// Scope and scope chain
var message = "in global";
console.log("global: message = "+message);
var a = function(){
    var message ="inside a";
    console.log("a: message = "+message);
    /*function b(){
        console.log("b: message = "+message);
    }
    b(); //Outer Environment of b is in a
    */
    b(); //Outer Environment of b is the global

}
function b(){
    console.log("b: message = "+message);
}

a();


//Lecture 43: Common Language Constructs
