//^ access >> modify

class BankAccount {
  public readonly userId: number;
  //   user: {
  //     name: string;
  //     balance: number;
  //   };
  public userName: string;
  //   private userBalance: number;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    // this.user = user;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // methods can also be private or protected
  addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }
}

const mezbaAccount = new BankAccount(111, 'mezba', 20);
// console.log(mezbaAccount.user.balance);
// console.log(mezbaAccount.userBalance);
// mezbaAccount.userId = 222; //!we do not want user id to get modified, so set readonly
// console.log(mezbaAccount.userId);

// mezbaAccount.userBalance = 0; //! we also dont want balance directly modified, rather via a functon, hence, set userBalance to private access

mezbaAccount.addBalance(100);
mezbaAccount.addBalance(60);

//@ Another access modifier similar to private is protected
class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance; //% Property 'userBalance' is private and only accessible within class 'BankAccount'. Hence we can use protected--> which will make it accessible only inside the parent class and its children, but not in the outside world instance
  }
}

console.log(mezbaAccount);
