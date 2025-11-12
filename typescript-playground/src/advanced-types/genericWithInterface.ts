//$ We are being able to dynamically define the type for different use cases as needed

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandLessWatch {
  heartRate: string;
  stopwatch: boolean;
}

type AppleWatch = {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
};

const poorDeveloper: Developer<
  BrandLessWatch,
  { model: 'Yamaha'; engineCapaciy: '200cc' }
> = {
  name: 'Mr. Poor',
  salary: 20_000,
  device: {
    brand: 'Lenovo',
    model: 'A21',
    releasedYear: '2010',
  },
  smartWatch: {
    heartRate: '100',
    stopwatch: true,
  },
};
const richDeveloper: Developer<AppleWatch> = {
  name: 'Mr. Rich',
  salary: 60_000,
  device: {
    brand: 'Apple',
    model: 'M4',
    releasedYear: '2024',
  },
  smartWatch: {
    heartRate: '100',
    calculator: true,
    callSupport: true,
    aiFeature: false,
  },
  bike: null,
};

console.log({ poorDeveloper }, { richDeveloper });

// default value in function
const add = (n1: number, n2: number = 0) => n1 + n2;

add(2, 5);
add(2);
