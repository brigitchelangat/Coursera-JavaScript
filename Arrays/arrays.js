//Arrays
var array = new Array();
array[0] = "Brigit";
array[1] = 24;
array[2] = function (Name) {
    console.log("Hello " + Name)
};
array[3] = {course: "HTML, CSS &JS"};

console.log(array);
array[2](array[0]); //calling the function at position 3
console.log(array[3].course)

//Shorthand notation for creating arrays
