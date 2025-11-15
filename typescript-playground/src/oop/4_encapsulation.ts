//^ we perform encapsulation in TS OOP using access modifiers

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }
  // methods can also be private or protected
  private addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  callHiddenMethod(amount: number) {
    this.addBalance(amount);
  }
}

const mezbaAccount = new BankAccount(111, 'mezba', 20);

//@ Another access modifier similar to private is protected
class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
    this.callHiddenMethod(300);
  }
}

console.log(mezbaAccount);

//& public is accessible everywhere
//& private is only accessible inside the class where the property or method is defined
//& protected is accessible inside the class and all its children where the property or method is defined
