import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {
  constructor(private route: Router){}

  showNbar(): boolean{
    const currentRoute = this.route.url;
    return !currentRoute.includes('/login') && !currentRoute.includes('/register');
  }

}
