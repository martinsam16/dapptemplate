export default class AccountWeb3Model {
    address: string;
    balance: number;
    constructor() {
        this.balance = 0;
        this.address = "0x0000000000000000000000000000000000000000"
    }
    build(address: string, balance:number) {
        this.address = address;
        this.balance = balance;
        return this;
    }
}