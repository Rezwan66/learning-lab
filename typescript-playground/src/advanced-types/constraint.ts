//^ Constraint: to enforce a strict set of rules for objects/functions

//% This function has a huge flaw:: we are dynamically handling the type, but  we have no constraint of what is inputted, for eg sth like student3
//& If there are some info we must need, eg id,name, we can enforce using constraint
type Student = { id: number; name: string; dateOfBirth: string; age: number };
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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
const student3 = {
  hasWatch: true,
};
const student4 = {
  id: 444,
  name: 'Abdur',
  dateOfBirth: '20-20-2026',
  age: 20,
  hasWatch: true,
};

const result = addStudentToCourse(student4);
console.log(result);
