import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from './../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public loginForm: any;

  constructor(public fb: FormBuilder, public auths: AuthService, public router: Router) {
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }
  doLogin() {
    this.auths.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (res) => {
        console.log(res);
        if (res && res.username) { 
             localStorage.setItem('currentUser', res.username);
            // if (res.password == this.loginForm.value.password) {
               this.router.navigate(['/post']);
            //  } else {
            //  }
        }        
    });
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/register']);
  }
}

