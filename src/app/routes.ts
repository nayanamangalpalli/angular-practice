import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationDetailsComponent } from './housing-location-details/housing-location-details.component';


const routeConfig: Routes = [
    {
        path: 'abc',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: HousingLocationDetailsComponent,
        title: 'Details page'
    }
];

export default routeConfig;