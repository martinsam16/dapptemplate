import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


// Components
import {ErrorComponent} from './error/error.component';
import {AppMaterialModule} from "../app-material.module";

// Routing
import {UiRoute} from "./ui.routes";
import {RouterModule} from "@angular/router";

// Services
import {Web3Service} from "../services/web3/web3.service";

@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(UiRoute),
        AppMaterialModule,
        ReactiveFormsModule
    ],
    exports: [
    ],
    providers: [
        Web3Service,
    ],
})
export class UiModule {
}
