import { Component, OnInit } from '@angular/core';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Posting } from '../../models/posting';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-rent-posting',
  templateUrl: './rent-posting.component.html',
  styleUrls: ['./rent-posting.component.css']
})
export class RentPostingComponent implements OnInit {
  angForm: FormGroup;
  model: Object;
  id: string;
  postings: Posting[];
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

  createForm(): void  {
    this.angForm = this.fb.group({
      days: [ '', Validators.required ],
      guests: [ '', Validators.required ]
    });
  }

  rentPosting(days, guests): void {
    this.model = {
      renter_name: this.name,
      days: days,
      guests: guests,
      available: false,
      renter_uid: this.uid
    };
    this.postingService.rentPosting(this.id, this.model);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
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
