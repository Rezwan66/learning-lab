// Interface is the same is type alias

//* Type alias
type User = {
  name: string;
  age: number;
};
type Role = {
  role: 'admin' | 'user';
};
//* Interface
interface IUser {
  name: string;
  age: number;
}
//* Intersection - &
type UserWithRole = User & Role; // alias intersection
// interface extends
interface IUserWithRole extends IUser {
  role: 'admin' | 'user';
}

const user1: UserWithRole = {
  name: 'Jack',
  age: 100,
  role: 'admin',
};
const user2: IUser = {
  name: 'Rose',
  age: 102,
};
const user3: IUserWithRole = {
  name: 'Mark',
  age: 85,
  role: 'user',
};

//? There is a slight difference between type alias and interface
//* It is clear that for primitive types, we cannot use interface, we must use alias
//* Interface only works with : object types : array, object, function
//* Type alias is simpler and recommended while using Primitive types, Arrays & Functions
//* Interface is better with objects. Interface is mainly used in OOP, because many times the types needs to be extended.

type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

// function
type AddFunc = (num1: number, num2: number) => number;
interface IAddFunc {
  (num1: number, num2: number): number;
}
const add: IAddFunc = (num1, num2) => num1 + num2;

// array
type Friends = string[];

//? index =       0    1    2
interface IFriends {
  [index: number]: string; // This is how to define interface of array
}

const friends: IFriends = ['A', 'B', 'C'];
