import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RegisterService } from './../../services/register.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [RegisterService]
})
export class RegistrationFormComponent implements OnInit {
   public registerForm: FormGroup;
  constructor(public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public rs: RegisterService ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
     });
  }
  onSubmit() {
    this.rs.createUser(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login']);
    });

  }

}

