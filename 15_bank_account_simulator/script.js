//✅ 1. create an Object called bankAccount
const bankAccount = {
    accountHolderName: "Kevin",
    accountNumber: 1234,
    balance: 10000,
  }


//✅ 2.  Create methods inside the object:
// deposit(amount) → Add amount to balance.
// withdraw(amount) → Subtract amount from balance (only if enough balance).
// checkBalance() → Print current balance.

bankAccount.deposit = function(amount) {return this.balance += amount;} 
bankAccount.withdraw = function(amount) {
    if(bankAccount.withdraw >= amount) {
        return this.balance -= amount;
    }
} 
bankAccount.checkBalance = function() {return this.balance;} 


bankAccount.deposit(5000);
bankAccount.withdraw(1200);
console.log(bankAccount.checkBalance());