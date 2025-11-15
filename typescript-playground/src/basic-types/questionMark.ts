// ? : Ternary operator : decision-making
// ?? : nullish coalescing operator : will work only based on null/undefined value
// ?. : optional chaining : mapping

const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log('You are eligible');
  //   } else {
  //     console.log('You are not eligible!');
  //   }
  const result = age >= 21 ? 'You are eligible' : 'You are not eligible!';
  console.log(result);
};
// biyerJonnoEligible(20);

// ?? : nullish coalescing operator
// const userTheme = undefined; // || null
// const userTheme = ''; // If any other falsy value, it will not work and not set the default!
const userTheme = 'green'; // If we set a truthy value that will be taken

const selectedTheme = userTheme ?? 'light'; // This essentially means that initially if the userTheme is not set, it will by default set the theme as 'light'
// console.log(selectedTheme);

//&: Ternary AND nullish coalescing operator
// const isAuthenticated = null;
const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : 'You are guest!';
const resultWithNullishCoalescing = isAuthenticated ?? 'You are guest!';

// console.log({ resultWithTernary }, { resultWithNullishCoalescing });

// ?. : optional chaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: 'Dhaka',
    town: 'Banani',
  },
};

const postalCode = user?.address?.postalCode; // so that our app doesnt crash!
console.log(postalCode);
