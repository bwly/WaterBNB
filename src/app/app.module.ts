import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatePostingComponent } from './components/create-posting/create-posting.component';
import { EditPostingComponent } from './components/edit-posting/edit-posting.component';
import { IndexPostingComponent } from './components/index-posting/index-posting.component';

import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const routes: Routes = [
  {
    path: 'createPosting',
    component: CreatePostingComponent
  },
  {
    path: 'editPosting/:id',
    component: EditPostingComponent
  },
  {
    path: 'indexPosting',
    component: IndexPostingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePostingComponent,
    EditPostingComponent,
    IndexPostingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
