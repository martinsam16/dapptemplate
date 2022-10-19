import {Component} from '@angular/core';
import {Web3Service} from "./services/web3/web3.service";
import AccountWeb3Model from "./model/account.web3.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    account: AccountWeb3Model = new AccountWeb3Model();
    private web3js:any;


    constructor(private web3: Web3Service) {
        this.web3.connectAccount().then(async web3js => {
            this.web3js = web3js;
        })

        this.web3.accountsObservable.subscribe(account => {
            this.updateAccountInfo();
        } );
    }

   async updateAccountInfo() {
        const accounts = await this.web3js.eth.getAccounts();
        const weiBalance = await this.web3js.eth.getBalance(accounts[0]);
        const ethBalance = Number(this.web3js.utils.fromWei(weiBalance, 'ether'));

        this.account = new AccountWeb3Model().build(accounts[0], ethBalance);
    }


}
