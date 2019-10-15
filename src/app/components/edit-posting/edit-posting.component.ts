import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-posting',
  templateUrl: './edit-posting.component.html',
  styleUrls: ['./edit-posting.component.css']
})
export class EditPostingComponent implements OnInit {
  angForm: FormGroup;
  posting: Posting;
  name: string;
  uid: string;
  id: string;

  constructor(
    private postingService: AdpostingService,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

    createForm() {
      this.angForm = this.fb.group({
        unit_name: [ this.posting.unit_name, Validators.required ],
        unit_price: [ this.posting.unit_price, Validators.required ],
        description: [ this.posting.description ],
        location: [ this.posting.location, Validators.required ]
      });
    }

    getUser(): void {
      this.name = this.authService.getUserName();
      this.uid = this.authService.getUserUid();
    }

    updatePosting(unit_name, unit_price, description, location) {
      this.posting.unit_name = unit_name;
      this.posting.unit_price = unit_price;
      this.posting.description = description;
      this.posting.location = location;
      this.postingService.updatePosting(this.posting, this.id);
    }

    getPosting(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.postingService.getPosting(this.id).subscribe(posting => {
        this.posting = posting;
        this.createForm();
      });
    }

    goBack(): void {
      this.location.back();
    }

    ngOnInit() {
      this.getUser();
      this.getPosting();
  }
}
