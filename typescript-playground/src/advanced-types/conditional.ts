//^ conditional type : je type ekta condition er upor nirvorshil

type A = null;
type B = undefined;

type C = A extends null ? true : false; // If type A is null then C is true, otherwise false
type D = A extends number ? true : false; // A cannot satisfy number

type E = A extends number ? true : B extends undefined ? true : false; //B satisfies undefined

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type hasBike = CheckVehicle<'ship'>;
