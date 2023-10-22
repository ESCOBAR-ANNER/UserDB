import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
  ]
})
export class LoginComponent {

  user = {
    email: "",
    password: ""
  }

  constructor(
    private router: Router,
    private authService: AuthService) { }


  login() {
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home'])
        },
        err => {
        console.log(err);
        alert(err);
        }
      )
  }
}
