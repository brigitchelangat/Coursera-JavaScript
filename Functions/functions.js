//Functions are First-Class Data Types
//Functions are objects i.e they have properties also

function multiply(x,y){
    return x * y;
}
console.log(multiply(6,7));
multiply.version = "v.1.0.0"; //Functions are objects
console.log(multiply.toString());
console.log(multiply.version);

//Passing variables by value vs. by reference
// 1. Pass by value
var a = 7;
var b = a;
b = 5;
console.log(a);
console.log(b); //Result is 5 i.e changing b does not change a

// 2. Pass by reference - Objects
var a ={x:7};
var b = a;
console.log(a);
console.log(b);
//Changing b 
b.x = 5;
console.log(a);
console.log(b);//Change in b affects a

//Functions, Constructors, Prototype and the 'this' keyword
function test(){
    console.log("Hello CodeAfrika!");
    console.log(this); //this keyword points to the global object Window
    this.myName = "Brigit"
}
test();
console.log(window.myName)

//Function constructors
function Circle (radius){ 
    // Constructor- start with a Capital letter
    this.radius = radius;
    // this.getArea = function (){
    //     return Math.PI * Math.pow(this.radius,2);
    // };
    console.log(this);
}
//Prototype - avoids instances/ objects having repeated methods
Circle.prototype.getArea =function (){
    return Math.PI * Math.pow(this.radius,2);
};
var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(30);
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());



