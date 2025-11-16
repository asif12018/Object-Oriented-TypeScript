

//Encapsulation in OOP


class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;
    // private userBalance: number; // it can't be use outside of the class

    constructor(userId:number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

    private addBalance(cashIn: number){
        this.userBalance = this.userBalance + cashIn;
    }

    callHiddenMethod(balance: number){
        this.addBalance(balance);
    }

   
};


const person1Account = new BankAccount(111, 'person1', 20);

