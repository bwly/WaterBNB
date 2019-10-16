import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { UploadFileService } from '../../upload-file.service';
import { FileUpload } from '../../models/fileUpload';

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
  selectedFiles: FileList = null;
  currentFileUpload: FileUpload;

  constructor(
    private postingService: AdpostingService,
    private fb: FormBuilder,
    private authService: AuthService,
    private uploadService: UploadFileService
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

      if (this.selectedFiles) {
        const file = this.selectedFiles.item(0);
        this.selectFile = undefined;

        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.model);
      } else {
        this.postingService.addPosting(this.model);
      }
    }

    selectFile(event) {
      const file = event.target.files.item(0);

      if (file.type.match('image.*')) {
        this.selectedFiles = event.target.files;
      } else {
        alert('invalid format!');
      }
    }

    ngOnInit() {
      this.getUser();
    }
}
