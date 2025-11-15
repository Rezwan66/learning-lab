//^ getter
//^ setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }
  //& setting the balance
  //   addBalance(amount: number) {
  //     this._userBalance = this._userBalance + amount;
  //   }
  //@ using setter - will do the same as function, but since Typescript supports both functional programming and also OOP, we can use setter and getter. setters cannot return a value
  set addBalance(amount: number) {
    this._userBalance += amount;
  }
  //& getting the balance
  //   getBalance() {
  //     return this._userBalance;
  //   }
  //@ using getter -> getter must return a value
  get getBalance() {
    return this._userBalance;
  }
}

const mezbaAccount = new BankAccount(111, 'mezba', 20);

// mezbaAccount.addBalance(100); //* we are needing to call the function here
// mezbaAccount.addBalance(60);

// // console.log(mezbaAccount._userBalance); //! XX
// console.log(mezbaAccount.getBalance()); //* we are needing to call the function here

mezbaAccount.addBalance = 100; //* syntax of setter
mezbaAccount.addBalance = 60;
console.log(mezbaAccount);
console.log(mezbaAccount.getBalance);
