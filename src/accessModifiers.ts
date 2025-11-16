

//? Access Modifier

class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(userId:number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

    addBalance(cashIn: number){
        this.userBalance = this.userBalance + cashIn;
    }

   
};

class StudentBankAccount extends BankAccount{
   
}

const person1Account = new BankAccount(111, 'person1', 20);

