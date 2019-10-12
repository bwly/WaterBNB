import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdpostingService {
  postings: Observable<any[]>;

  constructor(private database: AngularFireDatabase) { }

  getPostings(): Observable<any[]> {
    this.postings = this.database.list('Postings').valueChanges();
    return this.postings;
  }

  addPosting(posting: object): void {
    this.database.list('Postings').push(posting);
  }
}
