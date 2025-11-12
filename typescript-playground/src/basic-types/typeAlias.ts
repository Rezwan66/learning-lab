// Type Aliasing: We will define a type which we can reuse for different data structures.
// Types named with Capitalised convention like class
type User = {
  id: number; //types are always written ending with ; instead of ,
  name: {
    firstName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: 'Walter',
    lastName: 'White',
  },
  gender: 'male',
  contactNo: '01780000000',
  address: {
    division: 'Chatto',
    city: 'Chattogram',
  },
};
const user2: User = {
  id: 163,
  name: {
    firstName: 'Skylar',
    lastName: 'White',
  },
  gender: 'female',
  contactNo: '01780000000',
  address: {
    division: 'Dhaka',
    city: 'Dhaka',
  },
};

//? For these one line things, normally the type is directly defined beside the variable name, instead of a separate alias
type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = 'Shaikh';

//* Type Aliasing for Functions

type AddFunc = (num1: number, num2: number) => number; // return type must be defined

const add: AddFunc = (num1, num2) => num1 + num2;
