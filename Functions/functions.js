//Functions are First-Class Data Types
//Functions are objects i.e they have properties also

function multiply(x,y){
    return x * y;
}
console.log(multiply(6,7));
multiply.version = "v.1.0.0"; //Functions are objects
console.log(multiply.toString());
console.log(multiply.version);
