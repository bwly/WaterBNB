import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FileUpload } from '../../models/fileUpload';
import { UploadFileService } from '../../upload-file.service';

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
  selectedFiles: FileList = null;
  currentFileUpload: FileUpload;

  constructor(
    private postingService: AdpostingService,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private uploadService: UploadFileService
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

      if (this.selectedFiles) {
        const file = this.selectedFiles.item(0);
        this.selectFile = undefined;

        this.currentFileUpload = new FileUpload(file);
        this.uploadService.updateFileUpload(this.currentFileUpload, this.posting, this.id);
      } else {
        this.postingService.updatePosting(this.posting, this.id);
      }
    }

    getPosting(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.postingService.getPosting(this.id).subscribe(posting => {
        this.posting = posting;
        this.createForm();
      });
    }

    selectFile(event) {
      const file = event.target.files.item(0);

      if (file.type.match('image.*')) {
        this.selectedFiles = event.target.files;
      } else {
        alert('invalid format!');
      }
    }

    goBack(): void {
      this.location.back();
    }

    ngOnInit() {
      this.getUser();
      this.getPosting();
  }
}
