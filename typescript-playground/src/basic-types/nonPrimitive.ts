//? array, object

//? TS - tuple

let bazarList: string[] = ['eggs', 'milk', 'sugar'];

// bazarList.push(12);

let mixedArray: (string | number)[] = ['eggs', 12, 'milk', 2, 'sugar', 1];

mixedArray.push(22);

//* Tuple
let coordinates: [number, number] = [20, 50, 30];

let couple: [string, string] = ['Husband', 'Wife'];

let nameAndRoll: [string, number] = ['Mezba', 79];

//! nameAndRoll[0] = 79;

let destination: [string, string, number] = ['Dhaka', 'Chattogram', 3];

//* Reference type: object

const user1: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: 'Mezbaul',
  middleName: 'Abedin',
  lastName: 'Forhan',
};

const user2: {
  organization: 'Programming Hero'; //==> literal type : we can assign value as type (so it will be immutable)
  firstName: string;
  middleName?: string; // if we define type, it will be required value for object by default. hence we make it optional using ?-- this is optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: 'Programming Hero',
  firstName: 'Jhankar',

  lastName: 'Mahbub',
  isMarried: true,
};

// user2.organization = 'Next Level';

// console.log(user2);

const user3: {
  readonly organization: string; // Access modifier: another way to fix value for a object
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: 'SAP',
  firstName: 'Shaikh',
  lastName: 'Rezwan',
  isMarried: false,
};

user3.organization = 'Microsoft';
