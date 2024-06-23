//Object creation
// 1. Using new Object() syntax
console.log("1. Object creation using new Object() syntax");
var company = new Object();
company.name = "CodeAfrika Business Solutions";
company.ceo = new Object();
company.ceo.firstName = "Ngeno";
company.ceo.lastName = "Victor";
company.ceo.favcolor ="Maroon";
console.log(company);
console.log(company["name"]);
console.log("Company CEO name is: " + company.ceo.firstName +" " + company.ceo.lastName)

// 2. Using Object Literal Syntax
console.log("2. Object creation using Object Literal Syntax");
var CodeAfrika = {
    Name : "CodeAfrika Business Solutions",
    ceo : {
        firstName: "Ngeno",
        lastName: "Victor",
        favcolor: "Maroon"
    },
    "stock of company": 110
};
console.log(CodeAfrika);
console.log(CodeAfrika.ceo.firstName);