import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
  public id: any;
  public user: any;

  constructor(public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public rs: RegisterService) { }

  ngOnInit() {
   this.user = localStorage.getItem('currentUser');
   this.postForm = this.fb.group({
    title: [''],
    user: this.user
  });
  this.getPosts();
  }
  onSubmit() {

    this.rs.createPost(this.postForm.value).subscribe(res => {
      this.id = res.id;
      this.getPosts();
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

 logOut() {
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login']);

}

}
