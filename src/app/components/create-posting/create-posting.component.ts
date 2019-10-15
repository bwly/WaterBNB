import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostingComponent implements OnInit {
  angForm: FormGroup;
  model: Posting;
  name: string;
  uid: string;

  constructor(
    private postingService: AdpostingService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
        unit_name: [ '', Validators.required ],
        unit_price: [ '', Validators.required ],
        description: [ '' ],
        location: [ '', Validators.required ]
      });
    }

    getUser(): void {
      this.name = this.authService.getUserName();
      this.uid = this.authService.getUserUid();
    }

    addPosting(unit_name, unit_price, description, location) {
      this.model = new Posting(this.name, unit_name, unit_price, description, location, this.uid);
      this.postingService.addPosting(this.model);
    }

    ngOnInit() {
      this.getUser();
  }
}
