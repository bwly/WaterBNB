import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: string;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkUser();
    this.getUser();
  }

  checkUser(): void {
    this.loggedIn = this.authService.checkUser();
  }

  getUser(): void {
    if (this.loggedIn) {
      this.name = this.authService.getUserName();
    }
  }
}
