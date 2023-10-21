import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './login/pages/pages.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    RegistroComponent,
    AboutUsComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
