import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from './../../services/register.service';
import { PostComponent} from '../post/post.component';  

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [RegisterService],
})

export class CommentsComponent implements OnInit {

  @Input() p;
  @Output() showPost = new EventEmitter();

  public CommentForm: FormGroup;
  public comment: Array<any>;
  public post_id: any;
  public post: any;
  public user: any;

  constructor(public fb: FormBuilder,
              public route: ActivatedRoute,
              public router: Router,
              public rs: RegisterService)
  { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    this.post_id = this.p.id;
    if (this.post_id) {
        this.getPosts();
        this.particularPost();
    }
    this.CommentForm = this.fb.group({
      body: ['', Validators.required],
      user: this.user
    });
  }
  onSubmit() {
    this.rs.postComment(this.CommentForm.value, this.post_id).subscribe(res => {
      this.getPosts();
      this.CommentForm['controls']['body'].setValue('');
    });
  }
  getPosts() {
    this.rs.getPostComment(this.post_id).subscribe(data => {
      this.comment = [];
      for (let i = 0; i < data.length; i++) {
        this.comment.push({
          'body': data[i]['body'],
          'user': data[i]['user']
        });
      }
    });
  }
  particularPost() {
    this.rs.getPost(this.post_id).subscribe(res => {
      this.post = res['title'];
    });
  }
  onCancel() {
    this.showPost.emit('cancel');
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
