import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from './../../services/register.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [RegisterService]
})
export class CommentsComponent implements OnInit {
  
  public CommentForm: FormGroup;
  public comment: Array<any>;
  public post_id: any;
  public post: any;
  public user: any;
  public username: Array<object>;
  constructor(public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public rs: RegisterService
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    this.route.params.subscribe(params => {
      this.post_id = params['id'];
      this.getPosts();
      this.particularPost();
    });

    this.CommentForm = this.fb.group({
      body: [''],
      user: this.user
    });
  }
  onSubmit() {
    this.rs.postComment(this.CommentForm.value, this.post_id).subscribe(res => {
      this.getPosts();
    });
  }
  getPosts() {
    this.rs.getPostComment(this.post_id).subscribe(data => {
      this.comment = [];
      this.username = [];
      for (let i = 0; i < data.length; i++) {
        this.comment.push({
          'body': data[i]['body'],
          'user': data[i]['user']
        });
        // this.username.push(data[i]['user']);
        }
        console.log( this.comment)
  });
}
  particularPost() {
    this.rs.getPost(this.post_id).subscribe(res => {
      this.post = res['title'];
    });
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
