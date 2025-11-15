//^ polymorphism : bohurupi --> when a certain method behaves differently for different classes or instances of classes => related to methods only

class Person {
  getSleep() {
    console.log(`I am a normal happy person- I sleep for 8 hours!`);
  }
}

class Student extends Person {
  getSleep(): void {
    console.log(`I am a student- I sleep for 7 hours!`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep(): void {
    console.log(`I am a next level developer- I sleep for 4 hours!`);
  }
}

const getSleepingHours = (param: Person) => {
  return param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

// getSleepingHours(person1);
// getSleepingHours(person2);
// getSleepingHours(person3);

//@ Area example

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  // Area = pi*r*r
  //! we cannot take param here, the function structure should be same for all methods
  //! getArea(r: number): number {
  //!   return Math.PI * r * r;
  //! }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  // area =height*width
  getArea(): number {
    return this.height * this.width;
  }
}

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(20, 40);

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

// console.log(shape1.getArea());
// console.log(shape2.getArea());
// console.log(shape3.getArea());

getArea(shape1);
getArea(shape2);
getArea(shape3);
