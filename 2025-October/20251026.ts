class Bank {
  balance: number[];

  constructor(balance: number[]) {
    this.balance = balance;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (this.isValid(account1) && this.isValid(account2) && this.hasEnoughMoney(account1, money)) {
      this.balance[account1 - 1] -= money;
      this.balance[account2 - 1] += money;
      return true;
    }

    return false;
  }

  deposit(account: number, money: number): boolean {
    if (!this.isValid(account)) return false;
    this.balance[account - 1] += money;
    return true;
  }

  withdraw(account: number, money: number): boolean {
    if (this.isValid(account) && this.hasEnoughMoney(account, money)) {
      this.balance[account - 1] -= money;
      return true;
    }

    return false;
  }

  isValid(account: number) {
    return account > 0 && account <= this.balance.length;
  }

  hasEnoughMoney(account: number, money: number) {
    return this.balance[account - 1] >= money;
  }
}
