//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

//* Basic Implementation
//* Space Complexity = O(n)
//* Time Complexity = O(n)
const isPalindrome = str => {
  //* Space Complexity = O(n), Time Complexity = O(n) ==> The str is copied two times, so double space required O(n+n) => although not nested so both O(n)
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = normalized.split('').reverse().join('');
  //   console.log(normalized);
  //   console.log(reversed);
  if (reversed === normalized) {
    return true;
  }
  return false;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));

//* Two Pointer Implementation
//* Space Complexity = O(n)
//* Time Complexity = O(n)
const isPalindromeTwoPointer = str => {
  //* Space Complexity = O(n), Time Complexity = O(n) ==> The str is copied only one time so space required half O(n)
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = normalized.length - 1;

  //* Time Complexity = O(m/2) ==> O(m) --> so total from above: O(n+m) = O(n)
  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeTwoPointer('Levels'));
