import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Posting } from './models/posting';

@Injectable({
  providedIn: 'root'
})
export class AdpostingService {
  postings: Observable<Posting[]>;

  constructor(private database: AngularFireDatabase) { }

  getPostings(): Observable<Posting[]> {
    this.postings = <Observable<Posting[]>>this.database.list('Postings').valueChanges();
    return this.postings;
  }

  addPosting(posting: Posting): void {
    const myRef = this.database.database.ref().push().key;
    posting.id = myRef;
    this.database.list('Postings').push(posting);
  }

}
