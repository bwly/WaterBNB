import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';

@Component({
  selector: 'app-avail-posting',
  templateUrl: './avail-posting.component.html',
  styleUrls: ['./avail-posting.component.css']
})
export class AvailPostingComponent implements OnInit {
  postings: Posting[];

  constructor(private postingService: AdpostingService) { }

  ngOnInit() {
    this.getPostings();
  }

  getPostings(): void {
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

}
