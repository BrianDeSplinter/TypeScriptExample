console.log('These are logs from function file:');
function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1,4))
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 == 'string') {
        num2 = Number(num2);
    }
    return num1 + num2;
};
//console.log(mySum('3', 5))
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
// the ? makes last name optional
console.log(getName('George', 'Washington'));
function myVoid() {
    return;
}
