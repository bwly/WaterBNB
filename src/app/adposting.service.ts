import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Posting } from './models/posting';
import { Router } from '@angular/router';
import { Comment } from './models/comment';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdpostingService {
  postings: Observable<Posting[]>;
  comments: Observable<Comment[]>;
  posting: Observable<Posting>;

  constructor(private database: AngularFireDatabase, private router: Router, private location: Location) { }

  getPostings(): Observable<Posting[]> {
    this.postings = <Observable<Posting[]>>this.database.list('Postings').valueChanges();
    return this.postings;
  }

  addPosting(posting: Posting): void {
    this.database.list('Postings').push(posting).then(value =>
      this.rentPosting(value.key, {id: value.key}));
  }

  rentPosting(id: string, model: Object): void {
    this.database.list('Postings').update(id, model);
    this.router.navigate(['/detail', id]);
  }

  deletePosting(id: string): void {
    this.database.list('Postings').remove(id).then(res => this.location.back());
  }

  postComment(model: Comment): void {
    this.database.list('Comments').push(model);
  }

  getComments(): Observable<Comment[]> {
    this.comments = <Observable<Comment[]>>this.database.list('Comments').valueChanges();
    return this.comments;
  }

  getPosting(id: string): Observable<Posting> {
    this.posting = <Observable<Posting>>this.database.object('Postings/' + id).valueChanges();
    return this.posting;
  }
}
