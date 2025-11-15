//^ type guard or type narrowing
//& in and typeof

type AlphaNumeric = number | string;

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

//? we want so that
// add(2,2) // 4
// add(2,'2') // 22
// add('2',2) // 22
// console.log(add('2', '2'));

//& in guard

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: 'Admin';
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ('role' in user) {
    console.log(`${user.name} has role ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: 'Mr. Normal', role: 'Mod' });
