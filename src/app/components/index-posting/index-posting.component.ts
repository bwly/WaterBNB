import { Component, OnInit } from '@angular/core';
import { AdpostingService } from '../../adposting.service';
import { Posting } from '../../models/posting';

@Component({
  selector: 'app-index-posting',
  templateUrl: './index-posting.component.html',
  styleUrls: ['./index-posting.component.css']
})
export class IndexPostingComponent implements OnInit {
  postings: Posting[];

  constructor(private postingService: AdpostingService) { }

  ngOnInit() {
    this.getPostings();
  }

  getPostings(): void {
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

}
