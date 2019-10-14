import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Posting } from '../../models/posting';
import { ActivatedRoute } from '@angular/router';
import { AdpostingService } from '../../adposting.service';

@Component({
  selector: 'app-posting-detail',
  templateUrl: './posting-detail.component.html',
  styleUrls: ['./posting-detail.component.css']
})
export class PostingDetailComponent implements OnInit {
  postings: Posting[];
  id: string;

  constructor(
    private location: Location,
    private postingService: AdpostingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPostings();
  }

  getPostings(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }


  goBack(): void {
    this.location.back();
  }
}
