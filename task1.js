var salaries = {
    Jonh: 600,
    Peter: 400,
    Sam: 500
};
var sum = 0;
for (var key in salaries) {
    if (salaries[key] > 0) {
        sum = sum + salaries[key];
    }
}
console.log(sum);
