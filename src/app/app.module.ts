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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MyPostingsComponent } from './components/my-postings/my-postings.component';
import { MyRentHistoryComponent } from './components/my-rent-history/my-rent-history.component';

const routes: Routes = [
  { path: 'createPosting', component: CreatePostingComponent, canActivate: [AuthGuard] },
  { path: 'editPosting/:id', component: EditPostingComponent, canActivate: [AuthGuard] },
  { path: 'indexPosting', component: IndexPostingComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: PostingDetailComponent, canActivate: [AuthGuard] },
  { path: 'availPosting', component: AvailPostingComponent, canActivate: [AuthGuard]},
  { path: 'rentPosting/:id', component: RentPostingComponent, canActivate: [AuthGuard] },
  { path: '', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myPostings', component: MyPostingsComponent, canActivate: [AuthGuard]},
  { path: 'history', component: MyRentHistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePostingComponent,
    EditPostingComponent,
    IndexPostingComponent,
    PostingDetailComponent,
    AvailPostingComponent,
    RentPostingComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    MyPostingsComponent,
    MyRentHistoryComponent
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
    AdpostingService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
