//^ mapped types

//$ map loop through and returns an array

const arrayOfNums: number[] = [1, 4, 6];
const arrayofString: string[] = ['1', '4', '6'];

const arrOfStrUsingMap: string[] = arrayOfNums.map(num => num.toString());
console.log(arrOfStrUsingMap);

//* mapped types

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum['height'];

// type AreaOfString = {
//   height: number;
//   width: number;
// };

// type AreaOfString = {
//   [key in 'height' | 'width']: string;
// };

type AreaOfString = {
  [key in keyof AreaOfNum]: string;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: '50',
  width: 40,
};
