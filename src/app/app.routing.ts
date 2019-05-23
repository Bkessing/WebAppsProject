import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { HouseComponent } from './house/house.component';
import { StarkComponent } from './stark/stark.component';
import { TargaryenComponent } from './targaryen/targaryen.component';
import { LannisterComponent } from './lannister/lannister.component';
import { GreyjoyComponent } from './greyjoy/greyjoy.component';
// CharacterComponent not yet implemented
// import { CharacterComponent } from ./character/character.component';
import { AboutComponent } from './about/about.component';
// ContactComponent not pushed yet
// import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { AuthGuard } from './_guards';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent },
    { path: 'house', component: HouseComponent },
    // { path: 'characters', component: CharacterComponent },
    { path: 'about', component: AboutComponent},
    // { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'stark', component: StarkComponent },
    { path: 'lannister', component: LannisterComponent },
    { path: 'targaryen', component: TargaryenComponent },
    { path: 'greyjoy', component: GreyjoyComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);