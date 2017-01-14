import { Routes , RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


export const appRoutes = [
    { path : '' , component : HomeComponent } , 
    { path : '**' , component : HomeComponent }
]
