import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './post/post.component';


export const REGISTRAION_COMPONENTS = [
    RegistrationFormComponent,
    LoginComponent,
    CommentsComponent,
    PostComponent
  ];

  export const REGSITRATION_ROUTES = [
    {
      path: '', component: LoginComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegistrationFormComponent },
        { path: 'post', component: PostComponent }
      ]
    }
  ];
    