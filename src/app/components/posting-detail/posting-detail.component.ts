import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Posting } from '../../models/posting';
import { ActivatedRoute } from '@angular/router';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-posting-detail',
  templateUrl: './posting-detail.component.html',
  styleUrls: ['./posting-detail.component.css']
})
export class PostingDetailComponent implements OnInit {
  angForm: FormGroup;
  postings: Posting[];
  id: string;
  model: Comment;
  comments: Comment[];

  constructor(
    private location: Location,
    private postingService: AdpostingService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      comment: [''],
      name: ['']
    });
  }

  ngOnInit() {
    this.getPostings();
    this.getComments();
  }

  getPostings(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

  getComments(): void {
    this.postingService.getComments().subscribe(comments => this.comments = comments);
  }

  postComment(message: string, name: string): void {
    this.model = new Comment(this.id, name, message);
    this.postingService.postComment(this.model);
  }

  goBack(): void {
    this.location.back();
  }
}
