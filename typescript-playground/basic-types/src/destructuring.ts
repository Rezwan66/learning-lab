// Object destructuring

const user = {
  id: 123,
  name: {
    firstName: 'Mezbaul',
    middleName: 'Abedin',
    lastName: 'Forhan',
  },
  gender: 'male',
  favouriteColor: 'purple',
};
// const favColor = user.favouriteColor;
// const middleName = user.name.middleName;
const {
  name: { middleName: myMiddleName }, //deeper layered destructuring
  favouriteColor: myFavouriteColor,
} = user; //destructuring with name alias
//! Never write type while destructuring (because of name alias). The type should be defined in the object/array itself

// console.log(myMiddleName);
// console.log(myFavouriteColor);

// Array destructuring
const friends = ['Sakura', 'Nezuko', 'Historia'];
// const myBestFriend = friends[1];

const [, myBestFriend] = friends;
const [, , mySecondBestFriend] = friends;

console.log(myBestFriend);
console.log(mySecondBestFriend);
