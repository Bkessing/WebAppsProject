import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

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
    GreyjoyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
