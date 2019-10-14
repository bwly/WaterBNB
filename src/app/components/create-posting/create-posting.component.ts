import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostingComponent implements OnInit {

  angForm: FormGroup;

  model: Posting;
  constructor(
    private postingService: AdpostingService,
    private fb: FormBuilder
  ) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      host_name: [ '', Validators.required ],
      unit_name: [ '', Validators.required ],
      unit_price: [ '', Validators.required ],
      description: [ '' ],
      location: [ '', Validators.required ]
    });
  }

  addPosting(host_name, unit_name, unit_price, description, location) {
    this.model = new Posting(host_name, unit_name, unit_price, description, location);
    this.postingService.addPosting(this.model);
  }

  ngOnInit() {
  }
}
