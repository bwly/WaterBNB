import { Component, OnInit } from '@angular/core';
import { AdpostingService } from '../../adposting.service';
import { Posting } from '../../models/posting';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-index-posting',
  templateUrl: './index-posting.component.html',
  styleUrls: ['./index-posting.component.css']
})
export class IndexPostingComponent implements OnInit {
  postings: Posting[];
  uid: string;

  constructor(private postingService: AdpostingService, private authService: AuthService) { }

  ngOnInit() {
    this.getPostings();
    this.getUser();
  }

  getPostings(): void {
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

  getUser(): void {
    this.uid = this.authService.getUserUid();
  }
}
