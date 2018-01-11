import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegistrationFormComponent}, 
    { path: 'login', component: LoginComponent},
    { path: 'post', component: PostComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }    