import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { FileUpload } from './models/fileUpload';
import { Posting } from './models/posting';
import { AdpostingService } from './adposting.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';

  constructor(private postingService: AdpostingService) { }

  pushFileToStorage(fileUpload: FileUpload, model: Posting) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          model.image = fileUpload;
          this.postingService.addPosting(model);
        });
      }
    );
  }

  updateFileUpload(fileUpload: FileUpload, model: Posting, id: string) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {

          if (model.image) {
            this.deleteFileUpload(model.image);
          }
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          model.image = fileUpload;
          this.postingService.updatePosting(model, id);
        });
      }
    );
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileStorage(fileUpload.name);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
