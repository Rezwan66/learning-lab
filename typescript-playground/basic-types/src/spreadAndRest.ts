// Spread Operator - spread a stack of cards
// Rest Operator - stack them back together

//* SPREAD
const friends: string[] = ['Rahim', 'Karim'];
const schoolFriends = ['Pintu', 'Chintu', 'Bulbul'];
const collegeFriends = ['Mr. White', 'Mr. Smith'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
// console.log(friends);

const user = {
  name: 'Mezba',
  phoneNo: '017000000000',
};
const otherInfo = { hobby: 'Outing', favouriteColor: 'Green' };

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//* REST

// const sendInvite = (f1, f2, f3) => {
//   console.log(`Sent invitaton to: ${f1}`);
//   console.log(`Sent invitaton to: ${f2}`);
//   console.log(`Sent invitaton to: ${f3}`);
// };
// sendInvite('Pintu', 'Mintu', 'Cintu');

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Sent invitation to: ${friend}`)
  );
};
sendInvite('Pintu', 'Mintu', 'Cintu');
sendInvite(...schoolFriends); // using spread operator
