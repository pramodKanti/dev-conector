import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Education } from '../modal/educatiobn';
import { Experince } from '../modal/experince';
import { CreateProfile } from '../modal/createProfile';
import { AuthService } from './auth.service';
import { Post } from '../components/posts/post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  signup(value: any) {
    const url = '/api/users/register';
    const body = {
      name: value.name,
      email: value.email,
      password: value.password1,
      password2: value.password2,
    };

    return this.http.post<any>(url, body, httpOptions);
  }

  login(value) {
    const url = '/api/users/login';

    const body = {
      email: value.email,
      password: value.password,
    };

    return this.http.post(url, body, httpOptions);
  }

  getProfile(): Observable<any> {
    const url = '/api/profile/';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.get(url, httpOptionsToken);
  }

  createProfile(value: CreateProfile): Observable<any> {
    const url = '/api/profile';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  addExperience(value: Experince): Observable<any> {
    const url = '/api/profile/experience';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  addEducation(value: Education): Observable<any> {
    const url = '/api/profile/education';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  deleteEducation(id: string): Observable<any> {
    const url = `/api/profile/education/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  deleteExperience(id: string): Observable<any> {
    const url = `/api/profile/experience/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  deleteProfile(): Observable<any> {
    const url = '/api/profile';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  createPost(value: string): Observable<any> {
    const url = '/api/posts';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  getPosts(): Observable<any> {
    const url = '/api/posts';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.get(url, httpOptionsToken);
  }

  deletePost(id: string): Observable<any> {
    const url = `api/posts/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  like(id: string): Observable<any> {
    const url = `api/posts/like/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.put(url, {}, httpOptionsToken);
  }

  dislike(id: string): Observable<any> {
    const url = `api/posts/unlike/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.put(url, {}, httpOptionsToken);
  }

  addComment(value: string, id: string): Observable<any> {
    const url = `/api/posts/comment/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  getPost(id: string): Observable<any> {
    const url = `api/posts/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.get(url, httpOptionsToken);
  }

  deleteComment(comid: string, postId: string): Observable<any> {
    const url = `api/posts/comment/${postId}/${comid}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  getProfiles(): Observable<any> {
    const url = '/api/profile/all';

    return this.http.get(url, httpOptions);
  }

  getProfileByHandle(handle: string): Observable<any> {
    const url = `/api/profile/handle/${handle}`;

    return this.http.get(url);
  }
}
