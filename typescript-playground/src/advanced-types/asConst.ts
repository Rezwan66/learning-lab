//^ as const assertion
//# In enum we defined types as like a object, which created extra code in JS from the TS transcompiler. Instead we will use as const

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

// enum UserRoles {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer',
// }

//* We could use enum as both type and value
const UserRoles = {
  Admin: 'ADMIN',
  Editor: 'EDITOR',
  Viewer: 'VIEWER',
} as const;

// UserRoles.Admin = 'Mon Chacche Change Kore Fellam!'; //!CANNOT RESSIGN FOR TYPES
//$ So when we set as const, the object behind the scene becomes:
/**
 {
  readonly Admin: 'Admin',
  readonly Editor: 'Editor',
  readonly Viewer: 'Viewer',
}
  //$ For using it as a type though, we need 2 things:
  1. typeof operator
  2. keyof operator

  //* When we use typeof operator: 
   const user={ id: 123, name: 'Mezba' }

   user['id']==>222

   typeof user
   //* behind the scene, JS converts and creates a:
   type user {
   id: number;
   name: string
   }
   //* if we use 
   typeof UserRoles;
   //* BHS:
   type UserRoles {
    Admin: 'Admin';
    Editor: 'Editor';
    Viewer: 'Viewer';
   }

   //* then  if we use keyof, it will create the string literal types of the key values:
   keyof typeof UserRoles
   'Admin'|'Editor'|'Viewer'

   'ADMIN'|'EDITOR'|'VIEWER'
   UserRoles['Admin'] ==> 'ADMIN'

   //@ typeof UserRoles[keyof typeof UserRoles]
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  //% We cannot get a type 'UserRoles' as a value within function scope!
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissible = canEdit(UserRoles.Editor);
console.log(isEditPermissible);

//$ This way, we dont need the experimental tag also, as its not a type transformation

//@ Main Summary:
// define type as:
const CustomerRoles = {
  Admin: 'ADMIN',
  Editor: 'EDITOR',
  Viewer: 'VIEWER',
} as const;

// if key and values are both same case, then set type as:
//^ keyof typeof CustomerRoles

// if keys are small case and values capitalised or vice versa:
//^ typeof CustomerRoles [keyof typeof CustomerRoles]
