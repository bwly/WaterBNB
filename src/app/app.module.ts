import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { RouterModule, Routes } from '@angular/router';

import { CreatePostingComponent } from './components/create-posting/create-posting.component';
import { EditPostingComponent } from './components/edit-posting/edit-posting.component';
import { IndexPostingComponent } from './components/index-posting/index-posting.component';
import { PostingDetailComponent } from './components/posting-detail/posting-detail.component';
import { AvailPostingComponent } from './components/avail-posting/avail-posting.component';
import { RentPostingComponent } from './components/rent-posting/rent-posting.component';

import { AdpostingService } from './adposting.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'createPosting', component: CreatePostingComponent },
  { path: 'editPosting/:id', component: EditPostingComponent },
  { path: 'indexPosting', component: IndexPostingComponent },
  { path: 'detail/:id', component: PostingDetailComponent },
  { path: 'availPosting', component: AvailPostingComponent},
  { path: 'rentPosting/:id', component: RentPostingComponent},
  { path: '', redirectTo: '/availPosting', pathMatch: 'full'},
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
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    AdpostingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
