// Type Assertion - ami TS er theke beshi bujhi
// When we will be sure what the type of the variable will be, we can assert it. Also called type narrowing.

let anything: any;

// anything = 122;
anything = 'Shajia';

// anything.
// (anything as number).toExponential();
(anything as string).toUpperCase(); //* We are asserting the type ourselves, otherwise, if it was just any, we couldnt use type specific transformation functions!

const kgToGmConverter = (
  value: string | number
): string | number | undefined => {
  if (typeof value === 'number') {
    return value * 1000;
  } else if (typeof value === 'string') {
    const [input] = value.split(' ');
    return `Converted output is: ${Number(input) * 1000}`;
  }
};

// *
// * We are already sure here that when input will be number, return type will also be number
// * So we can do type assertion, so we get the available functions

const result1 = kgToGmConverter(5) as number;
// result1.
const result2 = kgToGmConverter('2 kg') as string;
// console.log({ result1 }, { result2 });

// * Common Example
type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.error((error as CustomError).message);
}

//? For eg. if we use a 3rd party library which doesnt have much type support, then we may use type assertion.
