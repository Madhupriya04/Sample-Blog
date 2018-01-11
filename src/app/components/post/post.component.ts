import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from './../../services/register.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RegisterService]
})
export class PostComponent implements OnInit {
  public postForm: FormGroup;
  public post: Array<object>;
  public user: any;
  public is_toggle: Boolean;
  public selected_id: any;
  public id: any;


  constructor(public fb: FormBuilder,
              public route: ActivatedRoute,
              public router: Router,
              public rs: RegisterService)
  {
    this.is_toggle = true;
  }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      user: this.user,
    });
    this.getPosts();
  }
  onSubmit() {

    this.rs.createPost(this.postForm.value).subscribe(res => {
      this.getPosts();
      this.postForm['controls']['title'].setValue('');
    });
  }
  getPosts() {
    this.rs.getAll().subscribe(data => {
      this.post = [];
      for (let i = 0; i < data.length; i++) {
        this.post.push(data[i]);
      }
    });
  }
  toggle(id) {
    this.selected_id = id;
    this.is_toggle = !this.is_toggle;
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

  }

}
