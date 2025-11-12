// JS - TS
// string, number, boolean, undefined, null

// TS: never, unknown, void

let userName: string = 'mezba123';

// userName = 123;

let userId: number = 123; //* Typescript understands implicitly during variable declaration, inferring the appropriate data type

// userId = '123';

// userName.toFixed()
// userId.toFixed();

let isAdmin: boolean = false; //* Here, i am explicitly stating the data type
isAdmin = true;

let x; //* we did not assign anything, it will be of type any (any type can be assigned to it)
x = 123;
x = 'abc';

let y = undefined; // any type
y = true;

let z: undefined = undefined;
// z = 'hello';
