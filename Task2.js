var employees = [{
	name: "Jonh", 
	salary: 600, 
	age: 50
}, {
	name: "Peter", 
	salary: 400, 
	age: 30
}, {
	name: "Sam", 
	salary: 500, 
	age: 60
}, {
	name: "Jack", 
	salary: 400, 
	age: 20
}];
var sortedList = [];
sortedList[0] = employees[0];

for (var i = 1; i < employees.length; i++) {
	if (employees[i].age < sortedList[0].age) {
		console.log('first if')
		sortedList.unshift(employees[i]);
	} else {
		for (var x = 1; x < sortedList.length; x++) {
			console.log('second if')
			if (employees[i].age >= sortedList[x].age) {
				sortedList.push(employees[i]);
				break;
			}
		}
	}
}
console.log(sortedList);
