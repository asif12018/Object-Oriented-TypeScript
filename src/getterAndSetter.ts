

//? Getter and Setter

class BankAccount {
    readonly userId: number;
    userName: string;
    protected _userBalance: number;

    constructor(userId:number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    };

    // balance k set kortese

    // addBalance(cashIn: number){
    //     this._userBalance = this._userBalance + cashIn;
    // };

    // get korbe balance k

    //add balance using setter:oop concept

    set addBalance(amount:number){
         this._userBalance += amount;
    };

    // getBalance(){
    //     return this._userBalance;
    // }

    // getting balance using oop concept

    get getBalance(){
        return this._userBalance;
    }

   
};

const person1Account = new BankAccount(111, 'person1', 20);

person1Account.addBalance = 100;

console.log(person1Account);







