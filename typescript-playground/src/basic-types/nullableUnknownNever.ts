//* nullable types

// here we set type as string OR null so it can take both types of input, hence nullable
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log(`From DB: ALL USERS`);
  }
};
// getUser(null);

//* unknown types
// We dont know or assume what type of input will there be from user
const discountCalculator = (input: unknown) => {
  if (typeof input === 'number') {
    const discountedPrice = input * 0.1; // 10% discount
    console.log(discountedPrice);
  } else if (typeof input === 'string') {
    const [discountedPrice] = input.split(' ');
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log('Wrong Input!');
  }
};

// discountCalculator(100);
// discountCalculator('100 Euro');
// discountCalculator(null);

//* never OR void type - it returns nothing
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError('Error in getting users!');

//! Slight difference between void and never:
// void = the function finishes normally but returns nothing.
// never = the function never finishes (it throws or loops forever).

//? void example
function logMessage(msg: string): void {
  console.log(msg); // function completes
}
//? never example
function throwAnotherError(msg: string): never {
  throw new Error(msg); // function never completes
}
