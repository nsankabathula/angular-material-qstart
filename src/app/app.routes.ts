import { HomeComponent } from "./common/home.component";
import { PageNotFoundComponent } from "./common/pagenotfound.component";
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    // { path: 'reports', component: AppReportComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Heroes List' }
    },
    { path: '**', component: PageNotFoundComponent }
    /*{ path: 'hero/:id', component: null },
    */
];