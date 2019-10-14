import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatePostingComponent } from './components/create-posting/create-posting.component';
import { EditPostingComponent } from './components/edit-posting/edit-posting.component';

import { RouterModule, Routes } from '@angular/router';
import { IndexPostingComponent } from './components/index-posting/index-posting.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AdpostingService } from './adposting.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { PostingDetailComponent } from './components/posting-detail/posting-detail.component';
import { AvailPostingComponent } from './components/avail-posting/avail-posting.component';
import { RentPostingComponent } from './components/rent-posting/rent-posting.component';

const routes: Routes = [
  { path: 'createPosting', component: CreatePostingComponent },
  { path: 'editPosting/:id', component: EditPostingComponent },
  { path: 'indexPosting', component: IndexPostingComponent },
  { path: 'detail/:id', component: PostingDetailComponent },
  { path: 'availPosting', component: AvailPostingComponent},
  { path: 'rentPosting/:id', component: RentPostingComponent},
  { path: '', redirectTo: '/availPosting', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePostingComponent,
    EditPostingComponent,
    IndexPostingComponent,
    PostingDetailComponent,
    AvailPostingComponent,
    RentPostingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SlimLoadingBarModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [ AdpostingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
