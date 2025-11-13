//^ enum
//^ set of fixed string literal ek jaygay rakhe (define kore)
//$ When we have these kind of string literal types, instead of typing 'Admin' value everywhere, we can use it like a set/object, so the values are reusable and not mistakenly input
//* enum is a type, which we can also use as a value
//! TypeScript enum is not supported in strip-only mode
//% However, senior devs donot recommend enums--> JS does no have enums, only TS has it. So when tsc strips the TS to covert to JS, it creates a IIF (Immediately Invoked Function) function in place of  the enum, which will increase JS bundle complexity for just a object-looking type, esp. for large-scale projects. Hence it is not recommended. Instead use as const, not enum
//$ Also here we need the node.js experimental flag to run the file:
//* node --experimental-transform-types another-example.ts

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

enum UserRoles {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer',
}

const canEdit = (role: UserRoles) => {
  //% We cannot get a type 'UserRoles' as a value within function scope!
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissible = canEdit(UserRoles.Editor);
console.log(isEditPermissible);
