//^ keyof : type operator

type RichPeoplesVehicle = {
  car: string; //# key: value
  bike: string;
  cng: string;
};

type MyVehicle1 = 'bike' | 'car' | 'cng';
type MyVehicle2 = keyof RichPeoplesVehicle; //@ defining types by setting keys of..

const myVehicle: MyVehicle2 = 'ship';

//& Using key of constraints for object and function params

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, //* key: value
  name: 'Mezba',
  address: {
    city: 'ctg',
  },
};

// const myName = user.name;
const myName = user['name'];
const myId = user['id'];
const address = user['address'];
// console.log({ myId, myName, address });

const getPropertyFromObj = <X, Y>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyFromObj(user, 'address');
console.log(result);

const product = {
  brand: 'HP',
  category: 'Laptop',
};

const result2 = getPropertyFromObj(product, 'brand');
console.log(result2);

const student = {
  id: 2,
  class: 'four',
};

const result3 = getPropertyFromObj(student, 'class');
