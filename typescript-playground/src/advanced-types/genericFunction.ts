//^ Generic Function -- generalise a function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObject = (value: { id: number; name: string }) => [
//   value,
// ];

//& Instead of writing the same type of functions again and again, we can write a generic function
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrayString = createArrayWithGeneric('Apple');
const arrayNumber = createArrayWithGeneric(222);
const arrayObj = createArrayWithGeneric({ id: 112, name: 'Next Level' });

// console.log({ arrayString }, { arrayNumber }, { arrayObj });

//@ Multiple types with functions
//# Tuple

const createArrayWithTuple = (param1: string, param2: boolean) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric('Married', false);
const res2 = createArrayTupleWithGeneric(222, { id: 150, name: 'Ali' });

//*

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: 'Next Level',
    ...studentInfo,
  };
};

const student1 = {
  id: 101,
  name: 'Mezba',
  hasPen: true,
};
const student2 = {
  id: 100,
  name: 'Jhankar',
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);
console.log(result);
