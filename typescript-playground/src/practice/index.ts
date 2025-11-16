function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}
// console.log(formatString('Hello'));
// console.log(formatString('Hello', true));
// console.log(formatString('Hello', false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const selectedItems = items.filter(item => item.rating >= 4);
  return selectedItems;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, arr) => acc.concat(arr), [] as T[]);
}
// console.log(concatenateArrays(['a', 'b'], ['c']));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car('Toyota', 2020, 'Corolla');
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * 2;
  }
}
// console.log(processValue('hello'));
// console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  //   if (products.length === 0) {
  //     return null;
  //   }

  const mostExpensiveProduct = products.sort((a, b) => b.price - a.price);
  return mostExpensiveProduct[0] ?? null;
}
const products = [
  { name: 'Pen', price: 10 },
  { name: 'Notebook', price: 25 },
  { name: 'Bag', price: 50 },
];

// console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return 'Weekend';
  } else {
    return 'Weekday';
  }
}
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Tuesday));
// console.log(getDayType(Day.Wednesday));
// console.log(getDayType(Day.Thursday));
// console.log(getDayType(Day.Friday));
// console.log(getDayType(Day.Saturday));
// console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  const squarePromise = new Promise<number>((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject('Negative number not allowed');
    }
  });
  return squarePromise;
}
squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
