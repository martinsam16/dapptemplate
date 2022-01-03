import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../services/contract/contract.service";
import AccountModel from "../../model/AccountModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private account: AccountModel;

  address: string;
  balance: number;

  constructor(private contract: ContractService) {
    this.contract.connectAccount()
      .then(account => {
        this.account = account;
        this.address = this.account.address;
        this.balance = this.account.balance
      });
  }

  ngOnInit(): void {
  }

}
