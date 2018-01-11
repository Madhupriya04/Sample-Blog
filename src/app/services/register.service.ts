import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {
  public actionUrl: string;
  public headers: Headers;
  constructor(private _http: Http) {
    this.actionUrl = 'http://localhost:3000/profile';

    this.headers = new Headers();
  }

  createUser(user_data: any) {
    return this._http.post(this.actionUrl, user_data)
      .map((res: Response) => res.json());
  }
  createPost(post_data: any) {
    return this._http.post('http://localhost:3000/posts', post_data)
      .map((res: Response) => res.json());
  }
  getAll() {
    let url = 'http://localhost:3000/posts';
    return this._http.get(url)
      .map((res: Response) => res.json());
  }

  getPost(id: any) {
    let url = 'http://localhost:3000/posts/' + id;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }
  getComment(id: any) {
    let url = 'http://localhost:3000/comments/' + id;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }

  getPostComment(id: any) {
    let url = 'http://localhost:3000/posts/' + id + '/comments';
    return this._http.get(url)
      .map((res: Response) => res.json());
  }

  postComment(data, id) {
    let url = 'http://localhost:3000/posts/' + id + '/comments';
    return this._http.post(url, data)
      .map((res: Response) => res.json());
  }

  createComment(data: any) {
    return this._http.post('http://localhost:3000/comments', data)
      .map((res: Response) => res.json());
  }


}
