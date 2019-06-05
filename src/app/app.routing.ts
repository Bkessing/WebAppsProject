import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { HouseComponent } from './house/house.component';
import { StarkComponent } from './stark/stark.component';
import { TargaryenComponent } from './targaryen/targaryen.component';
import { LannisterComponent } from './lannister/lannister.component';
import { GreyjoyComponent } from './greyjoy/greyjoy.component';
import { BaratheonComponent } from './baratheon/baratheon.component';
import { MartellComponent } from './martell/martell.component';
import { CastleBlackComponent } from './castle-black/castle-black.component';
// CharacterComponent not yet implemented
// import { CharacterComponent } from ./character/character.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'house', component: HouseComponent },
    // { path: 'characters', component: CharacterComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'stark', component: StarkComponent },
    { path: 'lannister', component: LannisterComponent },
    { path: 'targaryen', component: TargaryenComponent },
    { path: 'greyjoy', component: GreyjoyComponent },
    { path: 'baratheon', component: BaratheonComponent },
    { path: 'castle-black', component: CastleBlackComponent },
    { path: 'martell', component: MartellComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);