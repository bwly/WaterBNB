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
    this.getUser();
    this.checkUser();
  }

  checkUser(): void {
    this.loggedIn = this.authService.checkUser();
  }

  getUser(): void {
    this.name = this.authService.getUserName();
  }
}
