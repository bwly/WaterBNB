import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AdpostingService } from 'src/app/adposting.service';
import { Posting } from '../../models/posting';

@Component({
  selector: 'app-my-postings',
  templateUrl: './my-postings.component.html',
  styleUrls: ['./my-postings.component.css']
})
export class MyPostingsComponent implements OnInit {
  name: string;
  uid: string;
  postings: Posting[];

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

  deletePosting(id: string) {
    this.postingService.deletePosting(id);
  }

}
