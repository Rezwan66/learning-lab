//^ enum
//^ set of fixed string literal ek jaygay rakhe (define kore)
//$ When we have these kind of string literal types, instead of typing 'Admin' value everywhere, we can use it like a set/object, so the values are reusable and not mistakenly input
//* enum is a type, which we can also use as a value
//! TypeScript enum is not supported in strip-only mode
//% However, senior devs donot recommend enums
// type UserRoles = 'Admin' | 'Editor' | 'Viewer';
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
var canEdit = function (role) {
    //% We cannot get a type 'UserRoles' as a value within function scope!
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissible = canEdit(UserRoles.Editor);
console.log(isEditPermissible);
