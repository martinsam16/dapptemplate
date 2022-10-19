import {Routes} from '@angular/router';

// Components
import {ErrorComponent} from "./error/error.component";

export const UiRoute: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'},
];
