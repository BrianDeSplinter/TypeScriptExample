console.log('These are logs from function file:');
function getSum(num1: number, num2:number):number{
    return num1 + num2
}

// console.log(getSum(1,4))

let mySum = function(num1: any, num2: any): number{
    if(typeof num1 == 'string'){
        num1 = Number(num1)
    }
    if(typeof num2 == 'string'){
        num2 = Number(num2)
    }
    return num1 + num2
}

//console.log(mySum('3', 5))

function getName(firstName: string, lastName?: string): string{
    if(lastName == undefined){
        return firstName
    }
    return firstName + ' ' + lastName;
}
// the ? makes last name optional
console.log(getName('George', 'Washington'));

function myVoid(): void{
    return
}