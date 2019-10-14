import { Component, OnInit } from '@angular/core';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rent-posting',
  templateUrl: './rent-posting.component.html',
  styleUrls: ['./rent-posting.component.css']
})
export class RentPostingComponent implements OnInit {
  angForm: FormGroup;
  model: Object;
  id: string;

  constructor(
    private location: Location,
    private postingService: AdpostingService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      renter_name: [ '', Validators.required ],
      days: [ '', Validators.required ],
      guests: [ '', Validators.required ]
    });
  }

  rentPosting(renter_name, days, guests) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.model = {
      renter_name: renter_name,
      days: days,
      guests: guests,
      available: false
    };
    this.postingService.rentPosting(this.id, this.model);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }
}
