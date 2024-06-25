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

//Shorthand notation for creating arrays - []
var names = ["Brigit", "Brian", "Evans"];
console.log(names);

//looping through the array
for(var i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}
names[100] = "Victor";
for(var i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}

var names2 = ["Brigit", "Brian", "Evans"];

for(var Nam in names2){
    console.log("Hello " + names2[Nam])
}