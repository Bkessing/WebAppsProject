import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { HouseComponent } from './house/house.component';
// CharacterComponent not yet implemented
// import { CharacterComponent } from ./character/character.component';
import { AboutComponent } from './about/about.component';
// ContactComponent not pushed yet
// import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent },
    { path: 'house', component: HouseComponent },
    // { path: 'characters', component: CharacterComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);