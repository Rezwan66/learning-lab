// Some
// const numbers = [1, 9, 3, 7, 5];
// const hasEvenNumbers = numbers.some(num => num % 2 === 0);
// console.log(hasEvenNumbers);

// const currentUserRole = ['user', 'editor', 'manager'];
// const featureAccessRoles = ['admin', 'manager'];
// const canAccess = currentUserRole.some(role =>
//   featureAccessRoles.includes(role)
// );
// console.log(canAccess);

// From
// const arr = Array.from({ length: 5 }).fill(6);
// const arr = Array.from({ length: 5 }, (_, i) => i);
// const arr = Array.from([1, 2, 3], (val, i) => val * val);
// console.log(arr);

// Range function to generate an array-->
// Use Case: Pagination on the frontend
const range = (start, stop, step) => {
  return Array.from(
    { length: Math.ceil(stop - start) / step },
    (_, i) => start + step * i
  );
};

console.log(range(0, 11, 2));
