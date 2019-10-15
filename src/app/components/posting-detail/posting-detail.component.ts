import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Posting } from '../../models/posting';
import { ActivatedRoute } from '@angular/router';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Comment } from '../../models/comment';
import { AuthService } from '../../auth.service';

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
  name: string;
  uid: string;

  constructor(
    private location: Location,
    private postingService: AdpostingService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      comment: ['']
    });
  }

  ngOnInit() {
    this.getPostings();
    this.getComments();
    this.getUser();
  }

  getUser(): void {
    this.name = this.authService.getUserName();
    this.uid = this.authService.getUserUid();
  }

  getPostings(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postingService.getPostings().subscribe(postings => this.postings = postings);
  }

  getComments(): void {
    this.postingService.getComments().subscribe(comments => this.comments = comments);
  }

  postComment(message: string): void {
    this.model = new Comment(this.id, this.name, message);
    this.postingService.postComment(this.model);
  }

  deletePosting(id: string): void {
    this.postingService.deletePosting(id);
  }

  goBack(): void {
    this.location.back();
  }
}
