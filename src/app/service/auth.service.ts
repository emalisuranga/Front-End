import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  authToken: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  registerUser(user) {
    // console.log(user);
   const headers = new Headers();
   headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/register', user, {headers: headers}).subscribe(res =>  {
     // console.log(res.json());
     if (res.json().state) {
     this.flashMessage.show('You are rejistered', { cssClass: 'alert-success', timeout: 3000 });
     this.router.navigate(['/login']);
     } else {
      this.flashMessage.show('You are rejistered', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/register']);
     }
    });
  }

  loginUser(user) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/login', user, {headers: headers}).subscribe(res => {
       console.log(res.json());
      if (res.json().state) {
        this.flashMessage.show('You are Login', { cssClass: 'alert-success', timeout: 3000 });
        this.storeData(res.json().token, res.json().user);
        // this.router.navigate(['/login']);
        } else {
         this.flashMessage.show(res.json().msg, { cssClass: 'alert-danger', timeout: 3000 });
         this.router.navigate(['/register']);
        }
    });

  }

  storeData(token, userData) {
    // console.log('emalllll');
    localStorage.setItem('tokenId', token);
    localStorage.setItem('user', JSON.stringify(userData));

    this.authToken = token;
    this.user = userData;
  }

  getProfile() {

         this.fatchToken();
    const headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/profile', {headers: headers}).subscribe(res => {
      console.log(res.json());
    });
  }

  fatchToken() {

    const token = localStorage.getItem('tokenid');
  }
}
