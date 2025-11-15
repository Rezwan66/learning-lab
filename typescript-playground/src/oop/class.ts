//^ OOP - class --> object

// Function
// function add(n1: number, n2: number) { //@ we receive the parameters in a function
//   return n1 + n2;
// }
// add(4, 5); //@ and we provide arguments when we call the function

//$ In the same way we receive the class params in constructor function

class Animal {
  //* defining properties
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  //* defining methods
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}!`);
  }
}

//$ Now we will create a dog object, using the Animal blueprint (class):
const dog = new Animal('Dogesh', 'german shepherd', 'ghew ghew');
// console.log(dog);
// console.log(dog.sound);

const cat = new Animal('Tom', 'cat', 'mew mew');
console.log(cat.name);
cat.makeSound();
dog.makeSound();

//& Parameter Properties --> we are defining the same values with types and also putting the same as params to the constructor. To avoid this double work, we can simply write:

class Insect {
  //* defining properties
  //   name: string;
  //   species: string;
  //   sound: string;

  //@ Since the properties are public anyways, we can simply use the public keyword to input the params of the constructor and hence TS compiler will automatically declare and initialize the properties.
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  //* defining methods
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}!`);
  }
}

const spider = new Insect('Mr. Webb', 'spider', '---');
