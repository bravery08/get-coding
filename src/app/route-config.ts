import { Routes } from "@angular/router";
import { DiamondComponent } from "./diamond/diamond.component";
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'diamond', component: DiamondComponent }
]

export default appRoutes;