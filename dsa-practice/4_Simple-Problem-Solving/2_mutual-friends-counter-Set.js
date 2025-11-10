//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//TODO has to be solved in Time Complexity O(n)

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = id => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

//! Slow Method O(n^2)
const commonFriendsSlow = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriends = [];
  //! O(n^2)
  usersA.forEach(userA => {
    // O(n)
    usersB.forEach(userB => {
      if (userA.id === userB.id) {
        commonFriends.push(userB);
      }
    });
  });
  const endTime = performance.now();

  return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
};

// console.log(commonFriendsSlow(usersA, usersB));

//* Efficient Method --> Using Set O(n)
const commonFriendsFast = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriends = [];

  //* O(n) - sibling of the forEach below but not nested
  const idListA = new Set(usersA.map(user => user.id)); // we stored just the list of ids here since if we stored the array of objects in the Set, it would store the objects in the Set with references (since object is ref based), hence during comparing we would have issues, since this new Set of objects will have different references, since its a copy. So we just stored list of string ids, which we will compare with values (since string is primitive type).

  //* O(n)
  usersB.forEach(userB => {
    //* O(1) lookup
    if (idListA.has(userB.id)) {
      commonFriends.push(userB);
    }
  });
  const endTime = performance.now();

  return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
};

console.log(commonFriendsFast(usersA, usersB));
