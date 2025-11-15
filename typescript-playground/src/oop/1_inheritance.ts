//^ inheritance - if a property or method of a class is inherited by another child class.

//can be named as 'Person'
class Parent {
  name: string; //# common property
  age: number; //# common property
  address: string; //# common property
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //# common method
  getSleep(hours: number) {
    console.log(`${this.name} sleeps for ${hours} hours!`); //& hours is an outside property which we receive as param, hence we dont use this.
  }
}

class Student extends Parent {} //@ newly created Student class gets inheritance from Parent. Student is then a derived class.

const student1 = new Student('Mr. Fakibaaz', 18, 'Dhaka');
console.log(student1.getSleep(15));

class Teacher extends Parent {
  //# Extra own property
  designation: string;
  //@ If we need to initialize own variables in a derived class using constructor. We must invoke the super class --> the task of which is to send value of all the required properties of the Parent class. Super is the constructor of parent class.
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address); //$ Super must be the top initialized
    this.designation = designation;
  }

  //# own method
  takeClass(hours: number) {
    console.log(`${this.name} takes class for ${hours} hours!`);
  }
}

const teacher1 = new Teacher('Walther White', 47, 'Gazipur', 'Professor');
console.log(teacher1.takeClass(4));
