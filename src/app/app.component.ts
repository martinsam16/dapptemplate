import {Component} from '@angular/core';
import {Web3Service} from "./services/web3/web3.service";
import AccountWeb3Model from "./model/account.web3.model";
import {PaymentService} from "./services/contract/payment/payment.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    account: AccountWeb3Model = new AccountWeb3Model();
    private web3js: any;


    constructor(private web3Service: Web3Service,
                private paymentService: PaymentService) {
        this.web3Service.isConnected().then(connected => {
            if (!connected) {
                this.web3Service.connectAccount().then(async web3js => {
                    this.web3js = web3js;
                })
            }
            this.web3Service.accountsObservable.subscribe(account => {
                this.updateAccountInfo();
            });
        })

    }

    async updateAccountInfo() {
        const accounts = await this.web3js.eth.getAccounts();
        const weiBalance = await this.web3js.eth.getBalance(accounts[0]);
        const ethBalance = Number(this.web3js.utils.fromWei(weiBalance, 'ether'));

        this.account = new AccountWeb3Model().build(accounts[0], ethBalance);
    }

    nuevaTransaccion(){
        this.paymentService.nuevaTransaccion(this.account.address, "0xc6AC2A10b84173b5ef294b8FC5e21a06237F1a72", 2);
    }

    callView(){
        this.paymentService.verBalanceCuenta();
    }


}
