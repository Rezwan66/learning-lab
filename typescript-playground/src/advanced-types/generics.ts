//$ generics - to dynamically generalize sth
//@ We define a generic in such a way as if it takes a param like a function, so it can be reused for different types of array:

// type GenericArray<value> = Array<value>;
type GenericArray<T> = Array<T>; //* Most codebases denote it as T for type

// const friends: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
// const friends: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']; //^ Another way of defining type - using Array constructor using angle brackets
const friends: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

// const rollNumbers: number[] = [101, 102, 103];
// const rollNumbers: Array<number> = [101, 102, 103];
const rollNumbers: GenericArray<number> = [101, 102, 103];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };
// For Array of objects
const userList: GenericArray<User> = [
  {
    name: 'Mr. X',
    age: 28,
  },
  {
    name: 'Mr. Y',
    age: 22,
  },
  {
    favouriteColor: 'green',
  },
];

const sqrFunc = (val: number) => val * val;
//!
//@
//#
//$
//%
//^
//&
//*
//?
//~

// Tuple:
type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];
