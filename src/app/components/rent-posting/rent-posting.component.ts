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
  name: string;
  uid: string;
  total = 0;
  posting: Posting;

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

  calculate(days: number) {
    this.total = this.posting.unit_price * days;
  }

  getPosting(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postingService.getPosting(this.id).subscribe(posting => this.posting = posting);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPosting();
    this.getUser();
  }

  getUser(): void {
    this.name = this.authService.getUserName();
    this.uid = this.authService.getUserUid();
  }
}
