//^ oop: instance of type guard/type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} sleeps for ${numOfHours} hours daily!`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} studies for ${numOfHours} hours daily!`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClasses(numOfHours: number) {
    console.log(`${this.name} takes classes for ${numOfHours} hours daily!`);
  }
}

//@ function guard
const isStudent = (user: Person) => {
  return user instanceof Student; // boolean: true // user is Student
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  //? When we input a user, we will only be able to get the common methods, and the function will not understand if its a student or teacher
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClasses(4);
  } else {
    user.getSleep(15);
  }
};

//$ When a object is created from a blueprint class that is an instance of the class
const student1 = new Student('Minhaz'); //instance of Student class
const teacher1 = new Teacher('Mr. White'); //instance of Teacher class
const person1 = new Person('Jeff Bezos'); //instance of Person class

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
