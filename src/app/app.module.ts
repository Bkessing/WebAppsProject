import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ContactComponent} from './contact/contact.component';
import { HouseComponent } from './house/house.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { StarkComponent } from './stark/stark.component';
import { TargaryenComponent } from './targaryen/targaryen.component';
import { LannisterComponent } from './lannister/lannister.component';
import { GreyjoyComponent } from './greyjoy/greyjoy.component';
import { BaratheonComponent } from './baratheon/baratheon.component';
import { CastleBlackComponent } from './castle-black/castle-black.component';
import { FacebookFeedComponent } from './facebook-feed/facebook-feed.component';
import { BaratheonComponent } from './baratheon/baratheon.component';
import { TyrellComponent } from './tyrell/tyrell.component';
import { MartellComponent } from './martell/martell.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MapComponent,
    HouseComponent,
    NavMenuComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TwitterFeedComponent,
    StarkComponent,
    TargaryenComponent,
    LannisterComponent,
    GreyjoyComponent,
    BaratheonComponent,
    CastleBlackComponent,
    MartellComponent,
    ContactComponent,
    FacebookFeedComponent,
    BaratheonComponent,
    TyrellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
