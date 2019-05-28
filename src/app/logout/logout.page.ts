import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})

export class LogoutPage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ionViewWillEnter() { 
    this.logout();
  }

  logout(): void{
    this.authService.logOut().subscribe(
      (response: any) => {
        this.cookieService.delete('sugar', '/home');
        window.location.href='/home';
      }
    );
  }

}