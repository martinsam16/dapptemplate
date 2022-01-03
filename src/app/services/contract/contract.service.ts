import {Inject, Injectable} from '@angular/core';
import {WEB3} from '../../core/web3';
import {web3Modal} from "../../core/web3modal";


import Web3 from 'web3';
import Web3Modal from "web3modal";
import AccountModel from "../../model/AccountModel"
import {whenChangeAccountThenReloadPage, checkAndInstantiateWeb3} from "../../core/web3utils";

declare let require: any;
declare let window: any;

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  web3js;
  provider;
  account: AccountModel;

  constructor(@Inject(WEB3) private web3: Web3) {
    checkAndInstantiateWeb3().then(() => {
      whenChangeAccountThenReloadPage();
    });

  }

  async connectAccount(): Promise<AccountModel> {
    this.provider = await web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    const accounts = await this.web3js.eth.getAccounts();
    const initialvalue = await this.web3js.eth.getBalance(accounts[0]);
    this.account = {
      address: accounts[0],
      balance: this.web3js.utils.fromWei(initialvalue, 'ether')
    }
    return this.account;
  }

}
