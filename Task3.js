var employees = [{
    name: "John",
    salary: 600,
    age: 50
}, {
    name: "Peter",
    salary: 400,
    age: 30
}, {
    name: "Sam",
    salary: 500,
    age: 40
}];

var count = 0;
for (var i = 0; i < employees.length; i++) {
    if (employees[i].name === "J") {
        count++;
        console.log("Yes");
        break;
    }
}
if (count === 0) {
    console.log("No")
}