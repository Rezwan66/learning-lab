// Function
// arrow function, normal function
//* When functions ae used inside objects they are called methods
// callback functions are functions looped inside other functions

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add(2, '2'));
// console.log(addNormal(2, 2));

const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(2, 4);

//* Object => function -> method

const poorUser = {
  name: 'Mezba',
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
poorUser.addBalance(100000);
// console.log(poorUser.addBalance(100000));

//* Callback function
const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((element: number): number => element * element);

console.log(sqrArray);
