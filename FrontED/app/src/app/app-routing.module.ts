import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConfigurationComponent } from './components/Configuracion/configuration.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'configurations', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
