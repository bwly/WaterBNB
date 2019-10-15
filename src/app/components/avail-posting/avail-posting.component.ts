import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-avail-posting',
  templateUrl: './avail-posting.component.html',
  styleUrls: ['./avail-posting.component.css']
})
export class AvailPostingComponent implements OnInit {
  postings: Posting[];
  name: string;
  uid: string;

  constructor(private postingService: AdpostingService, private authService: AuthService) { }

  ngOnInit() {
    this.getPostings();
    this.getUser();
  }

  getUser(): void {
    this.name = this.authService.getUserName();
    this.uid = this.authService.getUserUid();
  }

  getPostings(): void {
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

}
