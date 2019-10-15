import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AuthService } from 'src/app/auth.service';
import { AdpostingService } from 'src/app/adposting.service';

@Component({
  selector: 'app-my-rent-history',
  templateUrl: './my-rent-history.component.html',
  styleUrls: ['./my-rent-history.component.css']
})
export class MyRentHistoryComponent implements OnInit {
  postings: Posting[];
  name: string;
  uid: string;

  constructor(
    private authService: AuthService,
    private postingService: AdpostingService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getPostings();
  }

  getUser() {
    this.name = this.authService.getUserName();
    this.uid = this.authService.getUserUid();
  }

  getPostings() {
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

}
