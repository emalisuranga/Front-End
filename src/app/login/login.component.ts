import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(

    private authService: AuthService

  ) { }

  ngOnInit() {
  }

  logingUser() {
    // console.log("test")

    const user = {
      email : this.email,
      password : this.password
    };
    // console.log(user)

     this.authService.loginUser(user);
  }

}
