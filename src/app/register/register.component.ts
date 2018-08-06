import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  registerData() {
     // console.log('register data emal');
    const user = {
      name: this.name,
      userName: this.username,
      email: this.email,
      password: this.password
    };

   // console.log(user);
    this.authService.registerUser(user);
  }

}
