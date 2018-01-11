import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component'
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';

import { ImageUploadModule } from 'ng2-imageupload';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    ImageUploadModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
